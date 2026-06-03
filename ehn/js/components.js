/* ══════════════════════════════════════
   COMPONENTS.JS — render functions
══════════════════════════════════════ */

const Render = {

  /* ── UNIT ROW ── */
  unitRow(unit) {
    return `
      <div class="unit-row" onclick="Toast.show('${unit.msg}')">
        <div class="unit-icon ${unit.type}">
          <i class="ti ${unit.icon}"></i>
        </div>
        <div class="unit-info">
          <div class="unit-name">${unit.name}</div>
          <div class="unit-dist">${unit.dist}</div>
        </div>
        <div class="eta ${unit.etaClass}">${unit.eta}</div>
      </div>
    `;
  },

  /* ── QUICK ACTION CARD ── */
  qaCard(action) {
    return `
      <div class="qa-card" onclick="Toast.show('${action.msg}')">
        <i class="ti ${action.icon} ${action.color}"></i>
        <div>
          <div class="qa-t">${action.title}</div>
          <div class="qa-s">${action.sub}</div>
        </div>
      </div>
    `;
  },

  /* ── HOSPITAL CARD ── */
  hospitalCard(h) {
    const bars = h.beds.map(b => `
      <div class="bed-bar">
        <div class="bed-bar-num">${b.num}</div>
        <div class="bed-bar-track">
          <div class="bed-bar-fill ${b.cls}" style="width:${b.pct}%"></div>
        </div>
        <div class="bed-bar-label">${b.label}</div>
      </div>
    `).join('');

    return `
      <div class="hospital-card" onclick="Toast.show('Opening ${h.name} details...')">
        <div class="hosp-head">
          <div>
            <div class="hosp-name">${h.name}</div>
            <div class="hosp-dist">${h.dist}</div>
          </div>
          <div class="hosp-status ${h.status}">${h.statusLabel}</div>
        </div>
        <div class="bed-bars">${bars}</div>
      </div>
    `;
  },

  /* ── BLOOD CARD ── */
  bloodCard(b) {
    const label = b.donors === 0 ? 'No donors' : `${b.donors} donor${b.donors !== 1 ? 's' : ''}`;
    const msg   = b.donors === 0
      ? `No ${b.type} donors available nearby right now.`
      : `Contacting ${b.donors} ${b.type} donor${b.donors !== 1 ? 's' : ''} near you...`;

    return `
      <div class="blood-card" onclick="Toast.show('${msg}')">
        <div class="blood-type">${b.type}</div>
        <div class="blood-avail ${b.cls}">${label}</div>
      </div>
    `;
  },

  /* ── INFO ROW ── */
  infoRow(item) {
    return `
      <div class="info-row">
        <div>
          <div class="info-label">${item.label}</div>
          <div class="info-value">${item.value}</div>
        </div>
        <i class="ti ti-pencil" style="color:var(--text-dim);font-size:15px"></i>
      </div>
    `;
  },

  /* ── SETTING ROW ── */
  settingRow(item, idx) {
    const right = item.type === 'toggle'
      ? `<button class="toggle ${item.on ? 'on' : ''}" id="toggle-${idx}" onclick="Settings.toggle(${idx}, this)"></button>`
      : `<i class="ti ti-chevron-right setting-arrow"></i>`;

    return `
      <div class="setting-row">
        <div class="setting-left">
          <i class="ti ${item.icon}"></i>
          <span class="setting-title">${item.title}</span>
        </div>
        ${right}
      </div>
    `;
  },

  /* ── HISTORY ROW ── */
  historyRow(item) {
    return `
      <div class="history-row">
        <div class="history-dot" style="background:${item.color}"></div>
        <div>
          <div class="h-title">${item.title}</div>
          <div class="h-time">${item.time}</div>
        </div>
        <div class="h-badge" style="color:${item.badgeColor};background:${item.badgeBg}">${item.badge}</div>
      </div>
    `;
  },

  /* ── MOUNT ALL ── */
  all() {
    // Home page
    const unitList = document.getElementById('unitList');
    if (unitList) {
      unitList.innerHTML = DATA.units.slice(0, 4).map(Render.unitRow).join('');
    }

    const qaGrid = document.getElementById('qaGrid');
    if (qaGrid) {
      qaGrid.innerHTML = DATA.quickActions.map(Render.qaCard).join('');
    }

    // Map page
    const unitListMap = document.getElementById('unitListMap');
    if (unitListMap) {
      unitListMap.innerHTML = DATA.units.map(Render.unitRow).join('');
    }

    // Hospitals page
    const hospitalList = document.getElementById('hospitalList');
    if (hospitalList) {
      hospitalList.innerHTML = `
        <div class="sec-head"><div class="sec-title">Nearby Hospitals</div></div>
        ${DATA.hospitals.map(Render.hospitalCard).join('')}
      `;
    }

    const bloodGrid = document.getElementById('bloodGrid');
    if (bloodGrid) {
      bloodGrid.innerHTML = DATA.blood.map(Render.bloodCard).join('');
    }

    // Profile page
    const emergencyInfo = document.getElementById('emergencyInfo');
    if (emergencyInfo) {
      emergencyInfo.innerHTML = DATA.emergencyInfo.map(Render.infoRow).join('');
    }

    const settingsList = document.getElementById('settingsList');
    if (settingsList) {
      settingsList.innerHTML = DATA.settings.map((s, i) => Render.settingRow(s, i)).join('');
    }

    const historyList = document.getElementById('historyList');
    if (historyList) {
      historyList.innerHTML = DATA.history.map(Render.historyRow).join('');
    }
  }
};

/* ── SETTINGS HANDLER ── */
const Settings = {
  toggle(idx, btn) {
    DATA.settings[idx].on = !DATA.settings[idx].on;
    btn.classList.toggle('on');
    const state = DATA.settings[idx].on ? 'enabled' : 'disabled';
    Toast.show(`${DATA.settings[idx].title} ${state}`);
  }
};
