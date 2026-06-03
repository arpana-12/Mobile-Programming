/* ══════════════════════════════════════
   NAV.JS — page navigation
══════════════════════════════════════ */

const Nav = {
  current: 'home',

  go(page, btn) {
    if (this.current === page) return;

    // Hide current page
    const currentPage = document.getElementById(`page-${this.current}`);
    if (currentPage) currentPage.classList.remove('active');

    // Show new page
    const newPage = document.getElementById(`page-${page}`);
    if (newPage) {
      newPage.classList.add('active');
      // Scroll to top
      const scroll = document.getElementById('mainScroll');
      if (scroll) scroll.scrollTop = 0;
    }

    // Update nav buttons
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });

    // Activate clicked or find matching button
    if (btn) {
      btn.classList.add('active');
    } else {
      const match = document.querySelector(`.nav-item[data-page="${page}"]`);
      if (match) match.classList.add('active');
    }

    this.current = page;
  }
};
