import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ProcessTimeline from "./components/ProcessTimeline";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-offwhite text-brand-black selection:bg-brand-blue selection:text-brand-white font-sans antialiased flex flex-col overflow-x-hidden">
      {/* HEADER SECTION */}
      <Header />

      {/* BODY CONTENT WITH STAGGERED ENTRANCES */}
      <main className="flex-grow">
        {/* HERO SECTION */}
        <Hero />

        {/* SERVICES SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Services />
        </motion.div>

        {/* WHY CHOOSE US SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <WhyChooseUs />
        </motion.div>

        {/* PROCESS / JOURNEY SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <ProcessTimeline />
        </motion.div>

        {/* TESTIMONIALS SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Testimonials />
        </motion.div>

        {/* ENQUIRY / CONTACT SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Contact />
        </motion.div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
