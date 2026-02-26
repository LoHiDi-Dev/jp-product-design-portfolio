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
      'Post-merger, customers could start key flows in the legacy US Airways experience and complete them in American Airlines (e.g., confirmation/PNR in a different UI), causing inconsistency, confusion, and drop-off.',
    users:
      'Travelers on desktop + mobile, loyalty members, and customers completing high-intent tasks (booking, check-in, trip management).',
    constraints: [
      'Post-merger brand governance and consolidation',
      'High-traffic pages with limited regression tolerance',
      'Complex API dependencies and integration edge cases',
      'Accessibility expectations across devices and assistive tech',
    ],
    role: '',
    roleTitle: 'Senior Information Architect (UX) / Information Designer',
    roleScope:
      'Led IA strategy and interaction design for post-merger journey unification, partnering with UX, engineering, and brand teams.',
    roleResponsibilities: [
      'Defined unified navigation hierarchy, page structure, and labeling conventions to eliminate cross-system journey breaks (US Airways → American Airlines).',
      'Created wireframes, interaction specs, and IA documentation to align UX, engineering, and brand stakeholders.',
      'Authored acceptance criteria and interaction requirements for high-traffic booking and account flows.',
    ],
    outcomes: [
      'Unified navigation and IA foundation post-merger',
      'Improved performance hygiene and core vitals on high-traffic surfaces',
      'Reduced user confusion and drop-off across post-merger journeys',
    ],
  };

  const goals = [
    'Unify two legacy site structures into a single navigation model',
    'Define clear IA conventions and interaction patterns post-merger',
    'Improve usability and accessibility across high-traffic journeys',
    'Deliver wireframes, flows, and specs that align UX + engineering',
  ];

  const approachCards = [
    {
      title: 'Discovery & Inputs',
      description:
        'Airport-context interviews and analytics review to understand traveler needs when time-constrained (clarity, speed, predictability).',
    },
    {
      title: 'IA Strategy & Navigation Design',
      description:
        'Mapped and merged two site structures into one navigation model with clearer labels, predictable pathways, and consistent entry points.',
    },
    {
      title: 'Wireframes & Interaction Specs',
      description:
        'Created wireframes for desktop and mobile that defined page hierarchy, interaction patterns, and state behaviors for key journeys.',
    },
    {
      title: 'Validation & Accessibility',
      description:
        'Validated IA decisions through usability testing and ensured accessibility fundamentals across critical flow steps.',
    },
    {
      title: 'Handoff & Implementation Readiness',
      description:
        'Authored interaction specs, acceptance criteria, and IA documentation to support engineering delivery with minimal ambiguity.',
    },
  ];

  const whatChanged = [
    'Unified navigation hierarchy with clearer grouping and labels.',
    'Defined shared interaction patterns and IA conventions to reduce drift across teams.',
    'Authored wireframes and interaction specs for desktop and mobile.',
    'Delivered acceptance criteria and IA documentation for engineering handoff.',
    'Strengthened accessibility baseline across critical booking and account flows.',
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
            American Airlines &mdash; Digital Journeys
          </h1>
          <p className="text-xl text-muted-foreground w-full max-w-none">
            Post-merger IA unification (US Airways &rarr; American Airlines) &bull; Navigation design &bull; Wireframes &amp; interaction specs
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Feb 2014 &ndash; Aug 2019
          </p>
          <p className="text-sm text-muted-foreground mt-4 w-full max-w-none">
            This case study highlights selected IA deliverables and design decisions from post-merger journey unification work.
          </p>
        </header>

        {/* Executive Snapshot */}
        <section className="mb-12 bg-muted/30 border border-border rounded-2xl p-8">
          <h2 className="text-lg font-medium mb-4">Executive Snapshot</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div><span className="font-medium text-primary">Role:</span> Senior Information Architect (UX) / Information Designer</div>
            <div><span className="font-medium text-primary">Platform:</span> Web (desktop + mobile)</div>
            <div><span className="font-medium text-primary">Scope:</span> Post-merger journey unification, IA strategy, navigation design</div>
            <div><span className="font-medium text-primary">Team:</span> UX/IA, Visual Design, Engineering, Brand/Marketing</div>
            <div className="md:col-span-2 lg:col-span-3"><span className="font-medium text-primary">Problem:</span> Two legacy site structures created inconsistent, fragmented journeys post-merger.</div>
            <div className="md:col-span-2 lg:col-span-3"><span className="font-medium text-primary">Outcomes:</span> Unified navigation model, clearer IA conventions, improved usability and performance across high-traffic surfaces.</div>
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
                      <span className="text-primary mt-1">&bull;</span>
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
                    <p className="text-muted-foreground">{card.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3) Solution / Key Screens */}
            <section>
              <h2 className="text-2xl font-medium mb-6 w-full max-w-none">
                Key Deliverables
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
                    Two different navigation models and IA patterns created inconsistent entry points
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
                  <h3 className="font-medium mb-3">Wireframes &amp; Unified Planning</h3>
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
                        { src: `${IMG_BASE}/03-aa-new-wireframe-desktop.png`, alt: 'Unified desktop wireframe.', title: 'Desktop' },
                        { src: `${IMG_BASE}/03-aa-new-wireframe-mobile.png`, alt: 'Unified mobile wireframe.', title: 'Mobile' },
                      ],
                      initialIndex: 0,
                    })
                  }
                  onAfterClick={() =>
                    setLightbox({
                      images: [
                        { src: `${IMG_BASE}/03-aa-new-wireframe-desktop.png`, alt: 'Unified desktop wireframe.', title: 'Desktop' },
                        { src: `${IMG_BASE}/03-aa-new-wireframe-mobile.png`, alt: 'Unified mobile wireframe.', title: 'Mobile' },
                      ],
                      initialIndex: 1,
                    })
                  }
                  />
                </div>

                {/* Unified Brand */}
                <div>
                  <h3 className="font-medium mb-3">Unified Experience</h3>
                  <p className="text-sm text-muted-foreground mb-4 w-full">
                    Standardized navigation, page hierarchy, and interaction patterns established a single
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
                        images: [{ src: `${IMG_BASE}/04-aa-new-after.png`, alt: 'Unified American Airlines (After).', title: 'Unified Experience' }],
                        initialIndex: 0,
                      })
                    }
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setLightbox({
                          images: [{ src: `${IMG_BASE}/04-aa-new-after.png`, alt: 'Unified American Airlines (After).', title: 'Unified Experience' }],
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
                    Illustrative report showing improved stability and core vitals after
                    IA-driven restructuring and front-end modernization.
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
              <h2 className="text-2xl font-medium mb-6 w-full max-w-none">What I Changed</h2>
              <div className="bg-card border border-border rounded-2xl p-8">
                <ul className="space-y-3">
                  {whatChanged.map((change, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1">&#10003;</span>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 5) Results & Next Steps */}
            <section>
              <h2 className="text-2xl font-medium mb-6 w-full max-w-none">Results</h2>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-medium mb-3">Impact</h3>
                <p className="text-muted-foreground">
                  Unified post-merger journeys into continuous, consistent experiences&mdash;users no
                  longer start in one system and finish in another. IA patterns and navigation
                  conventions became the shared foundation for scalable, maintainable delivery
                  across teams.
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
