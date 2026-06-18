"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Detect if hovering over a link or button
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Hide custom cursor on touch devices (mobile/tablet) to prevent bugs
  if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      // We don't offset the x and y here so the tip of the arrow is exactly where you click
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHovering ? 1.1 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 30,
        mass: 0.5,
      }}
    >
      {/* Sleek Modern Arrow SVG */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        // Changes color to pink when hovering over clickable items, otherwise stays a sleek dark slate
        fill={isHovering ? "#ec4899" : "#0f172a"}
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        // Slight rotation to give it that modern macOS/premium feel
        style={{ transform: "rotate(-10deg) translate(-2px, -2px)", dropShadow: "0px 4px 8px rgba(0,0,0,0.2)" }}
      >
        <path d="M4 4l7.07 16.97 2.51-7.39 7.39-2.51L4 4z" />
      </svg>
    </motion.div>
  );
}