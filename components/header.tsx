"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image" // --- 1. استيراد مكون الصورة
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"
import { Menu, X, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

// --- 2. استيراد ملفات الشعار
// تأكد من أن المسار صحيح بناءً على مكان وجود ملفاتك
const logoLight = "/logo-light.svg"
const logoDark = "/logo-dark.svg"

const navItems = [
  { key: "nav.home", href: "#home" },
  { key: "nav.services", href: "#services" },
  { key: "nav.partners", href: "#partners" },
  { key: "nav.contact", href: "#contact" },
]

export function Header() {
  const { language, toggleLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        dir="rtl"
        className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm"
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* --- 3. استبدال النص بالشعار الديناميكي --- */}
          <Link href="#home" className="flex-shrink-0">
            <Image
              src={theme === "dark" ? logoDark : logoLight}
              alt="Encode Company Logo"
              width={120} // يمكنك تعديل العرض حسب حجم شعارك
              height={40} // يمكنك تعديل الارتفاع
              priority // لجعل الشعار يحمل بأولوية عالية
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-semibold text-foreground/70 transition-colors hover:text-foreground"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="group h-10 w-16 focus:outline-none [perspective:1000px]"
              aria-label={`Switch to ${language === "en" ? "Arabic" : "English"}`}
            >
              <div
                className={cn(
                  "relative h-full w-full rounded-full text-sm font-semibold transition-transform duration-500 [transform-style:preserve-3d]",
                  language === "ar" ? "[transform:rotateY(180deg)]" : "",
                )}
              >
                {/* الوجه الأمامي (يظهر عندما تكون اللغة إنجليزية): يعرض خيار العربية */}
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-background text-foreground border border-border shadow-sm [backface-visibility:hidden]">
                  🇸🇦&nbsp;ع
                </div>
                {/* الوجه الخلفي (يظهر عندما تكون اللغة عربية): يعرض خيار الإنجليزية */}
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-background text-foreground border border-border shadow-sm [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  🇬🇧&nbsp;EN
                </div>
              </div>
            </button>

            <button
              onClick={toggleTheme}
              className={cn(
                "relative hidden h-8 w-16 items-center rounded-full transition-colors sm:flex",
                theme === "light" ? "bg-gray-200" : "bg-gray-700",
              )}
              aria-label="Toggle theme"
            >
              <span
                className={cn(
                  "absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-500 ease-in-out-cubic",
                  theme === "light" ? "bg-white" : "bg-slate-800",
                )}
                style={{ transform: theme === "dark" ? "translateX(32px)" : "translateX(0)" }}
              >
                <Sun
                  className={cn(
                    "absolute h-4 w-4 text-yellow-500 transition-opacity duration-300",
                    theme === "light" ? "opacity-100" : "opacity-0",
                  )}
                />
                <Moon
                  className={cn(
                    "absolute h-4 w-4 text-slate-300 transition-opacity duration-300",
                    theme === "light" ? "opacity-0" : "opacity-100",
                  )}
                />
              </span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full bg-foreground/10 text-foreground lg:hidden"
              aria-label="Toggle menu"
            >
              <Menu
                className={cn(
                  "transition-transform duration-300",
                  isMenuOpen ? "rotate-90 scale-0" : "rotate-0 scale-100",
                )}
              />
              <X
                className={cn(
                  "absolute transition-transform duration-300",
                  isMenuOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu remains the same */}
      {isMenuOpen && (
        <div className="fixed top-20 left-0 z-40 w-full bg-background/95 backdrop-blur-sm lg:hidden">
          <nav className="container mx-auto flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={handleLinkClick}
                className="rounded-lg p-4 text-center font-semibold text-foreground/80 transition-colors hover:bg-foreground/10 hover:text-foreground"
              >
                {t(item.key)}
              </a>
            ))}
            <div className="mt-4 flex justify-center sm:hidden">
              <button
                onClick={toggleTheme}
                className={cn(
                  "relative flex h-8 w-16 items-center rounded-full transition-colors",
                  theme === "light" ? "bg-gray-200" : "bg-gray-700",
                )}
                aria-label="Toggle theme"
              >
                <span
                  className={cn(
                    "absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full transition-transform",
                    theme === "light" ? "bg-white" : "bg-slate-800",
                  )}
                  style={{ transform: theme === "dark" ? "translateX(32px)" : "translateX(0)" }}
                >
                  <Sun
                    className={cn(
                      "absolute h-4 w-4 text-yellow-500 transition-opacity",
                      theme === "light" ? "opacity-100" : "opacity-0",
                    )}
                  />
                  <Moon
                    className={cn(
                      "absolute h-4 w-4 text-slate-300 transition-opacity",
                      theme === "light" ? "opacity-0" : "opacity-100",
                    )}
                  />
                </span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
