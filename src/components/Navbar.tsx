import React, {useState} from 'react';
import {Menu, X} from 'lucide-react';

const NAV_LINKS = [
  {label: 'Équipes', href: '#equipes'},
  {label: 'Calendrier', href: '#calendrier'},
  {label: 'Palmarès', href: '#palmares'},
  {label: 'Maillot', href: '#maillot'},
  {label: 'Recrutement', href: '#recrutement'},
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#060A13]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
        <a
          href="#accueil"
          className="font-display text-2xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded"
        >
          NVK ESPORTS
        </a>

        <nav
          aria-label="Navigation principale"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors duration-150 py-1 border-b border-transparent hover:border-[#38BDF8] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#recrutement"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
          >
            Rejoindre NVK
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-slate-200 hover:text-white border border-white/15 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0A1120] border-b border-white/10 px-6 py-4">
          <nav aria-label="Navigation mobile" className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-white py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#recrutement"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-md"
            >
              Rejoindre NVK
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
