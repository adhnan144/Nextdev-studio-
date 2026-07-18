import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Journey", href: "#journey" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header id="header" className="sticky top-0 z-50 w-full bg-brand-offwhite border-b border-brand-black px-6 py-5 md:px-10 md:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Wordmark & Asterisk Motif */}
        <a 
          href="#header" 
          className="flex items-center gap-2 select-none group"
        >
          <span className="text-brand-blue text-3xl font-black animate-spin-slow group-hover:scale-125 transition-transform duration-300">
            *
          </span>
          <span className="font-black uppercase tracking-tighter text-xl md:text-2xl text-brand-black">
            NextDev Studio
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 text-brand-black hover:text-brand-blue transition-colors duration-200 group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center justify-center w-8 h-8 border border-brand-black rounded-full hover:bg-brand-blue hover:text-brand-white hover:border-brand-blue transition-all duration-200 text-xs"
            title="Get In Touch"
          >
            ↗
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 border border-brand-black bg-brand-white text-brand-black rounded-full active:translate-y-0.5 transition-all duration-100"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={18} className="stroke-[3px]" /> : <Menu size={18} className="stroke-[3px]" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute left-0 top-full w-full bg-brand-offwhite border-b border-brand-black px-6 py-8 md:hidden flex flex-col gap-5 z-40 brutalist-shadow"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 font-archivo text-lg uppercase text-brand-black tracking-tight border-b border-brand-black/10 pb-2 hover:text-brand-blue hover:pl-2 transition-all duration-200"
                >
                  <span className="text-brand-blue text-lg">*</span>
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full py-3.5 bg-brand-blue text-brand-white border border-brand-black font-archivo text-center text-sm uppercase tracking-wider rounded-full hover:bg-brand-black transition-colors duration-150 flex items-center justify-center gap-2"
            >
              Start Your Project <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
