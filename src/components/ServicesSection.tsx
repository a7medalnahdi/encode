import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useSafeInView } from "./useSafeInView";

export function ServicesSection() {
  const [ref, isInView] = useSafeInView<HTMLElement>({ once: true, margin: "-100px" });

  const services = [
    {
      // يمكنك استبدال هذه الصورة بصورتك الخاصة لاحقاً
      centerImage: "https://i.ibb.co/5gdVjf7y/Artboard-1-copy.png",
      image: "https://i.ibb.co/5gdVjf7y/Artboard-1-copy.png",
      title: "خدمات مدعومة بالذكاء الاصطناعي",
      description: "نبتكر حلولاً ذكية تعمل على أتمتة وتخصيص العمليات الأساسية والمهام، بدء من خدمة العملاء وحتى العمليات التشغيلية."
    },
    {
      // يمكنك استبدال هذه الصورة بصورتك الخاصة لاحقاً
      centerImage: "https://i.ibb.co/Ps7Q37v0/Artboard-1-copy-2.png",
      image: "https://i.ibb.co/Ps7Q37v0/Artboard-1-copy-2.png",
      title: "تطوير المواقع الإلكترونية",
      description: "نصمم ونبني مواقع إلكترونية مخصصة تتميز بجاذبية بصرية، متوافقة مع الأجهزة المحمولة، ومحسنة لتحقيق أداء عالي."
    },
    {
      // يمكنك استبدال هذه الصورة بصورتك الخاصة لاحقاً
      centerImage: "https://i.ibb.co/p6bXTHNS/Artboard-1-copy-3.png",
      image: "https://i.ibb.co/p6bXTHNS/Artboard-1-copy-3.png",
      title: "خدمات الرؤية الحاسوبية (Computer Vision)",
      description: "تقنياتنا المتطورة في الرؤية الحاسوبية تُمكن من التحليل البصري الفوري، وأتمتة ضبط الجودة، وتعزيز الأمن."
    },
    {
      // يمكنك استبدال هذه الصورة بصورتك الخاصة لاحقاً
      centerImage: "https://i.ibb.co/tMTKHDpr/Artboard-1.png",
      image: "https://i.ibb.co/tMTKHDpr/Artboard-1.png",
      title: "أنظمة إدارة موارد المؤسسات (ERP)",
      description: "نقدم حلول أنظمة أودو شاملة ومصممة وفق احتياجات شركتك، تعمل على تبسيط العمليات عبر المبيعات والمالية."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background" ref={ref} id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#e79a63]/10 text-[#e79a63] rounded-lg border border-[#e79a63]/20">
              خدماتنا
            </span>
          </div>
          
          <h2 className="font-bold text-foreground mb-4">
            حلول تقنية شاملة لنمو أعمالك
          </h2>
          
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة متكاملة من الخدمات التقنية المبتكرة التي تلبي احتياجات عملك
          </p>
        </div>

        {/* Parallax Depth Cards Grid - 4 in row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group relative perspective-1000">
              {/* Parallax Background Layers */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1">
                <div className="absolute inset-4 bg-gradient-to-br from-[#e79a63]/10 to-[#00203f]/10 rounded-2xl blur-xl"></div>
              </div>
              
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-0.5">
                <div className="absolute inset-2 bg-gradient-to-br from-[#00203f]/5 to-[#e79a63]/5 rounded-2xl blur-lg"></div>
              </div>

              {/* Main Card Layer */}
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#e79a63]/10 group-hover:-translate-y-2 group-hover:rotate-1">
                
                {/* Floating Number */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#e79a63] rounded-full flex items-center justify-center text-white font-bold text-sm transition-transform duration-700 group-hover:scale-125 group-hover:rotate-180 z-20">
                  0{index + 1}
                </div>
                
                {/* Parallax Background Shapes */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-[#e79a63]/20 to-transparent rounded-full transition-transform duration-1000 group-hover:translate-x-4 group-hover:-translate-y-2"></div>
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-[#00203f]/20 to-transparent rounded-full transition-transform duration-1000 group-hover:-translate-x-2 group-hover:translate-y-1"></div>

                {/* Image with Parallax Effect */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.centerImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:translate-x-2"
                  />
                  
                  {/* Parallax Overlay Layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e79a63]/30 via-transparent to-[#00203f]/30 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:translate-x-1"></div>
                  
                  {/* Moving Light Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Content with Depth */}
                <div className="relative p-6 bg-gradient-to-t from-card via-card to-card/95">
                  {/* Depth Background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#e79a63]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 space-y-4">
                    <h3 className="font-bold text-[rgba(231,154,99,1)] leading-tight transition-transform duration-500 group-hover:translate-x-1 text-right">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed transition-transform duration-700 group-hover:translate-x-0.5 text-sm text-right">
                      {service.description}
                    </p>

                    {/* Parallax Indicator */}
                    <div className="flex items-center gap-2 pt-4">
                      <div className="w-8 h-0.5 bg-[#e79a63] transition-all duration-500 group-hover:w-12"></div>
                      <div className="w-4 h-0.5 bg-[#00203f] transition-all duration-700 group-hover:w-8"></div>
                      <div className="w-2 h-0.5 bg-border transition-all duration-1000 group-hover:w-6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}