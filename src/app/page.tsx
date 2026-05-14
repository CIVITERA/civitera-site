"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { Brain, Globe, Cpu, Network, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const consoleItems = [
    "Sovereign AI Policy Engine",
    "Identity Governance Mesh",
    "Autonomous Risk Detection",
    "Audit Ledger Intelligence",
    "Compliance Orchestration Layer",
  ];
  const patentCards = [
    ["MASTER SYSTEM", "Sovereign AI Stack", "AI governance, orchestration, infrastructure, and autonomous intelligence systems."],
    ["GOVERNANCE", "AI Governance Layer", "Sovereign compliance, policy orchestration, and intelligent regulatory systems."],
    ["INFRASTRUCTURE", "Civilization Infrastructure", "Infrastructure architectures designed for next-generation intelligent ecosystems."],
    ["SECURITY", "Sovereign Protection", "AI-native security, digital sovereignty, and resilient intelligent systems."],

  ];
  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#050816,#070b1a,#050816)] text-white overflow-x-hidden relative selection:bg-cyan-400 selection:text-black">
      <div className="noise absolute inset-0 z-0" />
      <div
        className="pointer-events-none fixed z-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.35) 0%, transparent 70%)",
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0ea5e930,transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] ai-grid" />
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

      <Navbar />

      <Hero />

      <SectionDivider />
      <AnimatedSection>
        <section id="patents" className="relative z-10 py-40 px-6 overflow-hidden scroll-mt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_55%)]" />

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <Badge text="Patent Infrastructure" />

            <h2 className="text-4xl sm:text-4xl sm:text-4xl sm:text-4xl sm:text-4xl sm:text-4xl sm:text-4xl sm:text-4xl sm:text-4xl sm:text-5xl md:text-7xl font-black leading-tight">
              Building The
              <span className="block text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                Sovereign Patent
              </span>
              Ecosystem
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
              CIVITERA develops a layered intellectual property architecture for sovereign AI,
              governance infrastructure, identity control, compliance intelligence, and future
              civilization-scale digital systems.
            </p>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {patentCards.map(([type, title, text]) => (
                <div
                  key={title}
                  className="group relative text-left p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-cyan-400/40 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(34,211,238,0.14)] transition-all duration-500"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_65%)]" />

                  <div className="relative z-10 text-cyan-400 text-xs tracking-[0.25em] uppercase mb-4">
                    {type}
                  </div>

                  <h3 className="relative z-10 text-2xl font-semibold mb-4">
                    {title}
                  </h3>

                  <p className="relative z-10 text-gray-400 leading-relaxed">
                    {text}
                  </p>

                  <div className="relative z-10 mt-8 h-px w-full bg-gradient-to-r from-cyan-400/40 to-transparent" />

                  <div className="relative z-10 mt-5 text-xs text-gray-500 uppercase tracking-[0.2em]">
                    CIVITERA IP Layer
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <section id="governance" className="relative z-10 py-32 px-6 overflow-hidden scroll-mt-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge text="AI Governance Command Center" />

              <h2 className="text-5xl md:text-6xl font-black leading-tight">
                Intelligent Control For
                <span className="block text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                  Autonomous AI Systems
                </span>
              </h2>

              <p className="mt-8 text-gray-400 text-lg leading-relaxed">
                CIVITERA enables sovereign oversight, policy enforcement, identity governance,
                auditability, and operational control across future AI infrastructures.
              </p>
            </div>

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 shadow-[0_0_60px_rgba(34,211,238,0.08)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="text-cyan-400 font-semibold">Governance Console</span>
                <span className="text-green-400 text-sm">ACTIVE</span>
              </div>

              {consoleItems.map((item) => (
                <div
                  key={item}
                  className="mb-4 p-4 rounded-2xl border border-white/10 bg-black/20 flex items-center justify-between"
                >
                  <span className="text-gray-300">{item}</span>
                  <span className="text-cyan-400 text-sm">ONLINE</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <section id="network" className="relative z-10 py-32 px-6 overflow-hidden scroll-mt-32">
          <div className="max-w-7xl mx-auto text-center">
            <Badge text="Global Infrastructure Network" />

            <h2 className="text-4xl sm:text-4xl sm:text-4xl sm:text-4xl sm:text-4xl sm:text-4xl sm:text-4xl sm:text-4xl sm:text-4xl sm:text-5xl md:text-7xl font-black leading-tight">
              Connecting The
              <span className="block text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                Future AI Civilization
              </span>
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
              CIVITERA develops sovereign digital infrastructure layers designed
              to support future intelligent ecosystems, autonomous governance,
              and civilization-scale AI coordination systems.
            </p>

            <div className="relative mt-24 flex items-center justify-center min-h-[420px] md:min-h-[620px]">
              <div className="absolute w-[320px] h-[320px] md:w-[700px] md:h-[700px] rounded-full border border-cyan-400/10" />
              <div className="absolute w-[500px] h-[500px] rounded-full border border-cyan-400/10" />
              <div className="absolute w-[300px] h-[300px] rounded-full border border-cyan-400/10" />

              <div className="w-40 h-40 rounded-full bg-cyan-400/10 border border-cyan-400/20 backdrop-blur-xl flex items-center justify-center text-cyan-300 text-xl font-semibold shadow-[0_0_60px_rgba(34,211,238,0.15)]">
                CIVITERA
              </div>

              <Node className="top-8 left-1/2 -translate-x-1/2" icon={Brain} text="AI Governance" />
              <Node className="bottom-8 left-1/2 -translate-x-1/2" icon={Globe} text="Sovereign Infrastructure" />
              <Node className="left-4 md:left-20 top-1/2 -translate-y-1/2" icon={Cpu} text="Autonomous Systems" />
              <Node className="right-4 md:right-20 top-1/2 -translate-y-1/2" icon={Network} text="Civilization Intelligence" />
            </div>
          </div>
        </section>
      </AnimatedSection>
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["120+", "AI Infrastructure Concepts"],
            ["40+", "Sovereign Governance Systems"],
            ["AI", "Civilization Infrastructure"],
            ["Global", "Future Technology Vision"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="text-center p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              <div className="text-5xl font-black text-cyan-400 mb-4">{number}</div>
              <div className="text-gray-400 uppercase tracking-wider text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-xl py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-black tracking-[0.3em] text-cyan-400 mb-4">CIVITERA</h3>
            <p className="text-gray-400 leading-relaxed">
              Sovereign AI infrastructure, governance systems, civilization-scale intelligence,
              and future digital ecosystems.
            </p>
          </div>

          <FooterColumn title="Technologies" items={["AI Governance", "Sovereign Infrastructure", "Autonomous Systems", "Patent Ecosystems"]} />
          <FooterColumn title="Company" items={["Research", "Innovation Labs", "Strategic Partnerships", "Global Infrastructure"]} />
          <FooterColumn title="Contact" items={["info@civitera.ai", "Global Sovereign Systems", "AI Infrastructure Division"]} />
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          © 2026 CIVITERA GovTech Inc. All rights reserved.
        </div>
      </footer>
      <Footer />
    </main>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-white/[0.03] text-cyan-300 text-sm mb-6">
      <Lock size={14} />
      {text}
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="relative z-10 flex justify-center py-10">
      <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    </div>
  );
}

function Node({
  className,
  icon: Icon,
  text,
}: {
  className: string;
  icon: React.ElementType;
  text: string;
}) {
  return (
    <div className={`absolute ${className} px-4 py-3 rounded-full bg-black/40 border border-white/10 text-sm text-gray-300 flex items-center gap-2 backdrop-blur-xl`}>
      <Icon size={16} className="text-cyan-400" />
      {text}
    </div>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <ul className="space-y-3 text-gray-400 text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}