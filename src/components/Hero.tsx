"use client";

import { ArrowRight, Shield, Globe, Cpu } from "lucide-react";
import Image from "next/image";
export default function Hero() {
  <div className="flex justify-center mb-10">

    <Image
      src="/civitera-logo.png"
      alt="CIVITERA"
      width={140}
      height={140}
      className="drop-shadow-[0_0_40px_rgba(59,130,246,0.35)]"
    />

  </div>
  const cards = [

    {

      icon: Cpu,
      title: "AI Governance",
      text: "Advanced governance systems for autonomous intelligence and sovereign AI infrastructure.",
    },
    {
      icon: Globe,
      title: "Sovereign Infrastructure",
      text: "Civilization-scale infrastructure designed for the future of AI-powered governance.",
    },
    {
      icon: Shield,
      title: "Patent Ecosystem",
      text: "Master umbrella systems and deep-tech innovation architecture.",
    },
  ];

  return (
    <section
      id="technologies"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-white/[0.03] backdrop-blur-md text-cyan-300 text-sm">
          <Shield size={16} />
          Sovereign AI Infrastructure
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-black leading-tight tracking-[-0.04em] max-w-full">
          Engineering The
          <span className="block text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.6)]">
            Sovereign Intelligence
          </span>
          Layer Of The Future
        </h1>

        <p className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
          CIVITERA GovTech Inc builds next-generation AI governance,
          sovereign digital infrastructure, autonomous intelligence systems,
          and civilization-scale technologies.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-full bg-cyan-400 text-black shadow-[0_0_30px_rgba(34,211,238,0.35)] font-semibold hover:bg-cyan-300 transition-all duration-300 hover:scale-105 flex items-center gap-2">
            Explore Technologies
            <ArrowRight size={18} />
          </button>

          <button className="px-8 py-4 rounded-full border border-white/20 hover:border-cyan-400 transition-all duration-300 hover:scale-105">
            Patent Ecosystem
          </button>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden backdrop-blur-xl hover:border-cyan-400/40 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)] transition-all duration-500"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_65%)]" />

              <card.icon className="text-cyan-400 mb-4 relative z-10" size={36} />

              <h3 className="text-2xl font-semibold mb-3 text-cyan-400 relative z-10">
                {card.title}
              </h3>

              <p className="text-gray-400 leading-relaxed relative z-10">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}