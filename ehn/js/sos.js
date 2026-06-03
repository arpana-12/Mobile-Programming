/* ══════════════════════════════════════
   SOS.JS — emergency button logic
══════════════════════════════════════ */

const SOS = {
  active: false,
  timer: null,

  trigger() {
    if (this.active) return;
    this.active = true;

    const btn = document.getElementById('sosBtn');
    const sub = document.getElementById('sosSub');

    // Phase 1: Alerting
    btn.classList.add('alerting');
    sub.textContent = 'ALERTING...';
    Toast.show('🚨 SOS sent! Locating nearest units...', true);

    // Phase 2: Dispatched
    this.timer = setTimeout(() => {
      btn.classList.remove('alerting');
      btn.classList.add('dispatched');
      sub.textContent = 'DISPATCHED ✓';
      Toast.show('✓ Help is on the way — AMB-04 dispatched (ETA 4 min)');

      // Update stats
      const statAmb = document.getElementById('statAmb');
      if (statAmb) {
        statAmb.textContent = '2';
        statAmb.style.color = 'var(--red)';
      }

      // Phase 3: Reset
      this.timer = setTimeout(() => {
        btn.classList.remove('dispatched');
        sub.textContent = 'TAP TO ALERT';
        this.active = false;

        // Restore stats
        if (statAmb) {
          statAmb.textContent = '3';
          statAmb.style.color = '';
        }
      }, 5000);
    }, 1800);
  },

  cancel() {
    clearTimeout(this.timer);
    const btn = document.getElementById('sosBtn');
    const sub = document.getElementById('sosSub');
    btn.classList.remove('alerting', 'dispatched');
    sub.textContent = 'TAP TO ALERT';
    this.active = false;
  }
};
