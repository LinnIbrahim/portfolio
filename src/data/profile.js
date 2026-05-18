// ─────────────────────────────────────────────────────────────
//  Single source of truth for all site content.
//  Edit values here — no need to touch the components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Lin Ibrahim',
  initials: 'LI',
  roles: ['Website Designer', 'Software Engineer', 'Humanitarian'],
  location: 'Gent, Belgium',

  // Hero
  tagline:
    'I build human-centric software for the one — not the aggregate.',
  intro:
    'Full-stack engineer and product builder who designs for the person at the edge of the spreadsheet, not the average in the middle of it. The 1% you usually round away is exactly who I design for.',

  // About
  about: [
    'I’m a full-stack engineer with hands-on experience across data engineering, product development, and the unglamorous craft of good technical documentation. I’ve taken data pipelines from 90% to 98% processing accuracy and shipped in-house software, AI models, and recommendation systems for a live online travel agency.',
    'What ties my work together is a stubborn belief: the aggregate hides the people who need design the most. I optimise for the traveller, the small business, the person walking into a space hoping it’s safe for them — and trust that building well for them builds well for everyone.',
  ],

  languages: [
    { name: 'Chinese', level: 'Native' },
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'C1' },
    { name: 'Dutch', level: 'B1' },
  ],

  // Selected work
  work: [
    {
      title: 'EME Tour',
      kind: 'Product · Full-Stack · Recommendation Systems',
      year: '2023 — Present',
      href: 'https://emetour.com',
      linkLabel: 'emetour.com',
      blurb:
        'An online travel agency rebuilt around a human-centric thesis: design the trip for the individual traveller — the 1% — rather than the statistical average. I led product development and the technical migration, deploying in-house OTA software, AI models, and a recommendation system that treats taste as personal, not demographic.',
      tags: ['React', 'Node.js', 'AI / Recsys', 'Product', 'ERP (Odoo)'],
      featured: true,
      // Swap for a real screenshot: drop a file in public/work/ and point here.
      image: '/work/eme.svg',
      imageAlt: 'EME Tour — a personal itinerary connecting destinations',
    },
    {
      title: 'FindAnything',
      kind: 'Open Source · Platform · Maps',
      year: '2025 — Present',
      href: '',
      linkLabel: '',
      blurb:
        'An open-source platform making small, easily-overlooked businesses visible on the map. The aggregate favours the chains; FindAnything is built so the corner shop shows up too — mapping integration, containerised, and community-run.',
      tags: ['Docker', 'Kubernetes', 'OpenStreetMap', 'Open Source'],
      featured: false,
      image: '/work/findanything.svg',
      imageAlt: 'FindAnything — one small business made visible on a quiet map',
    },
    {
      title: 'Point-Cloud AI Pipeline',
      kind: 'Data Engineering · Kapernikov',
      year: '2025',
      href: '',
      linkLabel: '',
      blurb:
        'Led integration of deep neural networks into a production data pipeline, lifting processing accuracy from 90% to 98% and enabling real-time analytics over 10+ TB point-cloud datasets. Containerised a C++ / CMake PyTorch classification model with Docker.',
      tags: ['Python', 'PyTorch', 'Docker', 'Data Pipelines'],
      featured: false,
      image: '/work/pointcloud.svg',
      imageAlt: 'Point-Cloud AI Pipeline — noisy data resolving into a classified signal',
    },
  ],

  // Experience timeline
  experience: [
    {
      role: 'Full-Stack Engineer & Technical Migration',
      org: 'EME International SARL',
      place: 'Remote',
      period: 'Sep 2023 — Present',
      points: [
        'Lead product development and product management for a growing travel startup.',
        'Deployed in-house software for an online travel agency, including AI models and recommendation systems.',
        'Authored technical documentation, process guides, and training materials.',
      ],
    },
    {
      role: 'Data Engineer (Intern)',
      org: 'Kapernikov',
      place: 'Brussels · Hybrid',
      period: 'Feb 2025 — Apr 2025',
      points: [
        'Led integration of deep neural networks into a production data pipeline.',
        'Improved data processing accuracy from 90% to 98% via pipeline optimisation.',
        'Enabled real-time analytics for 10+ TB point-cloud datasets.',
      ],
    },
  ],

  // Skills
  skills: [
    { group: 'Languages', items: ['Python', 'SQL', 'JavaScript', 'Java', 'C'] },
    {
      group: 'Web & APIs',
      items: ['React', 'Node.js', 'REST APIs', 'HTML / CSS'],
    },
    {
      group: 'Data & Analytics',
      items: ['Dagster', 'PostgreSQL', 'Power BI', 'ETL / ELT', 'PyTorch'],
    },
    {
      group: 'Cloud & DevOps',
      items: ['Docker', 'Kubernetes', 'Azure DevOps', 'Git / GitHub', 'CI/CD'],
    },
    {
      group: 'Ways of Working',
      items: ['Agile / SCRUM', 'Jira', 'ERP (Odoo)', 'Technical Writing'],
    },
  ],

  // Humanitarian
  humanitarian: {
    role: 'Core Team Lead',
    org: 'Casa Rosa, Gent',
    period: 'Feb 2026 — Present (Care Worker since Aug 2025)',
    points: [
      'Manage volunteers and hold a safe, inclusive space for the LGBTQ+ community.',
      'Record and track KPIs to drive concrete organisational improvement.',
    ],
    note:
      'The same instinct that shapes my engineering shapes my volunteering: build for the person who is usually designed around.',
  },

  // Education
  education: {
    degree: 'B.Sc. Computer Science — Minor in Sustainability & AI',
    school: 'Lebanese American University, Beirut',
    detail: 'June 2023 · GPA 3.2 · NARIC-recognised · +30 ECTS at Ghent University',
  },

  // ── Contact / links ──────────────────────────────────────────
  contact: {
    email: 'linn.ibrahim@outlook.com',
    github: 'https://github.com/LinnIbrahim',
    githubLabel: 'github.com/LinnIbrahim',
    linkedin: 'https://www.linkedin.com/in/linibrahim/',
    linkedinLabel: 'linkedin.com/in/linibrahim',
    cv: '/Lin_Ibrahim_CV.pdf',
  },
}
