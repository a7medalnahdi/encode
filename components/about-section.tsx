"use client"

import { useLanguage } from "@/contexts/language-context"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-16 text-foreground">
          {t("about.title")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Story - Takes full height on large screens */}
          <div
            className={`lg:row-span-2 bg-card border border-border rounded-2xl p-8 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-encode-gold mb-4">{t("story.title")}</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">{t("story.content")}</p>
          </div>

          {/* Mission */}
          <div
            className={`bg-card border border-border rounded-2xl p-8 transition-all duration-700 delay-200 hover:shadow-lg hover:-translate-y-1 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-encode-gold mb-4">{t("mission.title")}</h3>
            <p className="text-muted-foreground leading-relaxed">{t("mission.content")}</p>
          </div>

          {/* Vision */}
          <div
            className={`bg-card border border-border rounded-2xl p-8 transition-all duration-700 delay-400 hover:shadow-lg hover:-translate-y-1 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-encode-gold mb-4">{t("vision.title")}</h3>
            <p className="text-muted-foreground leading-relaxed">{t("vision.content")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
