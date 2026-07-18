import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { Search, Construction, Zap, Rocket, ChevronLeft, ChevronRight } from "lucide-react";
import { ProcessStepItem } from "../types";

export default function ProcessTimeline() {
  const steps: ProcessStepItem[] = [
    {
      id: "discover",
      phase: "01",
      title: "Discover & Audit",
      description: "We dive deep into your target audience, analyze competitor gaps, and map out a bulletproof architectural and AI automation plan.",
    },
    {
      id: "build",
      phase: "02",
      title: "Rapid Build",
      description: "We deploy our agile tech stack to build pixel-perfect, lightning-fast interfaces. Optimized for high user-retention and SEO scores.",
    },
    {
      id: "automate",
      phase: "03",
      title: "AI Integration",
      description: "We inject autonomous agents and task runners into your core system. Connecting APIs to automate leads, operations, and support channels.",
    },
    {
      id: "launch",
      phase: "04",
      title: "Global Launch",
      description: "We test across multiple viewpoints, compress asset payloads, configure global Edge CDN distributions, and launch without any downtime.",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(25); // initial progress corresponding to first step
  const [activeStep, setActiveStep] = useState(0);

  // Monitor scroll behavior of horizontal panel to calculate progress bar percentage
  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const scrollLeft = el.scrollLeft;
    const scrollWidth = el.scrollWidth - el.clientWidth;
    
    if (scrollWidth <= 0) return;

    const progress = (scrollLeft / scrollWidth) * 75 + 25; // mapped 25% to 100%
    setScrollProgress(progress);

    // Update active step indicator based on position
    const stepWidth = el.scrollWidth / steps.length;
    const currentStep = Math.min(
      Math.floor((scrollLeft + stepWidth / 2) / stepWidth),
      steps.length - 1
    );
    setActiveStep(currentStep);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToStep = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const stepWidth = el.scrollWidth / steps.length;
    el.scrollTo({
      left: stepWidth * index,
      behavior: "smooth"
    });
    setActiveStep(index);
  };

  const scrollLeft = () => {
    if (activeStep > 0) {
      scrollToStep(activeStep - 1);
    }
  };

  const scrollRight = () => {
    if (activeStep < steps.length - 1) {
      scrollToStep(activeStep + 1);
    }
  };

  const getIcon = (id: string) => {
    const iconSize = 24;
    switch (id) {
      case "discover":
        return <Search size={iconSize} className="text-brand-blue" />;
      case "build":
        return <Construction size={iconSize} className="text-brand-blue" />;
      case "automate":
        return <Zap size={iconSize} className="text-brand-blue" />;
      case "launch":
        return <Rocket size={iconSize} className="text-brand-blue" />;
      default:
        return <Search size={iconSize} className="text-brand-blue" />;
    }
  };

  return (
    <section 
      id="journey" 
      className="bg-brand-black text-brand-white bg-noise py-24 px-4 md:px-8 border-b-4 border-brand-black overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-archivo text-brand-blue text-xs tracking-widest uppercase block mb-3">
              [ 03 // ACTION PLAN ]
            </span>
            <h2 className="font-archivo text-4xl md:text-6xl text-brand-offwhite uppercase leading-none tracking-tighter">
              The Journey To <br />
              Performance <span className="text-brand-blue font-normal">*</span>
            </h2>
          </div>
          
          {/* Navigation buttons for scroll */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              disabled={activeStep === 0}
              className={`w-10 h-10 rounded-full border border-brand-white bg-brand-black text-brand-white flex items-center justify-center transition-all duration-200 active:translate-y-0.5 ${
                activeStep === 0 
                  ? "opacity-20 cursor-not-allowed border-brand-white/20 text-brand-white/20" 
                  : "hover:bg-brand-blue hover:text-brand-white hover:border-brand-blue"
              }`}
              aria-label="Previous step"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={scrollRight}
              disabled={activeStep === steps.length - 1}
              className={`w-10 h-10 rounded-full border border-brand-white bg-brand-black text-brand-white flex items-center justify-center transition-all duration-200 active:translate-y-0.5 ${
                activeStep === steps.length - 1 
                  ? "opacity-20 cursor-not-allowed border-brand-white/20 text-brand-white/20" 
                  : "hover:bg-brand-blue hover:text-brand-white hover:border-brand-blue"
              }`}
              aria-label="Next step"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* PROGRESS LINE BAR */}
        <div className="relative w-full h-[2px] bg-brand-white/10 mb-12 overflow-hidden">
          {/* Linked Blue Progress Fill */}
          <motion.div 
            animate={{ width: `${scrollProgress}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="absolute left-0 top-0 h-full bg-brand-blue"
          />
        </div>

        {/* STEP BUTTON SELECTORS FOR CLICK NAVIGATION */}
        <div className="grid grid-cols-4 gap-2 md:gap-4 mb-10 text-center max-w-2xl mx-auto">
          {steps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => scrollToStep(idx)}
              className={`py-2 px-1 border rounded-full font-archivo text-[10px] md:text-xs uppercase tracking-wider transition-all duration-300 ${
                activeStep === idx
                  ? "bg-brand-blue text-brand-white border-brand-blue"
                  : "bg-brand-black text-brand-offwhite/50 border-brand-white/10 hover:text-brand-white hover:border-brand-white/30"
              }`}
            >
              P{step.phase}
            </button>
          ))}
        </div>

        {/* HORIZONTAL SCROLL TIMELINE WRAPPER */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className="min-w-[280px] sm:min-w-[360px] md:min-w-[400px] flex-shrink-0 snap-start bg-brand-black border border-brand-white/10 p-8 angular-cut relative overflow-hidden flex flex-col justify-between hover:border-brand-blue transition-colors duration-300"
            >
              {/* Giant Phase Background Number */}
              <div className="absolute right-4 bottom-2 text-brand-white/[0.03] text-[120px] font-archivo leading-none select-none pointer-events-none">
                {step.phase}
              </div>

              <div>
                {/* Header: Phase + Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 rounded-full bg-brand-white text-brand-black flex items-center justify-center border border-brand-black font-archivo font-bold text-sm">
                    {step.phase}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-brand-white/5 flex items-center justify-center border border-brand-white/10">
                    {getIcon(step.id)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-archivo text-xl md:text-2xl text-brand-offwhite uppercase tracking-tight mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-poppins text-sm text-brand-offwhite/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connected Connector Line indicator */}
              <div className="mt-8 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                <span className="font-poppins font-semibold text-[10px] uppercase tracking-widest text-brand-blue">
                  {idx === steps.length - 1 ? "FINISH DEPLOYMENT" : "NEXT PHASE READY"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note with asterisk */}
        <div className="mt-8 text-center text-brand-offwhite/45 font-poppins text-xs uppercase tracking-widest flex items-center justify-center gap-1.5">
          <span className="text-brand-blue animate-spin-slow">*</span> Swipe or click stages above to navigate through our technical process.
        </div>
      </div>
    </section>
  );
}
