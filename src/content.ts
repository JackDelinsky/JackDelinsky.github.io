export type Status = 'operational' | 'in progress' | 'archived';

export interface Project {
  id: string;
  name: string;
  dateLabel: string;
  status: Status;
  stack: string[];
  summary: string;
  detail: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 'toros',
    name: 'Toros Dealer Growth & Distribution Platform',
    dateLabel: 'Jun 2026',
    status: 'operational',
    stack: ['Custom GPT', 'Prompt Engineering', 'Client Strategy'],
    summary:
      'A custom GPT for Toros Knife & Tool, grounded in six knowledge bases covering product intelligence, retailer leads, and dealer rankings.',
    detail:
      'Built a 1–5 fit-score and A–D priority methodology to rank retail leads, then generated personalized outreach from that scoring. Wrote the v1.0 strategy document the client is running on.',
  },
  {
    id: 'ops-reporting',
    name: 'Operations Reporting Tool',
    dateLabel: '2026',
    status: 'in progress',
    stack: ['Python', 'OpenAI API'],
    summary:
      'Plain-English weekly ops reports generated from raw data — code mixed with an LLM, not an autonomous agent.',
    detail:
      'Takes structured weekly data and turns it into a short written report a non-technical stakeholder can read in under a minute, cutting the manual write-up time.',
  },
  {
    id: 'clearpath',
    name: 'ClearPath v1',
    dateLabel: '2025',
    status: 'archived',
    stack: ['TypeScript'],
    summary: 'An early AI decision-support concept for prioritization.',
    detail:
      'One of the first real projects I shipped — a TypeScript app for helping prioritize competing decisions. Rougher than what I\u2019d build today, kept public as a record of where this started.',
    link: 'https://github.com/JackDelinsky/clearpath',
  },
  {
    id: 'baby-names',
    name: 'NYC Baby Names Analysis',
    dateLabel: '2025',
    status: 'archived',
    stack: ['SQL', 'Tableau'],
    summary:
      'A group study of 69,000 NYC birth records, tracing how name popularity tracks media exposure.',
    detail:
      'Cleaned and merged casing-duplicated names, converted birth year to a proper date type, and traced patterns like naming spikes that follow TV exposure.',
    link: 'https://github.com/JackDelinsky/Project-2',
  },
];

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  dateLabel: string;
  detail: string;
}

export const experience: ExperienceItem[] = [
  {
    id: 'uga-competitive-sports',
    role: 'Program Assistant',
    org: 'UGA Competitive Sports',
    dateLabel: 'Aug 2026 — Present',
    detail:
      'Top of the staff ladder (Referee \u2192 Supervisor \u2192 Site Manager \u2192 Program Assistant). Reviews and rules on club player waivers, runs day-to-day operations, and trains other Program Assistants.',
  },
  {
    id: 'tensar',
    role: 'Inside Sales Engineer Intern',
    org: 'Tensar (a division of CMC)',
    dateLabel: 'May — Aug 2024',
    detail:
      'Customer requirements analysis and a LATAM market analysis presented directly to leadership.',
  },
];

export const statusLabel: Record<Status, string> = {
  operational: 'operational',
  'in progress': 'in progress',
  archived: 'archived',
};
