/* Trips registry — built-in trips + user-created trips in localStorage.
 * Shareable via URL using base64-encoded JSON.
 */
(function () {
  const STORAGE_KEY = "mv-user-trips";

  function getUserTrips() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch (e) {
      return [];
    }
  }

  function saveUserTrips(trips) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trips));
  }

  function genId() {
    return "trip-" + Date.now() + "-" + Math.random().toString(36).slice(2, 7);
  }

  // Encode/decode for URL sharing
  function encode(obj) {
    const json = JSON.stringify(obj);
    return btoa(unescape(encodeURIComponent(json)));
  }
  function decode(str) {
    try {
      return JSON.parse(decodeURIComponent(escape(atob(str))));
    } catch (e) {
      return null;
    }
  }

  // Built-in trip: Greece (data comes from places.js + itineraries.js)
  const BUILTIN_TRIPS = [
    {
      id: "grece-2025",
      title: "Grèce",
      emoji: "🇬🇷",
      subtitle: "Paros · Antiparos · Sifnos · Milos · Kimolos · Athènes",
      color: "#e63946",
      dates: "Août 2025",
      builtin: true,
      center: [37.07, 25.18],
      zoom: 11,
      get places() { return window.PLACES || []; },
      get itineraries() { return window.ITINERARIES || []; },
    },
  ];

  function snapshotTrip(t) {
    // Resolve getters into plain values, drop the `builtin` flag
    return {
      id: t.id,
      title: t.title,
      emoji: t.emoji,
      subtitle: t.subtitle || "",
      color: t.color || "#2ec4b6",
      dates: t.dates || "",
      center: t.center || [0, 0],
      zoom: t.zoom || 10,
      places: t.places || [],
      itineraries: t.itineraries || [],
    };
  }

  window.TRIPS = {
    all() {
      return [...BUILTIN_TRIPS, ...getUserTrips()];
    },
    get(id) {
      return this.all().find(t => t.id === id) || null;
    },
    create(trip) {
      const user = getUserTrips();
      const created = snapshotTrip({
        ...trip,
        id: trip.id || genId(),
      });
      user.push(created);
      saveUserTrips(user);
      return created;
    },
    update(trip) {
      const user = getUserTrips();
      const idx = user.findIndex(t => t.id === trip.id);
      if (idx < 0) return null;
      user[idx] = snapshotTrip({ ...user[idx], ...trip, id: trip.id });
      saveUserTrips(user);
      return user[idx];
    },
    delete(id) {
      const user = getUserTrips().filter(t => t.id !== id);
      saveUserTrips(user);
    },
    duplicate(id) {
      const t = this.get(id);
      if (!t) return null;
      const snap = snapshotTrip(t);
      snap.id = genId();
      snap.title = (t.title || "Voyage") + " (copie)";
      const user = getUserTrips();
      user.push(snap);
      saveUserTrips(user);
      return snap;
    },

    // URL sharing
    encodeToShare(id) {
      const t = this.get(id);
      if (!t) return null;
      return encode(snapshotTrip(t));
    },
    decodeFromShare(encoded) {
      const obj = decode(encoded);
      if (!obj) return null;
      return obj;
    },
    importShared(encoded) {
      // Save a shared trip to user library with a new id
      const obj = decode(encoded);
      if (!obj) return null;
      return this.create({ ...obj, id: undefined, title: obj.title + " (importé)" });
    },

    // Mutations on a user trip's content
    addPlace(tripId, place) {
      const t = this.get(tripId);
      if (!t || t.builtin) return null;
      const places = [...t.places, { ...place, id: place.id || ("p-" + Date.now()) }];
      return this.update({ id: tripId, places, itineraries: t.itineraries });
    },
    removePlace(tripId, placeId) {
      const t = this.get(tripId);
      if (!t || t.builtin) return null;
      const places = t.places.filter(p => p.id !== placeId);
      return this.update({ id: tripId, places, itineraries: t.itineraries });
    },
    addDay(tripId, destId, day) {
      const t = this.get(tripId);
      if (!t || t.builtin) return null;
      const itineraries = JSON.parse(JSON.stringify(t.itineraries));
      let dest = itineraries.find(d => d.id === destId);
      if (!dest) {
        dest = { id: destId || ("dest-" + Date.now()), title: destId, emoji: "📍", color: t.color, days: [], suggestions: [] };
        itineraries.push(dest);
      }
      dest.days.push(day);
      return this.update({ id: tripId, places: t.places, itineraries });
    },
  };
})();
