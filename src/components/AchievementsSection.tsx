import React, {useState} from 'react';
import {TROPHIES} from '../data/nvkData';
import {NvkEmblem} from './NvkEmblem';

export const AchievementsSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="palmares" className="py-20 lg:py-28 bg-[#060A13] border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-[#60A5FA] mb-2">03. Infrastructures & Palmarès</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Un centre d’entraînement permanent à Lyon pour préparer l’Europe
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-[#0A1120] border border-white/10 rounded-lg overflow-hidden flex flex-col">
            <div className="relative aspect-video w-full bg-[#0D172B] overflow-hidden">
              {!imgError ? (
                <img
                  src="/src/assets/images/nvk_bootcamp_studio_1794833070318.jpg"
                  alt="Salle d'entraînement et bootcamp de NVK Esports à Lyon"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0F1E3D] to-[#060A13]">
                  <NvkEmblem className="w-16 h-16 opacity-40" />
                </div>
              )}
              <div
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A1120] to-transparent"
                aria-hidden="true"
              />
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-6">
              <div>
                <div className="text-xs text-[#60A5FA] font-medium mb-2">
                  Lyon Confluence · 420 m² dédiés à la performance
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Bootcamp NVK & Cellule d’analyse vidéo
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Nos trois formations disposent de salles insonorisées, de postes calibrés à 360 Hz et d’une salle de revue tactique encadrée par deux analystes vidéo et un préparateur mental.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-5 border-t border-white/10">
                <div>
                  <div className="font-mono text-lg font-semibold text-white tabular-nums">18</div>
                  <div className="text-xs text-slate-400">Postes pro 360 Hz</div>
                </div>
                <div>
                  <div className="font-mono text-lg font-semibold text-white tabular-nums">10 Gbps</div>
                  <div className="text-xs text-slate-400">Fibre symétrique dédiée</div>
                </div>
                <div>
                  <div className="font-mono text-lg font-semibold text-white tabular-nums">6 j/7</div>
                  <div className="text-xs text-slate-400">Suivi coaching & physique</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 bg-[#0A1120] border border-white/10 rounded-lg p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white pb-4 border-b border-white/10">
                Podiums récents
              </h3>

              <div className="divide-y divide-white/10 mt-2">
                {TROPHIES.map((trophy) => (
                  <div key={trophy.id} className="py-4">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-semibold text-[#60A5FA]">{trophy.placement}</span>
                      <span className="font-mono text-slate-400 tabular-nums">
                        {trophy.division} · {trophy.year}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-white mt-1">{trophy.event}</div>
                    <div className="text-xs text-slate-400 mt-1">{trophy.prizeContext}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="text-xs text-slate-400 leading-relaxed">
                Depuis 2022, NVK privilégie la stabilité des effectifs sur plusieurs segments plutôt que les changements de roster à court terme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
