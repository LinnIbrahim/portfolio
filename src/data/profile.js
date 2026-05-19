// ─────────────────────────────────────────────────────────────
//  Single source of truth for all site content.
//  Edit values here — no need to touch the components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Lin Ibrahim',
  initials: 'LI',
  roles: ['Founder & Technical Lead', 'Engineer & Designer', 'Humanitarian'],
  location: 'Gent, Belgium',

  // Hero
  tagline:
    'Creating software for the people — and making the community safer for everyone.',
  intro:
    'Founder and technical lead who builds software that serves people, not averages. I work where technology meets impact: tourism that fits every background and budget, communities that are safer for everyone, and the one person the spreadsheet rounds away.',
  openTo: 'Open to founding-team, product & impact-driven work',

  // About — in my own words
  about: [
    'I want to create impact in today’s society and give back what I’ve learnt — by empowering technology to serve people, not the other way round.',
    'As Founder & Technical Lead at EME, that impact lives in tourism: an intersection of tradition and modernity that helps everyone enjoy their vacation, whatever their background or budget — because everyone deserves to travel.',
    'Beyond product, I teach, research the human side of AI, and volunteer to make my community safer for everyone. Risk, sustainability, project management, people — that work matters to me as much as the code does.',
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
      kind: 'Founder & Technical Lead · Product · AI',
      year: '2023 — Present',
      href: 'https://emetour.com',
      linkLabel: 'emetour.com',
      blurb:
        'A travel platform built on a human-centric thesis: design the trip for the individual — whatever their background or budget — rather than the statistical average. As founder and technical lead I drive product, the technical migration, and an in-house OTA stack with AI models and a recommendation system that treats taste as personal, not demographic.',
      tags: ['Product', 'React', 'Node.js', 'AI / Recsys', 'Leadership'],
      featured: true,
      image: '/work/eme.jpg',
      imageAlt:
        'EME Tour landing page — “Your perfect trip, designed by you”, a free multi-country itinerary planner',
      imagePosition: 'top center',
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
      image: '/work/findanything.jpg',
      imageAlt: 'FindAnything landing page — “Find Anything Near You” over an interactive map of New York with a single business pinned',
    },
    {
      title: 'Echo',
      kind: 'Open Source · Developer Tooling',
      year: '2025 — 2026',
      href: 'https://github.com/MiguelIbrahimE/echo',
      linkLabel: 'github.com/MiguelIbrahimE/echo',
      blurb:
        'Open-source software that writes and maintains documentation automatically. Good docs are how a project includes the next person, not just its authors — Echo lowers the cost of being understood.',
      tags: ['Open Source', 'Automation', 'Documentation', 'Git'],
      featured: false,
      image: '/work/echo.svg',
      imageAlt: 'Echo — a single source rippling out into generated documentation',
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
      image: '/work/kapernikov.jpg',
      imageAlt:
        'RGB-classified LiDAR point cloud of a railway corridor, rendered in the Entwine EPT viewer',
    },
  ],

  // Experience timeline — the whole arc, not just the code
  experience: [
    {
      role: 'Founder & Technical Lead',
      org: 'EME International SARL',
      place: 'Remote · Full-time',
      period: 'Sep 2023 — Present',
      points: [
        'Founded and lead product, engineering and digital transformation for a travel startup.',
        'Shipped in-house OTA software, AI models and recommendation systems.',
        'Lead a small team and own product management, technical writing and training.',
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
    {
      role: 'IT Trainer',
      org: 'Geek Express',
      place: 'Remote · Part-time',
      period: 'Nov 2022 — Jun 2023',
      points: [
        'Taught IT and programming, making technical concepts approachable for learners.',
        'Customer support and troubleshooting through a teaching lens.',
      ],
    },
    {
      role: 'General Assistant (Teaching)',
      org: 'Lebanese American University',
      place: 'Beirut · On-site',
      period: 'Jan 2021 — Jan 2023',
      points: [
        'Mentored generations of students through programming and its real-world uses.',
      ],
    },
    {
      role: 'Assistant Researcher (Intern)',
      org: 'CISH — UNESCO, Byblos',
      place: 'Jbeil · Hybrid',
      period: 'Nov 2021 — Apr 2022',
      points: [
        'Researched AI and its effect on humanity — a volunteer-type research internship.',
      ],
    },
  ],

  // Skills — led by what I do, not just what I use
  skills: [
    {
      group: 'Leadership & Product',
      items: [
        'Founder Mindset',
        'Technical Leadership',
        'Product Management',
        'Project Management',
        'Consulting',
        'Digital Transformation',
      ],
    },
    {
      group: 'People & Impact',
      items: [
        'Teaching & Mentoring',
        'Community Building',
        'Human-centric Design',
        'Sustainability',
        'Risk Assessment',
      ],
    },
    {
      group: 'Engineering',
      items: ['Python', 'JavaScript', 'React', 'Node.js', 'Java', 'C', 'SQL'],
    },
    {
      group: 'Data & AI',
      items: ['Data Pipelines (Dagster)', 'PyTorch', 'PostgreSQL', 'ETL / ELT', 'Power BI'],
    },
    {
      group: 'Cloud & Craft',
      items: ['Docker', 'Kubernetes', 'CI/CD', 'Technical Writing', 'Agile / SCRUM'],
    },
  ],

  // Community / humanitarian
  humanitarian: {
    role: 'Core Volunteer',
    org: 'Casa Rosa — Regenbooghuis, Gent',
    period: 'Aug 2025 — Present · Human Rights 🏳️‍⚧️🏳️‍🌈',
    points: [
      'Manage volunteers and hold a safe, inclusive space for LGBTQ+ and non-LGBTQ+ people alike.',
      'Foster a community where people feel safer in their own city.',
      'Record and track KPIs to drive concrete organisational improvement.',
    ],
    note:
      'The same instinct that shapes my engineering shapes my volunteering: build for the person who is usually designed around.',
  },

  // Education & credentials
  education: {
    degree: 'B.Sc. Computer Science — Minor in Sustainability & AI',
    school: 'Lebanese American University, Beirut',
    detail: 'Jun 2023 · GPA 3.2 · NARIC-recognised',
    also:
      'Graduate coursework at Ghent University — Advanced ML, Distributed Systems, Cloud & Sustainable Computing. Certified: Stanford (Writing in the Sciences) · Google (IT Support).',
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
