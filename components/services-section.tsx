"use client"

import { useLanguage } from "@/contexts/language-context"
import { Brain, Globe, Eye, Settings } from "lucide-react"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    { icon: Brain, titleKey: "services.ai.title", descKey: "services.ai.desc" },
    { icon: Globe, titleKey: "services.web.title", descKey: "services.web.desc" },
    { icon: Eye, titleKey: "services.cv.title", descKey: "services.cv.desc" },
    { icon: Settings, titleKey: "services.erp.title", descKey: "services.erp.desc" },
  ]

  return (
    <section id="services" className="py-16 lg:py-24 bg-background transition-theme">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- New Title Section --- */}
        <div className="text-center mb-16">
          <h2 className="font-extrabold text-encode-gold mb-4 lg:text-5xl text-4xl">
            {t("services.title")}
          </h2>
          <div className="w-24 h-1 bg-encode-gold mx-auto rounded-full"></div>
        </div>
        {/* --- End New Title Section --- */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-muted/40 border border-border rounded-2xl p-8 transition-all duration-300 ease-in-out
                           hover:border-encode-gold/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-encode-gold/10"
              >
                <div className="text-center">
                  
                  <div className="inline-flex p-4 bg-background border border-border rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <IconComponent className="h-8 w-8 text-encode-gold" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {t(service.titleKey)}
                  </h3>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
