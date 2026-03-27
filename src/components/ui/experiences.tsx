"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const experiences = [
  {
    icon: <Building2 size={22} className="text-cyan-400" />,
    title: "Astra - Full Stack Developer",
    text: "Web tasarımlarını koda aktarma, yayınlama ve bakım süreçlerinde aktif rol aldım; ekip ile birlikte modern projeler geliştirdim.",
    date: "2025 – Devam Ediyor",
  },
  {
    icon: <Building2 size={22} className="text-orange-400" />,
    title: "Liselerde Bilim Uygulamaları - Takım Lideri",
    text: "2024 yılında liselerde STEM ve bilim uygulamaları projelerinde proje yürütücüsü olarak görev aldım; öğrenci ekiplerini yönlendirdim, proje planlaması ve sunum süreçlerinde aktif rol oynadım.",
    date: "Aralık 2024 - Mayıs 2025",
  },
  {
    icon: <Building2 size={22} className="text-purple-400" />,
    title: "Web Geliştirme Dersi - Eğitmen",
    text: "Üç kişilik bir öğrenci grubuna online olarak temel programlama ve frontend geliştirme eğitimi verdim. JavaScript, HTML ve CSS ile web tasarımının temellerini ve backend-frontend iletişiminin temel mantığını öğrettim.",
    date: "Haziran 2024 – Eylül 2024",
  },
  {
    icon: <Building2 size={22} className="text-green-400" />,
    title: "SCRATCH CUP - UI Desinger & Finalist",
    text: "Scratch ile geliştirilen oyunun içersinde kullanılan resimleri ve arayüzleri tasarladım ve proje sunumunda görev aldım.",
    date: "2021",
  },
  {
    icon: <Building2 size={22} className="text-green-400" />,
    title: "TÜBİTAK 2204-B - Proje Yürütücüsü & Finalist",
    text: "STEM ve yazılım odaklı projelerde proje yürütücüsü olarak görev aldım; ekip yönetimi, proje planlama ve sunum süreçlerinde aktif rol oynadım. Proje finale kaldı.",
    date: "2021",
  },
  {
    icon: <Building2 size={22} className="text-yellow-400" />,
    title: "Teknofest 2020 - Proje Yürütücüsü & Finalist",
    text: "Yapay zekâ ve yazılım projelerinde proje yürütücüsü olarak ekip yönetimi yaptım. Yarışmada finale kaldık ve projeyi başarıyla sunduk.",
    date: "2020",
  },
];

export default function Experience() {
  return (
    <section id="Experience" className="w-full py-16 flex flex-col items-center relative">
      
      <h1 className="font-semibold text-3xl sm:text-4xl tracking-wide text-white mb-10">
        Deneyimlerim
      </h1>

      <div className="flex max-w-3xl w-full gap-6 px-4 relative">

        {/* Timeline Line */}
        <div className="relative">
          <div className="w-[3px] bg-cyan-500/40 h-full rounded-full" />
        </div>

        <div className="flex flex-col gap-10 flex-1 -ml-3">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start"
            >
              {/* Icon */}
              <div className="p-3 bg-cyan-500/15 backdrop-blur-md rounded-full 
                             text-white shrink-0 -ml-[37px]">
                {item.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1">
                <span className="text-lg font-semibold text-white/90">
                  {item.title}
                </span>

                <span className="text-sm text-gray-300 leading-relaxed max-w-lg">
                  {item.text}
                </span>

                <span className="text-xs text-cyan-300/70 mt-1">
                  {item.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
