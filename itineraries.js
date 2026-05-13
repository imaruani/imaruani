/* Itinéraires et suggestions — Grèce 2025
 * Organisés par destination, avec programme jour par jour
 * et suggestions thématiques pour Paros/Antiparos.
 */
window.ITINERARIES = [
  /* ─────────────────────────── ATHÈNES ─────────────────────────── */
  {
    id: "athenes",
    title: "Athènes",
    emoji: "🏛",
    flag: "🇬🇷",
    color: "#3a86ff",
    days: [
      {
        date: "02 août",
        label: "Arrivée",
        items: [
          { time: "14h15", icon: "✈️", text: "Vol → Athènes (arrivée 18h25)" },
          { time: "Soir",  icon: "🏨", text: "Check-in Regal Hotel Mitropoleos", placeId: "regal-hotel" },
          { time: "Dîner", icon: "🍽", text: "Cinapos — on a kiffé !", placeId: "cinapos", star: true },
        ],
        tip: "Recommandés si Cinapos complet : Voulkanizater (Koukaki), Manari Taverna, Isandsia (Monastiraki).",
      },
    ],
    suggestions: [
      { icon: "🥘", text: "Cinapos (Thiseio) — la valeur sûre" },
      { icon: "🍷", text: "Voulkanizater (Koukaki) — ambiance locale" },
      { icon: "🫒", text: "Manari Taverna — traditionnel" },
    ],
  },

  /* ─────────────────────────── SIFNOS ─────────────────────────── */
  {
    id: "sifnos",
    title: "Sifnos",
    emoji: "⛵",
    flag: "🇬🇷",
    color: "#2ec4b6",
    days: [
      {
        date: "Jour type",
        label: "Programme type Sifnos",
        slots: [
          {
            cat: "breakfast",
            icon: "☕",
            label: "Petit déj",
            options: [
              { text: "Café terrasse à Apollonia ou Artemonas (villages, vue mer)" },
              { text: "Nostos Café (Vathi) — au bord de l'eau", placeId: "nostos-sifnos" },
            ],
          },
          {
            cat: "beach",
            icon: "🏖",
            label: "Plage matin",
            options: [
              { text: "Vathi — eau turquoise, sunbeds Nostos (réserver en ligne)", placeId: "vahti-beach", star: true },
              { text: "Yalos Beach — poufs, détente totale", placeId: "yalos-beach" },
              { text: "Vroulidia — sauvage, piste de terre, magnifique", placeId: "vroulidia", star: true },
              { text: "Cheronissos Beach (nord) — isolée, très belle", placeId: "cheronissos-beach" },
            ],
          },
          {
            cat: "lunch",
            icon: "🍽",
            label: "Déjeuner",
            options: [
              { text: "Tsika / Manolis (Vathi) — poisson frais et mezés", placeId: "tsika" },
              { text: "Pelicanos (Faros) — les pieds dans l'eau", placeId: "pelicanos" },
              { text: "Captain George (Kastro Seralia) — vue sur la mer", placeId: "captain-george" },
              { text: "Paralia Beach Bar — à côté de l'hôtel, super sympa", placeId: "paralia-beach-bar" },
            ],
          },
          {
            cat: "activity",
            icon: "⚓",
            label: "Activité",
            options: [
              { text: "Kastro — village médiéval, ruelles blanches, église des Sept Martyrs" },
              { text: "Artemonas & Apollonia — villages cycladiques typiques, balades" },
              { text: "Randonnée côtière Kastro → Chrissopigi (chapelle sur le rocher)" },
            ],
          },
          {
            cat: "sunset",
            icon: "🌅",
            label: "Apéro sunset",
            options: [
              { text: "Loggia Wine Bar (Kastro) — vins grecs, vue mer, incontournable ❤️", placeId: "loggia", star: true },
              { text: "Bostani (Poulati) — sunset sur la falaise, vue sublime", placeId: "bostani" },
            ],
          },
          {
            cat: "dinner",
            icon: "🍽",
            label: "Dîner",
            options: [
              { text: "Kafeneio Drakakis — sans résa, dîner en ville, excellent", placeId: "kafeneio-drakaki" },
              { text: "Perivoli Restaurant (Artemonas) — cadre magnifique", placeId: "perivoli" },
            ],
          },
        ],
      },
      {
        date: "03 août",
        label: "Arrivée à Sifnos",
        items: [
          { time: "08h15", icon: "⛴",  text: "Ferry Athènes → Sifnos (arrivée 10h45)" },
          { time: "Matin", icon: "🏖",  text: "Plage Vathi — sunbeds Nostos (réserver en ligne)", placeId: "vahti-beach" },
          { time: "Déj",   icon: "🍽",  text: "Tsikali / Manolis (Vathi)", placeId: "tsika" },
          { time: "18h",   icon: "🍸",  text: "Loggia Wine Bar (Kastro) — sunset + église des Sept Martyrs ❤️", placeId: "loggia", star: true },
          { time: "Dîner", icon: "🍽",  text: "Kafeneio Drakakis — no résa, dîner en ville top", placeId: "kafeneio-drakaki" },
        ],
        tip: "Descendre vers l'église des Sept Martyrs au coucher du soleil depuis Loggia — sublime !",
      },
      {
        date: "04 août",
        label: "Plages & sunset",
        items: [
          { time: "Matin", icon: "🏖",  text: "Paralia Beach Bar (collé à l'hôtel) — hyper sympa", placeId: "paralia-beach-bar" },
          { time: "Midi",  icon: "🏖",  text: "Yalos Beach — poufs, kiffe total", placeId: "yalos-beach" },
          { time: "14h",   icon: "🍽",  text: "Pelicanos (Faros)", placeId: "pelicanos" },
          { time: "20h30", icon: "🌅",  text: "Bostani (Poulati) — sublime vue sunset, bouffe moyenne", placeId: "bostani" },
        ],
        tip: "Bostani : venez pour le coucher de soleil sur la falaise plutôt que pour la nourriture.",
      },
      {
        date: "05 août",
        label: "Plage sauvage",
        items: [
          { time: "Matin", icon: "🏖",  text: "Paralia Vroulidia — transats à réserver en avance (journée entière)", placeId: "vroulidia" },
          { time: "Alt.",  icon: "🏖",  text: "Cheronissos Beach (nord) — pas fait mais recommandé", placeId: "cheronissos-beach" },
          { time: "Alt.",  icon: "🍽",  text: "Captain George (Kastro Seralia) — il paraît top", placeId: "captain-george" },
          { time: "22h",   icon: "🍽",  text: "Perivoli Restaurant (Artemonas)", placeId: "perivoli" },
        ],
        tip: "Vroulidia : piste en terre battue, valeur la peine. Réserver les transats bien à l'avance.",
      },
    ],
    suggestions: [
      { icon: "🏖", text: "Vroulidia — la plus sauvage et belle de l'île" },
      { icon: "🌅", text: "Loggia + église Sept Martyrs (Kastro) — incontournable" },
      { icon: "🍽", text: "Tsikali + Manolis pour déjeuner à Vathi" },
    ],
  },

  /* ─────────────────────────── MILOS ─────────────────────────── */
  {
    id: "milos",
    title: "Milos",
    emoji: "🌋",
    flag: "🇬🇷",
    color: "#e07c24",
    days: [
      {
        date: "Jour type",
        label: "Programme type Milos",
        slots: [
          {
            cat: "breakfast",
            icon: "☕",
            label: "Petit déj",
            options: [
              { text: "Café à Plaka (village perché) — vue panoramique sur la baie" },
              { text: "Café à Adamas (port) — terrasse animée" },
            ],
          },
          {
            cat: "beach",
            icon: "🏖",
            label: "Plage",
            options: [
              { text: "Sarakiniko — paysage lunaire unique au monde, arriver tôt !", placeId: "sarakiniko", star: true },
              { text: "Firiplaka — trop trop beau, eaux cristallines", placeId: "firiplaka", star: true },
              { text: "Tsigrado — petite, descente par échelle, magique", placeId: "tsigrado" },
              { text: "Kleftiko / Sikia / Gerontas — accessibles uniquement en bateau ⛵", placeId: "calypso-boat" },
            ],
          },
          {
            cat: "lunch",
            icon: "🍽",
            label: "Déjeuner",
            options: [
              { text: "Sirocco (Paleochori) — plage volcanique chauffée, poisson grillé", placeId: "sirocco", star: true },
              { text: "Medusa (Mandrakia) — donner son nom et attendre sur la plage", placeId: "medusa" },
            ],
          },
          {
            cat: "activity",
            icon: "⚓",
            label: "Activité",
            options: [
              { text: "Journée bateau Calypso — Kleftiko, grottes, plages secrètes", placeId: "calypso-boat", star: true },
              { text: "Day trip Kimolos depuis Pollonia — authentique, quasi sans touristes" },
              { text: "Catacombes de Milos (Trypiti) — site chrétien unique en Grèce" },
              { text: "Mandrakia — village de pêcheurs coloré, photo parfaite", placeId: "mandrakia" },
            ],
          },
          {
            cat: "sunset",
            icon: "🌅",
            label: "Sunset",
            options: [
              { text: "Klima Village — syrmata colorés au bord de l'eau, magique", placeId: "klima", star: true },
              { text: "Plaka (village perché) — panorama à 360° sur l'île" },
            ],
          },
          {
            cat: "dinner",
            icon: "🍽",
            label: "Dîner",
            options: [
              { text: "Astakas (Klima) — réserver absolument, au bord de l'eau", placeId: "astakas", star: true },
              { text: "Okto (Trypiti) — cadre village, cuisine soignée", placeId: "okto" },
              { text: "Barriello (Trypiti) — ambiance chaleureuse", placeId: "barriello" },
              { text: "Domes White Coast (Adamas) — hôtel de luxe, réserver", placeId: "domes-white-coves" },
            ],
          },
        ],
      },
      {
        date: "06 août",
        label: "Arrivée à Milos",
        items: [
          { time: "10h55", icon: "⛴",  text: "Ferry Sifnos → Milos (arrivée 11h40)" },
          { time: "Après-midi", icon: "🏖", text: "Tsigrado Beach — petite plage, descente par échelle !", placeId: "tsigrado" },
          { time: "Après-midi", icon: "🏖", text: "Firiplaka Beach — trop trop beau", placeId: "firiplaka" },
          { time: "15h",   icon: "🍽",  text: "Sirocco Volcanic Restaurant (Paleochori) — plage à gauche du resto = seul au monde", placeId: "sirocco" },
          { time: "Dîner", icon: "🍽",  text: "Okto ou Barriello (Trypiti)", placeId: "okto" },
        ],
        tip: "Après le Sirocco : marchez jusqu'à la plage à gauche du resto — personne, eaux turquoise incroyables.",
      },
      {
        date: "07 août",
        label: "Kimolos (excursion)",
        items: [
          { time: "09h45", icon: "⛴",  text: "Ferry Milos → Kimolos depuis Pollonia" },
          { time: "Matin", icon: "🏖",  text: "Goupa Kara", placeId: "goupa-kara" },
          { time: "Matin", icon: "🏖",  text: "Rema Beach", placeId: "rema" },
          { time: "Matin", icon: "🏖",  text: "Prassa Beach (nord-est)", placeId: "prassa" },
          { time: "Déj",   icon: "🍽",  text: "Prasonisi / To Kyma / The Wave (Psathi)", placeId: "to-kyma-kimolos" },
          { time: "17h15", icon: "⛴",  text: "Retour ferry Kimolos → Milos (ou 18h45)" },
        ],
        tip: "Kimolos en day trip depuis Pollonia (nord de Milos) — très authentique, presque pas de touristes.",
      },
      {
        date: "08 août",
        label: "Sarakiniko & Nord",
        items: [
          { time: "Matin", icon: "🏖",  text: "Mandrakia Village — village de pêcheurs coloré", placeId: "mandrakia" },
          { time: "Déj",   icon: "🍽",  text: "Medusa Restaurant (Mandrakia) — donner son nom + attendre sur la plage", placeId: "medusa" },
          { time: "Après-midi", icon: "🏖", text: "Sarakiniko Beach — paysage lunaire unique !", placeId: "sarakiniko" },
          { time: "Sunset", icon: "🌅", text: "Klima Village — coucher de soleil sur les syrmata", placeId: "klima" },
          { time: "20h30", icon: "🍽",  text: "Astakas Milos (Klima) — réserver !", placeId: "astakas", star: true },
        ],
        tip: "Sarakiniko : arriver tôt le matin ou en fin de journée pour éviter la foule et avoir les meilleures lumières.",
      },
      {
        date: "09 août",
        label: "Journée bateau",
        items: [
          { time: "Journée", icon: "⛵", text: "Boat Day avec Calypso (Adamas)", placeId: "calypso-boat", star: true },
          { time: "20h30",  icon: "🍽", text: "Makris Restaurant — Hôtel Domes White Coast (réserver)", placeId: "domes-white-coves" },
        ],
        tip: "La journée bateau Calypso permet de voir les plages inaccessibles par la route : Kleftiko (grottes), Sikia, Gerontas.",
      },
    ],
    suggestions: [
      { icon: "🏖", text: "Sarakiniko — paysage lunaire, unique au monde" },
      { icon: "🏖", text: "Firiplaka & Tsigrado — les deux plus belles plages" },
      { icon: "⛵", text: "Journée bateau Calypso — indispensable pour voir Kleftiko" },
      { icon: "🌅", text: "Klima au coucher du soleil + Astakas pour dîner" },
      { icon: "🏝", text: "Day trip Kimolos — authentique, peu touristique" },
    ],
  },

  /* ─────────────────────────── PAROS ─────────────────────────── */
  {
    id: "paros",
    title: "Paros",
    emoji: "🏖",
    flag: "🇬🇷",
    color: "#e63946",
    days: [
      {
        date: "Jour type",
        label: "Programme type Paros",
        slots: [
          {
            cat: "breakfast",
            icon: "☕",
            label: "Petit déj",
            options: [
              { text: "Almond Coffee Shop (Naoussa) — pancakes, bowls, brunch", placeId: "almond-coffee", star: true },
              { text: "Kafeneio en vieille ville de Naoussa — terrasse, jus frais" },
            ],
          },
          {
            cat: "beach",
            icon: "🏖",
            label: "Plage matin",
            options: [
              { text: "Kolimbithres — rochers granitiques, eaux limpides, iconic", placeId: "kolimbithres", star: true },
              { text: "Santa Maria / Katsouna Beach (nord)", placeId: "katsouna-beach" },
              { text: "Parasporos — sauvage, personne, mer magnifique", placeId: "parasporos" },
              { text: "Faragas (sud) — beau cadre naturel", placeId: "faragas" },
            ],
          },
          {
            cat: "lunch",
            icon: "🍽",
            label: "Déjeuner",
            options: [
              { text: "Katsounas ⛔ (Santa Maria) — brochettes, vue, le meilleur", placeId: "katsounas", star: true },
              { text: "Thalami (Ambelas) — joli cadre, pas de résa, pas de moussaka !", placeId: "thalami" },
              { text: "Ouzeri Halaris (Piso Livadi) — mezés fruits de mer", placeId: "ouzeri-halaris" },
              { text: "Fisilanis ⭐ (Logaras) — poisson, coup de cœur", placeId: "fyssilanis", star: true },
              { text: "Siparos (Santa Maria) — terrasse face mer", placeId: "siparos" },
              { text: "Blue Oyster (Ambelas) — oursin, vue mer", placeId: "blue-oyster" },
            ],
          },
          {
            cat: "activity",
            icon: "⚓",
            label: "Activité",
            options: [
              { text: "Journée bateau autour de Paros — plages cachées", placeId: "boat-day" },
              { text: "Ski nautique / wakeboard à Kolimbithres", placeId: "waterski-kolimbithres" },
              { text: "Balade en scooter dans les villages (Lefkes, Marpissa, Kostos)" },
              { text: "Santa Pacou (Kostos) — montagne, vue sur la mer", placeId: "santa-pacou" },
              { text: "Vieille ville de Parikia — ruelles, Panagia Ekatontapyliani" },
            ],
          },
          {
            cat: "sunset",
            icon: "🌅",
            label: "Apéro sunset",
            options: [
              { text: "Sousouro (Naoussa) — verre dans les ruelles ❤️", placeId: "sousouro", star: true },
              { text: "The Cliff (plage Lolantonis) — coucher de soleil unique", placeId: "cliff" },
              { text: "Kima Restaurant Paros — vue mer au coucher de soleil", placeId: "kima" },
            ],
          },
          {
            cat: "dinner",
            icon: "🍽",
            label: "Dîner",
            options: [
              { text: "BuonVento ⭐⛔ (Marpissa) — pâtes, vue sur la baie, réserver !", placeId: "buonvento", star: true },
              { text: "Arodo ⭐⛔ (Krios) — réserver plage + transats + resto", placeId: "arodo", star: true },
              { text: "Taverna Julia ⭐ (Drios) — meilleure vue de l'île", placeId: "taverna-julia", star: true },
              { text: "Yemeni (Naoussa) — grec moderne, réserver", placeId: "yemeni" },
              { text: "The Cliff ⛔ (plage israélienne) — expérience unique", placeId: "cliff", star: true },
              { text: "Il Napoletano (Parikia) — meilleure pizza de l'île", placeId: "il-napolitano" },
            ],
          },
        ],
      },
      {
        date: "Plages à faire",
        label: "Le tour des plages",
        items: [
          { time: "★★★", icon: "🏖", text: "Kolimbithres — rochers granitiques, eaux limpides", placeId: "kolimbithres" },
          { time: "★★★", icon: "🏖", text: "Parasporos — sauvage, personne, mer magnifique", placeId: "parasporos" },
          { time: "★★★", icon: "🏖", text: "Plage Faragas (sud)", placeId: "faragas" },
          { time: "★★",  icon: "🏖", text: "Golden Beach (Chrissi Akti) — windsurf, animé", placeId: "golden-beach" },
          { time: "★★",  icon: "🏖", text: "Palm Beach (côte ouest)", placeId: "palm-beach" },
          { time: "★★",  icon: "🏖", text: "Punda Beach Club (côte est, fête)", placeId: "punda" },
          { time: "★★",  icon: "🏖", text: "Santa Maria / Katsouna (nord)", placeId: "katsouna-beach" },
        ],
        tip: "",
      },
      {
        date: "Restos incontournables",
        label: "La liste des meilleurs",
        items: [
          { time: "★ Déj", icon: "🍽", text: "Katsounas ⛔ (brochettes, vue, Santa Maria)", placeId: "katsounas", star: true },
          { time: "★ Déj", icon: "🍽", text: "Thalami (Ambelas) — joli cadre, pas de résa, pas de moussaka !", placeId: "thalami" },
          { time: "★ Déj", icon: "🍽", text: "Ouzeri Halaris (Piso Livadi) — mezés fruits de mer", placeId: "ouzeri-halaris" },
          { time: "★ Soir", icon: "🍽", text: "BuonVento ⭐ (Marpissa) — pâtes, vue sur la baie", placeId: "buonvento", star: true },
          { time: "★ Soir", icon: "🍽", text: "Arodo ⭐⛔ (Krios) — réserver plage + transats + resto", placeId: "arodo", star: true },
          { time: "★ Soir", icon: "🍽", text: "Taverna Julia ⭐ (Drios) — meilleure vue de l'île", placeId: "taverna-julia", star: true },
          { time: "★ Soir", icon: "🍽", text: "Yemeni (Naoussa) — grec moderne, réserver", placeId: "yemeni" },
          { time: "★ Soir", icon: "🍽", text: "The Cliff ⛔ (plage israélienne) — unique", placeId: "cliff", star: true },
          { time: "★ Soir", icon: "🍽", text: "Il Napoletano (Parikia) — meilleure pizza de l'île", placeId: "il-napolitano" },
          { time: "★ Midi", icon: "🍽", text: "Fisilanis ⭐ (Logaras) — poisson, coup de cœur", placeId: "fyssilanis", star: true },
        ],
        tip: "",
      },
    ],
    suggestions: [
      { icon: "⭐", text: "BuonVento — réserver, aller le soir" },
      { icon: "⭐", text: "Arodo (Krios) — réserver resto + transats ensemble" },
      { icon: "⭐", text: "Taverna Julia (Drios) — vue incroyable" },
      { icon: "⛔", text: "Katsounas (Santa Maria) — à réserver absolument" },
      { icon: "⛔", text: "The Cliff (plage israélienne) — expérience unique" },
      { icon: "🏖", text: "Parasporos — plage sauvage, personne" },
      { icon: "🏔", text: "Santa Pacou (Kostos) — montagne, vue sur la mer" },
    ],
  },

  /* ─────────────────────────── ANTIPAROS ─────────────────────────── */
  {
    id: "antiparos",
    title: "Antiparos",
    emoji: "🌅",
    flag: "🇬🇷",
    color: "#a259ff",
    days: [
      {
        date: "Journée type",
        label: "Programme Antiparos (15 min de ferry)",
        slots: [
          {
            cat: "breakfast",
            icon: "⛴",
            label: "Accès",
            options: [
              { text: "Ferry depuis Pounta (Paros) — toutes les 20-30 min, sans réservation" },
              { text: "Café à Chora d'Antiparos — village authentique, ruelles blanches" },
            ],
          },
          {
            cat: "beach",
            icon: "🏖",
            label: "Plage",
            options: [
              { text: "Soros Beach (sud, 8 km) — la meilleure plage de l'île", placeId: "soros-beach", star: true },
              { text: "Fanari Beach — proche de Chora, eaux claires", placeId: "fanari-beach" },
            ],
          },
          {
            cat: "lunch",
            icon: "🍽",
            label: "Déjeuner",
            options: [
              { text: "Soros Beach Club — déjeuner les pieds dans le sable", placeId: "soros-beach-club", star: true },
              { text: "Kalokeri (Chora) — pas très joli mais excellent", placeId: "kalokeri" },
            ],
          },
          {
            cat: "activity",
            icon: "⚓",
            label: "Activité",
            options: [
              { text: "Grotte d'Antiparos — stalactites, descente 98 marches, impressionnante" },
              { text: "Chora d'Antiparos — château vénitien, ruelles calmes, boutiques" },
              { text: "The Rooster (hôtel boutique) — prendre un verre au bord de la piscine", placeId: "rooster" },
            ],
          },
          {
            cat: "sunset",
            icon: "🌅",
            label: "Apéro sunset",
            options: [
              { text: "Sunset Deseo ⭐ — bar coucher de soleil incontournable", placeId: "sunset-deseo", star: true },
              { text: "Captain Pipinos (Agios Georgios) — plus beau coucher de soleil de l'île", placeId: "captain-pepinos", star: true },
            ],
          },
          {
            cat: "dinner",
            icon: "🍽",
            label: "Dîner",
            options: [
              { text: "Kalokeri (Chora) — pas très joli mais excellent", placeId: "kalokeri" },
              { text: "Lollo's Pizzeria — pâtes et pizza de rêve", placeId: "lolos" },
              { text: "Captain Pipinos (Agios Georgios) — excellent + vue mer", placeId: "captain-pepinos" },
            ],
          },
        ],
      },
    ],
    suggestions: [
      { icon: "⭐", text: "Sunset Deseo — obligatoire" },
      { icon: "⭐", text: "The Rooster — hôtel boutique, très beau, prendre un verre" },
      { icon: "🏖", text: "Soros Beach — la meilleure plage de l'île" },
      { icon: "🍕", text: "Lollo's Pizzeria — pizza pâtes de rêve" },
      { icon: "🌅", text: "Captain Pipinos — plus beau coucher de soleil de l'île" },
      { icon: "📍", text: "Ferry Pounta → Antiparos : toutes les 20-30 min, pas de réservation" },
    ],
  },
];

