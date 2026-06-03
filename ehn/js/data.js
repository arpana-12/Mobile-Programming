/* ══════════════════════════════════════
   DATA.JS — all app data
══════════════════════════════════════ */

const DATA = {

  units: [
    { id: 1, type: 'a', icon: 'ti-ambulance',        name: 'Ambulance AMB-04', dist: '1.2 km · Baneswor',  eta: '4 min',  etaClass: 'fast', msg: 'Dispatching AMB-04 to your location...' },
    { id: 2, type: 'h', icon: 'ti-building-hospital', name: 'Norvic Hospital',  dist: '1.8 km · 4 beds free', eta: '6 min', etaClass: 'fast', msg: 'Contacting Norvic Hospital...' },
    { id: 3, type: 'p', icon: 'ti-badge',             name: 'Police Unit PL-07', dist: '2.3 km · Maitighar', eta: '8 min', etaClass: 'mid',  msg: 'Alerting Police Unit PL-07...' },
    { id: 4, type: 'a', icon: 'ti-ambulance',         name: 'Ambulance AMB-09', dist: '3.1 km · Koteshwor', eta: '11 min', etaClass: 'mid', msg: 'Dispatching AMB-09 to your location...' },
    { id: 5, type: 'f', icon: 'ti-flame',             name: 'Fire Brigade FB-02', dist: '4.0 km · Kalanki',  eta: '14 min', etaClass: 'slow', msg: 'Alerting Fire Brigade FB-02...' },
    { id: 6, type: 'd', icon: 'ti-heart',             name: 'Blood Donor — O+', dist: '0.9 km · Lazimpat',  eta: '3 min',  etaClass: 'fast', msg: 'Contacting O+ donor near you...' },
  ],

  quickActions: [
    { icon: 'ti-ambulance',          color: 'r', title: 'Call Ambulance',   sub: 'Nearest dispatch',      msg: 'Dispatching nearest ambulance to your location...' },
    { icon: 'ti-droplet',            color: 'r', title: 'Blood Request',    sub: 'Urgent donor match',    msg: 'Finding emergency blood donors near you...' },
    { icon: 'ti-building-hospital',  color: 'b', title: 'Hospital Beds',   sub: 'Real-time ICU status',  msg: 'Checking ICU bed availability at nearby hospitals...' },
    { icon: 'ti-badge',              color: 'a', title: 'Call Police',      sub: 'Nearest unit',          msg: 'Alerting the nearest police unit...' },
    { icon: 'ti-flame',              color: 'o', title: 'Fire Brigade',     sub: 'Emergency response',    msg: 'Alerting fire brigade to your location...' },
    { icon: 'ti-alert-triangle',     color: 'r', title: 'Report Incident',  sub: 'Alert nearby units',    msg: 'Broadcasting incident report to all nearby units...' },
  ],

  hospitals: [
    {
      name: 'Norvic International Hospital',
      dist: '1.8 km · Thapathali',
      status: 'open', statusLabel: 'Open',
      beds: [
        { label: 'General', num: 8,  pct: 80, cls: 'g' },
        { label: 'ICU',     num: 4,  pct: 50, cls: 'a' },
        { label: 'ER',      num: 2,  pct: 30, cls: 'a' },
      ]
    },
    {
      name: 'B&B Hospital',
      dist: '2.4 km · Gwarko',
      status: 'busy', statusLabel: 'Busy',
      beds: [
        { label: 'General', num: 3,  pct: 30, cls: 'a' },
        { label: 'ICU',     num: 1,  pct: 20, cls: 'r' },
        { label: 'ER',      num: 5,  pct: 60, cls: 'g' },
      ]
    },
    {
      name: 'Bir Hospital',
      dist: '3.1 km · Mahaboudha',
      status: 'open', statusLabel: 'Open',
      beds: [
        { label: 'General', num: 15, pct: 75, cls: 'g' },
        { label: 'ICU',     num: 6,  pct: 60, cls: 'g' },
        { label: 'ER',      num: 4,  pct: 40, cls: 'a' },
      ]
    },
    {
      name: 'Nepal Medical College',
      dist: '5.2 km · Jorpati',
      status: 'full', statusLabel: 'Full',
      beds: [
        { label: 'General', num: 0,  pct: 0,  cls: 'r' },
        { label: 'ICU',     num: 0,  pct: 0,  cls: 'r' },
        { label: 'ER',      num: 1,  pct: 10, cls: 'r' },
      ]
    },
  ],

  blood: [
    { type: 'A+',  donors: 15, cls: 'hi'  },
    { type: 'B+',  donors: 12, cls: 'hi'  },
    { type: 'O+',  donors: 20, cls: 'hi'  },
    { type: 'AB+', donors: 2,  cls: 'lo'  },
    { type: 'A−',  donors: 1,  cls: 'lo'  },
    { type: 'B−',  donors: 3,  cls: 'lo'  },
    { type: 'O−',  donors: 8,  cls: 'hi'  },
    { type: 'AB−', donors: 0,  cls: 'zero'},
  ],

  emergencyInfo: [
    { label: 'Full Name',     value: 'Ramesh Shrestha' },
    { label: 'Blood Type',    value: 'O+' },
    { label: 'Allergies',     value: 'Penicillin' },
    { label: 'Conditions',    value: 'None' },
    { label: 'Emergency Contact', value: 'Sita Shrestha — +977 98XXXXXXXX' },
    { label: 'Insurance',     value: 'Nepal Health Insurance' },
  ],

  settings: [
    { icon: 'ti-bell',          title: 'Emergency Alerts',   type: 'toggle', on: true  },
    { icon: 'ti-map-pin',       title: 'Location Sharing',   type: 'toggle', on: true  },
    { icon: 'ti-heart',         title: 'Donor Mode',         type: 'toggle', on: false },
    { icon: 'ti-shield',        title: 'Privacy Mode',       type: 'toggle', on: false },
    { icon: 'ti-language',      title: 'Language',           type: 'arrow',  val: 'English' },
    { icon: 'ti-info-circle',   title: 'About EHN',          type: 'arrow'  },
  ],

  history: [
    { title: 'SOS Alert Sent',        time: '2 days ago',  color: '#ff2222', badge: 'Resolved',  badgeColor: '#4ade80', badgeBg: 'rgba(74,222,128,0.12)' },
    { title: 'Blood Request — O+',    time: '5 days ago',  color: '#ff2222', badge: 'Matched',   badgeColor: '#4ade80', badgeBg: 'rgba(74,222,128,0.12)' },
    { title: 'Ambulance Called',      time: '2 weeks ago', color: '#fbbf24', badge: 'Completed', badgeColor: '#fbbf24', badgeBg: 'rgba(251,191,36,0.12)'  },
    { title: 'Incident Reported',     time: '1 month ago', color: '#3b82f6', badge: 'Resolved',  badgeColor: '#4ade80', badgeBg: 'rgba(74,222,128,0.12)' },
  ],
};
