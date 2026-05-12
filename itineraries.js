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
        items: [
          { time: "Matin",     icon: "☕",  text: "Almond Coffee Shop (Naoussa) — pancakes, bowls, brunch", placeId: "almond-coffee" },
          { time: "Matinée",   icon: "🏖",  text: "Kolimbithres (baie de Naoussa) ou Santa Maria Beach", placeId: "kolimbithres" },
          { time: "Déj",       icon: "🍽",  text: "Katsounas ⛔ (Santa Maria) — le meilleur selon plusieurs listes", placeId: "katsounas", star: true },
          { time: "Après-midi",icon: "🏖",  text: "Parasporos (plage sauvage, personne) ou Faragas", placeId: "parasporos" },
          { time: "Sunset",    icon: "🍸",  text: "Verre à Naoussa — Sousouro dans les ruelles", placeId: "sousouro" },
          { time: "Dîner",     icon: "🍽",  text: "BuonVento ⭐ (soir) ou Yemeni — réserver !", placeId: "buonvento", star: true },
        ],
        tip: "",
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
        label: "Journée à Antiparos (15 min de ferry)",
        items: [
          { time: "Matin", icon: "⛴",   text: "Ferry depuis Pounta (Paros) — pas besoin de résa, toutes les 30 min" },
          { time: "Matin", icon: "🏖",   text: "Fanari Beach ou Soros Beach (sud, 8 km)", placeId: "fanari-beach" },
          { time: "Déj",   icon: "🍽",   text: "Soros Beach Club — déjeuner sur la plage", placeId: "soros-beach-club" },
          { time: "Après-midi", icon: "🏖", text: "Plage Soros — top, belles eaux", placeId: "soros-beach" },
          { time: "Sunset", icon: "🍸",  text: "Sunset Deseo ⭐ — bar coucher de soleil incontournable", placeId: "sunset-deseo", star: true },
          { time: "Dîner", icon: "🍽",   text: "Kalokeri (Chora) — pas très joli mais excellent", placeId: "kalokeri" },
          { time: "Alt.",  icon: "🍕",   text: "Lollo's Pizzeria — pâtes et pizza de rêve", placeId: "lolos" },
        ],
        tip: "Captain Pipinos (Agios Georgios) = plus beau coucher de soleil de l'île + excellent.",
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
