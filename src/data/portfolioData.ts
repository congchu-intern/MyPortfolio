import { Project, SkillItem, TimelineItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Cong Chu',
  callsign: 'CongDz.DEV',
  version: 'v2.5',
  headline: 'Software Developer | Cybersecurity Enthusiast',
  bio: 'I build modern digital experiences and explore the world of technology, security, and software engineering. Turning vulnerabilities into strengths, one line of code at a time.',
  location: 'Thai Binh / Hung Yen, Vietnam',
  education: 'B.S. Software Engineering',
  graduation: 'Graduating 2026',
  focus: 'Modern Fullstack & SecOps',
  experience: 'Junior / Mid-ready',
  spokenLanguages: 'Vietnamese (Native), English (Professional)',
  interests: 'CTFs, Homelabs, Microservices',
  email: 'congngungo2005@gmail.com',
  github: 'https://github.com/congchu-intern',
  githubHandle: 'congchu-dev',
  linkedin: '',
  linkedinHandle: '',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBC4GwNcwmBoiTd4AbECHnbLNTizrWxhY0v8jHns_sHUDVgxXSyvKylFfW7x3ad5xgs1lOEs9AVctSdOKKN69jQ9ic2hG9Ad6bP7-OZzQ2U6hpmjLNST5JaFigod2esi5mOWawA1egrKVoLIb1NHXYYNtLCqOVtoO6v_EoKy0ZiK7Qbnkmf4XI5I45pIj94rAR8nDwHqN9DFtXKDjEvXl05vvUcQgvcaeTFAnlDNzLr7hPfpcmSsngxnw',
  stats: [
    { value: '3+', unit: 'YRS', label: 'Coding Journey', color: 'text-cyber-neon-cyan' },
    { value: '15+', unit: 'REPOS', label: 'Shipped & Tested', color: 'text-cyber-electric-blue' },
    { value: '100%', unit: 'SEC', label: 'Focus on Safety', color: 'text-emerald-400' },
  ],
};

export const CORE_SKILLS: SkillItem[] = [
  { name: 'C++', subtext: 'Algorithms & OOP', level: 80, description: 'Memory management, pointers, STL, data structures, and algorithmic complexity.' },
  { name: 'Java', subtext: 'Enterprise & Spring', level: 78, description: 'OOP architecture, JDBC connection pooling, multi-threading, and Spring Boot basics.' },
  { name: 'Python', subtext: 'Scripting & Automation', level: 85, description: 'Network packet crafting, automated web scraping, data parsing, and test scripts.' },
  { name: 'JavaScript / TypeScript', subtext: 'Modern ES6+', level: 90, description: 'Type-safe interfaces, async/await, closures, functional patterns, and browser APIs.' },
];

