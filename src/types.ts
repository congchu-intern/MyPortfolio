export interface Project {
  id: string;
  number: string;
  title: string;
  badge: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  mockupType: 'sms' | 'portfolio' | 'database' | 'sysadmin';
  mockupData: {
    title: string;
    metrics?: { label: string; value: string; color?: string }[];
    statusBadge?: string;
    codeSnippet?: string[];
    logs?: string[];
    footerNotes?: { left: string; right: string };
  };
  details: {
    overview: string;
    features: string[];
    architecture: string;
    securityMeasures: string[];
    githubRepo: string;
    liveDemoUrl?: string;
  };
}

export interface SkillItem {
  name: string;
  subtext: string;
  level: number;
  description?: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  category: string;
  role: string;
  organization: string;
  description: string;
  achievements: string[];
  tags?: string[];
}
