"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <footer className="relative flex h-[80svh] w-full flex-col items-center justify-between overflow-hidden bg-[#050505] px-8 pb-8 pt-32 text-white">
      
      {/* Massive CTA */}
      <div className="flex w-full flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: smoothEase }}
          className="text-[10vw] font-black uppercase leading-[0.85] tracking-tighter"
        >
          Start Your <br /> Protocol.
        </motion.h2>

        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: smoothEase }}
          className="mt-12 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#050505] transition-transform hover:scale-105"
        >
          Book Consultation
        </motion.button>
      </div>

      {/* Bottom Links & Copyright */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="flex w-full flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-xs font-bold uppercase tracking-widest text-neutral-500 md:flex-row md:gap-0"
      >
        <div className="flex gap-8">
          <a href="#" className="transition-colors hover:text-white">Instagram</a>
          <a href="#" className="transition-colors hover:text-white">Twitter</a>
          <a href="#" className="transition-colors hover:text-white">LinkedIn</a>
        </div>
        <div>
          Abhishek © 2026
        </div>
      </motion.div>
      
    </footer>
  );
}