/* ─────────────────────── RENDER ITINERARY TAB ─────────────────────── */
(function () {
  function escHtml(s) {
    if (!s) return "";
    return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  function renderItineraries() {
    const container = document.getElementById("itinContent");
    if (!container) return;

    let html = "";

    ITINERARIES.forEach(dest => {
      html += `
        <div class="itin-dest">
          <div class="itin-dest-header" style="background:${escHtml(dest.color)}">
            <span class="itin-emoji">${dest.emoji}</span>
            <div>
              <div class="itin-dest-name">${escHtml(dest.title)}</div>
            </div>
          </div>`;

      // Suggestions bloc
      if (dest.suggestions && dest.suggestions.length) {
        html += `<div class="itin-suggestions">`;
        dest.suggestions.forEach(s => {
          html += `<div class="itin-sugg"><span>${s.icon}</span><span>${escHtml(s.text)}</span></div>`;
        });
        html += `</div>`;
      }

      // Days
      dest.days.forEach(day => {
        html += `
          <div class="itin-day">
            <div class="itin-day-header">
              <span class="itin-day-date">${escHtml(day.date)}</span>
              <span class="itin-day-label">${escHtml(day.label)}</span>
            </div>`;

        if (day.slots) {
          // Programme card with category slots
          html += `<div class="itin-programme">`;
          day.slots.forEach(slot => {
            html += `<div class="itin-prog-row cat-${escHtml(slot.cat)}">
              <div class="itin-prog-cat">
                <span class="itin-prog-icon">${slot.icon}</span>
                <span class="itin-prog-label-text">${escHtml(slot.label)}</span>
              </div>
              <div class="itin-prog-opts">`;
            slot.options.forEach(opt => {
              const cls = `itin-prog-opt${opt.star ? " itin-star" : ""}${opt.placeId ? " clickable" : ""}`;
              html += `<div class="${cls}"${opt.placeId ? ` data-place-id="${escHtml(opt.placeId)}"` : ""}>
                <span>${escHtml(opt.text)}</span>
                ${opt.placeId ? '<span class="itin-goto">↗</span>' : ""}
              </div>`;
            });
            html += `</div></div>`;
          });
          html += `</div>`;
        } else if (day.items) {
          day.items.forEach(item => {
            const placeLink = item.placeId
              ? `data-place-id="${escHtml(item.placeId)}" class="itin-item clickable${item.star ? ' itin-star' : ''}"`
              : `class="itin-item${item.star ? ' itin-star' : ''}"`;
            html += `
              <div ${placeLink}>
                <span class="itin-time">${escHtml(item.time)}</span>
                <span class="itin-icon">${item.icon}</span>
                <span class="itin-text">${escHtml(item.text)}</span>
                ${item.placeId ? '<span class="itin-goto">↗</span>' : ''}
              </div>`;
          });
        }

        if (day.tip) {
          html += `<div class="itin-tip">💡 ${escHtml(day.tip)}</div>`;
        }

        html += `</div>`;
      });

      html += `</div>`;
    });

    container.innerHTML = html;

    // Click: switch to map tab and fly to place
    container.addEventListener("click", e => {
      const item = e.target.closest("[data-place-id]");
      if (!item) return;
      const id = item.dataset.placeId;
      const place = (window.PLACES || []).find(p => p.id === id);
      if (!place || !place.coords) return;

      // Switch to map tab
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => { p.style.display = "none"; p.classList.remove("active"); });
      document.querySelector('[data-tab="map-tab"]').classList.add("active");
      document.getElementById("map-tab").style.display = "";
      document.getElementById("map-tab").classList.add("active");

      // Close mobile bottom-sheet so the map is visible
      const closedMobile = window._closeSidebarMobile && window._closeSidebarMobile();
      const delay = closedMobile ? 320 : 0;

      // Fly to place (map exposed on window by app.js)
      if (window._map) {
        setTimeout(() => {
          window._map.invalidateSize();
          window._map.setView(place.coords, 15, { animate: true });
          const m = window._markers && window._markers.get(id);
          if (m) setTimeout(() => m.openPopup(), 400);
        }, delay);
      }
    });
  }

  // Wait for DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderItineraries);
  } else {
    renderItineraries();
  }
})();
