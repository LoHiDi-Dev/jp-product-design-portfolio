/**
 * Canonical taxonomy for Work + Artifacts filters.
 * Single source of truth. Only used values are shown (derived from project data).
 * Synonyms normalize legacy tags for matching without breaking existing data.
 */

export const ROLE = [
  'Product Design',
  'UX Strategy',
  'Design Systems',
  'Engineering',
] as const;
export type Role = (typeof ROLE)[number];

export const DOMAIN = [
  'E-commerce',
  'Healthcare',
  'Travel / Transportation',
  'Government / Civic',
] as const;
export type Domain = (typeof DOMAIN)[number];

export const PLATFORM = ['Web', 'Mobile', 'Cross-platform'] as const;
export type Platform = (typeof PLATFORM)[number];

export const METHODS = [
  'Research',
  'IA / Navigation',
  'Graphic Design',
  'Mobile App',
  'Accessibility',
  'Usability Testing',
  'Content Strategy',
  'Testing / QA',
  'Analytics',
  'Service Design',
] as const;
export type Method = (typeof METHODS)[number];

export type TaxonomyValue = Role | Domain | Platform | Method;

export const TAXONOMY = {
  Role: ROLE,
  Domain: DOMAIN,
  Platform: PLATFORM,
  Methods: METHODS,
} as const;

/** Map legacy/synonym values to canonical ids for matching */
export const TAXONOMY_SYNONYMS: Record<string, string> = {
  'UX Design': 'Product Design',
  'Testing': 'Testing / QA',
};

/** Normalize a tag to canonical taxonomy value (returns as-is if already canonical) */
export function normalizeTaxonomyTag(tag: string): string {
  return TAXONOMY_SYNONYMS[tag] ?? tag;
}

export const ALL_TAXONOMY_VALUES = new Set<TaxonomyValue>([
  ...ROLE,
  ...DOMAIN,
  ...PLATFORM,
  ...METHODS,
]);
