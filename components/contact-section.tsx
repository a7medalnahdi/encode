"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"
import { Loader2, Check, XCircle, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.name.trim() || !emailRegex.test(formData.email) || !formData.message.trim()) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 4000)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 4000)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* البطاقة الرئيسية المدمجة */}
        <div className="max-w-6xl mx-auto bg-card border border-border/50 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* --- قسم المعلومات (الجانب الأنيق) --- */}
            <div className="p-8 lg:p-12 bg-background/50 flex flex-col justify-center">
              <div className="space-y-8 animate-fade-in-left">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-extrabold text-encode-gold mt-0 mb-4">
                    {t("contact.title", "تواصل معنا")}
                  </h2>
                  
                </div>
                <div className="space-y-6 border-t border-border/50 pt-8">
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-encode-gold flex-shrink-0" />
                    <a href="mailto:info@example.com" className="text-muted-foreground hover:text-encode-gold transition-colors">
                      info@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-encode-gold flex-shrink-0" />
                    <a href="tel:+966500000000" className="text-muted-foreground hover:text-encode-gold transition-colors">
                      +966 50 000 0000
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 text-encode-gold flex-shrink-0" />
                    <p className="text-muted-foreground">الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- قسم النموذج --- */}
            <form
              onSubmit={handleSubmit}
              className="p-8 lg:p-12 space-y-6 animate-fade-in-right"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2 space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-muted-foreground">{t("contact.name")}</label>
                    <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange}
                        className="h-12 bg-background border-border/70 rounded-lg text-base focus:ring-2 focus:ring-offset-2 focus:ring-offset-card focus:ring-encode-gold transition-colors duration-300" required />
                </div>
                <div className="sm:col-span-2 space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-muted-foreground">{t("contact.email")}</label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange}
                        className="h-12 bg-background border-border/70 rounded-lg text-base focus:ring-2 focus:ring-offset-2 focus:ring-offset-card focus:ring-encode-gold transition-colors duration-300" required />
                </div>
                <div className="sm:col-span-2 space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-muted-foreground">{t("contact.message")}</label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={5}
                        className="bg-background border-border/70 rounded-lg text-base min-h-36 focus:ring-2 focus:ring-offset-2 focus:ring-offset-card focus:ring-encode-gold transition-colors duration-300" required />
                </div>
              </div>

              <div>
                {submitStatus === "success" && (
                    <div className="flex items-center gap-3 text-sm text-green-500 p-3 bg-green-500/10 rounded-lg">
                        <Check className="h-5 w-5" /> <p>{t("contact.success")}</p>
                    </div>
                )}
                {submitStatus === "error" && (
                    <div className="flex items-center gap-3 text-sm text-red-500 p-3 bg-red-500/10 rounded-lg">
                        <XCircle className="h-5 w-5" /> <p>{t("contact.error")}</p>
                    </div>
                )}
              </div>

              <div className="pt-2 flex justify-end">
                <Button type="submit" size="lg" disabled={isSubmitting}
                  className="w-full sm:w-auto h-12 px-10 text-base font-bold rounded-lg bg-encode-gold hover:bg-encode-gold/90 text-encode-dark-blue">
                  {isSubmitting ? <Loader2 className="animate-spin" /> : t("contact.send")}
                </Button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </section>
  )
}
