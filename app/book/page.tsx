"use client";

import Link from "next/link";
import { useState } from "react";

export default function BookConsultation() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Pre-Pregnancy Diet Plan", "Pregnancy Diet Plan", "Postpartum Diet Plan",
    "Lactation Diet Plan", "IVF Diet Plan", "PCOS/PCOD Diet Plan",
    "Weight Loss Diet Plan", "Weight Gain Diet Plan", "Thyroid Management",
    "Diabetes Management", "Menopause Management", "Endometriosis Management",
    "Skin and Hair Nutrition"
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-24 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-pink-500 mb-8 transition-colors"
        >
          ← BACK TO HOME
        </Link>

        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Book Your <span className="text-pink-500">Consultation.</span>
          </h1>
          <p className="text-slate-600 text-lg">
            Fill out the details below to begin your health journey. Nutritionist Pratibha's team will get back to you shortly.
          </p>
        </div>

        {/* PASTE YOUR FORMSPREE ID IN THE ACTION URL BELOW */}
        <form 
          action="https://formspree.io/f/mnjykjpg" 
          method="POST"
          onSubmit={() => setIsSubmitting(true)}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Full Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                className="w-full px-5 py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Age</label>
              <input 
                type="number" 
                name="age" 
                required 
                min="1"
                className="w-full px-5 py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                placeholder="28"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Service Type</label>
              <select 
                name="service_type" 
                required 
                defaultValue=""
                className="w-full px-5 py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>Select a program...</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Mobile Number</label>
              <div className="flex gap-3">
                <input 
                  type="text" 
                  name="country_code" 
                  required 
                  className="w-24 px-4 py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-center transition-all"
                  placeholder="+91"
                  defaultValue="+91"
                />
                <input 
                  type="tel" 
                  name="mobile_number" 
                  required 
                  className="flex-1 px-5 py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                  placeholder="98765 43210"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Email Address</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="w-full px-5 py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">City / Location</label>
              <input 
                type="text" 
                name="city" 
                required 
                className="w-full px-5 py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                placeholder="Mumbai, Maharashtra"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Weight</label>
              <input 
                type="text" 
                name="weight" 
                required 
                className="w-full px-5 py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                placeholder="e.g., 65 kg"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Height</label>
              <input 
                type="text" 
                name="height" 
                required 
                className="w-full px-5 py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                placeholder="e.g., 5 ft 4 in"
              />
            </div>
          </div>

          <div className="mt-10">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-5 rounded-xl text-white font-bold tracking-widest uppercase shadow-lg shadow-pink-500/30 transition-all ${
                isSubmitting ? "bg-pink-400 cursor-not-allowed" : "bg-pink-500 hover:bg-pink-600 hover:-translate-y-1"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Details"}
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">
              Your information is strictly confidential.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}