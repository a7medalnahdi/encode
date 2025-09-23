import { Button } from "./ui/button";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { useSafeInView } from "./useSafeInView";
import { useState } from "react";

export function FinalCTASection() {
  const [ref, isInView] = useSafeInView<HTMLElement>({ once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background" ref={ref} id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="relative px-6 py-3 bg-gradient-to-r from-[#e79a63]/15 via-[#e79a63]/10 to-transparent text-[#e79a63] rounded-2xl font-semibold border border-[#e79a63]/30 backdrop-blur-sm">
              <span className="relative z-10">تواصل معنا</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#e79a63]/5 to-transparent rounded-2xl blur-xl" />
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            هل أنت مستعد لتحويل
            <br />
            <span className="bg-gradient-to-r from-[#e79a63] via-[#d18a56] to-[#e79a63] bg-clip-text text-transparent">
              فكرتك إلى واقع؟
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            تواصل معنا اليوم ودعنا نساعدك في تحقيق أهدافك وتطوير أعمالك باستخدام أحدث التقنيات
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#e79a63] to-[#d18a56] rounded-full mx-auto mt-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        {/* Enhanced Contact Form */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative backdrop-blur-xl bg-card/80 border border-border/50 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e79a63] to-[#00203f] rounded-3xl" />
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, rgba(231, 154, 99, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 75% 75%, rgba(0, 32, 63, 0.1) 0%, transparent 50%)
                `,
                borderRadius: '1.5rem'
              }} />
            </div>

            <form onSubmit={handleSubmit} className="relative space-y-8">
              
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-3 text-right">
                    الاسم الكامل
                  </label>
                  <div className="relative group">
                    <User className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-[#e79a63] transition-colors duration-300" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pr-14 pl-4 py-4 sm:py-5 bg-muted/30 border-2 border-border/50 rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#e79a63]/30 focus:border-[#e79a63] transition-all duration-300 hover:border-[#e79a63]/50"
                      placeholder="أدخل اسمك الكامل"
                      required
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#e79a63]/5 to-transparent rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-3 text-right">
                    البريد الإلكتروني
                  </label>
                  <div className="relative group">
                    <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-[#e79a63] transition-colors duration-300" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pr-14 pl-4 py-4 sm:py-5 bg-muted/30 border-2 border-border/50 rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#e79a63]/30 focus:border-[#e79a63] transition-all duration-300 hover:border-[#e79a63]/50"
                      placeholder="أدخل بريدك الإلكتروني"
                      required
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#e79a63]/5 to-transparent rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              </div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label className="block text-sm font-semibold text-foreground mb-3 text-right">
                  رسالتك
                </label>
                <div className="relative group">
                  <MessageSquare className="absolute right-4 top-5 w-5 h-5 text-muted-foreground group-focus-within:text-[#e79a63] transition-colors duration-300" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full pr-14 pl-4 py-4 sm:py-5 bg-muted/30 border-2 border-border/50 rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#e79a63]/30 focus:border-[#e79a63] transition-all duration-300 resize-none hover:border-[#e79a63]/50"
                    placeholder="اكتب رسالتك هنا وأخبرنا كيف يمكننا مساعدتك..."
                    required
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e79a63]/5 to-transparent rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>

              {/* Enhanced Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="pt-6"
              >
                <Button 
                  type="submit"
                  size="lg"
                  className="relative w-full bg-gradient-to-r from-[#e79a63] to-[#d18a56] hover:from-[#d18a56] hover:to-[#e79a63] text-white py-5 sm:py-6 h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 font-semibold text-lg group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center gap-3">
                    <Send className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>إرسال الرسالة</span>
                  </div>
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Enhanced Contact Info */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-8 bg-card/50 backdrop-blur-sm rounded-2xl px-8 py-6 border border-border/30">
            <div className="flex items-center gap-3 text-muted-foreground hover:text-[#e79a63] transition-colors duration-300 cursor-pointer">
              <div className="w-10 h-10 bg-[#e79a63]/10 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#e79a63]" />
              </div>
              <span className="font-medium">info@encode.sa</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border/50"></div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 bg-[#e79a63]/10 rounded-xl flex items-center justify-center">
                <span className="text-[#e79a63] font-bold">📞</span>
              </div>
              <span className="font-medium">+966 50 123 4567</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}