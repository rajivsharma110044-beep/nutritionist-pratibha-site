"use client";

import { motion } from "framer-motion";

export default function BookingForm() {
  const services = [
    "Pre-Pregnancy Diet Plan", "Pregnancy Diet Plan", "Postpartum Diet Plan",
    "Lactation Diet Plan", "IVF Diet Plan", "PCOS/PCOD Diet Plan",
    "Weight Loss Diet Plan", "Weight Gain Diet Plan", "Thyroid Management",
    "Diabetes Management", "Menopause Management", "Endometriosis Management",
    "Skin and Hair Nutrition"
  ];

  return (
    <section id="form" className="py-32 px-8 bg-pink-50/20">
      <motion.form 
        action="https://formspree.io/f/YOUR_FORM_ID_HERE" 
        method="POST"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mx-auto max-w-2xl flex flex-col gap-6"
      >
        <div className="text-center mb-8">
            <h2 className="text-4xl font-black uppercase text-slate-900">Book Your Consultation</h2>
            <p className="text-slate-500 mt-2">Fill in your details below to start your transformation.</p>
        </div>
        
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="name" placeholder="Full Name" required className="p-4 rounded-xl border border-pink-200" />
            <input type="number" name="age" placeholder="Age" required className="p-4 rounded-xl border border-pink-200" />
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="tel" name="phone" placeholder="Mobile Number (e.g., +91...)" required className="p-4 rounded-xl border border-pink-200" />
            <input type="email" name="email" placeholder="Email Address" required className="p-4 rounded-xl border border-pink-200" />
        </div>

        {/* Physical Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input type="text" name="city" placeholder="City" required className="p-4 rounded-xl border border-pink-200" />
            <input type="text" name="weight" placeholder="Weight (kg)" required className="p-4 rounded-xl border border-pink-200" />
            <input type="text" name="height" placeholder="Height (cm)" required className="p-4 rounded-xl border border-pink-200" />
        </div>
        
        {/* Service Selection */}
        <select name="service" required className="p-4 rounded-xl border border-pink-200 bg-white text-slate-500">
          <option value="">Select Required Service</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>

        <button type="submit" className="bg-pink-500 text-white font-bold py-4 rounded-full uppercase tracking-widest hover:bg-pink-600 transition-all mt-4 shadow-lg shadow-pink-500/20">
          Book Appointment
        </button>
      </motion.form>
    </section>
  );
}