import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TestimonialItem } from "../types";

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      id: "TESTIMONIAL_1",
      quote: "NextDev Studio built our entire e-commerce app and AI recommendation engine. Our online sales increased by 140% in just two months of launching!",
      clientName: "Anil Kumar",
      businessType: "Interior Design Studio, Kochi",
      rating: 5,
    },
    {
      id: "TESTIMONIAL_2",
      quote: "Their AI-first approach automated 80% of our customer scheduling and booking follow-ups. Outstanding speed, crystal-clear communication throughout.",
      clientName: "Sana Mathew",
      businessType: "Boutique Homestay Chain, Wayanad",
      rating: 5,
    },
    {
      id: "TESTIMONIAL_3",
      quote: "Technical SEO and speed were our main goals. NextDev shipped clean, high-performance code that got us to page one on Google within weeks.",
      clientName: "Rahul Chandran",
      businessType: "SaaS Platform, Infopark Kochi",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll loop
  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      className="bg-brand-black text-brand-white bg-noise py-24 px-4 md:px-8 border-b-4 border-brand-black"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-archivo text-brand-blue text-xs tracking-widest uppercase block mb-3">
              [ 04 // WORD ON THE STREET ]
            </span>
            <h2 className="font-archivo text-4xl md:text-6xl text-brand-offwhite uppercase leading-none tracking-tighter">
              What Our <br />
              Clients Say <span className="text-brand-blue font-normal animate-pulse">*</span>
            </h2>
          </div>

          {/* Carousel Arrows (Left/Right Blue Circle Buttons) */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-brand-white bg-brand-black text-brand-white hover:bg-brand-blue hover:text-brand-white hover:border-brand-blue flex items-center justify-center transition-all duration-200 active:translate-y-0.5 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-brand-white bg-brand-black text-brand-white hover:bg-brand-blue hover:text-brand-white hover:border-brand-blue flex items-center justify-center transition-all duration-200 active:translate-y-0.5 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* TESTIMONIAL DISPLAY CAROUSEL */}
        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Card Viewport */}
          <div className="flex justify-center items-center min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ type: "spring", stiffness: 180, damping: 20 }}
                className="w-full max-w-4xl"
              >
                <div className="angular-cut p-8 md:p-12 bg-brand-offwhite text-brand-black border border-brand-black transition-transform duration-300 hover:-translate-y-1 relative">
                  
                  {/* Testimonial Placeholder Badge */}
                  <div className="absolute top-4 right-4 bg-brand-black text-brand-white font-mono text-[9px] py-1 px-2.5 rounded-full border border-brand-white/10 uppercase tracking-wider">
                    {testimonials[currentIndex].id}
                  </div>

                  {/* Quote icon motif */}
                  <Quote size={48} className="text-brand-blue opacity-15 absolute top-8 left-8 -z-0" />

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    {/* Star Rating (Electric Blue Stars) */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className="fill-brand-blue text-brand-blue stroke-[2px]" 
                        />
                      ))}
                    </div>

                    {/* Short Quote Text */}
                    <p className="font-poppins font-medium text-lg sm:text-xl md:text-2xl leading-relaxed italic mb-8 text-brand-black">
                      "{testimonials[currentIndex].quote}"
                    </p>

                    {/* Client info */}
                    <div className="border-t border-brand-black/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h4 className="font-archivo text-lg uppercase text-brand-black tracking-tight leading-none mb-1.5">
                          {testimonials[currentIndex].clientName}
                        </h4>
                        <p className="font-poppins font-bold text-xs text-brand-blue uppercase tracking-widest">
                          {testimonials[currentIndex].businessType}
                        </p>
                      </div>

                      {/* Accent Asterisk logo */}
                      <span className="font-archivo text-brand-blue text-3xl hidden sm:block animate-spin-slow">
                        *
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full border border-brand-black/20 transition-all duration-300 ${
                  currentIndex === index ? "w-8 bg-brand-blue" : "w-2 bg-brand-offwhite"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Informative placeholder helper */}
        <p className="mt-8 text-center text-xs text-brand-offwhite/40 font-mono uppercase tracking-widest">
          DEVELOPER NOTE: SWAP PLACEHOLDER IDS ABOVE FOR REAL ENDORSEMENTS
        </p>

      </div>
    </section>
  );
}
