/* ══════════════════════════════════════
   APP.JS — initialization & live updates
══════════════════════════════════════ */

const App = {

  init() {
    Toast.init();
    Render.all();
    this.startLiveTick();
    console.log('[EHN] Emergency Help Network initialized.');
  },

  /* Simulate live stat fluctuations */
  startLiveTick() {
    setInterval(() => {
      const beds = 10 + Math.floor(Math.random() * 6);
      const el   = document.getElementById('statBeds');
      if (el && Nav.current === 'home') {
        el.textContent = beds;
      }
    }, 8000);

    setInterval(() => {
      const donors = 44 + Math.floor(Math.random() * 8);
      const el     = document.getElementById('statDonors');
      if (el && Nav.current === 'home') {
        el.textContent = donors;
      }
    }, 12000);
  }
};

/* ── BOOT ── */
document.addEventListener('DOMContentLoaded', () => App.init());
