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
    title: 'Ulta Beauty — E-commerce & Loyalty',
    role: 'Senior Product Designer',
    timeline: 'Oct 2022 – Sep 2025',
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
    title: 'CVS Health / Aetna — Medicare Digital Experience',
    role: 'Senior UX Strategist / Product Designer (Medicare)',
    timeline: 'Oct 2019 – Jul 2021',
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
    title: 'American Airlines — Digital Journeys',
    role: 'Senior Information Architect (UX) / Information Designer',
    timeline: 'Feb 2014 – Aug 2019',
    outcome:
      'Led IA unification of post-merger digital journeys (US Airways → American Airlines), delivering flows, wireframes, and interaction specs that aligned UX, engineering, and brand.',
    taxonomy: {
      role: 'UX Strategy',
      domain: 'Travel / Transportation',
      platform: 'Web',
      methods: ['IA / Navigation', 'Research', 'Accessibility'],
    },
    href: '/work/american-airlines',
    imageSrc: '/images/aa-thumbnail.png',
    imageAlt: 'American Airlines case study thumbnail',
  },
];

/** Personal Work */
export const personalWork: WorkProject[] = [
  {
    title: 'St. Jude — Navigation Exploration',
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
    title: 'Reno, TX — Brand + Redesign',
    role: '',
    timeline: 'Feb 2026',
    outcome:
      'Approved logo refresh + early homepage redesign for Reno, TX — focused on clearer navigation, faster service access, and better prioritization of top actions.',
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
