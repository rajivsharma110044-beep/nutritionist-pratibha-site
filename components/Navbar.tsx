"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const services = [
    "Pre-Pregnancy Diet Plan", "Pregnancy Diet Plan", "Postpartum Diet Plan",
    "Lactation Diet Plan", "IVF Diet Plan", "PCOS/PCOD Diet Plan",
    "Weight Loss Diet Plan", "Weight Gain Diet Plan", "Thyroid Management",
    "Diabetes Management", "Menopause Management", "Endometriosis Management",
    "Skin and Hair Nutrition"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNav = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <div className="flex-shrink-0 z-[101]">
            <Link href="/" onClick={handleMobileNav}>
              <div className="text-2xl font-black uppercase tracking-tighter text-slate-900">
                Nutritionist<span className="text-pink-500">Pratibha.</span>
                <p className="text-[10px] text-pink-500 tracking-widest font-bold -mt-1">
                  Member of PCOS Society of India
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/#home" className="text-sm font-bold tracking-widest text-slate-900 hover:text-pink-500 transition-colors">HOME</Link>

            <div className="relative group py-4">
              <button className="text-sm font-bold tracking-widest text-slate-900 group-hover:text-pink-500 transition-colors flex items-center gap-1">
                SERVICES 
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-xl shadow-xl border border-pink-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                <div className="max-h-80 overflow-y-auto py-2">
                  {services.map((service, index) => (
                    <Link key={index} href="/#services" className="block px-6 py-3 text-sm text-slate-600 hover:bg-pink-50 hover:text-pink-600 transition-colors">
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/#about" className="text-sm font-bold tracking-widest text-slate-900 hover:text-pink-500 transition-colors">ABOUT</Link>
            <Link href="/#reviews" className="text-sm font-bold tracking-widest text-slate-900 hover:text-pink-500 transition-colors">REVIEWS</Link>
            {/* Added Contact Link */}
            <Link href="/#contact" className="text-sm font-bold tracking-widest text-slate-900 hover:text-pink-500 transition-colors">CONTACT</Link>
          </div>

          <div className="hidden lg:block flex-shrink-0">
            <Link href="/book" className="bg-pink-500 text-white font-bold text-sm px-8 py-3.5 rounded-full uppercase tracking-widest hover:bg-pink-600 transition-all shadow-lg shadow-pink-500/30 whitespace-nowrap hover:-translate-y-0.5 inline-block">
              Book Consultation
            </Link>
          </div>

          <div className="lg:hidden z-[101] flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-900 focus:outline-none" aria-label="Toggle Menu">
              {isMobileMenuOpen ? (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[90] transition-transform duration-300 ease-in-out lg:hidden pt-24 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full px-6 pb-8 overflow-y-auto">
          <div className="flex flex-col gap-6 text-center">
            <Link href="/#home" onClick={handleMobileNav} className="text-xl font-bold tracking-widest text-slate-900">HOME</Link>
            <div className="flex flex-col items-center">
              <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className="text-xl font-bold tracking-widest text-slate-900 flex items-center gap-2">
                SERVICES
                <svg className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isMobileServicesOpen && (
                <div className="mt-4 flex flex-col gap-4 bg-pink-50 w-full rounded-2xl py-4">
                  {services.map((service, index) => (
                    <Link key={index} href="/#services" onClick={handleMobileNav} className="text-slate-600 text-sm font-medium">{service}</Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/#about" onClick={handleMobileNav} className="text-xl font-bold tracking-widest text-slate-900">ABOUT</Link>
            <Link href="/#reviews" onClick={handleMobileNav} className="text-xl font-bold tracking-widest text-slate-900">REVIEWS</Link>
            {/* Added Contact Link */}
            <Link href="/#contact" onClick={handleMobileNav} className="text-xl font-bold tracking-widest text-slate-900">CONTACT</Link>
          </div>

          <div className="mt-auto pt-8">
            <Link href="/book" onClick={handleMobileNav} className="w-full bg-pink-500 text-white font-bold text-lg px-8 py-4 rounded-full uppercase tracking-widest shadow-xl shadow-pink-500/30 text-center inline-block">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}