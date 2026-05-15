import {
  Globe,
  Shield,
  Cpu,
  Network,
} from "lucide-react";

import Navbar from "@/components/Navbar";

export default function AboutPage() {
  const pillars = [
    {
      icon: Globe,
      title: "Sovereign Intelligence",
      text: "Building independent AI infrastructures designed for nations, institutions, and future digital civilizations.",
    },
    {
      icon: Shield,
      title: "AI Governance",
      text: "Engineering governance systems capable of controlling, auditing, and orchestrating autonomous intelligence.",
    },
    {
      icon: Cpu,
      title: "Civilization Infrastructure",
      text: "Developing next-generation digital infrastructure layers for future intelligent societies.",
    },
    {
      icon: Network,
      title: "Patent Ecosystems",
      text: "Creating interconnected deep-tech patent architectures across AI, governance, sovereignty, and infrastructure.",
    },
  ];

  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#050816,#070b1a,#050816)] text-white overflow-x-hidden">

      <Navbar />

      <section className="px-6 pt-40 pb-24 text-center">
        <div className="max-w-5xl mx-auto">

          <div className="mb-6 inline-flex px-4 py-2 rounded-full border border-cyan-400/20 bg-white/[0.03] text-cyan-300 text-sm">
            About CIVITERA
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Engineering The Future Of
            <span className="block text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.6)]">
              Sovereign Civilization Infrastructure
            </span>
          </h1>

          <p className="mt-10 text-lg md:text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
            CIVITERA is a sovereign AI infrastructure and governance company focused on
            developing next-generation digital systems, autonomous governance architectures,
            civilization-scale intelligence frameworks, and strategic patent ecosystems
            for the future of intelligent societies.
          </p>

        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {pillars.map((item) => (
            <div
              key={item.title}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-500"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_65%)]" />

              <item.icon
                className="relative z-10 text-cyan-400 mb-5"
                size={38}
              />

              <h2 className="relative z-10 text-2xl font-semibold mb-4">
                {item.title}
              </h2>

              <p className="relative z-10 text-gray-400 leading-relaxed">
                {item.text}
              </p>

            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
