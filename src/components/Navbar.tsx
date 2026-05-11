"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("technologies");

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const y = section.offsetTop - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["technologies", "patents", "governance", "network"];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 180 && rect.bottom >= 180) {
          setActive(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = (id: string, label: string) => (
    <button
      type="button"
      onClick={() => scrollToSection(id)}
      className={`transition-all duration-300 ${active === id
          ? "text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
          : "text-gray-300 hover:text-cyan-400"
        }`}
    >
      {label}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-[#050816]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-black tracking-[0.3em] text-cyan-400">
          CIVITERA
        </h1>

        <nav className="hidden md:flex gap-8 text-sm">
          {navItem("technologies", "Technologies")}
          {navItem("patents", "Patent Ecosystem")}
          {navItem("governance", "Governance")}
          {navItem("network", "Network")}
        </nav>

        <button
          type="button"
          className="px-5 py-2 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all duration-300"
        >
          Contact
        </button>
      </div>
    </header>
  );
}