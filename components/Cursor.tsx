"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Only show after first mouse move

  useEffect(() => {
    if (isStudio) return;

    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFine) return;

    const updateMousePosition = (e: MouseEvent) => {
      setIsVisible(true); // Show cursor once mouse moves
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
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

    const handleTouch = () => {
      setIsVisible(false); // Hide immediately on touch
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("touchstart", handleTouch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [isStudio]);

  if (isStudio || !isVisible) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (hover: hover) and (pointer: fine) {
          * { cursor: none !important; }
        }
      `}} />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 1.1 : 1,
        }}
        transition={{
          x: { duration: 0 },
          y: { duration: 0 },
          scale: { type: "spring", stiffness: 400, damping: 25 },
        }}
      >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill={isHovering ? "#ec4899" : "#0f172a"}
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: "rotate(-10deg) translate(-2px, -2px)", filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.2))" }}
      >
        <path d="M4 4l7.07 16.97 2.51-7.39 7.39-2.51L4 4z" />
      </svg>
      </motion.div>
    </>
  );
}