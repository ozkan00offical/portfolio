"use client";

import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0F] py-10 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-white/90">

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-cyan-400">Ramazan Özkan</h2>
          <p className="text-white/60 leading-relaxed">
            Yazılım geliştirici • Web teknolojileri • Güvenlik & Backend
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold border-b border-cyan-500/30 max-w-max pb-1">
            İletişim
          </h3>

          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-cyan-400" />
            <span className="text-white/70">ozkannprofessional@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-cyan-400" />
            <span className="text-white/70">+90 546 727 36 69</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <span className="text-white/70">Uşak / Merkez</span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold border-b border-cyan-500/30 max-w-max pb-1">
            Sosyal
          </h3>

          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              className="flex items-center gap-3 text-white/80 hover:text-cyan-400 transition"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="flex items-center gap-3 text-white/80 hover:text-cyan-400 transition"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-white/50">
        © {new Date().getFullYear()} Ramazan Özkan — Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
