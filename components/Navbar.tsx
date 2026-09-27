"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);

  const services = [
    { title: "Pre-Pregnancy Diet Plan", slug: "pre-pregnancy-diet-plan" },
    { title: "Pregnancy Diet Plan", slug: "pregnancy-diet-plan" },
    { title: "Postpartum Diet Plan", slug: "postpartum-diet-plan" },
    { title: "Lactation Diet Plan", slug: "lactation-diet-plan" },
    { title: "IVF Diet Plan", slug: "ivf-diet-plan" },
    { title: "PCOS/PCOD Diet Plan", slug: "pcos-pcod-diet-plan" },
    { title: "Weight Loss Diet Plan", slug: "weight-loss-diet-plan" },
    { title: "Weight Gain Diet Plan", slug: "weight-gain-diet-plan" },
    { title: "Thyroid Management", slug: "thyroid-management" },
    { title: "Diabetes Management", slug: "diabetes-management" },
    { title: "Menopause Management", slug: "menopause-management" },
    { title: "Endometriosis Management", slug: "endometriosis-management" },
    { title: "Skin and Hair Nutrition", slug: "skin-hair-nutrition" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNav = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  if (isStudio) return null;

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

            <div 
              className="relative py-4"
              onMouseEnter={() => setIsDesktopServicesOpen(true)}
              onMouseLeave={() => setIsDesktopServicesOpen(false)}
            >
              <button 
                onClick={() => setIsDesktopServicesOpen(!isDesktopServicesOpen)}
                className="text-sm font-bold tracking-widest text-slate-900 hover:text-pink-500 transition-colors flex items-center gap-1"
              >
                SERVICES 
                <svg className={`w-4 h-4 transition-transform ${isDesktopServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-xl shadow-xl border border-pink-100 transition-all duration-300 overflow-hidden ${isDesktopServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <div className="max-h-80 overflow-y-auto py-2">
                  {services.map((service, index) => (
                    <Link 
                      key={index} 
                      href={`/services/${service.slug}`} 
                      onClick={() => setIsDesktopServicesOpen(false)}
                      className="block px-6 py-3 text-sm text-slate-600 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/#about" className="text-sm font-bold tracking-widest text-slate-900 hover:text-pink-500 transition-colors">ABOUT</Link>
            <Link href="/blog" className="text-sm font-bold tracking-widest text-slate-900 hover:text-pink-500 transition-colors">BLOG</Link>
            <Link href="/#reviews" className="text-sm font-bold tracking-widest text-slate-900 hover:text-pink-500 transition-colors">REVIEWS</Link>
            <Link href="/#contact" className="text-sm font-bold tracking-widest text-slate-900 hover:text-pink-500 transition-colors">CONTACT</Link>
          </div>

          <div className="hidden lg:block flex-shrink-0">
            <Link href="/book" className="bg-pink-500 text-white font-bold text-sm px-8 py-3.5 rounded-full uppercase tracking-widest hover:bg-pink-600 transition-all shadow-lg shadow-pink-500/30 whitespace-nowrap hover:-translate-y-0.5 inline-block">
              Book Consultation
            </Link>
          </div>

          <div className="lg:hidden z-[101] flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="relative w-10 h-10 flex items-center justify-center p-2 text-slate-900 focus:outline-none" aria-label="Toggle Menu">
              <svg className={`absolute top-0 left-0 w-full h-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              <svg className={`absolute top-0 left-0 w-full h-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
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
                <div className="mt-4 flex flex-col gap-4 bg-pink-50 w-full rounded-2xl py-4 max-h-60 overflow-y-auto">
                  {services.map((service, index) => (
                    <Link key={index} href={`/services/${service.slug}`} onClick={handleMobileNav} className="text-slate-600 text-sm font-medium">{service.title}</Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/#about" onClick={handleMobileNav} className="text-xl font-bold tracking-widest text-slate-900">ABOUT</Link>
            <Link href="/blog" onClick={handleMobileNav} className="text-xl font-bold tracking-widest text-slate-900">BLOG</Link>
            <Link href="/#reviews" onClick={handleMobileNav} className="text-xl font-bold tracking-widest text-slate-900">REVIEWS</Link>
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