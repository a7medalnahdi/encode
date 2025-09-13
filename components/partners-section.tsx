"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"

const partners = [
  { name: "Wareef", logoLight: "/logos/wareef-light.svg", logoDark: "/logos/wareef-dark.svg" },
  { name: "Raseem", logoLight: "/logos/raseem-light.svg", logoDark: "/logos/raseem-dark.svg" },
  { name: "Rusafa", logoLight: "/logos/rusafa-light.svg", logoDark: "/logos/rusafa-dark.svg" },
  { name: "Nasser Holding", logoLight: "/logos/nasser-light.svg", logoDark: "/logos/nasser-dark.svg" },
  { name: "Masa", logoLight: "/logos/masa-light.svg", logoDark: "/logos/masa-dark.svg" },
  { name: "Rehab", logoLight: "/logos/rehab-light.svg", logoDark: "/logos/rehab-dark.svg" },
  { name: "Al-Suliman Oud", logoLight: "/logos/suliman-light.svg", logoDark: "/logos/suliman-dark.svg" },
  { name: "En", logoLight: "/logos/en-light.svg", logoDark: "/logos/en-dark.svg" },
]

export function PartnersSection() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  return (
    <section id="partners" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-extrabold text-encode-gold mb-4 text-5xl">
            {t("partners.title")}
          </h2>
          <div className="w-24 h-1 bg-encode-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 place-items-center">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}
            >
              <Image
                src={theme === 'dark' ? partner.logoDark : partner.logoLight}
                alt={partner.name}
                width={150}
                height={60}
                className="object-contain w-32 h-12 sm:w-36 sm:h-14 grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