export const WEB_SKILLS = [
  { name: 'React.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'HTML5 / Semantic', category: 'Frontend' },
  { name: 'CSS3 / Tailwind', category: 'Frontend' },
  { name: 'RESTful APIs', category: 'API' },
];

export const DB_SKILLS = [
  {
    name: 'SQL Server (T-SQL)',
    details: 'Stored Procedures, Indexes, Triggers & Relational Schema Design.',
    tag: 'Enterprise DB',
  },
  {
    name: 'MySQL',
    details: 'Normalization (3NF), Query Optimization, ACID Compliance.',
    tag: 'Web Standard',
  },
];

export const TOOLS_SKILLS = [
  { name: 'Git & GitHub', type: 'VCS' },
  { name: 'Linux (Debian/Ubuntu)', type: 'OS' },
  { name: 'Docker Containers', type: 'Virtualization' },
  { name: 'Bash Scripting', type: 'Automation' },
  { name: 'Postman API Testing', type: 'QA' },
];

export const CYBER_SKILLS = [
  {
    title: 'Networking Basics',
    description: 'TCP/IP model, DNS resolution, Wireshark packet capture & HTTP header analysis.',
    color: 'text-cyber-neon-cyan',
  },
  {
    title: 'Linux Server Hardening',
    description: 'SSH keys, UFW/iptables firewalls, Fail2ban, file permissions (chmod/chown).',
    color: 'text-cyber-electric-blue',
  },
  {
    title: 'Web Security Concepts',
    description: 'Prevention of SQL Injection, XSS, CSRF, Secure Cookies & JWT auth flows.',
    color: 'text-teal-300',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'student-mgmt',
    number: '01',
    title: 'Student Management System',
    badge: 'FULLSTACK APP',
    category: 'Fullstack App',
    description: 'A desktop and web-compatible management system designed to process student enrollments, academic transcripts, and course scheduling with parameterized database queries.',
    tags: ['Java', 'SQL Server', 'JDBC', 'OOP Design'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtpE5DTIc_nbbr8fZorR4lkHb3AC1BZDwrSJbuJjduCHC915zSrhn_T5hsIrtNz3T6T7We1krfM-aXecSzOidpiOprjUbaQ8hovJRIpGuzUfavtIfkFXsEBeA2k0dQ7sajKC1wfLcbTHwGWzNYsZmUhw3RxmDBAm8ao_UPvsbAdmb2-ZRQ_MBh2ACS1mPPDWrra3wWKu_OocCY_OOgKKLV1hpIItt0TjFPnFIkLge83eW8PPUxCBkO9w',
    mockupType: 'sms',
    mockupData: {
      title: 'SMS_DASHBOARD.EXE',
      metrics: [
        { label: 'Total Students', value: '1,248', color: 'text-cyber-neon-cyan' },
        { label: 'Enrolled Courses', value: '48', color: 'text-cyber-electric-blue' },
        { label: 'Avg GPA', value: '3.62', color: 'text-white' },
      ],
      statusBadge: 'Role-based Access Control [RBAC] Active',
    },
    details: {
      overview: 'Comprehensive academic administration system built with Java and Microsoft SQL Server. It handles over 1,200 student records, automated GPA computation, course prerequisites validation, and role-based permissions separating faculty from students.',
      features: [
        'Secure multi-tier role-based access control (Admin, Professor, Student).',
        'Parameterized SQL queries and stored procedures to mitigate SQL injection.',
        'High-speed batch transcript generation and export to PDF/Excel.',
        'Real-time prerequisite validation preventing illegal course enrollments.',
      ],
      architecture: 'Model-View-Controller (MVC) architecture with DAO layer pattern using JDBC connection pooling.',
      securityMeasures: [
        'Bcrypt salted password hashing for all user accounts.',
        'Zero dynamic string concatenation in SQL statements.',
        'Granular database transaction rollbacks for concurrent course registrations.',
      ],
      githubRepo: 'https://github.com/alex-dev-cyber/student-management-system',
    },
  },
  {
    id: 'cyber-portfolio',
    number: '02',
    title: 'Personal Portfolio Website',
    badge: 'UI/UX & FRONTEND',
    category: 'UI/UX & Frontend',
    description: 'Futuristic developer portfolio built with cyber grid effects, interactive terminal emulator, and accessibility-first motion controls.',
    tags: ['HTML5/CSS3', 'Tailwind CSS', 'JavaScript', 'Cyberpunk Dark UI'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbTuaz7zKlVcfx0gCzKV69ea0ExKr58u2x-HndKEPcm3FlpUeRZAshEYXcG-CNpeFhjEfmms0gmSMzMndcmcuGIJuS1mJc54MhQS5MUbXcX_byN-M28OlNnGh1-L60zNvxGzVLJMnl30-KB7ZRz1che3xqeoc9DqUvOp0ZEw0WI9vXvfyoi6P4Xp-u6z0ErV1-QqpPbulfR0rEgL570rs5smwOoN6VQ_pxWmzqJqN-7d8daSDsuQefAw',
    mockupType: 'portfolio',
    mockupData: {
      title: '<CYBER_PORTFOLIO />',
      codeSnippet: [
        "const theme = 'Dark Tech + Neon Blue';",
        '// High contrast, zero lag, fully responsive',
        'return <InteractiveTerminal />;',
      ],
      footerNotes: {
        left: 'Lighthouse Score: 98',
        right: 'Tailwind + Vanilla JS',
      },
    },
    details: {
      overview: 'Engineered as a showcase of modern frontend capabilities, dark cyberpunk aesthetics, and ultra-crisp micro-interactions. Includes an embedded interactive Linux terminal emulator, audio synthesizer, and responsive layout.',
      features: [
        'Interactive pseudo-bash terminal supporting 10+ custom commands.',
        'Custom Web Audio API synthesizer for retro tactile sound effects.',
        'Zero layout shifts (CLS < 0.01) and 98+ Lighthouse performance.',
        'Ambient interactive neon lighting and toggleable matrix effects.',
      ],
      architecture: 'Single Page Application utilizing modern component hierarchy, Tailwind CSS design system, and Web Audio API synthesis.',
      securityMeasures: [
        'Content Security Policy (CSP) compliant without third-party tracker scripts.',
        'Sanitized client-side inputs and rate-limiting on interactive forms.',
      ],
      githubRepo: 'https://github.com/alex-dev-cyber/alex-cyber-portfolio',
      liveDemoUrl: '#hero',
    },
  },
  {
    id: 'db-management',
    number: '03',
    title: 'Database Management Application',
    badge: 'DATABASE UTILITY',
    category: 'Database Utility',
    description: 'A custom desktop administration client to manage schema migrations, execute normalized relational queries, and export reports with automated backup scripts.',
    tags: ['C++ / C#', 'SQL Server', 'MySQL', 'Query Optimizer'],
    mockupType: 'database',
    mockupData: {
      title: 'SQL_QUERY_EXECUTOR',
      statusBadge: 'TRANSACTION: COMMITTED',
      logs: [
        '> SELECT p.id, p.name, SUM(o.total) FROM orders...',
        'Query executed in 0.0042s. 256 rows returned.',
        'Index SCAN on idx_order_date [OPTIMIZED]',
      ],
      footerNotes: {
        left: '[!] Sanitized PreparedStatements Enabled',
        right: 'ACID Enforced',
      },
    },
    details: {
      overview: 'High-performance desktop database administration utility designed for querying, schema inspection, index analysis, and automated nightly dumps for MySQL and SQL Server.',
      features: [
        'Visual query plan inspector highlighting missing clustered/non-clustered indexes.',
        'Automated database dump creation with gzip compression and SHA256 checksums.',
        'Data migration pipeline between heterogeneous SQL engines.',
        'Transaction safety monitor with deadlock warning alerts.',
      ],
      architecture: 'Native C++ query engine with C# WPF frontend interface and asynchronous connection management.',
      securityMeasures: [
        'Encrypted credentials storage using OS DPAPI (Data Protection API).',
        'Read-only sandbox mode preventing accidental DROP/TRUNCATE in production.',
      ],
      githubRepo: 'https://github.com/alex-dev-cyber/db-query-optimizer-client',
    },
  },
  {
    id: 'linux-game-admin',
    number: '04',
    title: 'Linux Server / Dedicated Game Administration',
    badge: 'SYSADMIN & NETWORKING',
    category: 'Sysadmin & Networking',
    description: 'Deployed and maintained hardened Linux servers hosting multi-user game networks. Configured automated failovers, player permission nodes, and DDoS-resistant routing.',
    tags: ['Linux Ubuntu', 'Bash Automation', 'Docker', 'Firewall / IPTables'],
    mockupType: 'sysadmin',
    mockupData: {
      title: 'SYSTEMD: srv-node-01.service',
      statusBadge: '● ACTIVE (RUNNING)',
      logs: [
        'root@srv01:~$ htop --filter minecraft',
        'RAM: 4.8GB / 16.0GB | CPU: 12% | Uptime: 45 days',
        'Auto-backup daemon: sync to offsite encrypted storage OK',
      ],
      footerNotes: {
        left: 'PORT: 25565 / TCP',
        right: 'DDoS Mitigation: Cloudflare Spectrum',
      },
    },
    details: {
      overview: 'Production deployment and 24/7 maintenance of Linux servers servicing dedicated game nodes. Implemented containerized micro-daemons, automated offsite S3-compatible backups, and custom iptables rate-limiting rules against SYN floods.',
      features: [
        'Custom bash cron automation for memory garbage collection and log rotation.',
        'Docker containerization with resource limits (cgroups memory and CPU shares).',
        'UFW & IPTables firewall hardening with Fail2ban brute-force protection.',
        'Offsite encrypted rsync backups running on differential schedule.',
      ],
      architecture: 'Debian/Ubuntu LTS server stack, Docker container runtimes, systemd service supervision, and Cloudflare reverse proxy.',
      securityMeasures: [
        'Disabled password authentication; Ed25519 SSH keys only on non-standard ports.',
        'Restricted sudo access and strict file ownership permissions.',
        'Automated security patch deployment with unattended-upgrades.',
      ],
      githubRepo: 'https://github.com/alex-dev-cyber/linux-server-configs',
    },
  },
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'edu-bachelor',
    period: '2021 — PRESENT (EXPECTED 2025)',
    category: 'BACHELOR DEGREE',
    role: 'Bachelor of Science in Software Engineering',
    organization: 'University of Technology & Science',
    description: 'Comprehensive coursework encompassing Advanced Algorithms, Relational Database Management Systems, Object-Oriented Software Design in Java & C++, Computer Architecture, and Operating Systems.',
    achievements: [
      'GPA 3.6 / 4.0',
      "Dean's Honor List",
      'Cybersecurity Club Core Member',
    ],
  },
  {
    id: 'labs-cyber',
    period: '2023 — 2024',
    category: 'PRACTICAL LABS & CTF',
    role: 'Independent Cybersecurity Labs & Research',
    organization: 'PortSwigger Web Academy & TryHackMe',
    description: 'Practiced vulnerability detection, exploiting misconfigured CORS headers, CSRF tokens, and SQL injections in sandbox lab environments. Set up isolated virtual machines running Kali Linux and victim servers to test firewall resilience.',
    achievements: [
      'Top 15% TryHackMe',
      'Burp Suite Fundamentals',
      'OWASP Top 10 Hands-on Practical Labs',
    ],
  },
  {
    id: 'sysadmin-work',
    period: '2022 — 2023',
    category: 'SYSADMIN ROLE',
    role: 'Systems & Game Infrastructure Administrator',
    organization: 'Community Multiplayer Network (Freelance / Personal Project)',
    description: 'Administered a dedicated Debian Linux machine servicing 100+ concurrent players. Configured automated BASH scripts for nightly world backups, synchronized state via MySQL, and managed DDoS protection.',
    achievements: [
      '99.9% Uptime Maintained',
      'Automated Cron Backups',
      'Zero Data Loss Across 12 Months',
    ],
  },
];
