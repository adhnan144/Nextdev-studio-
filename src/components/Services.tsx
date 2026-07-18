import { motion } from "motion/react";
import { Code2, Cpu, Megaphone, Check, ChevronRight } from "lucide-react";
import { ServiceItem } from "../types";

export default function Services() {
  const services: ServiceItem[] = [
    {
      id: "web-dev",
      title: "Web Development",
      description: "We engineer hyper-fast, responsive web systems optimized for pixel-perfection and conversions. No bloated templates, just raw performance.",
      features: ["Custom React/Next.js systems", "Brutalist & modern design layouts", "SEO & Core Web Vitals optimization", "Responsive mobile-first engineering"],
    },
    {
      id: "ai-auto",
      title: "AI Automation",
      description: "Inject artificial intelligence directly into your workflow. We build autonomous agents, CRM integrations, and self-operating funnels.",
      features: ["Autonomous agents & AI chatbots", "Workflow automation & API linkages", "Gemini & LLM custom integrations", "Data pipelines & automated scraping"],
    },
    {
      id: "content-strat",
      title: "Content Strategy",
      description: "Dominate search engines and social grids. We craft technical seo strategies and content operations that drive organic transactions.",
      features: ["SEO content audit & operations", "Technical search engine strategy", "High-conversion copy & landing pages", "Growth metrics & web analytics"],
    },
  ];

  // Map service index to its matching icon
  const getIcon = (id: string, colorClass: string) => {
    switch (id) {
      case "web-dev":
        return <Code2 className={`${colorClass}`} size={32} />;
      case "ai-auto":
        return <Cpu className={`${colorClass}`} size={32} />;
      case "content-strat":
        return <Megaphone className={`${colorClass}`} size={32} />;
      default:
        return <Code2 className={`${colorClass}`} size={32} />;
    }
  };

  return (
    <section 
      id="services" 
      className="bg-brand-offwhite text-brand-black bg-noise py-24 px-6 md:px-10 border-b border-brand-black relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-archivo text-brand-blue text-xs tracking-widest uppercase block mb-3">
              [ 01 // CORE COMPETENCIES ]
            </span>
            <h2 className="font-archivo text-4xl md:text-6xl text-brand-black uppercase leading-[0.95] tracking-tighter">
              Services We <br />
              Excel In <span className="text-brand-blue font-normal">*</span>
            </h2>
          </div>
          <p className="max-w-md font-poppins text-brand-black/70 text-sm md:text-base leading-relaxed">
            We don't do everything. We only build high-impact digital solutions where we can provide 
            elite performance, AI integration, and compounding results.
          </p>
        </div>

        {/* 3 SERVICES CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            // Alternate styles following Artistic Flair theme:
            // 01 & 03: Black bg, Blue features
            // 02: Blue bg, White features
            const isBlueBg = index === 1;
            const bgClass = isBlueBg ? "bg-brand-blue text-brand-white" : "bg-brand-black text-brand-white";
            const badgeColor = isBlueBg ? "text-brand-white" : "text-brand-blue";
            const iconColorClass = "text-brand-white";
            const checkColor = isBlueBg ? "text-brand-white" : "text-brand-blue";

            return (
              <motion.div
                key={service.id}
                whileHover={{ 
                  scale: 1.03, 
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={`angular-cut p-8 flex flex-col justify-between ${bgClass} relative group min-h-[460px]`}
              >
                {/* Accent asterisk motif in top-right */}
                <div className="absolute top-4 right-4 text-brand-white/20 font-archivo text-xl select-none">
                  *
                </div>

                <div>
                  {/* Service Card Header: Badge + Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className={`font-archivo font-bold text-sm tracking-widest ${badgeColor}`}>
                      &#123;0{index + 1}&#125;
                    </span>
                    <div className="p-2.5 bg-brand-white/10 rounded-xl border border-brand-white/15">
                      {getIcon(service.id, iconColorClass)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-archivo text-2xl md:text-3xl uppercase tracking-tight mb-4 text-brand-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={`font-poppins text-sm leading-relaxed mb-8 ${isBlueBg ? "text-blue-100" : "text-gray-400"}`}>
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-3 font-poppins text-xs font-semibold uppercase tracking-wider mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className={`flex-shrink-0 ${checkColor}`}>
                          <Check size={14} className="stroke-[3.5px]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA inside Card */}
                <div className="pt-4 border-t border-brand-white/10 flex items-center justify-between group-hover:translate-x-2 transition-transform duration-300">
                  <a 
                    href="#contact" 
                    className="font-archivo text-xs uppercase tracking-widest flex items-center gap-1 hover:underline text-brand-white"
                  >
                    Discuss project <ChevronRight size={14} />
                  </a>
                  <div className={`w-8 h-8 rounded-full border border-brand-white/20 flex items-center justify-center`}>
                    <span className="font-bold text-xs text-brand-white">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
