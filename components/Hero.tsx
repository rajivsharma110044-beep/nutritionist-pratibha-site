"use client";

import { motion } from "framer-motion";
import Scene from "@/components/Scene";

export default function Hero() {
  const smoothEase = [0.16, 1, 0.3, 1];

  const dropSpring = {
    type: "spring",
    damping: 12,
    stiffness: 100,
    mass: 1.2,
  };

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-transparent px-8 pb-12 pt-32 text-slate-900">
      
      {/* 3D Background */}
      <Scene />

      {/* Main Content Container */}
      <div className="relative z-10 flex w-full max-w-7xl mx-auto flex-1 items-center justify-between pointer-events-none">
        
        {/* LEFT SIDE: Typography */}
        <div className="flex flex-col items-start max-w-lg lg:max-w-xl">
          <motion.h1 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: smoothEase }}
            className="pointer-events-auto text-[8vw] md:text-[6vw] font-black uppercase leading-[0.9] tracking-tighter text-slate-900"
          >
            Master Your
            <br /> <span className="text-pink-500">Wellness.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: smoothEase }}
            className="pointer-events-auto mt-8 max-w-sm md:max-w-md text-sm font-medium text-slate-600 md:text-base"
          >
            Transform your health with personalized diet plans crafted around your unique body, lifestyle, and aspirations. We combine evidence-based nutrition with professional support to help you achieve lasting results—without extreme restrictions or unsustainable trends.

            Trusted by over 2,570 clients, our proven approach has helped people build healthier habits, boost their energy, and unlock their full potential. Because true wellness isn't about dieting—it's about creating a lifestyle that lasts.

          </motion.p>
        </div>

        {/* RIGHT SIDE: Dropping/Splashing Food Composition with Hover Vaporize */}
        <div className="hidden md:relative md:flex md:w-1/2 min-h-[500px] lg:min-h-[600px] items-center justify-center pointer-events-auto cursor-crosshair">
          
          {/* 1. CENTER: Dynamic Flying/Splashing Salad */}
          <motion.div
            initial={{ opacity: 0, y: -150, scale: 0.8, rotate: -10, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
            // THE NEW VAPORIZE HOVER EFFECT
            whileHover={{ scale: 1.3, opacity: 0, filter: "blur(25px)", rotate: 15, transition: { duration: 0.3, ease: "circOut" } }}
            transition={{ ...dropSpring, delay: 0.2 }}
            className="absolute top-1/4 left-1/4 z-20 w-40 h-56 lg:w-48 lg:h-72 rounded-[4rem] border-2 border-white/60 bg-white/30 p-2 shadow-2xl backdrop-blur-md"
          >
            <motion.img 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src="/images/1.jpg" 
              alt="Flying Salad Splash"
              className="h-full w-full rounded-[3.5rem] object-cover"
            />
          </motion.div>

          {/* 2. TOP RIGHT: Overflowing Vegetable Basket */}
          <motion.div
            initial={{ opacity: 0, y: -200, scale: 0.8, rotate: 15, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
            whileHover={{ scale: 1.3, opacity: 0, filter: "blur(25px)", rotate: -15, transition: { duration: 0.3, ease: "circOut" } }}
            transition={{ ...dropSpring, delay: 0.4 }}
            className="absolute top-4 right-8 lg:top-10 lg:right-16 z-10 w-32 h-32 lg:w-40 lg:h-40 rounded-full border-2 border-white/60 bg-white/30 p-2 shadow-2xl backdrop-blur-md"
          >
            <motion.img 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop" 
              alt="Overflowing Basket"
              className="h-full w-full rounded-full object-cover"
            />
          </motion.div>

          {/* 3. BOTTOM RIGHT: Massive Mixed Bowl */}
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.8, rotate: -5, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
            whileHover={{ scale: 1.3, opacity: 0, filter: "blur(25px)", rotate: 20, transition: { duration: 0.3, ease: "circOut" } }}
            transition={{ ...dropSpring, delay: 0.6 }}
            className="absolute bottom-10 right-12 lg:bottom-16 lg:right-24 z-30 w-36 h-36 lg:w-44 lg:h-44 rounded-3xl border-2 border-white/60 bg-white/30 p-2 shadow-2xl backdrop-blur-md"
          >
            <motion.img 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop" 
              alt="Mixed Salad Bowl"
              className="h-full w-full rounded-2xl object-cover"
            />
          </motion.div>

          {/* 4. TOP LEFT: Abundant Fruits */}
          <motion.div
            initial={{ opacity: 0, y: -180, scale: 0.8, rotate: 20, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
            whileHover={{ scale: 1.3, opacity: 0, filter: "blur(25px)", rotate: -25, transition: { duration: 0.3, ease: "circOut" } }}
            transition={{ ...dropSpring, delay: 0.3 }}
            className="absolute top-16 left-4 lg:top-20 lg:left-10 z-30 w-24 h-24 lg:w-28 lg:h-28 rounded-full border-2 border-white/60 bg-white/30 p-2 shadow-xl backdrop-blur-md"
          >
            <motion.img 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=600&auto=format&fit=crop" 
              alt="Abundant Mixed Food"
              className="h-full w-full rounded-full object-cover"
            />
          </motion.div>

          {/* 5. BOTTOM LEFT: Vibrant Greens Collection */}
          <motion.div
            initial={{ opacity: 0, y: -120, scale: 0.8, rotate: -15, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
            whileHover={{ scale: 1.3, opacity: 0, filter: "blur(25px)", rotate: 10, transition: { duration: 0.3, ease: "circOut" } }}
            transition={{ ...dropSpring, delay: 0.5 }}
            className="absolute bottom-20 left-10 lg:bottom-28 lg:left-16 z-10 w-28 h-28 lg:w-32 lg:h-32 rounded-2xl border-2 border-white/60 bg-white/30 p-2 shadow-xl backdrop-blur-md"
          >
            <motion.img 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop" 
              alt="Vibrant Greens"
              className="h-full w-full rounded-xl object-cover"
            />
          </motion.div>

        </div>
      </div>

      {/* Bottom Metrics/Features Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: smoothEase }}
        className="relative z-10 mx-auto grid w-full max-w-3xl grid-cols-1 gap-8 border-t border-pink-200 pt-8 md:grid-cols-3 md:gap-12 pointer-events-auto"
      >
        <div className="flex flex-col">
          <span className="text-3xl font-black tracking-tight text-pink-500">100%</span>
          <span className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-400">Custom Plans</span>
        </div>

        <div className="flex flex-col">
          <span className="text-3xl font-black tracking-tight text-pink-500">24/7</span>
          <span className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-400">Client Support</span>
        </div>

        <div className="flex flex-col">
          <span className="text-3xl font-black tracking-tight text-pink-500">Regular</span>
          <span className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-400">Follow-Ups</span>
        </div>
      </motion.div>
      
    </section>
  );
}