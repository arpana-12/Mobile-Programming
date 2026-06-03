/* ══════════════════════════════════════
   TOAST.JS — notification system
══════════════════════════════════════ */

const Toast = {
  timer: null,
  el: null,

  init() {
    this.el = document.getElementById('toast');
  },

  show(msg, isSOS = false) {
    if (!this.el) this.init();
    clearTimeout(this.timer);

    this.el.textContent = msg;
    this.el.classList.toggle('sos-toast', isSOS);
    this.el.classList.add('show');

    this.timer = setTimeout(() => {
      this.el.classList.remove('show');
      setTimeout(() => this.el.classList.remove('sos-toast'), 300);
    }, 3000);
  },

  hide() {
    if (!this.el) return;
    this.el.classList.remove('show');
  }
};
