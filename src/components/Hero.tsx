import { motion } from "motion/react";
import { ArrowDown, Star } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex flex-col justify-center bg-brand-black text-brand-white bg-noise overflow-hidden px-6 py-20 md:px-10 border-b border-brand-black"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft blur-sphere for Artistic Flair */}
        <div className="absolute -top-4 -left-6 w-96 h-96 bg-brand-blue rounded-full blur-[100px] opacity-25"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-blue rounded-full blur-[120px] opacity-15"></div>
        
        {/* Floating brand mark asterisks */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute top-12 right-[10%] text-brand-blue/20 text-[10vw] font-bold"
        >
          *
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute bottom-20 left-[8%] text-brand-offwhite/5 hidden md:block"
        >
          <Star size={120} className="fill-current opacity-10" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-start justify-center">
        {/* KERALA BRUTALIST BADGE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: -1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          className="mb-8 px-4 py-2 bg-brand-blue text-brand-white font-archivo text-xs md:text-sm uppercase tracking-widest border border-brand-white inline-flex items-center gap-2 rounded-md"
        >
          <span>🚀 NEXT-GEN CREATIVE AGENCY</span>
          <span className="font-sans font-bold">● KERALA</span>
        </motion.div>

        {/* HERO TITLE CONTAINER */}
        <div className="relative max-w-5xl">
          {/* The Headline itself */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="relative z-10 brutal-title text-5xl sm:text-7xl md:text-[92px] uppercase text-brand-white tracking-tighter text-left"
          >
            We Build <br className="hidden sm:block" />
            Brands That <br />
            <span className="text-brand-blue">Perform</span> <br />
            Online.
          </motion.h1>
        </div>

        {/* BRAND SUBTEXT & PILL BUTTONS */}
        <div className="mt-12 md:mt-16 w-full flex flex-col md:flex-row md:items-center justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-lg font-poppins text-lg md:text-xl text-brand-offwhite/90 leading-relaxed font-medium"
          >
            NEXTDEV STUDIO is an elite digital team specializing in cutting-edge 
            <span className="text-brand-blue font-bold"> web systems</span>, 
            <span className="text-brand-blue font-bold"> intelligent automations</span>, and 
            high-converting online strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#contact"
              className="bg-brand-blue text-brand-white px-8 py-4 rounded-full font-bold uppercase text-sm flex items-center gap-3 hover:scale-105 transition-transform duration-200"
            >
              Start Building
              <div className="w-6 h-6 bg-brand-white rounded-full flex items-center justify-center">
                <span className="text-brand-blue text-xs font-black">→</span>
              </div>
            </a>
            <a
              href="#services"
              className="bg-brand-white text-brand-black border border-brand-black px-8 py-4 rounded-full font-bold uppercase text-sm flex items-center gap-3 hover:scale-105 transition-transform duration-200"
            >
              Our Offerings
              <div className="w-6 h-6 bg-brand-black rounded-full flex items-center justify-center">
                <span className="text-brand-white text-xs font-black">↓</span>
              </div>
            </a>
          </motion.div>
        </div>

        {/* BOUNCING ARROW-IN-CIRCLE CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 md:mt-24 w-full flex justify-center"
        >
          <a
            href="#services"
            className="group flex flex-col items-center gap-3 font-poppins font-bold text-xs uppercase tracking-widest text-brand-offwhite/75 hover:text-brand-blue transition-colors duration-200"
            aria-label="Scroll to services"
          >
            <span>DISCOVER WHAT WE DO</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-10 h-10 border border-brand-white rounded-full flex items-center justify-center text-xl hover:bg-brand-blue hover:text-brand-white transition-all duration-200"
            >
              <ArrowDown size={16} className="stroke-[3px]" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
