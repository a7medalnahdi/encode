"use client"

import Image from "next/image"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const { theme } = useTheme()
  const { t } = useLanguage()

  const navItems = [
    { key: "nav.home", href: "#home" },
    { key: "nav.services", href: "#services" },
    { key: "nav.partners", href: "#partners" },
    { key: "nav.blog", href: "#blog" },
    { key: "nav.contact", href: "#contact" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-background border-t border-border transition-theme">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <Image
                  src={theme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"}
                  alt="Encode – إنكود"
                  width={150}
                  height={75}
                  className="h-12 w-auto mb-4"
                />
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Transforming businesses through AI innovation. We bridge the gap between artificial intelligence and
                  real business needs with practical, effective solutions.
                </p>
              </div>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-muted-foreground">
                  <Mail className="h-5 w-5 text-encode-gold flex-shrink-0" />
                  <a href="mailto:info@encode.com" className="hover:text-encode-gold transition-colors">
                    info@encode.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-muted-foreground">
                  <Phone className="h-5 w-5 text-encode-gold flex-shrink-0" />
                  <a href="tel:+1234567890" className="hover:text-encode-gold transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-muted-foreground">
                  <MapPin className="h-5 w-5 text-encode-gold flex-shrink-0" />
                  <span>123 Innovation Street, Tech City, TC 12345</span>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
              <nav className="space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="block text-muted-foreground hover:text-encode-gold transition-colors"
                  >
                    {t(item.key)}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
              <nav className="space-y-3">
                <a href="#services" className="block text-muted-foreground hover:text-encode-gold transition-colors">
                  {t("services.ai.title")}
                </a>
                <a href="#services" className="block text-muted-foreground hover:text-encode-gold transition-colors">
                  {t("services.web.title")}
                </a>
                <a href="#services" className="block text-muted-foreground hover:text-encode-gold transition-colors">
                  {t("services.cv.title")}
                </a>
                <a href="#services" className="block text-muted-foreground hover:text-encode-gold transition-colors">
                  {t("services.erp.title")}
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm">{t("footer.copyright")}</p>

            {/* Social links */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 text-muted-foreground hover:text-encode-gold hover:bg-encode-gold/10 rounded-full transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
