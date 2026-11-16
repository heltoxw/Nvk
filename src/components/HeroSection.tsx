import React, {useState} from 'react';
import {ArrowRight} from 'lucide-react';
import {NvkEmblem} from './NvkEmblem';

const PROOF_ITEMS = [
  {metric: '14 Titres', detail: 'Tournois nationaux & européens'},
  {metric: '3 Divisions', detail: 'Valorant · Rocket League · CS2'},
  {metric: 'Top 4 FR', detail: 'Challengers France 2026'},
  {metric: 'Lyon, FR', detail: 'Centre d’entraînement dédié'},
];

export const HeroSection: React.FC = () => {
  const [heroImgError, setHeroImgError] = useState(false);

  return (
    <section id="accueil" className="relative bg-[#060A13] border-b border-white/10">
      <div className="relative min-h-[560px] lg:min-h-[640px] flex items-end">
        <div className="absolute inset-0 overflow-hidden bg-[#0A1224]">
          {!heroImgError ? (
            <img
              src="/src/assets/images/nvk_hero_arena_1794833068674.jpg"
              alt="Scène de compétition esport NVK éclairée en bleu royal"
              referrerPolicy="no-referrer"
              onError={() => setHeroImgError(true)}
              className="w-full h-full object-cover object-center opacity-75"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#0A1326] via-[#0F1E3D] to-[#060A13] flex items-center justify-center">
              <NvkEmblem className="w-24 h-24 opacity-30" />
            </div>
          )}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#060A13] via-[#060A13]/75 to-[#060A13]/30"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#060A13]/95 via-[#060A13]/55 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#60A5FA] mb-4 tracking-wide">
              Organisation esport francophone · Fondée en 2022
            </p>
            <h1
              className="font-display font-extrabold tracking-tight text-white text-balance leading-[1.02]"
              style={{fontSize: 'clamp(2.75rem, 5vw, 4.5rem)'}}
            >
              La rigueur du collectif. La précision sous pression.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              NVK aligne trois formations professionnelles sur Valorant, Rocket League et Counter-Strike 2. Entraînement encadré à Lyon, préparation analytique et ambition européenne.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#equipes"
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                <span>Découvrir les équipes</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#calendrier"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-200 hover:text-white border-b border-white/25 hover:border-[#38BDF8] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                Voir le calendrier des matchs
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0A101E] border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-7 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {PROOF_ITEMS.map((item) => (
            <div key={item.metric} className="space-y-1">
              <div className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                {item.metric}
              </div>
              <div className="text-xs sm:text-sm text-slate-400">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
