export type GameId = 'valorant' | 'rocket-league' | 'cs2';

export interface PlayerStat {
  label: string;
  value: string;
}

export interface Player {
  id: string;
  number: string;
  handle: string;
  fullName: string;
  role: string;
  country: string;
  age: number;
  isCaptain?: boolean;
  portrait?: string;
  bio: string;
  stats: PlayerStat[];
  gear: {
    mouseOrController: string;
    keyboardOrPreset: string;
    headset: string;
    sensitivity: string;
  };
}

export interface RosterDivision {
  id: GameId;
  name: string;
  shortName: string;
  league: string;
  coach: string;
  seasonRecord: string;
  description: string;
  captainPortrait: string;
  players: Player[];
}

export interface MatchItem {
  id: string;
  division: GameId;
  divisionLabel: string;
  competition: string;
  opponent: string;
  opponentTag: string;
  dateLabel: string;
  timeLabel: string;
  format: 'BO1' | 'BO3' | 'BO5';
  status: 'upcoming' | 'completed';
  score?: string;
  outcome?: 'Victoire' | 'Défaite';
  streamChannel?: string;
}

export interface TrophyItem {
  id: string;
  year: string;
  placement: string;
  event: string;
  division: string;
  prizeContext: string;
}

export const ROSTERS: RosterDivision[] = [
  {
    id: 'valorant',
    name: 'Valorant',
    shortName: 'VAL',
    league: 'Challengers France · Division 1',
    coach: 'Antoine "Mercier" Delacroix',
    seasonRecord: '14V – 4D (77.8%)',
    description:
      'Collectif structuré autour d’un jeu de contrôle de carte strict et d’exécutions rapides sur site. Qualifié pour les playoffs de la ligue française.',
    captainPortrait: '/src/assets/images/nvk_captain_val_1794833070241.jpg',
    players: [
      {
        id: 'kaelen',
        number: '07',
        handle: 'Kaelen',
        fullName: 'Lucas Moreau',
        role: 'Capitaine / Initiateur',
        country: 'France',
        age: 21,
        isCaptain: true,
        portrait: '/src/assets/images/nvk_captain_val_1794833070241.jpg',
        bio: 'Meneur de jeu de NVK depuis 2023. Spécialiste de Sova et Breach, il coordonne les rotations défensives et les prises d’information en début de manche.',
        stats: [
          {label: 'ACS moyen', value: '224'},
          {label: 'Ratio K/D', value: '1.18'},
          {label: 'Taux d’assist.', value: '38%'},
        ],
        gear: {
          mouseOrController: 'Logitech G Pro X Superlight 2',
          keyboardOrPreset: 'Wooting 60HE+',
          headset: 'Sennheiser GSP 600',
          sensitivity: '800 DPI · 0.31',
        },
      },
      {
        id: 'sora',
        number: '11',
        handle: 'Sora',
        fullName: 'Théo Bernard',
        role: 'Duelliste',
        country: 'France',
        age: 19,
        bio: 'Premier point d’entrée sur site, reconnu pour son explosivité sur Jett et Raze et sa régularité dans les duels d’ouverture.',
        stats: [
          {label: 'ACS moyen', value: '258'},
          {label: 'Ratio K/D', value: '1.29'},
          {label: 'Premiers sangs', value: '21%'},
        ],
        gear: {
          mouseOrController: 'Razer Viper V3 Pro',
          keyboardOrPreset: 'Wooting 60HE+',
          headset: 'HyperX Cloud III',
          sensitivity: '800 DPI · 0.36',
        },
      },
      {
        id: 'vexx',
        number: '04',
        handle: 'Vexx',
        fullName: 'Noah Lefèvre',
        role: 'Contrôleur',
        country: 'Belgique',
        age: 22,
        bio: 'Pilier de mi-manche sur Omen et Viper, il assure le timing des fumigènes et le verrouillage des reprises de site.',
        stats: [
          {label: 'ACS moyen', value: '198'},
          {label: 'Ratio K/D', value: '1.09'},
          {label: 'Clutchs gagnés', value: '19%'},
        ],
        gear: {
          mouseOrController: 'Zowie EC2-CW',
          keyboardOrPreset: 'SteelSeries Apex Pro TKL',
          headset: 'Beyerdynamic MMX 300',
          sensitivity: '400 DPI · 0.58',
        },
      },
      {
        id: 'nox',
        number: '23',
        handle: 'Nox',
        fullName: 'Hugo Garnier',
        role: 'Sentinelle',
        country: 'France',
        age: 20,
        bio: 'Ancre défensive et lurker patient sur Cypher et Killjoy, capable de neutraliser des flancs entiers en solo.',
        stats: [
          {label: 'ACS moyen', value: '206'},
          {label: 'Ratio K/D', value: '1.15'},
          {label: 'Taux survie', value: '41%'},
        ],
        gear: {
          mouseOrController: 'Logitech G Pro X Superlight 2',
          keyboardOrPreset: 'Custom 65% Linear',
          headset: 'Sennheiser HD 560S',
          sensitivity: '800 DPI · 0.27',
        },
      },
      {
        id: 'toma',
        number: '19',
        handle: 'Toma',
        fullName: 'Tom Chevalier',
        role: 'Flex / Flash',
        country: 'Suisse',
        age: 21,
        bio: 'Profil polyvalent capable de doubler le rôle d’initiateur sur KAY/O ou de sécuriser les décalages de Sora.',
        stats: [
          {label: 'ACS moyen', value: '212'},
          {label: 'Ratio K/D', value: '1.12'},
          {label: 'HS %', value: '29%'},
        ],
        gear: {
          mouseOrController: 'Pulsar X2V2',
          keyboardOrPreset: 'Wooting 60HE+',
          headset: 'Logitech G Pro X 2',
          sensitivity: '800 DPI · 0.33',
        },
      },
    ],
  },
  {
    id: 'rocket-league',
    name: 'Rocket League',
    shortName: 'RL',
    league: 'RLCS Europe · Open Qualifiers',
    coach: 'Benoît "Roch" Girard',
    seasonRecord: 'Top 8 Régional EU',
    description:
      'Trio axé sur la vitesse de transition, les passes en triangle à haute altitude et une discipline défensive stricte sur la ligne de but.',
    captainPortrait: '/src/assets/images/nvk_captain_rl_1794833071564.jpg',
    players: [
      {
        id: 'valk',
        number: '10',
        handle: 'Valk',
        fullName: 'Lina Takahashi',
        role: 'Capitaine / Striker',
        country: 'France',
        age: 19,
        isCaptain: true,
        portrait: '/src/assets/images/nvk_captain_rl_1794833071564.jpg',
        bio: 'Capitaine de la section Rocket League. Réputée pour sa précision en double-tap et sa lecture des rebonds dans les coins adverses.',
        stats: [
          {label: 'Buts / match', value: '1.14'},
          {label: 'Précision tirs', value: '36%'},
          {label: 'Score moyen', value: '442'},
        ],
        gear: {
          mouseOrController: 'DualSense Edge (Filarisé)',
          keyboardOrPreset: 'Fennec · Hitbox Octane',
          headset: 'SteelSeries Arctis Nova Pro',
          sensitivity: '1.50 Aérien · Deadzone 0.05',
        },
      },
      {
        id: 'drak',
        number: '08',
        handle: 'Drak',
        fullName: 'Yanis Benali',
        role: 'Milieu / Passeur',
        country: 'France',
        age: 18,
        bio: 'Créateur d’espaces et récupérateur de boost, il dicte le tempo des contre-attaques et multiplie les démolitions stratégiques.',
        stats: [
          {label: 'Passes / match', value: '0.92'},
          {label: 'Démos / match', value: '1.85'},
          {label: 'Score moyen', value: '398'},
        ],
        gear: {
          mouseOrController: 'DualShock 4',
          keyboardOrPreset: 'Octane · Bleu Cobalt',
          headset: 'HyperX Cloud Alpha',
          sensitivity: '1.40 Aérien · Deadzone 0.06',
        },
      },
      {
        id: 'zeph',
        number: '02',
        handle: 'Zeph',
        fullName: 'Matéo Laurent',
        role: 'Troisième homme / Défense',
        country: 'France',
        age: 20,
        bio: 'Dernier rempart du trio, capable d’effectuer des dégagements propres sous pression et de lancer la relance en une touche.',
        stats: [
          {label: 'Arrêts / match', value: '2.31'},
          {label: 'Taux d’arrêt', value: '79%'},
          {label: 'Score moyen', value: '410'},
        ],
        gear: {
          mouseOrController: 'Xbox Elite Series 2',
          keyboardOrPreset: 'Fennec · Standard',
          headset: 'Sennheiser GSP 500',
          sensitivity: '1.35 Aérien · Deadzone 0.07',
        },
      },
    ],
  },
  {
    id: 'cs2',
    name: 'Counter-Strike 2',
    shortName: 'CS2',
    league: 'ESL Challenger League Europe',
    coach: 'Damien "Valkor" Renaud',
    seasonRecord: '11V – 5D (68.7%)',
    description:
      'Roster franco-européen dédié au Circuit Valve Regional Standings, combinant rigueur utilitaire et exécutions explosives sur les cartes actives.',
    captainPortrait: '/src/assets/images/nvk_captain_cs2_1794833070624.jpg',
    players: [
      {
        id: 'kors',
        number: '01',
        handle: 'Kors',
        fullName: 'Mathis Mercier',
        role: 'Capitaine / AWPer',
        country: 'France',
        age: 23,
        isCaptain: true,
        portrait: '/src/assets/images/nvk_captain_cs2_1794833070624.jpg',
        bio: 'Tireur d’élite et leader vocal du cinq majeur CS2. Reconnu pour son impact sur Mirage et Ancient en phase d’ouverture.',
        stats: [
          {label: 'Rating 2.1', value: '1.21'},
          {label: 'ADR', value: '82.4'},
          {label: 'KAST', value: '74.5%'},
        ],
        gear: {
          mouseOrController: 'Zowie U2 Wireless',
          keyboardOrPreset: 'Wooting 80HE',
          headset: 'Logitech G Pro X 2',
          sensitivity: '400 DPI · 1.95',
        },
      },
      {
        id: 'riven',
        number: '14',
        handle: 'Riven',
        fullName: 'Maxime Fabre',
        role: 'Entry Fragger',
        country: 'France',
        age: 21,
        bio: 'Spécialiste des duels de prise de zone, il ouvre les accès B et A avec un taux de conversion supérieur à la moyenne de la ligue.',
        stats: [
          {label: 'Rating 2.1', value: '1.14'},
          {label: 'ADR', value: '86.1'},
          {label: 'HS %', value: '56%'},
        ],
        gear: {
          mouseOrController: 'Logitech G Pro X Superlight 2',
          keyboardOrPreset: 'Wooting 60HE+',
          headset: 'HyperX Cloud III',
          sensitivity: '800 DPI · 0.90',
        },
      },
      {
        id: 'jules',
        number: '05',
        handle: 'Jules',
        fullName: 'Jules Carpentier',
        role: 'Rifler / Support',
        country: 'France',
        age: 24,
        bio: 'Maître des grenades flash et des fumigènes de reprise, il sécurise l’économie de l’équipe et les échanges immédiats.',
        stats: [
          {label: 'Rating 2.1', value: '1.06'},
          {label: 'ADR', value: '74.2'},
          {label: 'Flash Assists', value: '0.28/rd'},
        ],
        gear: {
          mouseOrController: 'Vaxee XE Wireless',
          keyboardOrPreset: 'SteelSeries Apex Pro',
          headset: 'Sennheiser HD 560S',
          sensitivity: '400 DPI · 1.75',
        },
      },
      {
        id: 'onyx',
        number: '27',
        handle: 'Onyx',
        fullName: 'Sacha Delmas',
        role: 'Lurker',
        country: 'Belgique',
        age: 22,
        bio: 'Patient dans les fins de manches, il punit les rotations précipitées et excelle en situation de 1v2.',
        stats: [
          {label: 'Rating 2.1', value: '1.16'},
          {label: 'ADR', value: '80.9'},
          {label: 'Clutch 1vX', value: '31%'},
        ],
        gear: {
          mouseOrController: 'Razer DeathAdder V3 Pro',
          keyboardOrPreset: 'Wooting 60HE+',
          headset: 'AceZone A-Spire',
          sensitivity: '800 DPI · 0.85',
        },
      },
      {
        id: 'dante',
        number: '33',
        handle: 'Dante',
        fullName: 'Romain Perrot',
        role: 'Anchor',
        country: 'France',
        age: 20,
        bio: 'Défenseur de petits sites sur Nuke et Inferno, solide sur les spray-transfers à moyenne distance.',
        stats: [
          {label: 'Rating 2.1', value: '1.08'},
          {label: 'ADR', value: '76.5'},
          {label: 'KAST', value: '72.1%'},
        ],
        gear: {
          mouseOrController: 'Logitech G Pro X Superlight 2',
          keyboardOrPreset: 'Logitech G Pro X TKL',
          headset: 'HyperX Cloud II',
          sensitivity: '400 DPI · 2.10',
        },
      },
    ],
  },
];

