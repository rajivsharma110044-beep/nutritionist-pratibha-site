"use client";

import { motion } from "framer-motion";

export default function About() {

  return (
    // We use pure white here to create a subtle contrast from the off-white Services section
    <section id="about" className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-white py-24 px-8">
      
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 lg:flex-row lg:justify-between">
        
        {/* LEFT SIDE: The Portrait & Floating Badges */}
        <div className="relative flex w-full justify-center lg:w-1/2 lg:justify-start">
          
         {/* Main Portrait - UPDATED FOR FULL IMAGE */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            // REMOVED fixed height (h-[500px]) and extreme arch. 
            // Changed to standard rounded-3xl so the frame fits your whole photo.
            className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-2xl"
          >
            <img 
              // Keep your local image path here!
              src="/images/1.jpg" 
              alt="Nutritionist Pratibha"
              // CHANGED to h-auto. This forces the browser to display 100% of the image without zooming or cropping.
              className="w-full h-auto block"
            />
            {/* Soft pink overlay gradient at the bottom so the badge blends smoothly */}
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-pink-100/60 to-transparent"></div>
          </motion.div>

          {/* Floating Glassmorphism Badge: PCOS Society */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut"}}
            className="absolute bottom-10 -left-4 lg:-left-12 flex items-center gap-4 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Verified Member</span>
              <span className="text-sm font-black text-slate-800">PCOS Society of India</span>
            </div>
          </motion.div>

        </div>

        {/* RIGHT SIDE: Typography & Copy */}
        <div className="flex w-full flex-col lg:w-1/2">
          
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-xs font-bold uppercase tracking-widest text-pink-500"
          >
            About The Founder
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-[8vw] lg:text-[4vw] font-black uppercase leading-[0.95] tracking-tighter text-slate-900"
          >
            Empowering Women to Take <span className="text-pink-500">Control</span> of Their Health.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 flex flex-col gap-6 text-sm md:text-base font-medium text-slate-600 leading-relaxed max-w-lg"
          >
            <p>
              I'm Nutritionist Pratibha, a Women's Health & Therapeutic Nutrition Expert helping women overcome PCOS, hormonal imbalances, weight management challenges, and lifestyle-related health concerns.
            </p>
            <p>
              I have successfully guided thousands of women toward healthier lives through personalized, practical, and sustainable nutrition plans. Your transformation starts with the right nutrition strategy.
            </p>
            <p className="font-bold text-slate-900 italic">
              "Let's create a healthier, stronger, and more confident you."
            </p>
          </motion.div>

          {/* Extracted Metrics / Trust Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 grid grid-cols-2 gap-6 border-t border-pink-100 pt-8"
          >
            <div className="flex flex-col">
              <span className="text-4xl font-black text-pink-500">6+</span>
              <span className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400">Years Experience</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-black text-pink-500">3000+</span>
              <span className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400">Women Transformed</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}