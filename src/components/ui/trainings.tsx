"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const trainings = [
  {
    icon: <BookOpen size={22} className="text-cyan-400" />,
    title: "British Town Dil Okulu",
    text: "İngilizce (C1–C2) ve İtalyanca (A1–A2) seviyelerinde eğitim aldım. Akademik okuma, dinleme, konuşma ve yazma becerilerimi ileri seviyeye taşıdım.",
    date: "2025 – Devam Ediyorum",
  },
  {
    icon: <GraduationCap size={22} className="text-purple-400" />,
    title: "Şevkiye Özel Fen Lisesi",
    text: "Erasmus projeleri, Teknofest yarışmaları, TÜBİTAK 2204-A ve Bilim Olimpiyatları (Fizik) projelerinde aktif görev aldım. STEM ve yazılım alanında kapsamlı deneyimler kazandım.",
    date: "2021 – 2025",
  },
];


export default function Trainings() {
  return (
    <section id="Trainings" className="w-full py-16 flex flex-col items-center relative">
      
      <h1 className="font-semibold text-3xl sm:text-4xl text-white tracking-wide mb-10">
        Eğitim
      </h1>

      <div className="flex max-w-3xl w-full gap-6 px-4 relative">
        
        <div className="relative">
          <div className="w-[3px] bg-cyan-500/40 h-full rounded-full" />
        </div>

        <div className="flex flex-col gap-10 flex-1 -ml-3">
          {trainings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start"
            >
              <div className="p-3 bg-cyan-500/15 backdrop-blur-md rounded-full text-white shrink-0 -ml-[37px]">
                {item.icon}
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-lg font-semibold text-white/90">{item.title}</span>

                <span className="text-sm text-gray-300 leading-relaxed max-w-lg">{item.text}</span>

                <span className="text-xs text-cyan-300/70 mt-1">{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
