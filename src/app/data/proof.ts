import type { Role, Domain, Platform, Method } from '../lib/taxonomy';

export type ProofItem = {
  title: string;
  what: string;
  contribution: string;
  /** Taxonomy tags for filtering (from shared taxonomy). Maps: Design Systems→Role, Heuristic Evaluation→Testing, etc. */
  taxonomyTags: (Role | Domain | Platform | Method)[];
  /** Public GitHub URL (repo, folder, or PR). Leave empty to show disabled "GitHub link pending". Set hideGitHub: true to omit the button. */
  repoUrl?: string;
  /** When true, do not show the GitHub button on this card. */
  hideGitHub?: boolean;
  /** Figma file or prototype URL. If set, shows "View Figma" button. */
  figmaUrl?: string;
  /** Optional before/after compare shown in a modal (no navigation). Use images at least 800px wide for sharp display. */
  compare?: {
    beforeSrc: string;
    afterSrc: string;
  };
  /** Route for the demo/compare link. */
  caseStudy: string;
  /** Label for the case study link (e.g. "Open Compare", "View Demo"). Defaults to "View Demo". */
  ctaLabel?: string;
  /** Optional PDF report shown in an in-app modal viewer (no download CTA). */
  reportPdfUrl?: string;
  /** Optional title/subtitle for the report modal. */
  reportTitle?: string;
  reportSubtitle?: string;
};

/**
 * Design & implementation artifact items.
 *
 * NOTE: Add your public GitHub URLs here.
 * Example repoUrl: https://github.com/<your-username>/<repo>
 */
export const engineeringProof: ProofItem[] = [
  {
    title: 'MediVite Design System + UI Kit',
    what: 'Token-driven components and layout foundations that scale across screens while staying consistent and accessible.',
    contribution: 'Built tokens, core UI components, and usage guardrails to keep typography, spacing, and states aligned.',
    taxonomyTags: ['Design Systems', 'Healthcare', 'Web', 'Accessibility', 'Testing'],
    repoUrl: 'https://github.com/LoHiDi-Dev/medivite-ds-ui-kit',
    figmaUrl: 'https://www.figma.com/design/Ifc1z6XbG2ZTTVJjYfOK2J/MediVite-Design-System?node-id=0-1&t=a0bY8vXMw0Yf9jxC-1',
    caseStudy: '/work/jim',
  },
  {
    title: 'Secure Login UX for Warehouse Ops',
    what: 'Secure shared-device sign-in with clear states for first-time setup, daily login, and recovery scenarios.',
    contribution: 'Defined UX rules + validation patterns (ID/full-name toggle, PIN entry, shared-device behavior, and error handling).',
    taxonomyTags: ['UX Design', 'Operations (internal tools)', 'Web', 'Testing'],
    hideGitHub: true,
    caseStudy: '/proof',
  },
  {
    title: 'UX Audit + Heuristic Evaluation (Cart + Checkout)',
    what: 'A Cart + Checkout heuristic audit identifying usability friction, accessibility risks, conversion and severity-rated blockers.',
    contribution:
      'Led the end-to-end review: captured evidence, mapped issues to heuristics, prioritized fixes, and delivered a remediation-ready PDF.',
    taxonomyTags: ['Product Design', 'E-commerce', 'Web', 'Testing', 'Accessibility'],
    hideGitHub: true,
    caseStudy: '/work/jim',
    ctaLabel: 'View Report',
    reportPdfUrl: '/docs/tractor-supply-ux-audit-cart-checkout-dec-2023.pdf',
    reportTitle: 'Tractor Supply - UX Audit Report',
    reportSubtitle: 'Cart + Checkout (PDF)',
  },
  {
    title: 'Oil Dinor Redesign (Home, PLP, PDP + Mobile)',
    what: 'Homepage before/after comparison plus new PLP/PDP patterns for faster browsing and clearer product decisions.',
    contribution: "Led the UX/UI redesign in Figma: responsive web pages and a mobile app concept aligned to Oil Dinor's brand system.",
    taxonomyTags: ['Product Design', 'E-commerce', 'Cross-platform', 'IA / Navigation'],
    hideGitHub: true,
    compare: {
      beforeSrc: '/images/oil-dinor/dinor-homepage-before.png',
      afterSrc: '/images/oil-dinor/dinor-homepage-after.png',
    },
    caseStudy: '/work/ulta',
    ctaLabel: 'Open Compare',
    figmaUrl:
      'https://www.figma.com/design/q4NATSfycvXuHctI9Uftmx/Case-Study---Dinor--Web---Mobile-?node-id=2-3&t=Dnwptu0cGiZL5DbY-1',
  },
];
