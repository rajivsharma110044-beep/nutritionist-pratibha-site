"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // 1. Added the Next.js Link import

export default function Services() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 432 : 300; 
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

   // 2. Added a unique 'slug' to every single service
   const servicesList = [
    { title: "Pre-Pregnancy Diet", slug: "pre-pregnancy-diet-plan", image: "https://images.unsplash.com/photo-1555243896-c709bfa0b564?q=80&w=600&auto=format&fit=crop", desc: "Optimal pre-conception nutrition to prepare your body." },
    { title: "Pregnancy Diet", slug: "pregnancy-diet-plan", image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=600&auto=format&fit=crop", desc: "Comprehensive maternal nourishment for fetal development." },
    { title: "Postpartum Diet", slug: "postpartum-diet-plan", image: "/images/POST.jpg", desc: "Healing protocols focused on energy restoration." },
    { title: "Lactation Diet", slug: "lactation-diet-plan", image: "/images/LACT.jpg", desc: "Nutrient-dense foods to sustain healthy milk production." },
    { title: "IVF Diet Plan", slug: "ivf-diet-plan", image: "/images/IVF.jpg", desc: "Targeted fertility nutrition to support IVF success." },
    { title: "PCOS/PCOD Plan", slug: "pcos-pcod-diet-plan", image: "/images/PCO.jpg", desc: "Clinical management of hormonal imbalances." },
    { title: "Weight Loss Plan", slug: "weight-loss-diet-plan", image: "/images/WT.jpg", desc: "Sustainable fat loss without strict deprivation." },
    { title: "Weight Gain Plan", slug: "weight-gain-diet-plan", image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=600&auto=format&fit=crop", desc: "Healthy strategies for natural and safe weight scaling." },
    { title: "Thyroid Mgmt.", slug: "thyroid-management", image: "/images/THY.jpg", desc: "Metabolism-supporting diets for thyroid function." },
    { title: "Diabetes Mgmt.", slug: "diabetes-management", image: "/images/DI.jpg", desc: "Blood sugar stabilization using low-GI foods." },
    { title: "Menopause Mgmt.", slug: "menopause-management", image: "/images/MENO.jpg", desc: "Nutritional support to manage symptoms and bone health." },
    { title: "Endometriosis Mgmt.", slug: "endometriosis-management", image: "/images/ENDO.jpg", desc: "Anti-inflammatory protocols to reduce flare-ups." },
    { title: "Skin & Hair Health", slug: "skin-hair-nutrition", image: "/images/SKIN.jpg", desc: "Inner healing for outer strength and natural glow." }
  ];

  return (
    <section id="services" className="relative w-full bg-[#FAFAFA] py-32 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* --- LAYER 1: THE FADED BACKGROUND MARQUEE --- */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center gap-8 opacity-[0.15] pointer-events-none">
        
        {/* Top Row: Moves steadily to the Left */}
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 60 }} 
          className="flex w-max gap-8"
        >
          {[...servicesList, ...servicesList].map((service, index) => (
            <img 
              key={`bg-top-${index}`} 
              src={service.image} 
              alt="background texture" 
              className="h-64 w-96 rounded-[3rem] object-cover" 
            />
          ))}
        </motion.div>

        {/* Bottom Row: Moves steadily to the Right */}
        <motion.div 
          animate={{ x: ["-50%", "0%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 75 }} 
          className="flex w-max gap-8"
        >
          {[...servicesList, ...servicesList].map((service, index) => (
            <img 
              key={`bg-bottom-${index}`} 
              src={service.image} 
              alt="background texture" 
              className="h-64 w-96 rounded-[3rem] object-cover" 
            />
          ))}
        </motion.div>

      </div>

      {/* --- LAYER 2: THE FOREGROUND CONTENT --- */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
        
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="text-[10vw] md:text-[6vw] font-black uppercase leading-none tracking-tighter text-slate-900"
            >
              Our <span className="text-pink-500">Services.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-4 text-sm font-bold uppercase tracking-widest text-slate-400"
            >
              Swipe or click to explore our 13 clinical programs
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden md:flex gap-4"
          >
            <button 
              onClick={() => scroll("left")}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-pink-200 bg-pink-50 text-pink-500 transition-all hover:scale-110 hover:bg-pink-500 hover:text-white shadow-lg focus:outline-none"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button 
              onClick={() => scroll("right")}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-pink-200 bg-pink-50 text-pink-500 transition-all hover:scale-110 hover:bg-pink-500 hover:text-white shadow-lg focus:outline-none"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </motion.div>
        </div>

        <div 
          ref={carouselRef} 
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {servicesList.map((service, index) => (
            <motion.div 
              key={`card-${index}`} 
              className="min-w-[280px] md:min-w-[400px] snap-center flex-col rounded-3xl border border-pink-50 bg-white/80 p-4 shadow-xl backdrop-blur-sm"
            >
              <div className="h-64 md:h-80 w-full overflow-hidden rounded-2xl">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              <div className="mt-6 px-2 pb-4">
                <h3 className="text-xl font-black uppercase tracking-wide text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  {service.desc}
                </p>
                
                {/* 3. Changed the <button> to a <Link> pointing to the service slug */}
                <Link 
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-block text-xs font-bold uppercase tracking-widest text-pink-500 transition-colors hover:text-pink-600"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}