import React, { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { Container } from '../../components/Container';
import { CaseStudySnapshot } from '../../components/CaseStudySnapshot';
import { TechStackAccordion } from '../../components/TechStackAccordion';
import { getTechStackItems } from '../../content/caseStudyTechStack';
import { BeforeAfterSideBySide } from '../../components/BeforeAfterSideBySide';
import { ImageLightboxModal, type ImageLightboxItem } from '../../components/ImageLightboxModal';

type LightboxState = { images: ImageLightboxItem[]; initialIndex: number } | null;

export default function CvsCaseStudy() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const snapshot = useMemo(
    () => ({
      problem:
        'Medicare plan shopping and enrollment is high-stakes and highly regulated. Older adults need clear guidance, readable comparisons, and accessible interaction patterns across desktop and mobile.',
      users:
        'Adults 65+ shopping for and enrolling in Medicare plans, including users with vision, motor, and cognitive accessibility needs (often supported by caregivers).',
      constraints: [
        'Regulated content and compliance reviews',
        'Accessibility expectations for older adults and assistive tech',
        'Cross-device parity (desktop + mobile)',
        'Brand/legal stakeholder review cycles',
      ],
      role: '',
      roleTitle: 'Senior Product Designer / UX Strategist',
      roleScope:
        'Led research synthesis, flow strategy, and interaction design within a regulated compliance environment.',
      roleResponsibilities: [
        'Synthesized usability testing insights (UserTesting.com) into prioritized recommendations for plan shopping and enrollment flows.',
        'Designed decision-friendly patterns to reduce cognitive load and improve clarity for older adults across desktop and mobile.',
        'Validated accessibility against WCAG fundamentals and produced QA-ready documentation for engineering handoff.',
      ],
      outcomes: [
        'Clearer plan shopping and comparison experience for older adults',
        'Stronger accessibility baseline across critical flow steps',
        'Improved consistency across desktop and mobile journey patterns',
      ],
    }),
    []
  );

  const goals = [
    'Clarify plan shopping and comparison patterns for adults 65+',
    'Reduce cognitive load across key enrollment steps',
    'Strengthen accessibility across desktop and mobile under regulated content constraints',
  ];

  const approachCards = [
    {
      title: 'Discovery & Inputs',
      description:
        'Conducted moderated and unmoderated usability testing (UserTesting.com) focused on plan shopping, comparison comprehension, and enrollment readiness-then synthesized findings into prioritized recommendations.',
    },
    {
      title: 'Exploration / Design Work',
      description:
        'Mapped the end-to-end journey and simplified key decisions with clearer structure, terminology, and predictable interaction patterns.',
    },
    {
      title: 'Validation & Accessibility',
      description:
        'Reviewed critical screens against WCAG fundamentals (labels, focus, contrast, readable hierarchy, error clarity) to support older adults and assistive technology.',
    },
    {
      title: 'Handoff / Implementation Readiness',
      description:
        'Designed and validated patterns across desktop and mobile, ensuring parity without forcing one platform\'s UI onto the other.',
    },
  ];

  const whatChanged = useMemo(
    () => [
      'Simplified Medicare entry points and navigation so 65+ users can start shopping with confidence',
      'Reworked plan comparison hierarchy to better surface benefits, costs, coverage, and provider/pharmacy cues',
      'Reduced cognitive load with predictable sectioning and progressive disclosure across key steps',
      'Strengthened accessibility baseline (labels + helper text, visible focus, contrast, keyboard support, error clarity)',
      'Aligned desktop and mobile patterns to reduce relearning and improve consistency',
    ],
    []
  );

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
            CVS/Aetna Medicare Enrollment Experience
          </h1>
          <p className="text-xl text-muted-foreground w-full max-w-none">
            Plan shopping + comparison + enrollment • Accessibility for older adults (65+) •
            Desktop + Mobile
          </p>
          <p className="text-sm text-muted-foreground mt-4 w-full max-w-none">
            This case study highlights selected workflows and design decisions from the Medicare
            enrollment experience work.
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
                <TechStackAccordion title="Tech Stack (CVS/Aetna environment)" items={getTechStackItems('cvs')} />
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
                Representative screens showing improvements across entry, shopping, comparison, and
                enrollment readiness.
              </p>

              <div className="space-y-12">
                {/* Homepage Entry (Before → After) */}
                <div>
                  <h3 className="font-medium mb-3">Homepage Entry (Before → After)</h3>
                  <p className="text-sm text-muted-foreground w-full mb-6">
                    <span className="font-medium text-foreground">Before:</span> Entry points and
                    navigation increased scanning effort and made the Medicare path harder to
                    identify.
                    <br />
                    <span className="font-medium text-foreground">After:</span> Clearer information
                    architecture and Medicare-specific entry cues help users reach the right shopping
                    path faster.
                  </p>
                  <BeforeAfterSideBySide
                    beforeLabel="Before"
                    afterLabel="After"
                    beforePlaceholder="Before: Homepage entry"
                    afterPlaceholder="After: Homepage entry"
                    beforeSrc="/images/case-studies/cvs/00-homepage-before.png"
                    afterSrc="/images/case-studies/cvs/00-homepage-After.png"
                    beforeAlt="Before: CVS/Aetna Medicare homepage entry with less clear navigation and entry points."
                    afterAlt="After: CVS/Aetna Medicare homepage entry with clearer information architecture and cues."
                    beforeImgProps={{ ...mediaImgProps, loading: 'eager' }}
                    afterImgProps={{ ...mediaImgProps, loading: 'eager' }}
                    onBeforeClick={() =>
                    setLightbox({
                      images: [
                        { src: '/images/case-studies/cvs/00-homepage-before.png', alt: 'Before: CVS/Aetna Medicare homepage entry with less clear navigation and entry points.', title: 'Before' },
                        { src: '/images/case-studies/cvs/00-homepage-After.png', alt: 'After: CVS/Aetna Medicare homepage entry with clearer information architecture and cues.', title: 'After' },
                      ],
                      initialIndex: 0,
                    })
                  }
                  onAfterClick={() =>
                    setLightbox({
                      images: [
                        { src: '/images/case-studies/cvs/00-homepage-before.png', alt: 'Before: CVS/Aetna Medicare homepage entry with less clear navigation and entry points.', title: 'Before' },
                        { src: '/images/case-studies/cvs/00-homepage-After.png', alt: 'After: CVS/Aetna Medicare homepage entry with clearer information architecture and cues.', title: 'After' },
                      ],
                      initialIndex: 1,
                    })
                  }
                  />
                </div>

                {/* Shop Flow (Before → After) */}
                <div>
                  <h3 className="font-medium mb-3">Shop Flow (Before → After)</h3>
                  <p className="text-sm text-muted-foreground w-full mb-4">
                    <span className="font-medium text-foreground">Before:</span> Plan shopping steps
                    were harder to interpret, increasing uncertainty and backtracking.
                    <br />
                    <span className="font-medium text-foreground">After:</span> Improved structure and
                    hierarchy make the shopping experience easier to follow and compare.
                  </p>
                  <BeforeAfterSideBySide
                    beforePlaceholder="Before: Shop flow"
                    afterPlaceholder="After: Shop flow"
                    beforeSrc="/images/case-studies/cvs/01-cvs-shop-Before.png"
                    afterSrc="/images/case-studies/cvs/01-cvs-shop-after.png"
                    beforeAlt="Before: Plan shopping flow with dense steps and less clear hierarchy."
                    afterAlt="After: Plan shopping flow with improved structure and clearer hierarchy."
                    beforeImgProps={{ ...mediaImgProps, loading: 'lazy' }}
                    afterImgProps={{ ...mediaImgProps, loading: 'lazy' }}
                    onBeforeClick={() =>
                  setLightbox({
                    images: [
                      { src: '/images/case-studies/cvs/01-cvs-shop-Before.png', alt: 'Before: Plan shopping flow with dense steps and less clear hierarchy.', title: 'Before' },
                      { src: '/images/case-studies/cvs/01-cvs-shop-after.png', alt: 'After: Plan shopping flow with improved structure and clearer hierarchy.', title: 'After' },
                    ],
                    initialIndex: 0,
                  })
                }
                onAfterClick={() =>
                  setLightbox({
                    images: [
                      { src: '/images/case-studies/cvs/01-cvs-shop-Before.png', alt: 'Before: Plan shopping flow with dense steps and less clear hierarchy.', title: 'Before' },
                      { src: '/images/case-studies/cvs/01-cvs-shop-after.png', alt: 'After: Plan shopping flow with improved structure and clearer hierarchy.', title: 'After' },
                    ],
                    initialIndex: 1,
                  })
                }
                />
                </div>

                {/* Plan Comparison (Desktop + Mobile) */}
                <div>
                  <h3 className="font-medium mb-3">Plan Comparison (Desktop + Mobile)</h3>
                  <p className="text-sm text-muted-foreground w-full mb-4">
                    Designed a decision-friendly comparison pattern that stays readable and
                    scannable across desktop and mobile.
                  </p>
                  <BeforeAfterSideBySide
                    beforeLabel="Desktop"
                    afterLabel="Mobile"
                    beforePlaceholder="Desktop comparison"
                    afterPlaceholder="Mobile comparison"
                    beforeSrc="/images/case-studies/cvs/02-plan-comparison-desktop.png"
                    afterSrc="/images/case-studies/cvs/02-plan-comparison-mobile.png"
                    beforeAlt="Desktop plan comparison layout."
                    afterAlt="Mobile plan comparison layout."
                    beforeImgProps={{ ...mediaImgProps, loading: 'lazy' }}
                    afterImgProps={{ ...mediaImgProps, loading: 'lazy' }}
                    onBeforeClick={() =>
                  setLightbox({
                    images: [
                      { src: '/images/case-studies/cvs/02-plan-comparison-desktop.png', alt: 'Desktop plan comparison layout.', title: 'Desktop' },
                      { src: '/images/case-studies/cvs/02-plan-comparison-mobile.png', alt: 'Mobile plan comparison layout.', title: 'Mobile' },
                    ],
                    initialIndex: 0,
                  })
                }
                onAfterClick={() =>
                  setLightbox({
                    images: [
                      { src: '/images/case-studies/cvs/02-plan-comparison-desktop.png', alt: 'Desktop plan comparison layout.', title: 'Desktop' },
                      { src: '/images/case-studies/cvs/02-plan-comparison-mobile.png', alt: 'Mobile plan comparison layout.', title: 'Mobile' },
                    ],
                    initialIndex: 1,
                  })
                }
                />
                </div>

                {/* Accessibility */}
                <div>
                  <h3 className="font-medium mb-3">Accessibility</h3>
                  <div className="bg-card border border-border rounded-2xl p-8">
                    <p className="text-muted-foreground mb-6">
                      Designed for older adults by reinforcing readable hierarchy, clear labels, visible
                      focus, and predictable interactions-supporting keyboard and screen-reader-friendly
                      patterns in critical steps.
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">✓</span>
                        <span>Clear labels + helper text</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">✓</span>
                        <span>Visible focus ring + keyboard navigation</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">✓</span>
                        <span>Contrast-aware UI hierarchy</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">✓</span>
                        <span>Error prevention + recovery clarity</span>
                      </li>
                    </ul>
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
              <h2 className="text-2xl font-medium mb-6 w-full max-w-none">Results & Next Steps</h2>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-medium mb-3">Impact</h3>
                <p className="text-muted-foreground">
                  Delivered a clearer, more accessible Medicare shopping and comparison experience by
                  applying usability testing insights, simplifying decision points, and aligning
                  desktop/mobile patterns within regulated constraints.
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
