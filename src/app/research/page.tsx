import { Brain, Shield, Globe, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function ResearchPage() {
  const areas = [
    {
      icon: Brain,
      title: "Sovereign AI Governance",
      text: "Researching control layers, policy engines, and oversight systems for autonomous AI infrastructures.",
    },
    {
      icon: Shield,
      title: "Digital Sovereignty Systems",
      text: "Designing secure architectures for national-scale digital infrastructure, identity, and compliance.",
    },
    {
      icon: Globe,
      title: "Civilization-Scale Intelligence",
      text: "Exploring AI coordination systems for future societies, institutions, and global infrastructure networks.",
    },
    {
      icon: Cpu,
      title: "Patent-Driven Infrastructure",
      text: "Building deep-tech IP architectures across AI governance, autonomous systems, and sovereign platforms.",
    },
  ];

  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#050816,#070b1a,#050816)] text-white overflow-x-hidden">
      <Navbar />

      <section className="relative px-6 pt-40 pb-24 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 inline-flex px-4 py-2 rounded-full border border-cyan-400/20 bg-white/[0.03] text-cyan-300 text-sm">
            CIVITERA Research Labs
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Researching The Future Of
            <span className="block text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.6)]">
              Sovereign Intelligence
            </span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            CIVITERA Research Labs explores AI governance, sovereign digital infrastructure,
            patent-driven systems, and civilization-scale intelligence architectures.
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {areas.map((area) => (
            <div
              key={area.title}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_65%)]" />

              <area.icon className="relative z-10 text-cyan-400 mb-5" size={38} />

              <h2 className="relative z-10 text-2xl font-semibold mb-4">
                {area.title}
              </h2>

              <p className="relative z-10 text-gray-400 leading-relaxed">
                {area.text}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
