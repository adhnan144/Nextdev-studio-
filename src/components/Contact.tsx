import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, ArrowRight, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for that field on change
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("submitting");

    setTimeout(() => {
      const whatsappNumber = "919633537965";
      const messageText = `*New Enquiry from NextDev Studio Website* 👋\n\n` +
                          `👤 *Name:* ${formData.name}\n` +
                          `📧 *Email:* ${formData.email}\n` +
                          `📝 *Description:* ${formData.message}`;
      
      const generatedUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;
      setWhatsappUrl(generatedUrl);
      setStatus("success");

      // Open the WhatsApp chat directly in a new window/tab
      window.open(generatedUrl, "_blank");

      // Reset form on success
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section 
      id="contact" 
      className="bg-brand-offwhite text-brand-black bg-noise py-24 px-4 md:px-8 border-b-4 border-brand-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: DETAILS & CTA WORDS */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="font-archivo text-brand-blue text-sm tracking-widest uppercase block mb-3">
                [ 05 // INITIATE TRANSMISSION ]
              </span>
              <h2 className="font-archivo text-4xl sm:text-5xl md:text-6xl text-brand-black uppercase leading-none tracking-tighter mb-8">
                Let's Build <br />
                Something <br />
                Great <span className="text-brand-blue font-normal animate-pulse">*</span>
              </h2>
              <p className="font-poppins text-brand-black/80 text-base md:text-lg leading-relaxed mb-10 max-w-md">
                Have an idea, a brand, or a workflow that needs elite engineering? Drop us a line. 
                Our team gets back to qualified inquiries in less than 12 hours.
              </p>
            </div>

            {/* CLICKABLE INFO BLOCKS */}
            <div className="space-y-4">
              {/* Mail Link */}
              <a 
                href="mailto:teamnextdevstudio@gmail.com"
                className="flex items-center gap-4 p-4 bg-brand-white border border-brand-black/10 rounded-2xl hover:border-brand-blue hover:text-brand-blue transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-brand-blue text-brand-white flex items-center justify-center border border-brand-black/10 group-hover:scale-105 transition-transform">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="font-poppins text-[10px] font-bold uppercase tracking-wider text-brand-black/55">
                    EMAIL US DIRECTLY
                  </p>
                  <p className="font-archivo text-sm md:text-base tracking-tight text-brand-black">
                    teamnextdevstudio@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone Link */}
              <a 
                href="tel:+919633537965"
                className="flex items-center gap-4 p-4 bg-brand-white border border-brand-black/10 rounded-2xl hover:border-brand-blue hover:text-brand-blue transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-brand-blue text-brand-white flex items-center justify-center border border-brand-black/10 group-hover:scale-105 transition-transform">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="font-poppins text-[10px] font-bold uppercase tracking-wider text-brand-black/55">
                    CALL OUR HOTLINE
                  </p>
                  <p className="font-archivo text-sm md:text-base tracking-tight text-brand-black">
                    +91 9633537965
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: STATEFUL BRUTALIST FORM */}
          <div className="lg:col-span-7">
            <div className="bg-brand-white border border-brand-black p-6 md:p-10 rounded-3xl relative">
              {/* Blur-sphere behind form */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-blue rounded-full blur-[80px] opacity-10 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center flex flex-col items-center justify-center"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-16 h-16 rounded-full bg-brand-blue text-brand-white border border-brand-black flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 size={32} />
                    </motion.div>
                    <h3 className="font-archivo text-2xl md:text-3xl uppercase tracking-tight text-brand-black mb-4">
                      TRANSMISSION SUCCESS!
                    </h3>
                    <p className="font-poppins text-brand-black/75 max-w-md mx-auto leading-relaxed mb-8 text-xs sm:text-sm">
                      We're opening WhatsApp to connect you directly with us. If the chat window didn't open automatically, please click below to send your enquiry.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto px-6 py-3 bg-brand-blue text-brand-white hover:bg-brand-black border border-brand-black font-archivo text-xs uppercase tracking-wider rounded-full transition-colors duration-200 flex items-center justify-center gap-2 font-bold"
                      >
                        Send on WhatsApp 💬
                      </a>
                      <button
                        onClick={() => setStatus("idle")}
                        className="w-full sm:w-auto px-6 py-3 bg-brand-black text-brand-white hover:bg-brand-blue border border-brand-black font-archivo text-xs uppercase tracking-wider rounded-full transition-colors duration-200"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit}
                    className="space-y-6 relative z-10"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center gap-2 border-b border-brand-black/10 pb-4 mb-4">
                      <Sparkles size={14} className="text-brand-blue" />
                      <p className="font-poppins font-bold text-[10px] uppercase tracking-widest text-brand-black/50">
                        RECRUIT THE TEAM
                      </p>
                    </div>

                    {/* NAME INPUT */}
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block font-archivo text-[10px] uppercase tracking-widest text-brand-black mb-2"
                      >
                        YOUR NAME / BUSINESS *
                      </label>
                      <div className="relative">
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g., name/ business"
                          className={`w-full p-4 bg-brand-offwhite border rounded-xl font-poppins text-xs sm:text-sm text-brand-black focus:outline-none focus:border-brand-blue transition-colors ${
                            errors.name ? "border-red-500" : "border-brand-black/20"
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-2 text-xs text-red-600 font-poppins flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.name}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* EMAIL INPUT */}
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block font-archivo text-[10px] uppercase tracking-widest text-brand-black mb-2"
                      >
                        EMAIL ADDRESS *
                      </label>
                      <div className="relative">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g., mail@brand.com"
                          className={`w-full p-4 bg-brand-offwhite border rounded-xl font-poppins text-xs sm:text-sm text-brand-black focus:outline-none focus:border-brand-blue transition-colors ${
                            errors.email ? "border-red-500" : "border-brand-black/20"
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-2 text-xs text-red-600 font-poppins flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* MESSAGE INPUT */}
                    <div>
                      <label 
                        htmlFor="message" 
                        className="block font-archivo text-[10px] uppercase tracking-widest text-brand-black mb-2"
                      >
                        PROJECT DESCRIPTION *
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Tell us what you are building, timeline, budget, or key systems needed..."
                          className={`w-full p-4 bg-brand-offwhite border rounded-xl font-poppins text-xs sm:text-sm text-brand-black focus:outline-none focus:border-brand-blue transition-colors resize-none ${
                            errors.message ? "border-red-500" : "border-brand-black/20"
                          }`}
                        />
                        {errors.message && (
                          <p className="mt-2 text-xs text-red-600 font-poppins flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* ROUNDED PILL SUBMIT BUTTON */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-brand-blue text-brand-white px-8 py-4 rounded-full font-bold uppercase text-xs sm:text-sm flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform duration-200 cursor-pointer disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-brand-white border-t-transparent rounded-full animate-spin" />
                          <span>SENDING APPLICATION...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND DISCOVERY BRIEF</span>
                          <div className="w-6 h-6 bg-brand-white rounded-full flex items-center justify-center">
                            <span className="text-brand-blue text-xs font-black">→</span>
                          </div>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
