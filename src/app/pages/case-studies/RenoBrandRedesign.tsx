import React, { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { Container } from '../../components/Container';
import { CaseStudySnapshot } from '../../components/CaseStudySnapshot';
import { TechStackAccordion } from '../../components/TechStackAccordion';
import { getTechStackItems } from '../../content/caseStudyTechStack';
import { BeforeAfterSideBySide } from '../../components/BeforeAfterSideBySide';
import { LogoCompareModal } from '../../components/LogoCompareModal';
import { ImageLightboxModal, type ImageLightboxItem } from '../../components/ImageLightboxModal';

const IMG_BASE = '/images/case-studies/reno';

type LightboxState = { images: ImageLightboxItem[]; initialIndex: number } | null;

const RENO_HOMEPAGE_GALLERY: ImageLightboxItem[] = [
  { src: `${IMG_BASE}/reno-homepage-before.png`, alt: 'City of Reno legacy homepage: traditional layout with flags, brown header, and service icons.', title: 'Before' },
  { src: `${IMG_BASE}/reno-homepage-after.png`, alt: 'City of Reno redesigned homepage: modern blue header, welcome hero, and popular services.', title: 'After' },
];

export default function RenoBrandRedesign() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const [logoCompareOpen, setLogoCompareOpen] = useState(false);

  const snapshot = {
    problem:
      "The city's current brand and website experience feel dated and inconsistent, making it harder to quickly find high-intent services and key information.",
    users:
      'Residents, businesses, visitors, and city staff (multi-audience public sector site).',
    constraints: [
      'Public sector clarity + trust',
      'Multiple audiences with different intent',
      'Accessibility expectations (keyboard, contrast, readable hierarchy)',
      'Maintainable structure for future implementation',
    ],
    role: '',
    roleTitle: 'Graphic Designer • UX/UI Designer • Front-End Developer',
    roleScope:
      'Design-led project with development planned for a future TypeScript implementation.',
    roleResponsibilities: [
      'Designed brand identity refresh (logo direction, usage considerations, scalability across web and print).',
      'Designed responsive website UI and planned mobile app direction using a shared design system.',
      'Created design system foundations (type scale, spacing, components, accessibility notes) and prepared implementation-ready specs for future development.',
    ],
    outcomes: [
      'Logo redesign approved by city leadership',
      'Homepage redesign direction established (Exploration 1)',
      'Reusable UI foundation defined for a future TypeScript build',
    ],
  };

  const goals = [
    'Clarify brand presence with a modernized, scalable logo system.',
    'Improve hierarchy for faster scanning and clearer primary actions.',
    'Elevate high-intent services for quick access.',
    'Introduce a structured layout system for consistency across pages.',
    'Establish accessibility foundations (type scale, contrast, focus states) for future build.',
  ];

  const approachCards = [
    {
      title: 'Discovery & Inputs',
      description:
        'Reviewed the existing mark and website touchpoints, aligned stakeholder priorities, and documented public-sector constraints: trust, legibility at small sizes, and consistent reproduction across web/print/signage.',
    },
    {
      title: 'Exploration / Design Work',
      description:
        'Refined the silhouette and proportions, strengthened symbol-to-wordmark hierarchy, and tuned contrast for readability. Developed a homepage direction emphasizing wayfinding, high-intent service surfacing, and a structured layout system.',
    },
    {
      title: 'Validation & Accessibility',
      description:
        'Verified legibility at small sizes and across backgrounds; set type scale, focus styles, and WCAG 2.1 AA contrast targets for the homepage direction. Documented patterns for implementation readiness.',
    },
    {
      title: 'Handoff / Implementation Readiness',
      description:
        'Packaged the logo system and homepage direction into reusable specs/components guidance to accelerate a future TypeScript implementation.',
    },
  ];

  const whatChanged = [
    'Clarified brand presence with a modernized, scalable logo system.',
    'Improved hierarchy for faster scanning and clearer primary actions.',
    'Elevated high-intent services (pay, report, permits, meetings) for quick access.',
    'Introduced a more structured layout system for consistency across pages.',
    'Established accessibility fundamentals (contrast, focus states, readable type).',
    'Set patterns that translate cleanly into a future TypeScript build.',
  ];

  const results = [
    'Logo direction approved; ready for rollout across web and materials.',
    'Homepage exploration received positive early feedback; iteration in progress.',
    'Reusable UI foundation defined for future implementation.',
  ];

  const nextSteps = [
    'Validate information architecture and primary actions with stakeholder review + lightweight usability checks.',
    'Implement redesigned UI in TypeScript once direction is finalized.',
    'Roll out approved logo across web, print, and signage.',
  ];

  return (
    <div className="py-16">
      <Container>
        <header className="mb-12">
          <Link
            to="/#personal-work"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            Back to Personal Work
          </Link>
          <h1 className="text-3xl md:text-4xl font-medium mb-3">
            Reno, TX - Brand + Redesign
          </h1>
          <p className="text-xl text-muted-foreground w-full max-w-none">
            Brand identity refresh + homepage direction exploration for the City of Reno, TX (Parker County).
          </p>
          <p className="text-sm text-muted-foreground mt-4 w-full max-w-none">
            This case study highlights selected workflows and design decisions from the brand and
            homepage redesign.
          </p>
        </header>

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
                <TechStackAccordion title="Tech Stack (Reno environment)" items={getTechStackItems('reno-brand-redesign')} />
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

              <div className="space-y-12">
                {/* Brand Identity */}
                <div>
                  <h3 className="font-medium mb-3">Before → After (Brand Identity)</h3>
                  <p className="text-sm text-muted-foreground mb-4 max-w-none">
                    Updated the mark for clearer recognition at small sizes, stronger structure
                    between symbol and lockup, and more consistent reproduction - while keeping civic
                    familiarity.
                  </p>
                  <BeforeAfterSideBySide
                    beforeLabel="Before"
                    afterLabel="After"
                    beforeSrc={`${IMG_BASE}/reno-logo-before.png`}
                    afterSrc={`${IMG_BASE}/reno-logo-after.png`}
                    beforePlaceholder="Legacy logo"
                    afterPlaceholder="New logo"
                    beforeAlt="Legacy City of Reno logo: blue R with yellow star and circular seal."
                    afterAlt="New City of Reno logo (approved): shield with Texas outline, star, RENO TEXAS banner."
                    onBeforeClick={() => setLogoCompareOpen(true)}
                    onAfterClick={() => setLogoCompareOpen(true)}
                  />
                  <LogoCompareModal
                    open={logoCompareOpen}
                    onOpenChange={setLogoCompareOpen}
                    beforeSrc={`${IMG_BASE}/reno-logo-before.png`}
                    afterSrc={`${IMG_BASE}/reno-logo-after.png`}
                    beforeAlt="Legacy City of Reno logo: blue R with yellow star and circular seal (CITY OF RENO, PARKER COUNTY) with Texas flag motif."
                    afterAlt="New City of Reno logo (approved): shield with Texas outline, star, RENO TEXAS banner, and Est. 1966."
                  />
                </div>

                {/* Homepage redesign */}
                <div>
                  <h3 className="font-medium mb-3">Homepage redesign (Exploration 1)</h3>
                  <p className="text-sm text-muted-foreground mb-4 max-w-none">
                    Navigation-first direction that surfaces high-intent services and establishes a
                    predictable, accessible layout foundation.
                  </p>
                  <BeforeAfterSideBySide
                    beforeLabel="Before"
                    afterLabel="After"
                    beforeSrc={`${IMG_BASE}/reno-homepage-before.png`}
                    afterSrc={`${IMG_BASE}/reno-homepage-after.png`}
                    beforePlaceholder="Legacy homepage"
                    afterPlaceholder="Homepage redesign (exploration)"
                    beforeAlt="City of Reno legacy homepage: traditional layout with flags, brown header, and service icons."
                    afterAlt="City of Reno redesigned homepage: modern blue header, welcome hero, and popular services."
                    onBeforeClick={() => setLightbox({ images: RENO_HOMEPAGE_GALLERY, initialIndex: 0 })}
                    onAfterClick={() => setLightbox({ images: RENO_HOMEPAGE_GALLERY, initialIndex: 1 })}
                  />
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
              <h2 className="text-2xl font-medium mb-6 w-full max-w-none">
                What Changed
              </h2>
              <div className="bg-card border border-border rounded-2xl p-8">
                <ul className="space-y-3">
                  {whatChanged.map((change) => (
                    <li key={change} className="flex gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 5) Results & Next Steps */}
            <section>
              <h2 className="text-2xl font-medium mb-6 w-full max-w-none">
                Results & Next Steps
              </h2>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-medium mb-3">Impact</h3>
                <p className="text-muted-foreground mb-6">
                  Logo direction approved by city leadership. Homepage redesign exploration received
                  positive early feedback. Reusable UI foundation defined for future TypeScript
                  implementation.
                </p>
                <h3 className="font-medium mb-3">Next Steps</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {nextSteps.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
