import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
};

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
  mounted: false,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "encode-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage after mount to avoid hydration mismatch
  useEffect(() => {
    const initializeTheme = () => {
      try {
        if (typeof window !== "undefined") {
          const stored = window.localStorage.getItem(storageKey) as Theme;
          if (stored && (stored === "light" || stored === "dark")) {
            setTheme(stored);
          }
        }
      } catch (error) {
        console.warn("Failed to load theme from localStorage:", error);
      } finally {
        setMounted(true);
      }
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(initializeTheme, 0);
    return () => clearTimeout(timeoutId);
  }, [storageKey]);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    
    try {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
    } catch (error) {
      console.warn("Failed to apply theme to document:", error);
    }
  }, [theme, mounted]);

  const handleSetTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(storageKey, newTheme);
      } catch (error) {
        console.warn("Failed to save theme to localStorage:", error);
      }
    }
  }, [storageKey]);

  const value = {
    theme,
    setTheme: handleSetTheme,
    mounted,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      <div className={mounted ? undefined : defaultTheme} suppressHydrationWarning>
        {children}
      </div>
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};