/* Home dashboard, router, modals, and trip editor.
 * Responsible for:
 *  - showing the trip grid on `/`
 *  - loading a trip on `?trip=ID` or `?shared=BASE64`
 *  - new/edit trip forms, add place, share URL.
 */
(function () {
  function esc(s) {
    if (s == null) return "";
    return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  /* ──────────── Modal helper ──────────── */
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");
  const modalBackdrop = document.getElementById("modalBackdrop");
  function openModal(html) {
    modalContent.innerHTML = html;
    modal.hidden = false;
    document.body.classList.add("modal-open");
  }
  function closeModal() {
    modal.hidden = true;
    modalContent.innerHTML = "";
    document.body.classList.remove("modal-open");
  }
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });
  window._closeModal = closeModal;

  /* ──────────── Share URL builder ──────────── */
  function buildShareUrl(trip) {
    if (!trip) return null;
    const base = window.location.origin + window.location.pathname;
    // Built-in trips: short URL referencing the trip ID (data lives in the app)
    if (trip.builtin && !trip.shared) {
      return base + "?trip=" + encodeURIComponent(trip.id);
    }
    // Shared trips: reuse the current shared URL
    if (trip.shared) {
      const cur = new URLSearchParams(window.location.search).get("shared");
      if (cur) return base + "?shared=" + cur;
    }
    // User trips: encode full data
    const encoded = window.TRIPS.encodeToShare(trip.id);
    if (!encoded) return null;
    return base + "?shared=" + encoded;
  }

  /* ──────────── Router ──────────── */
  function route() {
    const params = new URLSearchParams(window.location.search);
    const tripId = params.get("trip");
    const shared = params.get("shared");

    if (shared) {
      const trip = window.TRIPS.decodeFromShare(shared);
      if (trip) {
        window._currentTrip = { ...trip, builtin: true, shared: true };
        window.PLACES = trip.places || [];
        window.ITINERARIES = trip.itineraries || [];
        showTripView(window._currentTrip);
        return;
      }
    }

    if (tripId) {
      const trip = window.TRIPS.get(tripId);
      if (trip) {
        window._currentTrip = trip;
        window.PLACES = trip.places || [];
        window.ITINERARIES = trip.itineraries || [];
        showTripView(trip);
        return;
      }
    }

    showHomeView();
  }

  /* ──────────── Home view ──────────── */
  function showHomeView() {
    document.getElementById("homeView").hidden = false;
    document.getElementById("tripView").hidden = true;
    document.title = "Mes voyages";
    renderTripGrid();
  }

  function renderTripGrid() {
    const grid = document.getElementById("tripGrid");
    const trips = window.TRIPS.all();
    let html = "";

    trips.forEach(trip => {
      const placeCount = (trip.places || []).length;
      const dayCount = (trip.itineraries || []).reduce(
        (sum, d) => sum + ((d.days || []).length),
        0
      );
      const isBuiltin = !!trip.builtin;
      html += `
        <article class="trip-card" data-trip-id="${esc(trip.id)}" style="--card-color:${esc(trip.color)}">
          <a class="trip-card-link" href="?trip=${encodeURIComponent(trip.id)}">
            <div class="trip-card-cover" style="background:${esc(trip.color)}">
              <span class="trip-card-emoji">${trip.emoji || "📍"}</span>
              ${isBuiltin ? '<span class="trip-card-badge">Inclus</span>' : ""}
            </div>
            <div class="trip-card-body">
              <div class="trip-card-title">${esc(trip.title)}</div>
              <div class="trip-card-meta">${esc(trip.dates || "")}</div>
              ${trip.subtitle ? `<div class="trip-card-sub">${esc(trip.subtitle)}</div>` : ""}
              <div class="trip-card-stats">
                <span>📍 ${placeCount} lieu${placeCount > 1 ? "x" : ""}</span>
                ${dayCount ? `<span>📅 ${dayCount} jour${dayCount > 1 ? "s" : ""}</span>` : ""}
              </div>
            </div>
          </a>
          <button class="trip-card-menu" data-trip-id="${esc(trip.id)}" aria-label="Menu">⋯</button>
        </article>`;
    });

    html += `
      <button class="trip-card trip-card-new" id="newTripCard" type="button">
        <div class="trip-card-cover trip-card-new-cover">
          <span class="trip-card-plus">+</span>
        </div>
        <div class="trip-card-body">
          <div class="trip-card-title">Nouveau voyage</div>
          <div class="trip-card-meta">Créer un programme</div>
        </div>
      </button>`;

    grid.innerHTML = html;

    document.getElementById("newTripCard").addEventListener("click", openNewTripForm);
    grid.querySelectorAll(".trip-card-menu").forEach(btn => {
      btn.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        openTripMenu(btn.dataset.tripId);
      });
    });
  }

  /* ──────────── New / edit trip form ──────────── */
  function openNewTripForm() {
    openTripForm(null);
  }
  function openTripForm(existingTrip) {
    const t = existingTrip || {};
    openModal(`
      <div class="modal-header">
        <h2>${existingTrip ? "Modifier le voyage" : "Nouveau voyage"}</h2>
        <button class="modal-close" type="button" onclick="window._closeModal()">✕</button>
      </div>
      <form id="tripForm" class="form">
        <label>
          <span>Titre *</span>
          <input name="title" required value="${esc(t.title || "")}" placeholder="Ex: Italie 2026" />
        </label>
        <label>
          <span>Emoji</span>
          <input name="emoji" value="${esc(t.emoji || "🏖")}" maxlength="4" />
        </label>
        <label>
          <span>Dates</span>
          <input name="dates" value="${esc(t.dates || "")}" placeholder="Mai 2026" />
        </label>
        <label>
          <span>Sous-titre</span>
          <input name="subtitle" value="${esc(t.subtitle || "")}" placeholder="Rome · Florence · Venise" />
        </label>
        <label>
          <span>Couleur</span>
          <input type="color" name="color" value="${esc(t.color || "#2ec4b6")}" />
        </label>
        <label>
          <span>Centre carte (lat, lng)</span>
          <input name="center" value="${t.center ? t.center.join(", ") : ""}" placeholder="41.9, 12.5" />
          <small>Astuce : clique-droit sur Google Maps → coords copiées</small>
        </label>
        <div class="form-actions">
          <button type="button" class="btn-secondary" onclick="window._closeModal()">Annuler</button>
          <button type="submit" class="btn-primary">${existingTrip ? "Enregistrer" : "Créer"}</button>
        </div>
      </form>
    `);

    document.getElementById("tripForm").addEventListener("submit", e => {
      e.preventDefault();
      const form = e.target;
      const data = {
        title: form.title.value.trim(),
        emoji: form.emoji.value.trim() || "📍",
        dates: form.dates.value.trim(),
        subtitle: form.subtitle.value.trim(),
        color: form.color.value || "#2ec4b6",
      };
      const centerStr = form.center.value.trim();
      if (centerStr) {
        const parts = centerStr.split(",").map(s => parseFloat(s.trim()));
        if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
          data.center = parts;
        }
      }
      data.zoom = (existingTrip && existingTrip.zoom) || 10;

      let trip;
      if (existingTrip && existingTrip.id) {
        trip = window.TRIPS.update({ ...data, id: existingTrip.id });
      } else {
        data.places = [];
        data.itineraries = [];
        trip = window.TRIPS.create(data);
      }
      closeModal();
      if (!existingTrip) {
        window.location.search = "?trip=" + encodeURIComponent(trip.id);
      } else {
        // We're in trip view, just re-render the header
        if (window._currentTrip && window._currentTrip.id === trip.id) {
          Object.assign(window._currentTrip, trip);
          updateTripHeader(trip);
        } else {
          renderTripGrid();
        }
      }
    });
  }

  /* ──────────── Trip card menu ──────────── */
  function openTripMenu(tripId) {
    const trip = window.TRIPS.get(tripId);
    if (!trip) return;
    let html = `
      <div class="modal-header">
        <h2>${esc(trip.emoji)} ${esc(trip.title)}</h2>
        <button class="modal-close" type="button" onclick="window._closeModal()">✕</button>
      </div>
      <div class="action-list">
        <button data-action="open" type="button">📍 Ouvrir</button>
        <button data-action="share" type="button">📤 Partager (lien)</button>`;
    if (!trip.builtin) {
      html += `
        <button data-action="edit" type="button">✏️ Modifier infos</button>
        <button data-action="duplicate" type="button">📋 Dupliquer</button>
        <button data-action="delete" type="button" class="danger">🗑 Supprimer</button>`;
    } else {
      html += `<button data-action="duplicate" type="button">📋 Dupliquer (pour éditer)</button>`;
    }
    html += `</div>`;
    openModal(html);

    modalContent.querySelectorAll("[data-action]").forEach(btn => {
      btn.addEventListener("click", () => handleMenuAction(btn.dataset.action, tripId));
    });
  }

  function handleMenuAction(action, tripId) {
    const trip = window.TRIPS.get(tripId);
    if (!trip) return;

    if (action === "open") {
      window.location.search = "?trip=" + encodeURIComponent(tripId);
    } else if (action === "share") {
      const url = buildShareUrl(trip);
      if (!url) { alert("Erreur lors de la génération du lien."); return; }
      showShareModal(trip, url);
    } else if (action === "duplicate") {
      const copy = window.TRIPS.duplicate(tripId);
      closeModal();
      if (copy) {
        if (document.getElementById("homeView").hidden) {
          window.location.search = "?trip=" + encodeURIComponent(copy.id);
        } else {
          renderTripGrid();
        }
      }
    } else if (action === "delete") {
      if (confirm(`Supprimer "${trip.title}" ? Cette action est irréversible.`)) {
        window.TRIPS.delete(tripId);
        closeModal();
        if (window._currentTrip && window._currentTrip.id === tripId) {
          window.location.href = "./";
        } else {
          renderTripGrid();
        }
      }
    } else if (action === "edit") {
      openTripForm(trip);
    }
  }

  function showShareModal(trip, url) {
    openModal(`
      <div class="modal-header">
        <h2>📤 Partager "${esc(trip.title)}"</h2>
        <button class="modal-close" type="button" onclick="window._closeModal()">✕</button>
      </div>
      <p class="modal-text">Le lien contient tout le voyage (lieux + programmes). Le destinataire peut l'ouvrir directement, sans compte.</p>
      <textarea readonly class="share-url" rows="4">${esc(url)}</textarea>
      <div class="form-actions">
        <button type="button" class="btn-secondary" onclick="window._closeModal()">Fermer</button>
        <button type="button" class="btn-primary" id="copyShareBtn">📋 Copier le lien</button>
      </div>
    `);
    const ta = modalContent.querySelector("textarea");
    ta.addEventListener("click", () => ta.select());
    document.getElementById("copyShareBtn").addEventListener("click", () => {
      navigator.clipboard.writeText(url).then(() => {
        const btn = document.getElementById("copyShareBtn");
        btn.textContent = "✅ Copié !";
        setTimeout(() => { btn.textContent = "📋 Copier le lien"; }, 1500);
      }).catch(() => {
        ta.select();
        document.execCommand("copy");
      });
    });
  }

  /* ──────────── Trip view header / editor ──────────── */
  function showTripView(trip) {
    document.getElementById("homeView").hidden = true;
    document.getElementById("tripView").hidden = false;
    document.title = (trip.emoji || "") + " " + (trip.title || "Voyage");

    updateTripHeader(trip);

    // Show "Edit" tab only for user-created (non-builtin, non-shared) trips
    const editBtn = document.getElementById("editTabBtn");
    if (editBtn) {
      const editable = !trip.builtin && !trip.shared;
      editBtn.hidden = !editable;
    }

    // Share button
    const shareBtn = document.getElementById("shareTrip");
    if (shareBtn) {
      shareBtn.onclick = () => {
        const url = buildShareUrl(trip);
        if (url) showShareModal(trip, url);
      };
    }

    // Edit-tab wiring
    setupEditTab(trip);

    // Boot the map app (defined in app.js)
    if (typeof window._initTripApp === "function") {
      window._initTripApp();
    }
  }

  function updateTripHeader(trip) {
    const titleEl = document.getElementById("tripTitle");
    const subEl = document.getElementById("tripSubtitle");
    if (titleEl) titleEl.textContent = (trip.emoji || "") + " " + (trip.title || "Voyage");
    if (subEl) subEl.textContent = trip.subtitle || trip.dates || "";

    // Header gradient using trip color
    const header = document.querySelector("#tripView #sidebar header");
    if (header && trip.color) {
      header.style.background = `linear-gradient(135deg, ${trip.color} 0%, ${shade(trip.color, 30)} 100%)`;
    }
  }

  // lighten a hex color by N percent (positive) or darken (negative)
  function shade(hex, percent) {
    const m = hex.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!m) return hex;
    const r = parseInt(m[1], 16), g = parseInt(m[2], 16), b = parseInt(m[3], 16);
    const adj = c => Math.max(0, Math.min(255, Math.round(c + (255 - c) * percent / 100)));
    const toHex = c => c.toString(16).padStart(2, "0");
    return "#" + toHex(adj(r)) + toHex(adj(g)) + toHex(adj(b));
  }

  /* ──────────── Edit tab (for user trips) ──────────── */
  function setupEditTab(trip) {
    if (trip.builtin || trip.shared) return;

    const editMetaBtn = document.getElementById("editMetaBtn");
    const deleteBtn = document.getElementById("deleteTripBtn");
    const addPlaceBtn = document.getElementById("addPlaceBtn");
    const addProgramBtn = document.getElementById("addProgramBtn");

    if (editMetaBtn) editMetaBtn.onclick = () => openTripForm(trip);
    if (deleteBtn) deleteBtn.onclick = () => {
      if (confirm(`Supprimer "${trip.title}" ?`)) {
        window.TRIPS.delete(trip.id);
        window.location.href = "./";
      }
    };
    if (addPlaceBtn) addPlaceBtn.onclick = () => openPlaceForm(trip.id);
    if (addProgramBtn) addProgramBtn.onclick = () => openProgramForm(trip.id);

    renderAdminLists(trip);
  }

  function renderAdminLists(trip) {
    const placeList = document.getElementById("placeAdminList");
    const placeCount = document.getElementById("placeCount");
    if (placeCount) placeCount.textContent = (trip.places || []).length;

    if (placeList) {
      placeList.innerHTML = (trip.places || []).map(p => `
        <li class="admin-item">
          <span class="admin-item-text">
            <strong>${esc(p.name)}</strong>
            <small>${esc([p.category, p.area, p.island].filter(Boolean).join(" · "))}</small>
          </span>
          <button class="admin-del" data-place-id="${esc(p.id)}" aria-label="Supprimer">🗑</button>
        </li>
      `).join("");
      placeList.querySelectorAll(".admin-del").forEach(b => {
        b.addEventListener("click", () => {
          if (confirm("Supprimer ce lieu ?")) {
            const updated = window.TRIPS.removePlace(trip.id, b.dataset.placeId);
            if (updated) {
              window._currentTrip = updated;
              window.PLACES = updated.places;
              renderAdminLists(updated);
              alert("Recharge la page pour voir le changement sur la carte.");
            }
          }
        });
      });
    }

    const destList = document.getElementById("destAdminList");
    if (destList) {
      destList.innerHTML = (trip.itineraries || []).map(dest => `
        <li class="admin-item">
          <span class="admin-item-text">
            <strong>${esc(dest.emoji)} ${esc(dest.title)}</strong>
            <small>${(dest.days || []).length} jour${(dest.days || []).length > 1 ? "s" : ""}</small>
          </span>
        </li>
      `).join("") || "<li class='admin-empty'>Aucun programme. Clique + au-dessus.</li>";
    }
  }

  /* ──────────── Add place form ──────────── */
  function openPlaceForm(tripId) {
    openModal(`
      <div class="modal-header">
        <h2>Ajouter un lieu</h2>
        <button class="modal-close" type="button" onclick="window._closeModal()">✕</button>
      </div>
      <form id="placeForm" class="form">
        <label>
          <span>Nom *</span>
          <input name="name" required placeholder="Ex: Trattoria da Mario" />
        </label>
        <label>
          <span>Catégorie *</span>
          <select name="category" required>
            <option value="restaurant">🍽 Restaurant</option>
            <option value="beach">🏖 Plage</option>
            <option value="bar">🍸 Bar</option>
            <option value="hotel">🏨 Hôtel</option>
            <option value="breakfast">☕ Petit déj / Café</option>
            <option value="activity">⚓ Activité</option>
          </select>
        </label>
        <label>
          <span>Zone / quartier</span>
          <input name="area" placeholder="Trastevere" />
        </label>
        <label>
          <span>Ville / île</span>
          <input name="island" placeholder="Rome" />
        </label>
        <label>
          <span>Coordonnées (lat, lng) *</span>
          <input name="coords" required placeholder="41.8895, 12.4679" />
          <small>Sur Google Maps : clic droit → clic sur les coords pour copier</small>
        </label>
        <label>
          <span>Lien Google Maps</span>
          <input name="google_maps_url" placeholder="https://maps.app.goo.gl/..." />
        </label>
        <label>
          <span>Site internet</span>
          <input name="website" placeholder="https://..." />
        </label>
        <label>
          <span>Instagram (@compte ou URL)</span>
          <input name="instagram" placeholder="@montrattoria" />
        </label>
        <label>
          <span>Téléphone</span>
          <input name="phone" placeholder="+39 06 ..." />
        </label>
        <label>
          <span>Photo (URL)</span>
          <input name="photo_url" placeholder="https://..." />
        </label>
        <label>
          <span>Note (étoiles)</span>
          <input name="rating" type="number" step="0.1" min="0" max="5" placeholder="4.5" />
        </label>
        <label>
          <span>Note perso / description</span>
          <textarea name="note" rows="3" placeholder="Pourquoi tu kiffes ce lieu…"></textarea>
        </label>
        <label class="checkbox">
          <input type="checkbox" name="highlight" />
          <span>⭐ Coup de cœur (marqueur rouge)</span>
        </label>
        <label class="checkbox">
          <input type="checkbox" name="reservation" />
          <span>⛔ Nécessite une réservation</span>
        </label>
        <div class="form-actions">
          <button type="button" class="btn-secondary" onclick="window._closeModal()">Annuler</button>
          <button type="submit" class="btn-primary">Ajouter</button>
        </div>
      </form>
    `);

    document.getElementById("placeForm").addEventListener("submit", e => {
      e.preventDefault();
      const f = e.target;
      const coordsStr = f.coords.value.trim();
      const coords = coordsStr.split(",").map(s => parseFloat(s.trim()));
      if (coords.length !== 2 || isNaN(coords[0]) || isNaN(coords[1])) {
        alert("Coordonnées invalides. Format: lat, lng (ex: 41.89, 12.46)");
        return;
      }
      const note = f.note.value.trim();
      const place = {
        name: f.name.value.trim(),
        category: f.category.value,
        area: f.area.value.trim() || undefined,
        island: f.island.value.trim() || undefined,
        coords,
        google_maps_url: f.google_maps_url.value.trim() || undefined,
        website: f.website.value.trim() || undefined,
        instagram: f.instagram.value.trim() || undefined,
        phone: f.phone.value.trim() || undefined,
        photo_url: f.photo_url.value.trim() || undefined,
        rating: f.rating.value ? parseFloat(f.rating.value) : undefined,
        highlight: f.highlight.checked || undefined,
        reservation: f.reservation.checked || undefined,
        notes: note ? [{ author: "Moi", text: note }] : [],
      };
      const updated = window.TRIPS.addPlace(tripId, place);
      if (updated) {
        window._currentTrip = updated;
        window.PLACES = updated.places;
        closeModal();
        alert("Lieu ajouté. Recharge la carte pour le voir.");
        renderAdminLists(updated);
      }
    });
  }

  /* ──────────── Add programme type form ──────────── */
  function openProgramForm(tripId) {
    openModal(`
      <div class="modal-header">
        <h2>Nouveau programme type</h2>
        <button class="modal-close" type="button" onclick="window._closeModal()">✕</button>
      </div>
      <form id="programForm" class="form">
        <label>
          <span>Nom de la destination *</span>
          <input name="destTitle" required placeholder="Ex: Rome" />
        </label>
        <label>
          <span>Emoji</span>
          <input name="destEmoji" value="📍" maxlength="4" />
        </label>
        <label>
          <span>Titre du programme</span>
          <input name="dayLabel" value="Programme type" placeholder="Programme type Rome" />
        </label>
        <p class="modal-text">Renseigne tes lieux préférés par moment de la journée. Tu peux les laisser vides.</p>
        <fieldset>
          <legend>☕ Petit déj</legend>
          <textarea name="breakfast" rows="3" placeholder="Une option par ligne&#10;Bar Sant'Eustachio · espresso le matin"></textarea>
        </fieldset>
        <fieldset>
          <legend>🏖 Plage / matin</legend>
          <textarea name="beach" rows="3" placeholder="Une option par ligne"></textarea>
        </fieldset>
        <fieldset>
          <legend>🍽 Déjeuner</legend>
          <textarea name="lunch" rows="3" placeholder="Une option par ligne"></textarea>
        </fieldset>
        <fieldset>
          <legend>⚓ Activité</legend>
          <textarea name="activity" rows="3" placeholder="Une option par ligne"></textarea>
        </fieldset>
        <fieldset>
          <legend>🌅 Apéro sunset</legend>
          <textarea name="sunset" rows="3" placeholder="Une option par ligne"></textarea>
        </fieldset>
        <fieldset>
          <legend>🍽 Dîner</legend>
          <textarea name="dinner" rows="3" placeholder="Une option par ligne"></textarea>
        </fieldset>
        <div class="form-actions">
          <button type="button" class="btn-secondary" onclick="window._closeModal()">Annuler</button>
          <button type="submit" class="btn-primary">Ajouter</button>
        </div>
      </form>
    `);

    document.getElementById("programForm").addEventListener("submit", e => {
      e.preventDefault();
      const f = e.target;
      const cats = [
        { key: "breakfast", icon: "☕", label: "Petit déj" },
        { key: "beach", icon: "🏖", label: "Plage" },
        { key: "lunch", icon: "🍽", label: "Déjeuner" },
        { key: "activity", icon: "⚓", label: "Activité" },
        { key: "sunset", icon: "🌅", label: "Apéro sunset" },
        { key: "dinner", icon: "🍽", label: "Dîner" },
      ];
      const slots = cats
        .map(c => {
          const lines = (f[c.key].value || "").split("\n").map(s => s.trim()).filter(Boolean);
          return {
            cat: c.key,
            icon: c.icon,
            label: c.label,
            options: lines.map(text => ({ text })),
          };
        })
        .filter(s => s.options.length > 0);

      if (slots.length === 0) {
        alert("Ajoute au moins une option dans une catégorie.");
        return;
      }

      const destTitle = f.destTitle.value.trim();
      const destEmoji = f.destEmoji.value.trim() || "📍";
      const day = {
        date: "Jour type",
        label: f.dayLabel.value.trim() || ("Programme type " + destTitle),
        slots,
      };
      const updated = window.TRIPS.addDay(tripId, destTitle.toLowerCase().replace(/\s+/g, "-"), day);
      if (updated) {
        // patch dest emoji/title if just created
        const dest = updated.itineraries.find(d => d.id === destTitle.toLowerCase().replace(/\s+/g, "-"));
        if (dest) {
          dest.title = destTitle;
          dest.emoji = destEmoji;
          window.TRIPS.update({ id: tripId, places: updated.places, itineraries: updated.itineraries });
        }
        window._currentTrip = window.TRIPS.get(tripId);
        window.ITINERARIES = window._currentTrip.itineraries;
        closeModal();
        if (window._renderItineraries) window._renderItineraries();
        renderAdminLists(window._currentTrip);
      }
    });
  }

  /* ──────────── Init ──────────── */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", route);
  } else {
    route();
  }
})();
