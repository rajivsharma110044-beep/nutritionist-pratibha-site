"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Reviews() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 40,
      },
    });
  }, [controls]);

  // Your 8 image paths
  const reviewImages = [
    "/images/R1.jpg", // Review 1
    "/images/R2.jpg", // Review 2
    "/images/R3.jpg", // Review 3
    "/images/R4.jpg", // Review 4
    "/images/R5.jpg", // Review 5
    "/images/R6.jpg", // Review 6
    "/images/R7.jpg", // Review 7
    "/images/R8.jpg", // Review 8
  ];

  return (
    <section id="reviews" className="relative w-full bg-white py-32 overflow-hidden">
      
      <div className="mb-16 text-center px-8">
        <h2 className="text-[10vw] md:text-[6vw] font-black uppercase leading-none tracking-tighter text-slate-900">
          Wall of <span className="text-pink-500">Love.</span>
        </h2>
      </div>

      {/* The Continuous Moving Track */}
      <div className="cursor-grab active:cursor-grabbing">
        <motion.div 
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }} // Loops the images
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 40 // Adjust this for speed (higher = slower)
          }}
          // The hover logic: pauses the animation when mouse enters
          onHoverStart={() => controls.stop()}
          onHoverEnd={() => controls.start({ x: ["0%", "-50%"] })}
        
        >
          {/* We duplicate the array to create a seamless infinite loop */}
          {[...reviewImages, ...reviewImages].map((src, index) => (
            <div 
              key={index} 
              className="min-w-[300px] md:min-w-[400px] h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img 
                src={src} 
                alt={`Review ${index}`} 
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}