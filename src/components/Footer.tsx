import { Github, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com", icon: <Github size={14} /> },
    { name: "Twitter", href: "https://twitter.com", icon: <Twitter size={14} /> },
    { name: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={14} /> },
    { name: "Instagram", href: "https://instagram.com", icon: <Instagram size={14} /> },
  ];

  return (
    <footer className="bg-brand-black text-brand-white bg-noise border-t border-brand-black py-16 px-6 md:px-10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        
        {/* WORDMARK & BRAND MARK */}
        <div className="flex flex-col items-start gap-4">
          <a 
            href="#header" 
            className="flex items-center gap-2 select-none group"
          >
            <span className="text-brand-blue text-3xl font-black animate-spin-slow group-hover:scale-125 transition-transform duration-300">
              *
            </span>
            <span className="font-black uppercase tracking-tighter text-xl md:text-2xl text-brand-white">
              NextDev Studio
            </span>
          </a>
          <p className="font-poppins text-[11px] font-semibold tracking-wider text-brand-offwhite/50 uppercase max-w-sm">
            High performance web development, AI automation, and technical marketing systems.
          </p>
        </div>

        {/* SOCIAL LINKS & BACK TO TOP */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
          
          {/* Social Icons with Sleek Hover State */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-brand-white/10 hover:border-brand-blue hover:text-brand-white flex items-center justify-center transition-all duration-200"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* BACK TO TOP PILL */}
          <a
            href="#header"
            className="w-8 h-8 rounded-full border border-brand-white/20 hover:bg-brand-blue hover:text-brand-white hover:border-brand-blue flex items-center justify-center transition-all duration-200 text-xs"
            title="Back to Top"
          >
            ↑
          </a>

        </div>

      </div>

      {/* COPYRIGHT & TECHNICAL DETAILS */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-brand-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="font-poppins text-[10px] font-semibold text-brand-offwhite/40 uppercase tracking-widest">
          © {new Date().getFullYear()} NEXTDEV STUDIO. ALL RIGHTS RESERVED.
        </p>
        
        <p className="font-poppins text-[10px] font-semibold text-brand-offwhite/40 uppercase tracking-widest flex items-center gap-1.5">
          <span>MADE FOR AMBITIOUS BRANDS</span>
          <span className="text-brand-blue animate-pulse">*</span>
          <span>KERALA, INDIA</span>
        </p>
      </div>

    </footer>
  );
}
