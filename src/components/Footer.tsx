import React from 'react';
import {NvkEmblem} from './NvkEmblem';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050810] border-t border-white/10 py-12">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <NvkEmblem className="w-7 h-7" />
          <div>
            <div className="font-display text-lg font-bold text-white tracking-tight">NVK ESPORTS</div>
            <div className="text-xs text-slate-400">Lyon, France · Équipes Valorant, Rocket League & CS2</div>
          </div>
        </div>

        <nav aria-label="Navigation pied de page" className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
          <a href="#equipes" className="hover:text-white transition-colors">Équipes</a>
          <a href="#calendrier" className="hover:text-white transition-colors">Calendrier</a>
          <a href="#palmares" className="hover:text-white transition-colors">Palmarès</a>
          <a href="#maillot" className="hover:text-white transition-colors">Maillot</a>
          <a href="#recrutement" className="hover:text-white transition-colors">Recrutement</a>
        </nav>

        <div className="text-xs text-slate-500">
          © 2026 NVK Esports SAS. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};
