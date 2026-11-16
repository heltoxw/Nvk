import React, {useState} from 'react';
import {Bell, Check} from 'lucide-react';
import {GameId, MATCHES} from '../data/nvkData';

type StatusFilter = 'all' | 'upcoming' | 'completed';
type DivisionFilter = 'all' | GameId;

export const ScheduleSection: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [divisionFilter, setDivisionFilter] = useState<DivisionFilter>('all');
  const [reminders, setReminders] = useState<Record<string, boolean>>({});

  const toggleReminder = (id: string) => {
    setReminders((prev) => ({...prev, [id]: !prev[id]}));
  };

  const filteredMatches = MATCHES.filter((m) => {
    if (statusFilter !== 'all' && m.status !== statusFilter) return false;
    if (divisionFilter !== 'all' && m.division !== divisionFilter) return false;
    return true;
  });

  return (
    <section id="calendrier" className="py-20 lg:py-28 bg-[#080D19] border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <p className="text-sm font-medium text-[#60A5FA] mb-2">02. Calendrier & Résultats</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Rencontres officielles
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div
              role="group"
              aria-label="Filtrer par statut"
              className="inline-flex items-center gap-1 p-1 bg-[#0C1426] border border-white/10 rounded-lg"
            >
              {(
                [
                  {id: 'all', label: 'Tous'},
                  {id: 'upcoming', label: 'À venir'},
                  {id: 'completed', label: 'Terminés'},
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setStatusFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
                    statusFilter === tab.id
                      ? 'bg-[#2563EB] text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <select
              aria-label="Filtrer par jeu"
              value={divisionFilter}
              onChange={(e) => setDivisionFilter(e.target.value as DivisionFilter)}
              className="h-9 px-3 text-xs font-medium bg-[#0C1426] text-slate-200 border border-white/10 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            >
              <option value="all">Toutes divisions</option>
              <option value="valorant">Valorant</option>
              <option value="rocket-league">Rocket League</option>
              <option value="cs2">Counter-Strike 2</option>
            </select>
          </div>
        </div>

        <div className="mt-6 divide-y divide-white/10 border-b border-white/10">
          {filteredMatches.length === 0 ? (
            <div className="py-12 text-center text-sm text-slate-400">
              Aucune rencontre ne correspond aux filtres sélectionnés.
            </div>
          ) : (
            filteredMatches.map((match) => {
              const hasReminder = Boolean(reminders[match.id]);
              return (
                <div
                  key={match.id}
                  className="py-5 grid grid-cols-1 md:grid-cols-12 items-center gap-4"
                >
                  <div className="md:col-span-3">
                    <div className="font-mono text-xs text-slate-300 tabular-nums">
                      {match.dateLabel} · {match.timeLabel}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      {match.divisionLabel} · {match.format}
                    </div>
                  </div>

                  <div className="md:col-span-4">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-xl font-bold text-white">NVK</span>
                      <span className="text-xs text-slate-500 font-medium">vs</span>
                      <span className="font-display text-xl font-bold text-slate-100">
                        {match.opponent}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{match.competition}</div>
                  </div>

                  <div className="md:col-span-2">
                    {match.status === 'completed' ? (
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-base font-semibold text-white tabular-nums">
                          {match.score}
                        </span>
                        <span
                          className={`text-xs font-medium ${
                            match.outcome === 'Victoire' ? 'text-[#60A5FA]' : 'text-slate-400'
                          }`}
                        >
                          · {match.outcome}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xs font-medium text-slate-300">
                        Match programmé
                      </span>
                    )}
                  </div>

                  <div className="md:col-span-3 flex md:justify-end">
                    {match.status === 'upcoming' ? (
                      <button
                        type="button"
                        onClick={() => toggleReminder(match.id)}
                        className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-md border transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
                          hasReminder
                            ? 'bg-[#1D4ED8]/25 border-[#3B82F6] text-white'
                            : 'bg-[#0C1426] border-white/15 text-slate-200 hover:border-[#3B82F6] hover:text-white'
                        }`}
                      >
                        {hasReminder ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#60A5FA]" />
                            <span>Rappel activé</span>
                          </>
                        ) : (
                          <>
                            <Bell className="w-3.5 h-3.5" />
                            <span>Activer un rappel</span>
                          </>
                        )}
                      </button>
                    ) : (
                      <span className="text-xs text-slate-500">Rencontre clôturée</span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
