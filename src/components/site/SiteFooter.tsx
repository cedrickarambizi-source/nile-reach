import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-nile-dark text-nile-clay/50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-14 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="size-6 bg-nile-gold rounded-sm rotate-45" aria-hidden />
            <span className="font-serif text-xl text-nile-clay">Nile Reach</span>
          </div>
          <p className="text-sm leading-relaxed">
            A next-generation Digital &amp; AI Marketing Agency in Kigali, Rwanda —
            helping brands reach across Africa and the world.
          </p>
          <div className="mt-6 space-y-1 text-sm text-nile-clay">
            <p>hello@nilereach.rw</p>
            <p>+250 796 692 269</p>
            <p className="text-nile-clay/50">Remera,Kigali, Rwanda</p>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Agency</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-nile-gold">About</Link></li>
            <li><Link to="/team" className="hover:text-nile-gold">Team</Link></li>
            <li><Link to="/careers" className="hover:text-nile-gold">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-nile-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Work</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-nile-gold">Services</Link></li>
            <li><Link to="/industries" className="hover:text-nile-gold">Industries</Link></li>
            <li><Link to="/work" className="hover:text-nile-gold">Case Studies</Link></li>
            <li><Link to="/pricing" className="hover:text-nile-gold">Pricing</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} Nile Reach. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-nile-gold">Privacy</a>
            <a href="#" className="hover:text-nile-gold">Terms</a>
            <a href="#" className="hover:text-nile-gold">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