export const MATCHES: MatchItem[] = [
  {
    id: 'm1',
    division: 'valorant',
    divisionLabel: 'Valorant',
    competition: 'Challengers France · Playoffs',
    opponent: 'Aegis Lyon',
    opponentTag: 'AEG',
    dateLabel: '18 Nov. 2026',
    timeLabel: '20:00 CET',
    format: 'BO3',
    status: 'upcoming',
    streamChannel: 'twitch.tv/nvk_esports',
  },
  {
    id: 'm2',
    division: 'rocket-league',
    divisionLabel: 'Rocket League',
    competition: 'RLCS EU · Quart de finale',
    opponent: 'Team Nordik',
    opponentTag: 'NRD',
    dateLabel: '21 Nov. 2026',
    timeLabel: '18:30 CET',
    format: 'BO5',
    status: 'upcoming',
    streamChannel: 'twitch.tv/nvk_esports',
  },
  {
    id: 'm3',
    division: 'cs2',
    divisionLabel: 'Counter-Strike 2',
    competition: 'ESL Challenger League',
    opponent: 'Valkyrie Berlin',
    opponentTag: 'VLK',
    dateLabel: '24 Nov. 2026',
    timeLabel: '19:00 CET',
    format: 'BO3',
    status: 'upcoming',
    streamChannel: 'twitch.tv/nvk_esports',
  },
  {
    id: 'm4',
    division: 'valorant',
    divisionLabel: 'Valorant',
    competition: 'Challengers France · Journée 14',
    opponent: 'Solary Academy',
    opponentTag: 'SLY',
    dateLabel: '12 Nov. 2026',
    timeLabel: '20:00 CET',
    format: 'BO3',
    status: 'completed',
    score: '2 – 0',
    outcome: 'Victoire',
  },
  {
    id: 'm5',
    division: 'cs2',
    divisionLabel: 'Counter-Strike 2',
    competition: 'ESL Challenger League',
    opponent: 'Krakow Five',
    opponentTag: 'KR5',
    dateLabel: '09 Nov. 2026',
    timeLabel: '21:00 CET',
    format: 'BO3',
    status: 'completed',
    score: '2 – 1',
    outcome: 'Victoire',
  },
  {
    id: 'm6',
    division: 'rocket-league',
    divisionLabel: 'Rocket League',
    competition: 'RLCS EU · Phase Suisse',
    opponent: 'Karmine Blue',
    opponentTag: 'KCB',
    dateLabel: '03 Nov. 2026',
    timeLabel: '17:00 CET',
    format: 'BO5',
    status: 'completed',
    score: '2 – 3',
    outcome: 'Défaite',
  },
];

export const TROPHIES: TrophyItem[] = [
  {
    id: 't1',
    year: '2026',
    placement: '1re place',
    event: 'Coupe de France Inter-Ligues',
    division: 'Valorant',
    prizeContext: 'Finale remportée 3–1 à Paris',
  },
  {
    id: 't2',
    year: '2025',
    placement: '2e place',
    event: 'Open Européen Automne',
    division: 'Rocket League',
    prizeContext: 'Qualification directe Major EU',
  },
  {
    id: 't3',
    year: '2025',
    placement: '1re place',
    event: 'Lyon Esports LAN',
    division: 'Counter-Strike 2',
    prizeContext: 'Invaincus sur l’ensemble du tournoi',
  },
  {
    id: 't4',
    year: '2024',
    placement: 'Top 4',
    event: 'Challengers France Split 2',
    division: 'Valorant',
    prizeContext: 'Meilleure défense de la saison régulière',
  },
];
