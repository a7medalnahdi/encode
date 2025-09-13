"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.partners": "Partners",
    "nav.blog": "Blog",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Transforming Businesses Through AI Innovation",
    "hero.subtitle":
      "At Encode, we bridge the gap between cutting-edge artificial intelligence and real-world business needs. Our tailored AI solutions empower organizations to streamline operations, enhance decision-making, and drive innovation.",
    "hero.cta": "Get Started",

    // Mission
    "mission.title": "Our Mission",
    "mission.text":
      "To democratize AI technology by creating practical, effective solutions that drive real business value.",

    // Story
    "story.title": "Our Story",
    "story.text":
      "At Encode, we believe in making advanced AI technology accessible and practical for businesses of all sizes. Founded by experts in AI and business transformation, we're committed to bridging the technological divide.",

    // Vision
    "vision.title": "Our Vision",
    "vision.text":
      "To become the trusted partner for businesses seeking to harness the power of AI, making advanced technology accessible and impactful.",

    // Services
    "services.title": "Our Services",
    "services.ai.title": "AI-Powered Solutions",
    "services.ai.desc":
      "We create intelligent AI solutions that automate and personalize key business processes, from customer service to operations, boosting efficiency, innovation, and customer satisfaction.",
    "services.web.title": "Website Development",
    "services.web.desc":
      "We design and build custom websites that are visually striking, mobile-friendly, and optimized for peak performance, delivering seamless, user-focused experiences.",
    "services.cv.title": "Computer Vision Solutions",
    "services.cv.desc":
      "Our cutting-edge computer vision technology powers real-time visual analysis, automating quality control, enhancing security, and enabling precise object tracking to improve safety and operational efficiency.",
    "services.erp.title": "ERP Solutions",
    "services.erp.desc":
      "We offer comprehensive Odoo solutions tailored to your business needs, streamlining processes across sales, finance, HR, and project management for greater productivity and growth.",

    // Partners
    "partners.title": "Our Partners:",

    // Blog
    "blog.title": "Stay Inspired with Our Latest Insights",
    "blog.post1": "Starting and Growing a Career in Web Design",
    "blog.post2": "How AI Shapes the Future of Business Operations",
    "blog.post3": "Preparing for the Next Wave of AI Innovation",

    // CTA
    "cta.title": "Start your AI-powered journey today.",
    "cta.button": "Contact Us",

    // Contact Form
    "contact.title": "Contact Us",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.success": "Message sent successfully!",
    "contact.error": "Please fill in all fields correctly.",

    // Footer
    "footer.copyright": "© 2025 Encode. All Rights Reserved.",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.partners": "الشركاء",
    "nav.blog": "المدونة",
    "nav.contact": "تواصل معنا",

    // Hero Section
    "hero.title": "تطوير الأعمال من خلال الذكاء الاصطناعي",
    "hero.subtitle":
      "في إنكود، نعمل على سد الفجوة بين تقنيات الذكاء الاصطناعي واحتياجات الشركات. تقنياتنا المبتكرة تمكّن المؤسسات من تبسيط العمليات، تعزيز اتخاذ القرار، وزيادة الإنتاجية.",
    "hero.cta": "ابدأ الآن",

    // Mission
    "mission.title": "رسالتنا",
    "mission.text": "تمكين تقنيات الذكاء الاصطناعي عبر ابتكار حلول عملية وفعّالة تحقق قيمة حقيقية للشركات.",

    // Story
    "story.title": "قصتنا",
    "story.text":
      "في إنكود، نؤمن بضرورة جعل تقنيات الذكاء الاصطناعي المتقدمة في متناول الجميع وذات طابع عملي للشركات على اختلاف أحجامها.",

    // Vision
    "vision.title": "رؤيتنا",
    "vision.text":
      "أن نصبح الشريك الموثوق به للشركات التي تسعى لتمكين تقنيات الذكاء الاصطناعي، من خلال جعل التكنولوجيا المتقدمة متاحة وذات أثر ملموس.",

    // Services
    "services.title": "خدماتنا",
    "services.ai.title": "خدمات مدعومة بالذكاء الاصطناعي",
    "services.ai.desc":
      "نبتكر حلولاً ذكية تعمل على أتمتة وتخصيص العمليات والمهام الأساسية، بدءاً من خدمة العملاء وحتى العمليات التشغيلية، مما يعزز الكفاءة والابتكار ورضا العملاء.",
    "services.web.title": "تطوير المواقع الإلكترونية",
    "services.web.desc":
      "نصمم ونبني مواقع إلكترونية مخصصة تتميز بجاذبية بصرية، متوافقة مع الأجهزة المحمولة، ومحسّنة لتحقيق أداءٍ عالٍ، مما يضمن تجارب سلسة تركز على المستخدم.",
    "services.cv.title": "خدمات الرؤية الحاسوبية (Computer Vision)",
    "services.cv.desc":
      "تقنياتنا المتطورة في الرؤية الحاسوبية تمكّن من التحليل البصري الفوري، وأتمتة ضبط الجودة، وتعزيز الأمن، إضافة إلى التتبع الدقيق للأجسام لتحسين السلامة والكفاءة التشغيلية.",
    "services.erp.title": "أنظمة إدارة موارد المؤسسات (ERP)",
    "services.erp.desc":
      "نقدّم حلول أنظمة اودو شاملة ومصممة وفق احتياجات شركتك، تعمل على تبسيط العمليات عبر المبيعات، والمالية، والموارد البشرية، وإدارة المشاريع لزيادة الإنتاجية والنمو.",

    // Partners
    "partners.title": "شركاؤنا",

    // Blog
    "blog.title": "ابقَ ملهمًا مع أحدث مقالاتنا",
    "blog.post1": "بدء وتطوير مهنة في تصميم المواقع",
    "blog.post2": "كيف يشكل الذكاء الاصطناعي مستقبل العمليات التجارية",
    "blog.post3": "الاستعداد للموجة القادمة من ابتكارات الذكاء الاصطناعي",

    // CTA
    "cta.title": "ابدأ رحلتك المدعومة بالذكاء الاصطناعي اليوم.",
    "cta.button": "تواصل معنا",

    // Contact Form
    "contact.title": "تواصل معنا",
    "contact.name": "الاسم",
    "contact.email": "البريد الإلكتروني",
    "contact.message": "الرسالة",
    "contact.send": "إرسال الرسالة",
    "contact.success": "تم إرسال الرسالة بنجاح!",
    "contact.error": "يرجى ملء جميع الحقول بشكل صحيح.",

    // Footer
    "footer.copyright": "© ٢٠٢٥ إنكود. جميع الحقوق محفوظة.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
    localStorage.setItem("language", language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"))
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
