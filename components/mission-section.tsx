"use client"

import { useLanguage } from "@/contexts/language-context"
import { Target, BookOpen, Eye } from "lucide-react"
import { cn } from "@/lib/utils"

const principles = [
  { id: 'mission', icon: Target, titleKey: "mission.title", textKey: "mission.text" },
  { id: 'story', icon: BookOpen, titleKey: "story.title", textKey: "story.text" },
  { id: 'vision', icon: Eye, titleKey: "vision.title", textKey: "vision.text" },
];

export function MissionSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 lg:py-24 bg-background transition-theme">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {principles.map((principle) => {
              const IconComponent = principle.icon;
              return (
                <div 
                  key={principle.id}
                  className="group relative bg-muted/40 border border-border rounded-2xl p-8 transition-all duration-300 ease-in-out
                             hover:border-encode-gold/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-encode-gold/10"
                >
                  <div className="text-center">
                    
                    <div className="inline-flex p-4 bg-background border border-border rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <IconComponent className="h-8 w-8 text-encode-gold" />
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {t(principle.titleKey)}
                    </h3>

                    <p className="text-base text-muted-foreground leading-relaxed">
                      {t(principle.textKey)}
                    </p>

                    {/* تم حذف قسم "اعرف المزيد" من هنا */}

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
