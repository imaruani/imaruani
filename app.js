(function () {
  const map = L.map("map", {
    zoomControl: true,
    preferCanvas: true,
  }).setView([37.07, 25.18], 11);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png", {
    subdomains: "abcd",
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors, <a href="https://carto.com/attributions">CARTO</a>',
  }).addTo(map);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png", {
    subdomains: "abcd",
    maxZoom: 19,
  }).addTo(map);

  const ICONS = {
    restaurant: "🍽",
    beach: "🏖",
    bar: "🍸",
    hotel: "🏨",
    breakfast: "☕",
    activity: "⚓",
  };

  function makeIcon(p) {
    const cls = ["pin", p.category];
    if (p.highlight) cls.push("fav");
    const icon = ICONS[p.category] || "";
    return L.divIcon({
      className: "",
      html: `<span class="${cls.join(" ")}" style="--marker-icon:'${icon}'"></span>`,
      iconSize: [28, 36],
      iconAnchor: [14, 34],
      popupAnchor: [0, -28],
    });
  }

  function escapeHtml(s) {
    if (s == null) return "";
    return String(s).replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  }

  function buildPopup(p) {
    const tags = [];
    if (p.highlight) tags.push('<span class="tag fav">★ Coup de cœur</span>');
    if (p.reservation) tags.push('<span class="tag resa">⛔ Réserver</span>');
    if (p.avoid) tags.push('<span class="tag avoid">À éviter</span>');
    if (p.category) tags.push(`<span class="tag">${escapeHtml(p.category)}</span>`);
    if (p.area) tags.push(`<span class="tag">${escapeHtml(p.area)}</span>`);
    if (p.cuisine) tags.push(`<span class="tag">${escapeHtml(p.cuisine)}</span>`);

    const notes = (p.notes || [])
      .map((n) => `
        <div class="note">
          <div class="author">${escapeHtml(n.author)}</div>
          <div class="text">${escapeHtml(n.text)}</div>
        </div>`)
      .join("");

    const links = [];
    if (p.google_maps_url) links.push(`<a class="maps" href="${escapeHtml(p.google_maps_url)}" target="_blank" rel="noopener">📍 Google Maps</a>`);
    if (p.instagram_url || p.instagram) {
      const url = p.instagram_url || `https://www.instagram.com/${(p.instagram || "").replace(/^@/, "")}`;
      links.push(`<a class="insta" href="${escapeHtml(url)}" target="_blank" rel="noopener">📷 Instagram</a>`);
    }
    if (p.website) links.push(`<a href="${escapeHtml(p.website)}" target="_blank" rel="noopener">🌐 Site</a>`);
    if (p.phone) {
      const tel = p.phone.replace(/\s/g, "");
      links.push(`<a href="tel:${escapeHtml(tel)}">📞 ${escapeHtml(p.phone)}</a>`);
    }

    const photoBlock = p.photo_url
      ? `<div class="photo" style="background-image: url('${escapeHtml(p.photo_url)}')"></div>`
      : '<div class="photo placeholder"></div>';

    return `
      <div class="popup">
        ${photoBlock}
        <div class="body">
          <h3>${escapeHtml(p.name)}</h3>
          <div class="tags">${tags.join("")}</div>
          <div class="notes">${notes || ""}</div>
          <div class="links">${links.join("")}</div>
        </div>
      </div>`;
  }

  // State
  const state = {
    island: "all",
    category: "all",
    favOnly: false,
    search: "",
  };

  const markers = new Map();
  const cluster = L.markerClusterGroup({
    showCoverageOnHover: false,
    spiderfyOnMaxZoom: true,
    maxClusterRadius: 36,
    iconCreateFunction: (c) => {
      const count = c.getChildCount();
      const hasFav = c.getAllChildMarkers().some((m) => m.options.placeData && m.options.placeData.highlight);
      const bg = hasFav ? "#ff3b30" : "#4a90e2";
      return L.divIcon({
        html: `<div style="background:${bg};color:#fff;border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;box-shadow:0 4px 10px rgba(0,0,0,0.45);border:2px solid #fff;">${count}</div>`,
        className: "",
        iconSize: [34, 34],
      });
    },
  });
  map.addLayer(cluster);

  // Build markers
  (window.PLACES || []).forEach((p) => {
    if (!p.coords) return;
    const m = L.marker(p.coords, { icon: makeIcon(p), placeData: p });
    m.bindPopup(buildPopup(p), { maxWidth: 340 });
    markers.set(p.id, m);
  });

  function applyFilters() {
    cluster.clearLayers();
    const q = state.search.trim().toLowerCase();
    const visible = [];
    (window.PLACES || []).forEach((p) => {
      const m = markers.get(p.id);
      if (!m) return;
      if (state.island !== "all" && p.island !== state.island) return;
      if (state.category !== "all" && p.category !== state.category) return;
      if (state.favOnly && !p.highlight) return;
      if (q) {
        const hay = (p.name + " " + (p.area || "") + " " + (p.cuisine || "")).toLowerCase();
        if (!hay.includes(q)) return;
      }
      cluster.addLayer(m);
      visible.push(p);
    });
    renderList(visible);
  }

  function renderList(places) {
    const ul = document.getElementById("placeList");
    ul.innerHTML = "";
    places
      .slice()
      .sort((a, b) => {
        if (a.highlight !== b.highlight) return a.highlight ? -1 : 1;
        return a.name.localeCompare(b.name);
      })
      .forEach((p) => {
        const li = document.createElement("li");
        if (p.highlight) li.classList.add("fav");
        if (p.avoid) li.classList.add("avoid");
        li.innerHTML = `
          <span class="dot"></span>
          <span class="meta">
            <strong>${p.highlight ? "★ " : ""}${escapeHtml(p.name)}</strong>
            <span>${escapeHtml([p.area, p.island].filter(Boolean).join(" · "))}</span>
          </span>`;
        li.addEventListener("click", () => {
          if (!p.coords) return;
          map.setView(p.coords, 15, { animate: true });
          const m = markers.get(p.id);
          if (m) m.openPopup();
        });
        ul.appendChild(li);
      });
  }

  // UI wiring
  document.querySelectorAll("#islandFilter button").forEach((b) => {
    b.addEventListener("click", () => {
      document.querySelectorAll("#islandFilter button").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      state.island = b.dataset.island;
      applyFilters();
      fitToVisible();
    });
  });

  document.querySelectorAll("#categoryFilter button").forEach((b) => {
    b.addEventListener("click", () => {
      document.querySelectorAll("#categoryFilter button").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      state.category = b.dataset.category;
      applyFilters();
    });
  });

  document.getElementById("favOnly").addEventListener("change", (e) => {
    state.favOnly = e.target.checked;
    applyFilters();
  });

  document.getElementById("search").addEventListener("input", (e) => {
    state.search = e.target.value;
    applyFilters();
  });

  function fitToVisible() {
    const bounds = cluster.getBounds();
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 13 });
    }
  }

  applyFilters();
  setTimeout(fitToVisible, 100);
})();
