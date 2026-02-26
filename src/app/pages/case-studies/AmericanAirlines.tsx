import React, { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ZoomIn } from 'lucide-react';
import { Container } from '../../components/Container';
import { CaseStudySnapshot } from '../../components/CaseStudySnapshot';
import { TechStackAccordion } from '../../components/TechStackAccordion';
import { getTechStackItems } from '../../content/caseStudyTechStack';
import { BeforeAfterSideBySide } from '../../components/BeforeAfterSideBySide';
import { Thumbnail } from '../../components/Thumbnail';
import { ImageLightboxModal, type ImageLightboxItem } from '../../components/ImageLightboxModal';

const IMG_BASE = '/images/case-studies/american-airlines';

type LightboxState = { images: ImageLightboxItem[]; initialIndex: number } | null;

export default function AmericanAirlinesCaseStudy() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const snapshot = {
    problem:
      'Post-merger, customers could start key flows in the legacy US Airways experience and complete them in American Airlines (e.g., confirmation/PNR in a different UI), causing inconsistency and reliability issues.',
    users:
      'Travelers on desktop + mobile, loyalty members, and customers completing high-intent tasks (booking, check-in, trip management).',
    constraints: [
      'Post-merger brand governance and consolidation',
      'High-traffic pages with limited regression tolerance',
      'Complex API dependencies and integration edge cases',
      'Accessibility expectations across devices and assistive tech',
    ],
    role: '',
    roleTitle: 'Senior Software Engineer / User Interface',
    roleScope:
      'Partnered with UX/IA and interaction design to unify post-merger journeys and standardize UI + platform behavior.',
    roleResponsibilities: [
      'Implemented shared UI patterns and routing behavior to eliminate cross-system journey breaks (start in US Airways, finish in American Airlines).',
      'Hardened reliability and edge-case handling for high-traffic booking and account flows (loading, error states, recovery paths).',
      'Aligned engineering delivery with UX via acceptance criteria, UI state mapping, and reusable component conventions to reduce drift across teams.',
    ],
    outcomes: [
      'Unified navigation and UI foundation post-merger',
      'Improved performance hygiene and core vitals on high-traffic surfaces',
      'Stronger API integration reliability and defensive UI states',
    ],
  };

  const goals = [
    'Align on a unified structure',
    'Modernize front-end delivery',
    'Improve performance',
    'Strengthen API integration reliability for high-traffic journeys',
  ];

  const approachCards = [
    {
      title: 'Discovery & Inputs',
      description:
        'Airport-context interviews to understand traveler needs when time-constrained (clarity, speed, predictability).',
    },
    {
      title: 'Exploration / Design Work',
      description:
        'Mapped and merged two site structures into one navigation model with clearer labels and predictable pathways.',
    },
    {
      title: 'Validation & Accessibility',
      description:
        'Fewer integration edge cases, clearer error states, and performance hygiene for high-traffic surfaces.',
    },
    {
      title: 'Handoff / Implementation Readiness',
      description:
        'Translated design decisions into reusable UI components and implementation conventions.',
    },
    {
      title: 'Engineering Approach',
      description: '',
      bullets: [
        'Unification strategy: shared UI patterns and routing alignment; incremental rollout to avoid big-bang risk.',
        'Consistent state model: loading, error, empty, recovery; shared validation rules.',
        'Integration reliability: defensive UI, API edge-case handling, retries/timeouts.',
        'Delivery discipline: CI checks, code quality gates, automated tests for critical flows.',
      ],
    },
  ];

  const whatChanged = [
    'Unified navigation hierarchy with clearer grouping and labels.',
    'Standardized shared components and patterns to reduce drift and accelerate delivery.',
    'Improved reliability and performance hygiene across high-traffic flows.',
    'Stronger API integration and defensive UI states.',
    'Strengthened automated regression coverage for critical booking and account flows.',
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
            American Airlines Digital Journeys
          </h1>
          <p className="text-xl text-muted-foreground w-full max-w-none">
            Post-merger unification (US Airways → American Airlines) • Unified brand + scalable
            front-end platform • Performance + integration reliability
          </p>
          <p className="text-sm text-muted-foreground mt-4 w-full max-w-none">
            This case study highlights selected workflows and engineering decisions from post-merger
            journey unification work.
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
                <TechStackAccordion title="Tech Stack (American Airlines environment)" items={getTechStackItems('american-airlines')} />
                {approachCards.map((card) => (
                  <div
                    key={card.title}
                    className="bg-card border border-border rounded-2xl p-8"
                  >
                    <h3 className="font-medium mb-4">{card.title}</h3>
                    {'bullets' in card && card.bullets ? (
                      <ul className="space-y-2 text-muted-foreground">
                        {card.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="text-primary shrink-0">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">{card.description}</p>
                    )}
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
                {/* Legacy sites (Before) */}
                <div>
                  <h3 className="font-medium mb-3">Legacy sites (Before)</h3>
                  <p className="text-sm text-muted-foreground mb-4 w-full">Two inherited experiences post-merger</p>
                  <BeforeAfterSideBySide
                    beforeLabel="American Airlines (Legacy)"
                    afterLabel="US Airways (Legacy)"
                    beforePlaceholder="American Airlines (Legacy)"
                    afterPlaceholder="US Airways (Legacy)"
                    beforeSrc={`${IMG_BASE}/01-aa-homepage-before.png`}
                    afterSrc={`${IMG_BASE}/01-usa-homepage-before.png`}
                    beforeAlt="American Airlines (Legacy) homepage."
                    afterAlt="US Airways (Legacy) homepage."
                    beforeImgProps={{ ...mediaImgProps, loading: 'eager' }}
                    afterImgProps={{ ...mediaImgProps, loading: 'eager' }}
                    onBeforeClick={() =>
                    setLightbox({
                      images: [
                        { src: `${IMG_BASE}/01-aa-homepage-before.png`, alt: 'American Airlines (Legacy) homepage.', title: 'Before' },
                        { src: `${IMG_BASE}/01-usa-homepage-before.png`, alt: 'US Airways (Legacy) homepage.', title: 'After' },
                      ],
                      initialIndex: 0,
                    })
                  }
                  onAfterClick={() =>
                    setLightbox({
                      images: [
                        { src: `${IMG_BASE}/01-aa-homepage-before.png`, alt: 'American Airlines (Legacy) homepage.', title: 'Before' },
                        { src: `${IMG_BASE}/01-usa-homepage-before.png`, alt: 'US Airways (Legacy) homepage.', title: 'After' },
                      ],
                      initialIndex: 1,
                    })
                  }
                  />
                  <p className="text-sm text-muted-foreground mt-4 w-full">
                    Two different navigation models and UI patterns created inconsistent entry points
                    into core journeys post-merger.
                  </p>
                </div>

                {/* Legacy Performance */}
                <div id="legacy-performance" className="scroll-mt-24">
                  <h3 className="font-medium mb-3">Legacy Performance</h3>
                  <p className="text-sm text-muted-foreground mb-4 w-full">
                    Both sites showed weak performance signals on high-traffic pages, increasing
                    friction and instability.
                  </p>
                  <BeforeAfterSideBySide
                    beforeLabel="American Airlines (Legacy)"
                    afterLabel="US Airways (Legacy)"
                    beforePlaceholder="American Airlines (Legacy) performance"
                    afterPlaceholder="US Airways (Legacy) performance"
                    beforeSrc={`${IMG_BASE}/02-aa-page-perforance.png`}
                    afterSrc={`${IMG_BASE}/02-usa-page-perforance.png`}
                    beforeAlt="American Airlines (Legacy) performance report."
                    afterAlt="US Airways (Legacy) performance report."
                    beforeImgProps={{ ...mediaImgProps, loading: 'lazy' }}
                    afterImgProps={{ ...mediaImgProps, loading: 'lazy' }}
                    onBeforeClick={() =>
                    setLightbox({
                      images: [
                        { src: `${IMG_BASE}/02-aa-page-perforance.png`, alt: 'American Airlines (Legacy) performance report.', title: 'Before' },
                        { src: `${IMG_BASE}/02-usa-page-perforance.png`, alt: 'US Airways (Legacy) performance report.', title: 'After' },
                      ],
                      initialIndex: 0,
                    })
                  }
                  onAfterClick={() =>
                    setLightbox({
                      images: [
                        { src: `${IMG_BASE}/02-aa-page-perforance.png`, alt: 'American Airlines (Legacy) performance report.', title: 'Before' },
                        { src: `${IMG_BASE}/02-usa-page-perforance.png`, alt: 'US Airways (Legacy) performance report.', title: 'After' },
                      ],
                      initialIndex: 1,
                    })
                  }
                  />
                </div>

                {/* Unified Planning */}
                <div>
                  <h3 className="font-medium mb-3">Unified Planning</h3>
                  <p className="text-sm text-muted-foreground mb-4 w-full">
                    Wireframes aligned IA, UX, and engineering on a unified structure and interaction
                    model before implementation.
                  </p>
                  <BeforeAfterSideBySide
                    beforeLabel="Desktop wireframe"
                    afterLabel="Mobile wireframe"
                    beforePlaceholder="Desktop wireframe"
                    afterPlaceholder="Mobile wireframe"
                    beforeSrc={`${IMG_BASE}/03-aa-new-wireframe-desktop.png`}
                    afterSrc={`${IMG_BASE}/03-aa-new-wireframe-mobile.png`}
                    beforeAlt="Unified American Airlines desktop wireframe."
                    afterAlt="Unified American Airlines mobile wireframe."
                    beforeImgProps={{ ...mediaImgProps, loading: 'lazy' }}
                    afterImgProps={{ ...mediaImgProps, loading: 'lazy' }}
                    onBeforeClick={() =>
                    setLightbox({
                      images: [
                        { src: `${IMG_BASE}/03-aa-new-wireframe-desktop.png`, alt: 'Unified desktop wireframe.', title: 'Before' },
                        { src: `${IMG_BASE}/03-aa-new-wireframe-mobile.png`, alt: 'Unified mobile wireframe.', title: 'After' },
                      ],
                      initialIndex: 0,
                    })
                  }
                  onAfterClick={() =>
                    setLightbox({
                      images: [
                        { src: `${IMG_BASE}/03-aa-new-wireframe-desktop.png`, alt: 'Unified desktop wireframe.', title: 'Before' },
                        { src: `${IMG_BASE}/03-aa-new-wireframe-mobile.png`, alt: 'Unified mobile wireframe.', title: 'After' },
                      ],
                      initialIndex: 1,
                    })
                  }
                  />
                </div>

                {/* Unified Brand */}
                <div>
                  <h3 className="font-medium mb-3">Unified Brand</h3>
                  <p className="text-sm text-muted-foreground mb-4 w-full">
                    Standardized navigation, UI patterns, and reusable components established a single
                    experience foundation post-merger.
                  </p>
                  <div>
                    <div className="text-sm font-medium mb-3 text-muted-foreground">
                      Unified American Airlines (After)
                    </div>
                    <div
                      className="relative group cursor-pointer overflow-hidden rounded-2xl"
                      onClick={() =>
                      setLightbox({
                        images: [{ src: `${IMG_BASE}/04-aa-new-after.png`, alt: 'Unified American Airlines (After).', title: 'Unified Brand' }],
                        initialIndex: 0,
                      })
                    }
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setLightbox({
                          images: [{ src: `${IMG_BASE}/04-aa-new-after.png`, alt: 'Unified American Airlines (After).', title: 'Unified Brand' }],
                          initialIndex: 0,
                        });
                      }
                    }}
                      role="button"
                      tabIndex={0}
                      aria-label="Expand Unified American Airlines (After) image"
                    >
                      <Thumbnail
                        src={`${IMG_BASE}/04-aa-new-after.png`}
                        alt="Unified American Airlines (After)."
                        placeholder="Unified American Airlines (After)"
                        size="md"
                        fit="contain"
                        imgProps={{ ...mediaImgProps, loading: 'lazy' }}
                      />
                      <div
                        className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/20 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
                        aria-hidden
                      >
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg">
                          <ZoomIn className="h-6 w-6" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance After Improvement */}
                <div>
                  <h3 className="font-medium mb-3">Performance After Improvement</h3>
                  <p className="text-sm text-muted-foreground mb-4 w-full">
                    Illustrative report showing improved stability and core vitals after front-end
                    modernization.
                  </p>
                  <div>
                    <div className="text-sm font-medium mb-3 text-muted-foreground">
                      After: Improved performance
                    </div>
                    <div
                      className="relative group cursor-pointer overflow-hidden rounded-2xl"
                      onClick={() =>
                      setLightbox({
                        images: [{ src: `${IMG_BASE}/05-aa-after-performance.png`, alt: 'Performance after improvement.', title: 'Performance After' }],
                        initialIndex: 0,
                      })
                    }
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setLightbox({
                          images: [{ src: `${IMG_BASE}/05-aa-after-performance.png`, alt: 'Performance after improvement.', title: 'Performance After' }],
                          initialIndex: 0,
                        });
                      }
                    }}
                      role="button"
                      tabIndex={0}
                      aria-label="Expand performance after improvement image"
                    >
                      <Thumbnail
                        src={`${IMG_BASE}/05-aa-after-performance.png`}
                        alt="Performance after improvement."
                        placeholder="After: Improved performance"
                        size="md"
                        fit="contain"
                        imgProps={{ ...mediaImgProps, loading: 'lazy' }}
                      />
                      <div
                        className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/20 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
                        aria-hidden
                      >
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg">
                          <ZoomIn className="h-6 w-6" />
                        </span>
                      </div>
                    </div>
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
                  Unified post-merger journeys into more continuous, consistent experiences - users no
                  longer start in one system and finish in another. Platform patterns are more
                  maintainable and standardized. Reduced regression risk through shared components,
                  consistent state handling, and stronger automated test coverage for critical
                  booking and account flows.
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
