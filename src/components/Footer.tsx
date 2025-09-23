import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion } from "motion/react";
import { useSafeInView } from "./useSafeInView";
import { Logo } from "./Logo";
// import encodeLogo from 'figma:asset/fc47fc46900d420dd45df32638f468cdeb6239cc.png';

export function Footer() {
  const [ref, isInView] = useSafeInView<HTMLElement>({ once: true, margin: "-50px" });

  const quickLinks = [
    { name: "خدماتنا", href: "#services" },
    { name: "من نحن", href: "#about" },
    { name: "شركاؤنا", href: "#partners" },
    { name: "تواصل معنا", href: "#contact" }
  ];

  const services = [
    { name: "الذكاء الاصطناعي", href: "#ai" },
    { name: "تطوير المواقع", href: "#web" },
    { name: "الرؤية الحاسوبية", href: "#vision" },
    { name: "أنظمة ERP", href: "#erp" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const contactInfo = [
    { icon: Mail, text: "info@encode.sa", href: "mailto:info@encode.sa" },
    { icon: Phone, text: "+966 50 123 4567", href: "tel:+966501234567" },
    { icon: MapPin, text: "الرياض، المملكة العربية السعودية", href: "#" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background via-card to-muted text-foreground overflow-hidden transition-colors duration-500" ref={ref}>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footerPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="var(--color-accent)"/>
              <circle cx="0" cy="0" r="1" fill="var(--color-accent)"/>
              <circle cx="60" cy="60" r="1" fill="var(--color-accent)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerPattern)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-16 sm:py-20 lg:py-24">
          
          {/* Header Section */}
          <motion.div 
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <Logo width={160} height={60} />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
              شريكك في رحلة التطوير التقني
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              نحن هنا لمساعدتك في تحويل أفكارك إلى حلول تقنية مبتكرة تدفع بأعمالك نحو المستقبل
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Quick Links */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold text-accent mb-6 relative">
                روابط سريعة
                <div className="absolute bottom-0 right-0 w-8 h-0.5 bg-accent rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-sm">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Services */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold text-accent mb-6 relative">
                خدماتنا
                <div className="absolute bottom-0 right-0 w-8 h-0.5 bg-accent rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={service.name}>
                    <a 
                      href={service.href}
                      className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-sm">{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-bold text-accent mb-6 relative">
                تواصل معنا
                <div className="absolute bottom-0 right-0 w-8 h-0.5 bg-accent rounded-full"></div>
              </h4>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <item.icon className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </a>
                ))}
              </div>
            </motion.div>
            
            {/* Social Media & Newsletter */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-bold text-accent mb-6 relative">
                تابعنا
                <div className="absolute bottom-0 right-0 w-8 h-0.5 bg-accent rounded-full"></div>
              </h4>
              
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    aria-label={social.label}
                    className="group w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center text-white hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <social.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                  </a>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/30">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  احصل على آخر التحديثات والمقالات التقنية مباشرة في بريدك الإلكتروني
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Enhanced Bottom Section */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Decorative Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-8"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-center py-8 gap-6">
            
            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-sm text-muted-foreground mb-2">
                © 2024 Encode. جميع الحقوق محفوظة.
              </p>
              <p className="text-xs text-muted-foreground/70">
                مصمم ومطور بـ ❤️ في المملكة العربية السعودية
              </p>
            </div>
            
            {/* Brand Badge */}
            <div className="flex items-center gap-3 px-6 py-3 bg-card/30 backdrop-blur-sm rounded-full border border-border/30">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">مدعوم بالذكاء الاصطناعي</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}