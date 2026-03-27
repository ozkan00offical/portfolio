"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github, Globe } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      image: "/vercel.svg",
      title: "Dijital Özel Eğitim Uygulaması",
      text: "Özel öğrenme güçlüğü yaşayan bireylerin eğitim süreçlerini destekleyen yapay zeka destekli bir web uygulaması.",
      technologies: ["Next.js", "Tailwind CSS", "MySQL", "Prisma", "TypeScript", "Auth.js"],
      github: "/",
      demo: "/",
      hasGithub: true,
      hasDemo: true,
    },
    {
      image: "/vercel.svg",
      title: "E-Ticaret Sitesi",
      text: "KVKK uyumlu, sanal pos entegrasyonu ile güvenli ödeme altyapısına sahip, yüksek performanslı bir e-ticaret platformu.",
      technologies: ["Next.js", "Tailwind CSS", "Three.js", "MySQL", "Prisma", "TypeScript", "Auth.js", "Jotai", "Zod"],
      github: "/",
      demo: "",
      hasGithub: true,
      hasDemo: false,
    },
    {
      image: "/vercel.svg",
      title: "Münazara Argüman Analiz Sistemi",
      text: "KVKK uyumlu, güvenli ödeme altyapısına sahip, yüksek performanslı bir e-ticaret platformu.",
      technologies: ["Nuxt.js", "MongoDB", "Tailwind CSS", "Mongose", "Framer Motion", "Auth.js", "Axios"],
      github: "/",
      demo: "",
      hasGithub: true,
      hasDemo: false,
    },
  ];

  return (
    <section id="Projects" className="w-full py-20 flex flex-col items-center relative">
      
      <h1 className="font-semibold text-3xl sm:text-4xl tracking-wide text-white mb-12">
        Projelerim
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl px-4">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white/5 backdrop-blur-md border border-white/10 flex flex-col rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
          >
            <div className="relative h-48 w-full bg-white/5">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6 space-y-4 flex flex-col flex-1">
              <div>
                <h3 className="text-xl font-semibold text-white/90">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mt-2">
                  {item.text}
                </p>

                {/* Teknolojiler */}
                {item.technologies && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded-md text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Butonlar */}
              <div className="mt-4 flex gap-4">
                {item.hasGithub && (
                  <Link
                    href={item.github}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg border border-white/20 hover:bg-white/20 transition"
                  >
                    <Github size={18} /> GitHub
                  </Link>
                )}

                {item.hasDemo && (
                  <Link
                    href={item.demo}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg border border-white/20 hover:bg-white/20 transition"
                  >
                    <Globe size={18} /> Canlı Demo
                  </Link>
                )}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
