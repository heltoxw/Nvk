import React, {useState} from 'react';
import {Check} from 'lucide-react';
import {NvkEmblem} from './NvkEmblem';

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'] as const;
type JerseySize = (typeof SIZES)[number];

export const JerseySection: React.FC = () => {
  const [size, setSize] = useState<JerseySize>('L');
  const [customPseudo, setCustomPseudo] = useState('');
  const [reserved, setReserved] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    setReserved(true);
  };

  return (
    <section id="maillot" className="py-20 lg:py-28 bg-[#080D19] border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-6 bg-[#0B1324] border border-white/10 rounded-lg overflow-hidden flex items-center justify-center">
            {!imgError ? (
              <img
                src="/src/assets/images/nvk_jersey_blue_1794833068879.jpg"
                alt="Maillot officiel NVK Esports bleu nuit et bleu cobalt édition 2026"
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full aspect-[4/3] flex flex-col items-center justify-center bg-gradient-to-br from-[#0F1E3D] to-[#060A13] p-8">
                <NvkEmblem className="w-20 h-20 mb-4 opacity-60" />
                <span className="font-display text-2xl font-bold text-white">
                  Maillot Domicile NVK 2026
                </span>
              </div>
            )}
          </div>

          <form
            onSubmit={handleReserve}
            className="lg:col-span-6 bg-[#0A1120] border border-white/10 rounded-lg p-6 sm:p-8 flex flex-col justify-between gap-6"
          >
            <div>
              <p className="text-sm font-medium text-[#60A5FA] mb-2">04. Équipement officiel</p>
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                  Maillot Pro Bleu Cobalt 2026
                </h2>
                <span className="font-mono text-2xl font-semibold text-white tabular-nums shrink-0">
                  69 €
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Tissu technique micro-perforé 165 g/m², coupe athlétique portée en scène par nos trois divisions. Sublimation intégrale bleu nuit et cobalt sans décoloration au lavage.
              </p>

              <div className="mt-7">
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-medium text-slate-200">Taille sélectionnée</span>
                  <span className="font-mono text-[#60A5FA]">{size}</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {SIZES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => {
                        setSize(s);
                        setReserved(false);
                      }}
                      className={`py-2.5 text-xs font-mono font-semibold rounded-md border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
                        size === s
                          ? 'bg-[#2563EB] border-[#3B82F6] text-white'
                          : 'bg-[#060A13] border-white/15 text-slate-300 hover:border-[#3B82F6] hover:text-white'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="jersey-pseudo" className="block text-xs font-medium text-slate-200 mb-2">
                  Flocage dorsal personnalisé (optionnel, inclus)
                </label>
                <input
                  id="jersey-pseudo"
                  type="text"
                  maxLength={14}
                  value={customPseudo}
                  onChange={(e) => {
                    setCustomPseudo(e.target.value);
                    setReserved(false);
                  }}
                  placeholder="Ex. KAELEN"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#060A13] border border-white/15 rounded-md text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38BDF8]"
                />
              </div>
            </div>

            <div className="pt-5 border-t border-white/10 space-y-3">
              <button
                type="submit"
                className="w-full py-3 px-5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                Réserver le maillot ({size}
                {customPseudo.trim() ? ` · ${customPseudo.trim().toUpperCase()}` : ''})
              </button>

              {reserved && (
                <div
                  role="status"
                  className="flex items-center gap-2.5 px-4 py-3 text-xs text-slate-100 bg-[#1D4ED8]/20 border border-[#3B82F6]/50 rounded-md"
                >
                  <Check className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <span>
                    Réservation enregistrée : Maillot NVK 2026 taille {size}
                    {customPseudo.trim() ? ` floqué « ${customPseudo.trim().toUpperCase()} »` : ''}. Expédition sous 5 jours ouvrés.
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
