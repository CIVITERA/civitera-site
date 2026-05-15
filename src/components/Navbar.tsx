"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-[#050816]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-3">

            <Image
              src="/civitera-logo.png"
              alt="CIVITERA"
              width={56}
              height={56}
              className="rounded-xl object-contain"
            />

            <span className="hidden sm:block text-2xl font-black tracking-[0.25em] bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              CIVITERA
            </span>

          </Link>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">

            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/research">Research</Link>
            <Link href="/patents">Patents</Link>
            <Link href="/governance">Governance</Link>
            <Link href="/contact">Contact</Link>

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

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/research">Research</Link>
          <Link href="/patents">Patents</Link>
          <Link href="/governance">Governance</Link>
          <Link href="/contact">Contact</Link>

        </div>
      )}
    </>
  );
}