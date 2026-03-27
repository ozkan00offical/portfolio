"use client";

import { Award, Medal } from "lucide-react";
import { motion } from "framer-motion";

export default function Awards() {
  const awards = [
    {
      icon: <Award className="w-10 h-10 text-yellow-400" />,
      title: "TÜBİTAK İzmir Bölge Finalleri",
      subtitle: "3.lük Ödülü",
    },
    {
      icon: <Medal className="w-10 h-10 text-blue-400" />,
      title: "Scratch Cup",
      subtitle: "En İyi Kod Yapısı Ödülü",
    },
  ];

  return (
    <section id="Awards" className="w-full py-20 flex flex-col items-center relative">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-wide text-white mb-12">
        Ödüllerim
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full px-4">
        {awards.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:scale-[1.02] transition-all duration-300">
            <div>{item.icon}</div>

            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-white/90">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
