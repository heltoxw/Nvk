import React, {useState} from 'react';
import {ChevronRight, X} from 'lucide-react';
import {GameId, Player, ROSTERS} from '../data/nvkData';
import {NvkEmblem} from './NvkEmblem';

export const RostersSection: React.FC = () => {
  const [activeGame, setActiveGame] = useState<GameId>('valorant');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [failedPortraits, setFailedPortraits] = useState<Record<string, boolean>>({});

  const division = ROSTERS.find((r) => r.id === activeGame) ?? ROSTERS[0];
  const captain = division.players.find((p) => p.isCaptain) ?? division.players[0];

  const handleImageError = (id: string) => {
    setFailedPortraits((prev) => ({...prev, [id]: true}));
  };

  return (
    <section id="equipes" className="py-20 lg:py-28 bg-[#060A13] border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-10 border-b border-white/10">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-[#60A5FA] mb-2">01. Divisions actives</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Rosters officiels saison 2026
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Choisir une division esport"
            className="inline-flex items-center gap-1 p-1 bg-[#0B1324] border border-white/10 rounded-lg self-start lg:self-auto"
          >
            {ROSTERS.map((r) => {
              const isActive = r.id === activeGame;
              return (
                <button
                  key={r.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveGame(r.id);
                    setSelectedPlayer(null);
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
                    isActive
                      ? 'bg-[#2563EB] text-white'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {r.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-[#0A1120] border border-white/10 rounded-lg overflow-hidden flex flex-col">
            <div className="relative aspect-square w-full bg-[#0D172B] overflow-hidden">
              {!failedPortraits[captain.id] ? (
                <img
                  src={division.captainPortrait}
                  alt={`Portrait de ${captain.handle}, capitaine NVK ${division.name}`}
                  referrerPolicy="no-referrer"
                  onError={() => handleImageError(captain.id)}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0F1E3D] to-[#060A13] p-6">
                  <NvkEmblem className="w-16 h-16 mb-3 opacity-60" />
                  <span className="font-display text-2xl font-bold text-white">{captain.handle}</span>
                </div>
              )}
              <div
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A1120] via-[#0A1120]/70 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-xs text-[#60A5FA] font-medium">
                    #{captain.number} · {captain.role}
                  </p>
                  <h3 className="font-display text-3xl font-bold text-white leading-tight">
                    {captain.handle}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPlayer(captain)}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#2563EB] rounded transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                >
                  Fiche complète
                </button>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-3">
                  <span>{division.league}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-200 font-medium tabular-nums">{division.seasonRecord}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{division.description}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Entraîneur principal</span>
                <span className="text-slate-200 font-medium">{division.coach}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between bg-[#0A1120] border border-white/10 rounded-lg p-6 sm:p-8">
            <div>
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/10">
                <h3 className="font-display text-2xl font-bold text-white">
                  Alignement titulaire — {division.name}
                </h3>
                <span className="text-xs text-slate-400 tabular-nums">
                  {division.players.length} joueurs actifs
                </span>
              </div>

              <div className="divide-y divide-white/10">
                {division.players.map((player) => (
                  <button
                    key={player.id}
                    type="button"
                    onClick={() => setSelectedPlayer(player)}
                    className="w-full py-4 flex items-center justify-between gap-4 text-left hover:bg-white/[0.03] px-2 -mx-2 rounded transition-colors duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <span className="font-mono text-sm font-semibold text-[#60A5FA] w-8 shrink-0 tabular-nums">
                        #{player.number}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2.5">
                          <span className="font-display text-xl font-bold text-white truncate">
                            {player.handle}
                          </span>
                          <span className="text-xs text-slate-400 truncate">
                            {player.fullName}
                          </span>
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
                          <span>{player.role}</span>
                          <span aria-hidden="true">·</span>
                          <span>{player.country}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 shrink-0">
                      <div className="hidden sm:flex items-center gap-5 text-right">
                        {player.stats.slice(0, 2).map((st) => (
                          <div key={st.label}>
                            <div className="text-[11px] text-slate-400">{st.label}</div>
                            <div className="font-mono text-sm font-semibold text-white tabular-nums">
                              {st.value}
                            </div>
                          </div>
                        ))}
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#60A5FA] transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <span>Sélectionnez un joueur pour consulter sa configuration matérielle et ses statistiques.</span>
              <a
                href="#recrutement"
                className="text-[#60A5FA] hover:text-white font-medium transition-colors whitespace-nowrap"
              >
                Candidater en équipe académique →
              </a>
            </div>
          </div>
        </div>
      </div>

      {selectedPlayer && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="player-modal-title"
          onClick={() => setSelectedPlayer(null)}
        >
          <div
            className="w-full max-w-lg bg-[#0A1120] border border-white/15 rounded-lg p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/10">
              <div>
                <p className="text-xs font-medium text-[#60A5FA]">
                  #{selectedPlayer.number} · {division.name} · {selectedPlayer.role}
                </p>
                <h3 id="player-modal-title" className="font-display text-3xl font-bold text-white mt-1">
                  {selectedPlayer.handle}
                </h3>
                <p className="text-sm text-slate-400">
                  {selectedPlayer.fullName} · {selectedPlayer.country} · {selectedPlayer.age} ans
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPlayer(null)}
                aria-label="Fermer la fiche joueur"
                className="w-10 h-10 inline-flex items-center justify-center rounded-md border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="mt-5 text-sm text-slate-300 leading-relaxed">{selectedPlayer.bio}</p>

            <div className="mt-6 grid grid-cols-3 gap-4 py-4 border-y border-white/10">
              {selectedPlayer.stats.map((st) => (
                <div key={st.label}>
                  <div className="text-xs text-slate-400">{st.label}</div>
                  <div className="font-mono text-xl font-semibold text-white mt-1 tabular-nums">
                    {st.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-semibold text-slate-300 mb-3">
                Équipement de compétition
              </h4>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-[#060A13] border border-white/10 rounded p-3">
                  <dt className="text-slate-400">Périphérique principal</dt>
                  <dd className="text-white font-medium mt-0.5">{selectedPlayer.gear.mouseOrController}</dd>
                </div>
                <div className="bg-[#060A13] border border-white/10 rounded p-3">
                  <dt className="text-slate-400">Clavier / Profil</dt>
                  <dd className="text-white font-medium mt-0.5">{selectedPlayer.gear.keyboardOrPreset}</dd>
                </div>
                <div className="bg-[#060A13] border border-white/10 rounded p-3">
                  <dt className="text-slate-400">Audio</dt>
                  <dd className="text-white font-medium mt-0.5">{selectedPlayer.gear.headset}</dd>
                </div>
                <div className="bg-[#060A13] border border-white/10 rounded p-3">
                  <dt className="text-slate-400">Sensibilité</dt>
                  <dd className="font-mono text-white font-medium mt-0.5 tabular-nums">
                    {selectedPlayer.gear.sensitivity}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
