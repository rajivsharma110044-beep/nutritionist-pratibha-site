"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// Upgraded component to handle custom values and suffixes (like "+")
const CircularProgress = ({ progress, value, suffix = "%", label }: { progress: number, value: string | number, suffix?: string, label: string }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-32 w-32 items-center justify-center md:h-40 md:w-40 bg-white rounded-full shadow-xl">
        <svg className="absolute inset-0 h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
          <circle 
            cx="50" cy="50" r={radius} 
            stroke="currentColor" strokeWidth="3" fill="transparent" 
            className="text-pink-50" 
          />
          <motion.circle
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            cx="50" cy="50" r={radius}
            stroke="currentColor" strokeWidth="4" fill="transparent"
            strokeDasharray={circumference}
            strokeLinecap="round"
            className="text-pink-500 drop-shadow-md"
          />
        </svg>
        <div className="flex items-baseline">
          <span className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900">{value}</span>
          <span className="text-lg font-bold text-pink-500">{suffix}</span>
        </div>
      </div>
      <span className="mt-6 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-500 text-center">{label}</span>
    </div>
  );
};

export default function Booking() {
  return (
    <section id="book" className="relative w-full bg-pink-50/30 py-32 px-8">
      
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-24">
        
        {/* THE FLOATING BOOKING CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex w-full flex-col items-center justify-between gap-8 rounded-[2rem] border border-white/60 bg-white/80 p-8 md:flex-row md:p-12 shadow-2xl shadow-pink-100/50 backdrop-blur-md"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">
              More than <span className="underline decoration-pink-500 decoration-4 underline-offset-4">3,000+ Consultations</span> provided.
            </h3>
            <p className="mt-2 text-sm font-medium text-slate-500">
              Take the first step towards balancing your hormones and health.
            </p>
          </div>

          <Link 
  href="/book" 
  className="bg-pink-500 text-white font-bold text-sm md:text-base py-4 px-8 rounded-full inline-flex items-center justify-center gap-2 shadow-xl shadow-pink-500/30 hover:bg-pink-600 hover:-translate-y-1 transition-all whitespace-nowrap"
>
  BOOK CONSULTATION ↗
</Link>
        </motion.div>

        {/* THE NUMBERS SECTION */}
        <div className="flex w-full flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-slate-900"
          >
            The proof is in the numbers
          </motion.h2>

          {/* Upgraded grid to handle 4 items elegantly: 2 columns on mobile, 4 on desktop */}
          <div className="mt-16 grid w-full grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
            <CircularProgress progress={98} value={98} label="Success Rate" />
            <CircularProgress progress={90} value={90} label="Happy Clients" />
            <CircularProgress progress={95} value={95} label="Online Consultations" />
            
            {/* The new metric: progress=100 ensures a full circle draws, custom suffix applied */}
            <CircularProgress progress={100} value={6} suffix="+" label="Global Countries" />
          </div>
        </div>

      </div>

    </section>
  );
}