import { lazy, Suspense } from "react";
import { HeroSection } from "./components/HeroSection";
import { Header } from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { SEOHead } from "./components/SEOHead";

// Lazy load components that appear below the fold
const ServicesSection = lazy(() => import("./components/ServicesSection").then(m => ({ default: m.ServicesSection })));
const WhyEncodeSection = lazy(() => import("./components/WhyEncodeSection").then(m => ({ default: m.WhyEncodeSection })));
const PartnersSection = lazy(() => import("./components/PartnersSection").then(m => ({ default: m.PartnersSection })));
const FinalCTASection = lazy(() => import("./components/FinalCTASection").then(m => ({ default: m.FinalCTASection })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

// Loading component
function SectionLoader() {
  return (
    <div className="py-20 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#e79a63] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <SEOHead />
      <ThemeProvider defaultTheme="dark" storageKey="encode-ui-theme">
        <div className="min-h-screen bg-background transition-colors duration-500" dir="rtl">
          <Header />
          <main>
            <HeroSection />
            <Suspense fallback={<SectionLoader />}>
              <ServicesSection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <WhyEncodeSection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <PartnersSection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <FinalCTASection />
            </Suspense>
          </main>
          <Suspense fallback={<SectionLoader />}>
            <Footer />
          </Suspense>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}