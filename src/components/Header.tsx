import { motion } from "motion/react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";

export function Header() {
  const { theme, setTheme, mounted } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const handleThemeToggle = () => {
    if (!mounted) return;
    try {
      setTheme(theme === "light" ? "dark" : "light");
    } catch (error) {
      console.warn("Failed to toggle theme:", error);
    }
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // تحديد ما إذا كان المستخدم قد مرر أكثر من 10 بكسل
      setScrolled(currentScrollY > 10);
      
      // إظهار أو إخفاء الهيدر بناءً على اتجاه التمرير
      if (currentScrollY < 10) {
        // في الأعلى - إظهار دائماً
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // التمرير لأعلى - إظهار
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // التمرير لأسفل بعد 100px - إخفاء
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navItems = [
    { href: "#services", text: "خدماتنا" },
    { href: "#about", text: "من نحن" },
    { href: "#partners", text: "شركاؤنا" },
    { href: "#contact", text: "تواصل معنا" }
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ 
        duration: 0.3, 
        ease: "easeInOut"
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <div className="flex justify-center">
          {/* Centered Glass Capsule Container */}
          <motion.div 
            className={`backdrop-blur-xl border shadow-xl transition-all duration-300 ${
              isMenuOpen
                ? 'rounded-3xl px-6 py-4 bg-card/70 border-border/40 shadow-2xl'
                : scrolled 
                  ? 'rounded-full px-6 py-3 bg-card/60 border-border/30 shadow-2xl' 
                  : 'rounded-full px-6 py-3 bg-card/30 border-border/20 shadow-xl'
            } ${
              isMenuOpen 
                ? 'w-full max-w-sm sm:max-w-md'
                : 'max-w-fit'
            }`}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: scrolled && !isMenuOpen ? 0.95 : 1
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Main Navigation Row */}
            <div className="flex items-center justify-between gap-3 sm:gap-4">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center cursor-pointer flex-shrink-0"
              >
                <Logo
                  width={scrolled ? 100 : 120}
                  height={scrolled ? 28 : 32}
                  className="transition-all duration-300"
                />
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((link, index) => (
                  <motion.a 
                    key={link.href}
                    href={link.href} 
                    className="text-foreground/70 hover:text-[#e79a63] transition-colors duration-300 py-2 px-4 rounded-full hover:bg-accent/10 text-sm font-medium whitespace-nowrap"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {link.text}
                  </motion.a>
                ))}
              </nav>

              {/* Desktop Contact Button */}
              <motion.button
                className="hidden lg:block bg-[#e79a63] hover:bg-[#d18a56] text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl border-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                اطلب استشارة
              </motion.button>

              {/* Right Side Actions - Mobile & Desktop */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {/* Theme Toggle */}
                <motion.button
                  onClick={handleThemeToggle}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full hover:bg-accent/10 hover:text-[#e79a63] flex-shrink-0 flex items-center justify-center"
                  aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                  disabled={!mounted}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    key={theme}
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {theme === "light" ? (
                      <Moon className="h-4 w-4" />
                    ) : (
                      <Sun className="h-4 w-4" />
                    )}
                  </motion.div>
                </motion.button>

                {/* Mobile Menu Button */}
                <motion.button
                  className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full hover:bg-accent/10 hover:text-[#e79a63] flex-shrink-0 flex items-center justify-center"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ rotate: isMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isMenuOpen ? (
                      <X className="h-4 w-4" />
                    ) : (
                      <Menu className="h-4 w-4" />
                    )}
                  </motion.div>
                </motion.button>
              </div>
            </div>

            {/* Mobile Navigation - Inside the capsule */}
            <motion.div
              className="lg:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isMenuOpen ? "auto" : 0, 
                opacity: isMenuOpen ? 1 : 0 
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="pt-4 mt-4 space-y-1 border-t border-border/20">
                {navItems.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-4 text-foreground/80 hover:text-[#e79a63] hover:bg-accent/10 rounded-xl transition-all duration-200 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: isMenuOpen ? 1 : 0, 
                      y: isMenuOpen ? 0 : 10 
                    }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.text}
                  </motion.a>
                ))}
                
                {/* Mobile Contact Button */}
                <motion.button
                  className="w-full mt-3 bg-[#e79a63] hover:bg-[#d18a56] text-white rounded-xl py-3 px-4 font-medium transition-all duration-300 shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: isMenuOpen ? 1 : 0, 
                    y: isMenuOpen ? 0 : 10 
                  }}
                  transition={{ delay: navItems.length * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  اطلب استشارة
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}