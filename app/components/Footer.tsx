export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-2">
            GGMS <span className="text-cyan-500">Analytics</span>
          </h3>
          <p className="text-sm text-slate-400">
            A division of GGMS Global IT Solutions — 30+ years of enterprise IT experience across the Gulf.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Get in Touch</h4>
          <p className="text-sm text-slate-400">info@ggmsglobal.com</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-slate-800 text-xs text-slate-500">
        © {new Date().getFullYear()} GGMS Analytics. All rights reserved.
      </div>
    </footer>
  );
}