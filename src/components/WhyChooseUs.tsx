import { motion } from "motion/react";
import { WhyChooseUsItem } from "../types";

export default function WhyChooseUs() {
  const points: WhyChooseUsItem[] = [
    {
      id: 1,
      title: "Fast Turnaround",
      description: "We ship fast without cutting corners. Our agile development stack and automated lint-build pipelines enable us to deliver pristine code in days, not months.",
    },
    {
      id: 2,
      title: "AI-First Approach",
      description: "We build intelligent automation into every project, not just websites. Optimize operations with autonomous workflows that cut overhead cost by up to 60%.",
    },
    {
      id: 3,
      title: "Transparent Process",
      description: "You see progress at every step, no black-box work. Access live staging environments, shared Trello/GitHub boards, and clear progress milestones.",
    },
    {
      id: 4,
      title: "Local + Global Ready",
      description: "Built for ambitious Kerala businesses, scalable for international clients. We deliver localized SEO expertise combined with world-class CDN infrastructure.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
      },
    },
  };

  return (
    <section 
      id="why-us" 
      className="bg-brand-white text-brand-black bg-noise py-24 px-6 md:px-10 border-b border-brand-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-16 flex items-center gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-brand-black flex-shrink-0">
            Why Choose Us // 02
          </span>
          <div className="h-[1.5px] flex-1 bg-brand-black/10"></div>
          <span className="text-brand-blue font-black animate-pulse">*</span>
        </div>

        {/* 2X2 GRID / STACKED ON MOBILE */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-4xl mx-auto"
        >
          {points.map((point) => {
            const isHighlighted = point.id === 2;
            const badgeClass = isHighlighted 
              ? "bg-brand-blue text-brand-white border-brand-blue" 
              : "border-brand-black text-brand-black";

            return (
              <motion.div
                key={point.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="flex flex-col gap-4 group"
              >
                {/* Circle Badge Indicator with Number */}
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-bold text-xs select-none transition-transform duration-200 group-hover:scale-110 ${badgeClass}`}>
                  {point.id}
                </div>

                {/* Title */}
                <h4 className="font-black text-sm uppercase tracking-wider text-brand-black group-hover:text-brand-blue transition-colors duration-200">
                  {point.title}
                </h4>

                {/* Description */}
                <p className="font-poppins text-brand-black/65 text-xs sm:text-sm leading-relaxed max-w-md">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
