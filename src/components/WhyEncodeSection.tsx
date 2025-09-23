import { Target, Award, Users, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useSafeInView } from "./useSafeInView";

export function WhyEncodeSection() {
  const [ref, isInView] = useSafeInView<HTMLElement>({ once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = [
    {
      id: "mission",
      icon: Target,
      title: "رسالتنا",
      image: "https://www.htx.gov.sg/images/default-source/news/2024/ai-article-1-banner-shot-min.jpg?sfvrsn=4b7c6915_3&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: "تمكين تقنيات الذكاء الاصطناعي عبر ابتكار حلول عملية وفعالة تحقق قيمة حقيقية للشركات. نسعى لتوفير حلول مبتكرة ومخصصة تلبي احتياجات كل عميل، وتساعد الشركات على تحقيق أهدافها التجارية من خلال تطبيق أحدث تقنيات الذكاء الاصطناعي والتحول الرقمي. نؤمن بأن كل شركة تستحق الوصول إلى أفضل التقنيات والخدمات التي تمكنها من النمو والازدهار في العصر الرقمي."
    },
    {
      id: "story",
      icon: Users,
      title: "قصتنا",
      image: "https://www.toolshero.com/wp-content/uploads/2023/01/artificial-intelligence-ai-toolshero.jpg",
      content: "في إنكود، نؤمن بضرورة جعل تقنيات الذكاء الاصطناعي المتقدمة في متناول الجميع وذات طابع عملي للشركات على اختلاف أحجامها. بدأت قصتنا من إيمان عميق بأن التكنولوجيا يجب أن تكون متاحة وسهلة الاستخدام، وليس مجرد أدوات معقدة للمختصين. لهذا السبب، أسسنا شركة إنكود لتكون الجسر الذي يربط بين التكنولوجيا المتطورة والشركات التي تسعى للنمو والتطور."
    },
    {
      id: "vision",
      icon: Award,
      title: "رؤيتنا",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OgA4gdjo7aNljmEaWpyz3f0nSQegO9TDP873P9hFEcKWc93JTmmU--c3vu54mPPmQFE&usqp=CAU",
      content: "أن نصبح الشريك الموثوق به للشركات التي تسعى لتمكين تقنيات الذكاء الاصطناعي، من خلال جعل التكنولوجيا المتقدمة متاحة وذات أثر ملموس. نتطلع إلى بناء مستقبل رقمي مزدهر في المنطقة، حيث تتمكن كل شركة من الاستفادة من قوة الذكاء الاصطناعي لتحقيق أهدافها وتطوير أعمالها. نرى أنفسنا كرواد في مجال التحول الرقمي، نقود التغيير الإيجابي في عالم الأعمال من خلال الابتكار والتميز."
    }
  ];

  const activeIndex = tabs.findIndex(tab => tab.id === activeTab);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background" ref={ref} id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="px-4 py-2 bg-[#e79a63]/10 text-[#e79a63] rounded-lg font-medium border border-[#e79a63]/20">
              من نحن
            </span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            شريكك الموثوق نحو التحول الرقمي
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          
          {/* Panel Navigation - Glass Effect */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="backdrop-blur-xl bg-card/60 border border-border/40 rounded-3xl p-3 shadow-2xl overflow-x-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex">
                {tabs.map((tab, index) => {
                  const TabIcon = tab.icon;
                  const isActive = activeTab === tab.id;
                  
                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-500 whitespace-nowrap font-medium ${
                        isActive 
                          ? 'text-white' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
                      }`}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activePanel"
                          className="absolute inset-0 bg-gradient-to-r from-[#e79a63] to-[#d18a56] rounded-2xl shadow-lg"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      
                      <div className="relative z-10 flex items-center gap-3">
                        <motion.div
                          animate={{ 
                            rotate: isActive ? [0, 10, 0] : 0,
                            scale: isActive ? 1.1 : 1 
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <TabIcon className="w-5 h-5" />
                        </motion.div>
                        <span>{tab.title}</span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Content Panel */}
          <motion.div 
            className="rounded-2xl bg-card border border-border shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Active Content Display */}
            <div className="grid lg:grid-cols-2 min-h-[500px]">
              
              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  {(() => {
                    const activeTabData = tabs.find(tab => tab.id === activeTab);
                    const activeTabIndex = tabs.findIndex(tab => tab.id === activeTab);
                    const TabIcon = activeTabData?.icon || Target;
                    
                    return (
                      <>
                        <div className="flex items-center gap-4 mb-6">
                          <motion.div 
                            className="w-16 h-16 bg-[#e79a63] rounded-2xl flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.3 }}
                          >
                            <TabIcon className="w-8 h-8 text-white" />
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-[#e79a63]">{activeTabData?.title}</h3>
                            <div className="text-sm text-muted-foreground">0{activeTabIndex + 1} / 03</div>
                          </div>
                        </div>
                        
                        <motion.p 
                          className="text-muted-foreground leading-relaxed text-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          {activeTabData?.content}
                        </motion.p>
                      </>
                    );
                  })()}
                </motion.div>
              </div>

              {/* Visual Side */}
              <div className="relative bg-muted lg:rounded-l-none rounded-r-2xl overflow-hidden">
                <motion.div
                  key={activeTab}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={tabs.find(tab => tab.id === activeTab)?.image || "https://www.htx.gov.sg/images/default-source/news/2024/ai-article-1-banner-shot-min.jpg?sfvrsn=4b7c6915_3"}
                    alt={tabs.find(tab => tab.id === activeTab)?.title || "فريق إنكود"}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e79a63]/40 to-[#00203f]/60" />
                  
                  {/* Overlay Content */}
                  <motion.div 
                    className="absolute bottom-8 right-8 text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="text-6xl font-bold opacity-20">
                      0{tabs.findIndex(tab => tab.id === activeTab) + 1}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Quick Navigation Dots */}
            <div className="flex justify-center py-6 gap-2">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTab === tab.id ? 'bg-[#e79a63] scale-125' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`انتقل إلى ${tab.title}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}