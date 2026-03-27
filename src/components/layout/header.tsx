// app/components/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  Briefcase,
  BookOpen,
  Code,
  Award,
  Mail,
  Menu as MenuIcon,
  X as CloseIcon
} from "lucide-react";

const menuItems = [
  { title: "Hakkımda", href: "/#Hero", Icon: User, color: "text-purple-300" },
  { title: "Deneyimlerim", href: "/#Experience", Icon: Briefcase, color: "text-blue-300" },
  { title: "Eğitimim", href: "/#Trainings", Icon: BookOpen, color: "text-emerald-300" },
  { title: "Projelerim", href: "/#Projects", Icon: Code, color: "text-yellow-300" },
  { title: "Ödüllerim", href: "/#Awards", Icon: Award, color: "text-pink-300" },
  { title: "İletişim", href: "/#Contact", Icon: Mail, color: "text-orange-300" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        <Link href="/">
          <h1 className="text-2xl font-light tracking-wide text-white cursor-pointer">
            Ramazan Özkan
          </h1>
        </Link>

        <button
          className="sm:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        <nav className="hidden sm:flex">
          <ul className="flex items-center gap-6">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href} className="flex items-center gap-1 text-gray-200 hover:text-white transition">
                  <item.Icon size={18} className={item.color} />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {mobileOpen && (
        <nav className="sm:hidden bg-black/90 backdrop-blur-lg border-t border-gray-800">
          <ul className="flex flex-col items-center gap-4 py-4">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 text-gray-200 hover:text-white text-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  <item.Icon size={20} className={item.color} />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
