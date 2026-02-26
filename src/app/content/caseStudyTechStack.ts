/**
 * Centralized Tech Stack content for case study pages.
 * Format: "Tool/Technique - why it mattered / what it enabled"
 * Groups: Design + Systems, Research + Validation, Accessibility + QA, Engineering + Delivery, Platform + Data, Build (planned)
 */

export const TECH_STACK_GROUP_LABELS = [
  'Design + Systems',
  'Research + Validation',
  'Accessibility + QA',
  'Engineering + Delivery',
  'Platform + Data',
  'Build (planned)',
] as const;

export type TechStackGroupLabel = (typeof TECH_STACK_GROUP_LABELS)[number];

/** Each project's tech stack: group label followed by bullets (Tool - purpose) */
export type TechStackEntry = readonly (TechStackGroupLabel | string)[];

/**
 * Central source of truth for case study tech stacks.
 * Keys match route slugs: ulta, cvs, american-airlines, stjude-navigation-exploration, reno-brand-redesign
 */
export const CASE_STUDY_TECH_STACK: Record<string, TechStackEntry> = {
  ulta: [
    'Design + Systems',
    'Sketch (legacy) - audited legacy symbols and patterns to de-risk migration decisions',
    'Figma variants + tokens - standardized component states and reduced implementation drift across teams',
    'FigJam - alignment workshops and journey mapping with product and engineering',
    'Design system governance - documented usage guidance and component conventions for handoff clarity',
    'Accessibility + QA',
    'Validation checklists - labels, focus visibility, contrast targets, and feedback clarity to support engineering QA',
  ],

  cvs: [
    'Research + Validation',
    'UserTesting.com (moderated + unmoderated) - usability testing focused on plan shopping, comparison comprehension, and enrollment readiness for adults 65+',
    'Synthesis + prioritization - translated findings into actionable recommendations for regulated compliance environment',
    'Design + Systems',
    'Figma - end-to-end journey mapping and decision-friendly pattern design',
    'Desktop + mobile parity - validated patterns across breakpoints without forcing one platform onto the other',
    'Accessibility + QA',
    'WCAG 2.1 AA validation - labels, focus, contrast, readable hierarchy, error clarity for older adults and assistive tech',
  ],

  'american-airlines': [
    'Platform + Data',
    'Microsoft Azure - cloud platform for post-merger digital journeys',
    'Engineering + Delivery',
    'TypeScript/JavaScript, C#/.NET - front-end and service-layer implementation',
    'React (Angular across teams) - unified UI delivery with shared component patterns',
    'Shared UI components - reduced drift across US Airways → American Airlines entry points',
    'Defensive UI states - improved recoverability for API and integration failures',
    'Incremental rollout - reduced risk during migration; avoided big-bang cutover',
    'GitHub Actions + Azure DevOps - CI checks, code quality gates, deployment discipline',
    'Playwright E2E - protected critical booking and account paths from regression',
    'Postman - API integration validation; SonarQube for code quality',
  ],

  'stjude-navigation-exploration': [
    'Design + Systems',
    'Figma + FigJam - IA audit, navigation exploration, and stakeholder alignment',
    'High-fidelity prototypes - three directions (Hierarchy-led, Utility-first, Task-grouped) with interaction rules',
    'Responsive specs - desktop vs mobile behaviors and tradeoffs documented',
    'Accessibility + QA',
    'WCAG 2.1 AA - focus order, target sizes, color contrast documented for each direction',
    'Handoff documentation - components, states, and interaction rules for engineering adoption',
  ],

  'reno-brand-redesign': [
    'Design + Systems',
    'Figma - responsive UI, layout system, and component foundations',
    'Adobe CC - brand identity, logo refinement, and print/signage considerations',
    'Design system foundations - type scale, spacing, focus states, contrast targets for future implementation',
    'Accessibility + QA',
    'WCAG 2.1 AA - legibility at small sizes, contrast, and readable hierarchy for homepage direction',
    'Build (planned)',
    'React + TypeScript + Tailwind - planned implementation (not yet built)',
  ],
};

/** Flatten grouped entries for TechStackAccordion (preserves group headers for rendering) */
export function getTechStackItems(projectKey: string): string[] {
  return [...(CASE_STUDY_TECH_STACK[projectKey] ?? [])];
}
