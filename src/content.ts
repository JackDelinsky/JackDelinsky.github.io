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
    link: 'https://github.com/JackDelinsky/toros-knife-tool',
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
