"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register the ScrollTrigger plugin with GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Features() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      // Tie the horizontal movement to the vertical scroll
      gsap.to(textRef.current, {
        xPercent: -50, // Move the text 50% to the left
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // Start when the top of the section hits the bottom of the screen
          end: "bottom top",   // End when the bottom of the section hits the top of the screen
          scrub: 1,            // Smooth scrubbing (takes 1 second to catch up to the scrollbar)
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section 
      ref={containerRef} 
      className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-[#050505] text-white"
    >
      {/* Massive Background Text moving horizontally */}
      <h2 
        ref={textRef} 
        className="absolute whitespace-nowrap text-[18vw] font-black uppercase tracking-tighter text-white/5"
      >
        Nutrition • Training • Recovery • Mindset •
      </h2>

      {/* Foreground Content */}
      <div className="z-10 max-w-2xl px-8 text-center">
        <h3 className="text-3xl font-bold uppercase tracking-tight md:text-5xl">
          The 3-Phase Protocol
        </h3>
        <p className="mt-6 text-neutral-400 md:text-lg">
          Engineered for maximum fat loss and muscle retention. We monitor your metabolic adaptation daily and adjust the protocol in real-time.
        </p>
      </div>
    </section>
  );
}