"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis with premium settings
    const lenis = new Lenis({
      duration: 1.2, // Controls the speed of the scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smoothWheel: true,
    });

    // The animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup to prevent memory leaks in React
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}