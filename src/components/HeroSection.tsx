import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, Play, Sparkles } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-16 sm:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <ImageWithFallback
          src="https://i.ibb.co/dsMdhwqm/a211bf5c-7f65-4093-a6de-75d915e6bec3.jpg"
          alt="فريق إنكود - تطوير الأعمال بالذكاء الاصطناعي"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/85 to-white dark:from-[#00203f]/80 dark:via-[#00203f]/80 dark:to-[#00203f] transition-colors duration-500 z-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          
          {/* Clean Content */}
          <motion.div 
            className="text-center max-w-4xl mx-auto text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            {/* Simple Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#00203f]/10 dark:bg-white/10 backdrop-blur-sm rounded-full border border-[#00203f]/20 dark:border-white/20 mb-6 transition-colors duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-[#e79a63]" />
              <span className="text-sm font-medium text-foreground">مرحباً بك في مستقبل التكنولوجيا</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              تطوير الأعمال من خلال
              <br />
              <span className="text-[#e79a63]">الذكاء الاصطناعي</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-lg sm:text-xl mb-8 leading-relaxed text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              في إنكود، نعمل على سد الفجوة بين الذكاء الاصطناعي واحتياجات الشركات. 
              تقنيات الذكاء الاصطناعي تمكن المؤسسات من تبسيط العمليات وزيادة الإنتاجية.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-[#e79a63] hover:bg-[#e79a63]/90 text-white px-8 py-4 text-lg h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ArrowLeft className="h-5 w-5 ml-2 rotate-180" />
                خدماتنا
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-[#00203f]/30 dark:border-white/30 hover:border-[#00203f] dark:hover:border-white text-[#00203f] dark:text-white hover:bg-[#00203f]/10 dark:hover:bg-white/10 px-8 py-4 text-lg h-auto rounded-xl backdrop-blur-sm transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ArrowLeft className="h-5 w-5 ml-2 rotate-180" />
                تواصل معنا
              </Button>
            </motion.div>


          </motion.div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ borderColor: "rgba(231, 154, 99, 0.8)" }}
        >
          <motion.div
            className="w-1 h-3 bg-[#e79a63] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}