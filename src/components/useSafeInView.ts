import { useRef, RefObject, useEffect, useState, useCallback } from "react";

export function useSafeInView<T extends Element = Element>(options?: {
  once?: boolean;
  margin?: string;
}): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsInView(true);
      if (options?.once) {
        // Disconnect after first intersection if once is true
        return true; // Signal to disconnect
      }
    } else if (!options?.once) {
      setIsInView(false);
    }
    return false; // Continue observing
  }, [options?.once]);
  
  useEffect(() => {
    const element = ref.current;
    if (!element || typeof window === "undefined") return;
    
    // Check if IntersectionObserver is supported
    if (!("IntersectionObserver" in window)) {
      console.warn("IntersectionObserver not supported, showing content by default");
      setIsInView(true);
      setHasInitialized(true);
      return;
    }
    
    let observer: IntersectionObserver;
    
    try {
      observer = new IntersectionObserver(
        (entries) => {
          const shouldDisconnect = handleIntersection(entries);
          if (shouldDisconnect) {
            observer.disconnect();
          }
        },
        {
          rootMargin: options?.margin ?? "-100px",
          threshold: 0.1,
        }
      );
      
      observer.observe(element);
      setHasInitialized(true);
      
    } catch (error) {
      console.warn("Failed to create IntersectionObserver:", error);
      setIsInView(true);
      setHasInitialized(true);
    }
    
    return () => {
      if (observer) {
        try {
          observer.disconnect();
        } catch (error) {
          console.warn("Failed to disconnect observer:", error);
        }
      }
    };
  }, [options?.margin, handleIntersection]);
  
  // Return early visibility for server-side rendering
  if (!hasInitialized && typeof window === "undefined") {
    return [ref, false];
  }
  
  return [ref, isInView];
}