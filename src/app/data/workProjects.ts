import type { Role, Domain, Platform, Method } from '../lib/taxonomy';

export type WorkProject = {
  title: string;
  role: string;
  timeline: string;
  outcome: string;
  /** Taxonomy for display chips on project cards */
  taxonomy: {
    role: Role;
    domain: Domain;
    platform: Platform;
    methods: Method[];
  };
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  isPersonal?: boolean;
  badge?: string;
};

/** Build display chips for project cards */
export function getDisplayChips(project: WorkProject): string[] {
  const { role, domain, platform, methods } = project.taxonomy;
  const tags: string[] = [domain, platform, ...methods];
  if (!tags.includes(role)) tags.push(role);
  return tags;
}

/** Selected Work - same projects as homepage */
export const selectedWork: WorkProject[] = [
  {
    title: 'Ulta Beauty E-commerce & Loyalty',
    role: 'Senior Product Designer / UX Architect',
    timeline: 'Oct 2022 - Sep 2025',
    outcome:
      'Reduced friction and lifted conversion by refining checkout and loyalty flows through analytics-informed UX iterations.',
    taxonomy: {
      role: 'Product Design',
      domain: 'E-commerce',
      platform: 'Cross-platform',
      methods: ['Research', 'Analytics', 'Accessibility'],
    },
    href: '/work/ulta',
    imageSrc: '/images/ulta-thumbnail.png',
    imageAlt: 'Ulta case study thumbnail',
  },
  {
    title: 'CVS Medicare Digital Experience',
    role: 'Senior Product Designer / UX Strategist',
    timeline: 'Mar 2019 - Jul 2022',
    outcome:
      'Improved Medicare member journeys using service blueprinting and UX strategy to simplify complex, regulated flows.',
    taxonomy: {
      role: 'Product Design',
      domain: 'Healthcare',
      platform: 'Web',
      methods: ['Research', 'Testing / QA', 'Accessibility', 'Service Design'],
    },
    href: '/work/cvs',
    imageSrc: '/images/cvs-thumbnail.png',
    imageAlt: 'CVS case study thumbnail',
  },
  {
    title: 'American Airlines Digital Journeys',
    role: 'Senior Software Engineer / User Interface',
    timeline: 'Feb 2013 - Dec 2018',
    outcome:
      'Modernized high-traffic journeys by shipping scalable UI improvements and strengthening API integration reliability.',
    taxonomy: {
      role: 'Engineering',
      domain: 'Travel / Transportation',
      platform: 'Web',
      methods: ['Testing / QA', 'Analytics'],
    },
    href: '/work/american-airlines',
    imageSrc: '/images/aa-thumbnail.png',
    imageAlt: 'American Airlines case study thumbnail',
  },
];

/** Personal Work */
export const personalWork: WorkProject[] = [
  {
    title: 'St. Jude - Navigation Exploration',
    role: '',
    timeline: 'Dec 2025',
    outcome:
      'Explored three navigation directions to clarify patient vs donor pathways, reduce cognitive load, and define scalable, accessible header patterns.',
    taxonomy: {
      role: 'UX Strategy',
      domain: 'Healthcare',
      platform: 'Web',
      methods: ['IA / Navigation', 'Research', 'Usability Testing', 'Content Strategy'],
    },
    href: '/work/stjude-navigation-exploration',
    isPersonal: true,
    badge: '',
    imageSrc: '/images/case-studies/stjude/alsac-thumbnail.png',
    imageAlt: "St. Jude Children's Research Hospital.",
  },
  {
    title: 'Reno, TX - Brand + Redesign',
    role: '',
    timeline: 'Feb 2026',
    outcome:
      'Approved logo refresh + early homepage redesign for Reno, TX - focused on clearer navigation, faster service access, and better prioritization of top actions.',
    taxonomy: {
      role: 'Design Systems',
      domain: 'Government / Civic',
      platform: 'Web',
      methods: ['IA / Navigation', 'Graphic Design', 'Mobile App', 'Accessibility'],
    },
    href: '/work/reno-brand-redesign',
    isPersonal: true,
    badge: '',
    imageSrc: '/images/reno-thumbnail.png',
    imageAlt: 'Reno city limit.',
  },
];
