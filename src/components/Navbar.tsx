"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("technologies");
  const [mobileMenu, setMobileMenu] = useState(false);

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

  const mobileItem = (id: string, label: string) => (
    <button
      type="button"
      onClick={() => {
        scrollToSection(id);
        setMobileMenu(false);
      }}
      className="text-cyan-400"
    >
      {label}
    </button>
  );

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-[#050816]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-[0.3em] text-cyan-400">
            CIVITERA
          </h1>

          <nav className="hidden md:flex gap-8 text-sm">
            <a
              href="/"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              Home
            </a>

            <a
              href="/research"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              Research
            </a>

            <a
              href="/patents"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              Patents
            </a>

            <a
              href="/governance"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              Governance
            </a>
            <a
              href="/contact"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              Contact
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-cyan-400"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>

          <button
            type="button"
            className="hidden md:block px-5 py-2 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            Contact
          </button>
          <a href="/about" className="text-cyan-400">
            About
          </a>
        </div>
      </header>

      {mobileMenu && (
        <div className="fixed inset-0 z-40 bg-[#050816]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 text-2xl font-semibold md:hidden">
          <a href="/" className="text-cyan-400">
            Home
          </a>

          <a href="/research" className="text-cyan-400">
            Research
          </a>

          <a href="/patents" className="text-cyan-400">
            Patents
          </a>

          <a href="/governance" className="text-cyan-400">
            Governance
          </a>
          <a href="/contact" className="text-cyan-400">
            Contact
          </a>
          <a
            href="/about"
            className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
          >
            About
          </a>
        </div>
      )}
    </>
  );
}
