// Order storage: Firebase Firestore when configured, otherwise localStorage (single-device demo).
(function () {
  const cfg = window.FIREBASE_CONFIG;
  const live = !!(cfg && cfg.projectId && window.firebase);
  let db = null;
  if (live) {
    firebase.initializeApp(cfg);
    db = firebase.firestore();
  }

  const KEY = "demo_orders_v1";
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } };
  const write = (a) => { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {} };
  const listeners = new Set();
  const emit = () => { const a = read(); listeners.forEach((f) => f(a)); };
  window.addEventListener("storage", (e) => { if (e.key === KEY) emit(); });

  window.Store = {
    live,

    async addOrder(order) {
      order.createdAt = Date.now();
      order.status = "new";
      if (live) {
        const ref = await db.collection("orders").add(order);
        return ref.id;
      }
      order.id = "L" + Date.now();
      const a = read(); a.push(order); write(a); emit();
      return order.id;
    },

    onOrders(cb) {
      if (live) {
        return db.collection("orders").orderBy("createdAt", "desc").limit(150)
          .onSnapshot((s) => cb(s.docs.map((d) => ({ id: d.id, ...d.data() }))),
                      (err) => { console.error(err); alert(err.code === "permission-denied" ? "Not allowed to see orders. Please sign in again." : "Connection problem: " + err.message); });
      }
      const f = (a) => cb([...a].sort((x, y) => y.createdAt - x.createdAt));
      listeners.add(f); f(read());
      return () => listeners.delete(f);
    },

    // Orders created between two times (ms), newest first — used by the owner dashboard
    onRange(start, end, cb, onErr) {
      if (live) {
        return db.collection("orders").where("createdAt", ">=", start).where("createdAt", "<", end)
          .orderBy("createdAt", "desc").limit(3000)
          .onSnapshot((s) => cb(s.docs.map((d) => ({ id: d.id, ...d.data() }))),
                      (err) => { console.error(err); onErr && onErr(err); });
      }
      const f = (a) => cb(a.filter((o) => o.createdAt >= start && o.createdAt < end).sort((x, y) => y.createdAt - x.createdAt));
      listeners.add(f); f(read());
      return () => listeners.delete(f);
    },

    onOrder(id, cb) {
      if (live) {
        return db.collection("orders").doc(id)
          .onSnapshot((d) => cb(d.exists ? { id: d.id, ...d.data() } : null), (err) => { console.error(err); cb(null); });
      }
      const f = (a) => cb(a.find((o) => o.id === id) || null);
      listeners.add(f); f(read());
      return () => listeners.delete(f);
    },

    async setStatus(id, status) {
      if (live) return db.collection("orders").doc(id).update({ status, updatedAt: Date.now() });
      const a = read(); const o = a.find((x) => x.id === id);
      if (o) { o.status = status; o.updatedAt = Date.now(); }
      write(a); emit();
    }
  };
})();
