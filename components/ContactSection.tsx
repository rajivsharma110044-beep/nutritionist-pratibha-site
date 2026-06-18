"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-24 px-6 relative overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold text-pink-500 tracking-[0.2em] uppercase mb-4"
        >
          Still have questions?
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-slate-900 mb-16 tracking-tight"
        >
          Let's Connect
        </motion.h3>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          
          {[
            { label: "WHATSAPP", val: "+91 8920836409", link: "https://wa.me/918920836409", icon: "💬", color: "hover:border-[#25D366] hover:text-[#25D366]" },
            { label: "INSTAGRAM", val: "@her.balancediet", link: "https://instagram.com/her.balancediet", icon: "📸", color: "hover:border-[#E1306C] hover:text-[#E1306C]" },
            { label: "EMAIL", val: "nutritionistpratibha02@gmail.com", link: "mailto:nutritionistpratibha02@gmail.com", icon: "✉️", color: "hover:border-pink-500 hover:text-pink-500" }
          ].map((item, idx) => (
            <motion.a 
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8 }}
              className={`flex flex-col items-center gap-1 bg-white px-8 py-5 rounded-[2rem] border border-slate-200 shadow-sm transition-all duration-300 text-slate-900 ${item.color} hover:shadow-2xl hover:shadow-slate-200/50 w-full sm:w-auto px-10`}
            >
              <span className="text-sm font-black text-slate-400 tracking-widest">{item.label}</span>
              <span className="flex items-center gap-2 font-bold text-sm tracking-wide">
                <span className="text-xl">{item.icon}</span>
                {item.val}
              </span>
            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
}