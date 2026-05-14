export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/20 backdrop-blur-2xl px-6 py-20 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        <div>
          <h2 className="text-3xl font-black tracking-[0.3em] text-cyan-400 mb-6">
            CIVITERA
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Sovereign AI infrastructure, governance systems,
            patent ecosystems, and civilization-scale intelligence architectures.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-5">
            Platform
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="/" className="hover:text-cyan-400 transition">
                Home
              </a>
            </li>

            <li>
              <a href="/research" className="hover:text-cyan-400 transition">
                Research
              </a>
            </li>

            <li>
              <a href="/patents" className="hover:text-cyan-400 transition">
                Patents
              </a>
            </li>

            <li>
              <a href="/governance" className="hover:text-cyan-400 transition">
                Governance
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-5">
            Infrastructure
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>AI Governance</li>
            <li>Digital Sovereignty</li>
            <li>Patent Ecosystems</li>
            <li>Autonomous Systems</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-5">
            Contact
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>info@civitera.ai</li>
            <li>research@civitera.ai</li>
            <li>partners@civitera.ai</li>
          </ul>
          <div className="mt-6">
            <h3 className="text-white font-semibold mb-4">
              Social
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="https://github.com/CIVITERA" target="_blank" className="hover:text-cyan-400 transition">
                  GitHub
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  LinkedIn
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  X / Twitter
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2026 CIVITERA GovTech Inc. All rights reserved.
      </div>

    </footer>
  );
}
