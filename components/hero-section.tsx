"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-balance text-[rgba(231,154,99,1)]">
            {t("hero.title")}
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed text-pretty opacity-80">
            {t("hero.subtitle")}
          </p>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="btn-ripple bg-encode-gold hover:bg-encode-gold/90 text-encode-dark-blue font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t("hero.cta")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
