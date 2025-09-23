import image_45c1650c3420e7c3c8e34426227c222014c62ad0 from 'figma:asset/45c1650c3420e7c3c8e34426227c222014c62ad0.png';
import image_3ca7f05948f84c7d387a8045ea8b942dd2b90765 from 'figma:asset/3ca7f05948f84c7d387a8045ea8b942dd2b90765.png';
import image_4391c3a89f8361c09f7e38c32575f1c1b9212cb0 from 'figma:asset/4391c3a89f8361c09f7e38c32575f1c1b9212cb0.png';
import image_286d56d0f2be2330969165d85a61c87c845abff7 from 'figma:asset/286d56d0f2be2330969165d85a61c87c845abff7.png';
import image_5a410b4ee592b65ff9e188dc3fe9487bdc0353ad from 'figma:asset/5a410b4ee592b65ff9e188dc3fe9487bdc0353ad.png';
import image_fec0fb82167efffb50a0c2fe305e3a02ea7c0e21 from 'figma:asset/fec0fb82167efffb50a0c2fe305e3a02ea7c0e21.png';
import image_e3192d25b1df6136d14a8814f5ae139bdd3c953a from 'figma:asset/e3192d25b1df6136d14a8814f5ae139bdd3c953a.png';
import image_e2e5bcfec5242e823883a034d0c7fefe8b5bc132 from 'figma:asset/e2e5bcfec5242e823883a034d0c7fefe8b5bc132.png';
import { motion } from "motion/react";
import { useSafeInView } from "./useSafeInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PartnersSection() {
  const [ref, isInView] = useSafeInView<HTMLElement>({ once: true, margin: "-100px" });

  const partners = [
    { name: "شركة وريف العقارية", logo: image_4391c3a89f8361c09f7e38c32575f1c1b9212cb0 },
    { name: "شركة رسيم العقارية", logo: image_286d56d0f2be2330969165d85a61c87c845abff7 },
    { name: "شركة رصافة العقارية", logo: image_5a410b4ee592b65ff9e188dc3fe9487bdc0353ad },
    { name: "شركة نصر الأولى القابضة", logo: image_fec0fb82167efffb50a0c2fe305e3a02ea7c0e21 },
    { name: "شركة ماسا للتطوير العقاري", logo: image_e3192d25b1df6136d14a8814f5ae139bdd3c953a },
    { name: "شركة رحاب العقارية", logo: image_e2e5bcfec5242e823883a034d0c7fefe8b5bc132 },
    { name: "شركة السليمان للعود والعطور", logo: image_3ca7f05948f84c7d387a8045ea8b942dd2b90765 },
    { name: "شركة التقنيات المتطورة", logo: image_45c1650c3420e7c3c8e34426227c222014c62ad0 }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background" ref={ref} id="partners">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="px-6 py-3 bg-[#e79a63]/10 text-[#e79a63] rounded-2xl font-medium border border-[#e79a63]/20 text-sm sm:text-base">
              شركاؤنا في النجاح
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 lg:mb-8 leading-tight">
            ثقة تبني شراكات ناجحة
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            نفتخر بثقة شركائنا الذين اختاروا حلولنا التقنية المبتكرة لتطوير أعمالهم
          </p>
        </motion.div>

        {/* Partners Logos - Simplified and Mobile-Optimized */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 sm:gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="w-full h-12 sm:h-14 lg:h-16 flex items-center justify-center">
                <ImageWithFallback
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain transition-all duration-300 drop-shadow-md group-hover:drop-shadow-lg
                    /* Light mode - Navy blue (#00203f) tint */
                    opacity-75 group-hover:opacity-95
                    [filter:brightness(0)_saturate(100%)_invert(8%)_sepia(96%)_saturate(6238%)_hue-rotate(211deg)_brightness(97%)_contrast(143%)]
                    group-hover:[filter:none]
                    /* Dark mode - White tint */
                    dark:[filter:brightness(0)_saturate(100%)_invert(100%)]
                    dark:group-hover:[filter:none]"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}