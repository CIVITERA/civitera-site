"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-[#050816]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <a href="/" className="flex items-center gap-3">

            <Image
              src="/civitera-logo.png"
              alt="CIVITERA Logo"
              width={56}
              height={56}
              className="rounded-xl object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.45)]"
            />

            <span className="hidden sm:block text-2xl font-black tracking-[0.25em] bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              CIVITERA
            </span>

          </a>

          <nav className="hidden md:flex gap-8 text-sm">

            <a
              href="/"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              Home
            </a>

            <a
              href="/about"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              About
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

        </div>
      </header>

      {mobileMenu && (
        <div className="fixed inset-0 z-40 bg-[#050816]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 text-2xl font-semibold md:hidden">

          <a href="/" className="text-cyan-400">
            Home
          </a>

          <a href="/about" className="text-cyan-400">
            About
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

        </div>
      )}
    </>
  );
}