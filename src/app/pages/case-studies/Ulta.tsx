import React, { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { Container } from '../../components/Container';
import { CaseStudySnapshot } from '../../components/CaseStudySnapshot';
import { TechStackAccordion } from '../../components/TechStackAccordion';
import { getTechStackItems } from '../../content/caseStudyTechStack';
import { BeforeAfterSideBySide } from '../../components/BeforeAfterSideBySide';
import { ImageLightboxModal, type ImageLightboxItem } from '../../components/ImageLightboxModal';

type LightboxState = { images: ImageLightboxItem[]; initialIndex: number } | null;

export default function UltaCaseStudy() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const snapshot = {
    problem:
      'Fragmented UI patterns and a legacy Sketch library that had become difficult to scale across teams, creating inconsistent navigation and account entry behaviors and increasing handoff friction.',
    users:
      'Ulta shoppers across web (desktop + mobile), including loyalty members and first-time customers.',
    constraints: [
      'Enterprise migration (Sketch → Figma) already in motion',
      'High-traffic surfaces with limited tolerance for regression',
      'Brand + commerce standards evolving (CTA and interaction patterns)',
      'Accessibility expectations increasing across critical journeys',
    ],
    role: '',
    roleTitle: 'Senior Product Designer',
    roleScope:
      'Led design system migration and journey UX optimization, partnering with engineering for implementation readiness.',
    roleResponsibilities: [
      'Established component governance and migrated Sketch patterns into a scalable Figma library with variants and usage guidance.',
      'Standardized navigation and hierarchy conventions for predictable, cross-platform commerce patterns.',
      'Defined accessibility foundations and validation checklists for engineering QA and handoff clarity.',
    ],
    outcomes: [
      'Improved cross-team consistency via documented components and shared tokens',
      'Clearer, more predictable navigation and page hierarchy',
      'Accessibility-minded patterns reinforced in critical flows',
    ],
  };

  const goals = [
    'Migrate core UI patterns from Sketch into a scalable Figma component library',
    'Standardize navigation, hierarchy, and accessibility across high-traffic shopping and loyalty flows',
  ];

  const approachCards = [
    {
      title: 'Discovery & Inputs',
      description:
        'Audited components and end-to-end journeys to identify high-impact surfaces; mapped release-safe improvements to key commerce patterns.',
    },
    {
      title: 'Exploration / Design Work',
      description:
        'Migrated Sketch patterns into scalable Figma components with variants, states, and usage guidance for handoff clarity.',
    },
    {
      title: 'Validation & Accessibility',
      description:
        'Validation checklists, labels, focus visibility, contrast targets, and feedback clarity to support engineering QA.',
    },
    {
      title: 'Handoff / Implementation Readiness',
      description:
        'Standardized CTA hierarchy and page structure for predictable, cross-platform patterns; aligned with evolving commerce conventions.',
    },
  ];

  const whatChanged = [
    'Migrated core UI patterns from Sketch into a Figma component library with variants, states, and usage guidance.',
    'Standardized CTA hierarchy to align with evolving e-commerce conventions and reduce ambiguity.',
    'Improved navigation discoverability through clearer grouping, labeling, and predictable hierarchy.',
    'Simplified category entry points with stronger page structure and consistent scanning patterns.',
    'Reduced decision load in authentication by separating sign-in from account creation paths.',
    'Strengthened accessibility fundamentals: labels, helper text, focus visibility, contrast targets, and feedback clarity.',
  ];

  const mediaImgProps = {
    width: 1907,
    height: 920,
    sizes: '(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw',
    decoding: 'async' as const,
  };

  return (
    <div className="py-16">
      <Container>
        <header className="mb-12">
          <Link
            to="/#selected-work"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            Back to Selected Work
          </Link>
          <h1 className="text-3xl md:text-4xl font-medium mb-3">
            Ulta Beauty &mdash; E-commerce &amp; Loyalty
          </h1>
          <p className="text-xl text-muted-foreground w-full max-w-none">
            Design system migration (Sketch &rarr; Figma) &bull; E-commerce + loyalty journeys &bull; Accessibility
            + delivery consistency
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Oct 2022 &ndash; Sep 2025
          </p>
          <p className="text-sm text-muted-foreground mt-4 w-full max-w-none">
            This case study highlights selected workflows and design decisions from the e-commerce
            design system migration.
          </p>
        </header>

        {/* Executive Snapshot */}
        <section className="mb-12 bg-muted/30 border border-border rounded-2xl p-8">
          <h2 className="text-lg font-medium mb-4">Executive Snapshot</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div><span className="font-medium text-primary">Role:</span> Senior Product Designer</div>
            <div><span className="font-medium text-primary">Platform:</span> Web (desktop + mobile), cross-platform</div>
            <div><span className="font-medium text-primary">Scope:</span> Design system migration, e-commerce journey optimization, accessibility</div>
            <div><span className="font-medium text-primary">Team:</span> Product Design, Engineering, Brand, QA</div>
            <div className="md:col-span-2 lg:col-span-3"><span className="font-medium text-primary">Problem:</span> Fragmented UI patterns and a legacy Sketch library that had become difficult to scale, creating inconsistent navigation and increasing handoff friction.</div>
            <div className="md:col-span-2 lg:col-span-3"><span className="font-medium text-primary">Outcomes:</span> Improved cross-team consistency, clearer navigation and hierarchy, accessibility-minded patterns in critical flows.</div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            {/* 1) Goals */}
            <section>
              <h2 className="text-2xl font-medium mb-6 w-full max-w-none">Goals</h2>
              <div className="bg-card border border-border rounded-2xl p-8">
                <ul className="space-y-3">
                  {goals.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 2) Approach */}
            <section>
              <h2 className="text-2xl font-medium mb-6 w-full max-w-none">Approach</h2>
              <div className="space-y-6">
                <TechStackAccordion title="Tech Stack (Ulta environment)" items={getTechStackItems('ulta')} />
                {approachCards.map((card) => (
                  <div
                    key={card.title}
                    className="bg-card border border-border rounded-2xl p-8"
                  >
                    <h3 className="font-medium mb-4">{card.title}</h3>
                    <p className="text-muted-foreground">{card.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3) Solution / Key Screens */}
            <section>
              <h2 className="text-2xl font-medium mb-6 w-full max-w-none">
                Solution / Key Screens
              </h2>
              <p className="text-muted-foreground mb-6">
                Three representative before/after pairs showing migration patterns and journey
                improvements.
              </p>

              <div className="space-y-12">
                {/* Before → After (Homepage) */}
                <div>
                  <h3 className="font-medium mb-3">Before → After</h3>
                  <BeforeAfterSideBySide
                    beforeLabel="Before"
                    afterLabel="After"
                    beforePlaceholder="Before: Ulta homepage"
                    afterPlaceholder="After: Ulta homepage"
                    beforeSrc="/images/case-studies/ulta/00-ulta-homepage-before.png"
                    afterSrc="/images/case-studies/ulta/00-ulta-homepage-after.png"
                    beforeAlt="Before: Ulta Beauty homepage."
                    afterAlt="After: Ulta Beauty homepage with clearer hierarchy and guidance."
                    beforeImgProps={{ ...mediaImgProps, loading: 'eager' }}
                    afterImgProps={{ ...mediaImgProps, loading: 'eager' }}
                    onBeforeClick={() =>
                      setLightbox({
                        images: [
                          { src: '/images/case-studies/ulta/00-ulta-homepage-before.png', alt: 'Before: Ulta Beauty homepage.', title: 'Before' },
                          { src: '/images/case-studies/ulta/00-ulta-homepage-after.png', alt: 'After: Ulta Beauty homepage with clearer hierarchy and guidance.', title: 'After' },
                        ],
                        initialIndex: 0,
                      })
                    }
                    onAfterClick={() =>
                      setLightbox({
                        images: [
                          { src: '/images/case-studies/ulta/00-ulta-homepage-before.png', alt: 'Before: Ulta Beauty homepage.', title: 'Before' },
                          { src: '/images/case-studies/ulta/00-ulta-homepage-after.png', alt: 'After: Ulta Beauty homepage with clearer hierarchy and guidance.', title: 'After' },
                        ],
                        initialIndex: 1,
                      })
                    }
                  />
                </div>

                {/* Shop Navigation (Before → After) */}
                <div>
                  <h3 className="font-medium mb-3">Shop Navigation (Before → After)</h3>
                  <p className="text-sm text-muted-foreground w-full mb-4">
                    <span className="font-medium text-foreground">Before:</span> Mobile navigation
                    mixed browsing patterns and made category scanning harder.
                    <br />
                    <span className="font-medium text-foreground">After:</span> Clearer grouping and
                    more predictable hierarchy support faster discovery.
                  </p>
                  <BeforeAfterSideBySide
                    beforePlaceholder="Before: Shop navigation"
                    afterPlaceholder="After: Shop navigation"
                    beforeSrc="/images/case-studies/ulta/1-ulta-shop-navigation-before.png"
                    afterSrc="/images/case-studies/ulta/1-ulta-shop-navigation-after.png"
                    beforeAlt="Before: Ulta shop navigation with mixed browsing patterns."
                    afterAlt="After: Ulta shop navigation with clearer grouping and hierarchy."
                    beforeImgProps={{ ...mediaImgProps, loading: 'lazy' }}
                    afterImgProps={{ ...mediaImgProps, loading: 'lazy' }}
                    onBeforeClick={() =>
                  setLightbox({
                    images: [
                      { src: '/images/case-studies/ulta/1-ulta-shop-navigation-before.png', alt: 'Before: Ulta shop navigation with mixed browsing patterns.', title: 'Before' },
                      { src: '/images/case-studies/ulta/1-ulta-shop-navigation-after.png', alt: 'After: Ulta shop navigation with clearer grouping and hierarchy.', title: 'After' },
                    ],
                    initialIndex: 0,
                  })
                }
                onAfterClick={() =>
                  setLightbox({
                    images: [
                      { src: '/images/case-studies/ulta/1-ulta-shop-navigation-before.png', alt: 'Before: Ulta shop navigation with mixed browsing patterns.', title: 'Before' },
                      { src: '/images/case-studies/ulta/1-ulta-shop-navigation-after.png', alt: 'After: Ulta shop navigation with clearer grouping and hierarchy.', title: 'After' },
                    ],
                    initialIndex: 1,
                  })
                }
                />
                </div>

                {/* Category / Shop Page (Before → After) */}
                <div>
                  <h3 className="font-medium mb-3">Category / Shop Page (Before → After)</h3>
                  <p className="text-sm text-muted-foreground w-full mb-4">
                    <span className="font-medium text-foreground">Before:</span> Category entry
                    relied heavily on large hero content with less consistent hierarchy.
                    <br />
                    <span className="font-medium text-foreground">After:</span> Stronger page
                    structure and clearer entry tiles improve scannability.
                  </p>
                  <BeforeAfterSideBySide
                    beforePlaceholder="Before: Category / shop page"
                    afterPlaceholder="After: Category / shop page"
                    beforeSrc="/images/case-studies/ulta/2-ulta-shoppage-before.png"
                    afterSrc="/images/case-studies/ulta/2-ulta-shoppage-after.png"
                    beforeAlt="Before: Ulta category page with large hero content and less consistent hierarchy."
                    afterAlt="After: Ulta category page with clearer structure and entry tiles."
                    beforeImgProps={{ ...mediaImgProps, loading: 'lazy' }}
                    afterImgProps={{ ...mediaImgProps, loading: 'lazy' }}
                    onBeforeClick={() =>
                  setLightbox({
                    images: [
                      { src: '/images/case-studies/ulta/2-ulta-shoppage-before.png', alt: 'Before: Ulta category page with large hero content and less consistent hierarchy.', title: 'Before' },
                      { src: '/images/case-studies/ulta/2-ulta-shoppage-after.png', alt: 'After: Ulta category page with clearer structure and entry tiles.', title: 'After' },
                    ],
                    initialIndex: 0,
                  })
                }
                onAfterClick={() =>
                  setLightbox({
                    images: [
                      { src: '/images/case-studies/ulta/2-ulta-shoppage-before.png', alt: 'Before: Ulta category page with large hero content and less consistent hierarchy.', title: 'Before' },
                      { src: '/images/case-studies/ulta/2-ulta-shoppage-after.png', alt: 'After: Ulta category page with clearer structure and entry tiles.', title: 'After' },
                    ],
                    initialIndex: 1,
                  })
                }
                />
                </div>

                {/* Login / Account Entry (Before → After) */}
                <div>
                  <h3 className="font-medium mb-3">Login / Account Entry (Before → After)</h3>
                  <p className="text-sm text-muted-foreground w-full mb-4">
                    <span className="font-medium text-foreground">Before:</span> Sign-in and account
                    creation competed in a single modal, increasing decision load.
                    <br />
                    <span className="font-medium text-foreground">After:</span> A simpler, more
                    accessible sign-in experience with clearer guidance and calmer secondary actions.
                  </p>
                  <BeforeAfterSideBySide
                    beforePlaceholder="Before: Login / account entry"
                    afterPlaceholder="After: Login / account entry"
                    beforeSrc="/images/case-studies/ulta/3-ulta-login-before.png"
                    afterSrc="/images/case-studies/ulta/3-ulta-login-after.png"
                    beforeAlt="Before: Ulta sign-in modal combining sign-in and account creation."
                    afterAlt="After: Ulta sign-in screen with clearer guidance and calmer secondary actions."
                    beforeImgProps={{ ...mediaImgProps, loading: 'lazy' }}
                    afterImgProps={{ ...mediaImgProps, loading: 'lazy' }}
                    onBeforeClick={() =>
                      setLightbox({
                        images: [
                          { src: '/images/case-studies/ulta/3-ulta-login-before.png', alt: 'Before: Ulta sign-in modal combining sign-in and account creation.', title: 'Before' },
                          { src: '/images/case-studies/ulta/3-ulta-login-after.png', alt: 'After: Ulta sign-in screen with clearer guidance and calmer secondary actions.', title: 'After' },
                        ],
                        initialIndex: 0,
                      })
                    }
                    onAfterClick={() =>
                      setLightbox({
                        images: [
                          { src: '/images/case-studies/ulta/3-ulta-login-before.png', alt: 'Before: Ulta sign-in modal combining sign-in and account creation.', title: 'Before' },
                          { src: '/images/case-studies/ulta/3-ulta-login-after.png', alt: 'After: Ulta sign-in screen with clearer guidance and calmer secondary actions.', title: 'After' },
                        ],
                        initialIndex: 1,
                      })
                    }
                  />
                </div>

                {/* Design System */}
                <div>
                  <h3 className="font-medium mb-3">Design System</h3>
                  <div className="bg-card border border-border rounded-2xl p-8">
                    <p className="text-muted-foreground mb-6">
                      I built a Figma-based component library to replace the legacy Sketch system - mapping
                      existing patterns into scalable components with variants and shared tokens. This
                      reduced UI drift and improved delivery consistency by giving design and engineering
                      a common source of truth for delivery and component governance.
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>Buttons (primary/secondary/tertiary + states)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>Form fields (label, helper, error, success)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>Navigation patterns (drawers/menus)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>Feedback (banners, inline errors, empty states)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Accessibility */}
                <div>
                  <h3 className="font-medium mb-3">Accessibility</h3>
                  <div className="bg-card border border-border rounded-2xl p-8">
                    <p className="text-muted-foreground">
                      Improved accessibility fundamentals across critical flows by strengthening labels
                      and helper text, ensuring visible focus states, validating contrast, and clarifying
                      error feedback to support keyboard and screen-reader-friendly interactions.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <ImageLightboxModal
              open={lightbox !== null}
              onOpenChange={(open) => !open && setLightbox(null)}
              items={lightbox?.images ?? []}
              initialIndex={lightbox?.initialIndex ?? 0}
            />

            {/* 4) What Changed */}
            <section>
              <h2 className="text-2xl font-medium mb-6 w-full max-w-none">What Changed</h2>
              <div className="bg-card border border-border rounded-2xl p-8">
                <ul className="space-y-3">
                  {whatChanged.map((change, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 5) Results & Next Steps */}
            <section>
              <h2 className="text-2xl font-medium mb-6 w-full max-w-none">Results & Next Steps</h2>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-medium mb-3">Impact</h3>
                <p className="text-muted-foreground">
                  Standardized UI patterns and improved core journey clarity through a Sketch→Figma
                  system migration, governance-minded components, and cleaner navigation and
                  authentication patterns-supporting scalable, release-safe delivery across teams.
                </p>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <CaseStudySnapshot {...snapshot} labelClassName="text-primary" />
          </aside>
        </div>
      </Container>
    </div>
  );
}
