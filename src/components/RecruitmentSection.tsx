import React, {useState} from 'react';
import {Check} from 'lucide-react';

type ApplicationType = 'tryout' | 'staff' | 'partner';

interface FormErrors {
  name?: string;
  email?: string;
  detail?: string;
  message?: string;
}

export const RecruitmentSection: React.FC = () => {
  const [appType, setAppType] = useState<ApplicationType>('tryout');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [detail, setDetail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (name.trim().length < 2) {
      nextErrors.name = 'Veuillez renseigner votre pseudo ou nom complet.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      nextErrors.email = 'Veuillez saisir une adresse e-mail valide.';
    }
    if (detail.trim().length < 2) {
      nextErrors.detail =
        appType === 'partner'
          ? 'Veuillez préciser le nom de votre entreprise.'
          : 'Veuillez indiquer votre jeu, rôle et classement actuel.';
    }
    if (message.trim().length < 15) {
      nextErrors.message = 'Veuillez décrire votre parcours en au moins 15 caractères.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setName('');
    setEmail('');
    setDetail('');
    setMessage('');
  };

  return (
    <section id="recrutement" className="py-20 lg:py-28 bg-[#060A13]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-sm font-medium text-[#60A5FA] mb-2">05. Recrutement & Partenariats</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
                Rejoindre l’organisation NVK
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Notre cellule de détection examine chaque semaine les profils pour nos académies Valorant, Rocket League et Counter-Strike 2, ainsi que les candidatures d’analystes et les demandes de partenariat.
            </p>

            <div className="pt-4 border-t border-white/10 space-y-4 text-sm">
              <div>
                <div className="text-slate-400 text-xs">Critères minimums académie</div>
                <div className="text-white font-medium mt-1">
                  Immortal 3+ (Valorant) · GC3+ (Rocket League) · Faceit 3000+ Elo (CS2)
                </div>
              </div>
              <div>
                <div className="text-slate-400 text-xs">Contact direct direction</div>
                <div className="text-white font-mono text-sm mt-1">contact@nvk-esports.fr</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs">Siège & Bootcamp</div>
                <div className="text-white font-medium mt-1">48 Quai Rambaud, 69002 Lyon</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#0A1120] border border-white/10 rounded-lg p-6 sm:p-8">
            <div
              role="group"
              aria-label="Type de demande"
              className="grid grid-cols-3 gap-1 p-1 bg-[#060A13] border border-white/10 rounded-lg mb-6"
            >
              {(
                [
                  {id: 'tryout', label: 'Tryout Joueur'},
                  {id: 'staff', label: 'Staff / Coach'},
                  {id: 'partner', label: 'Partenariat'},
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setAppType(tab.id);
                    setSubmitted(false);
                    setErrors({});
                  }}
                  className={`py-2 px-3 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
                    appType === tab.id
                      ? 'bg-[#2563EB] text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#1D4ED8]/25 border border-[#3B82F6] flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#60A5FA]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Dossier transmis à l’équipe NVK
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Votre message a bien été enregistré. Un responsable sportif ou partenariat vous répondra sous 72 heures ouvrées.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-md"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-medium text-slate-200 mb-1.5">
                      {appType === 'partner' ? 'Nom et prénom' : 'Pseudo / Nom complet'}
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={appType === 'partner' ? 'Claire Martin' : 'Ex. Kaelen / Lucas Moreau'}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#060A13] border border-white/15 rounded-md text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38BDF8]"
                    />
                    {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="form-email" className="block text-xs font-medium text-slate-200 mb-1.5">
                      Adresse e-mail
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nom@exemple.fr"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#060A13] border border-white/15 rounded-md text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38BDF8]"
                    />
                    {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="form-detail" className="block text-xs font-medium text-slate-200 mb-1.5">
                    {appType === 'tryout'
                      ? 'Jeu, rôle et classement actuel (avec lien Tracker)'
                      : appType === 'staff'
                        ? 'Poste visé et expérience compétitive'
                        : 'Entreprise / Marque et objet du partenariat'}
                  </label>
                  <input
                    id="form-detail"
                    type="text"
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                    placeholder={
                      appType === 'tryout'
                        ? 'Valorant · Duelliste · Radiant 650 RR'
                        : appType === 'staff'
                          ? 'Analyste vidéo CS2 · 2 ans en ligue nationale'
                          : 'Équipementier / Sponsoring maillot 2026'
                    }
                    className="w-full px-3.5 py-2.5 text-sm bg-[#060A13] border border-white/15 rounded-md text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38BDF8]"
                  />
                  {errors.detail && <p className="mt-1 text-xs text-rose-400">{errors.detail}</p>}
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-xs font-medium text-slate-200 mb-1.5">
                    Présentation et disponibilités
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Décrivez votre parcours en équipe, vos disponibilités hebdomadaires et vos objectifs..."
                    className="w-full px-3.5 py-2.5 text-sm bg-[#060A13] border border-white/15 rounded-md text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38BDF8]"
                  />
                  {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                >
                  Envoyer la candidature
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
