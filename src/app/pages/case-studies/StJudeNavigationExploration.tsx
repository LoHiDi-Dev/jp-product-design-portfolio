import React, { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../../components/Container';
import { CaseStudySnapshot } from '../../components/CaseStudySnapshot';
import { TechStackAccordion } from '../../components/TechStackAccordion';
import { getTechStackItems } from '../../content/caseStudyTechStack';
import { Thumbnail } from '../../components/Thumbnail';
import { AppModal } from '../../components/AppModal';
import { Button } from '../../components/ui/button';

const IMG_BASE = '/images/case-studies/stjude';

export default function StJudeNavigationExploration() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; title: string } | null>(
    null
  );
  const openLightbox = (src: string, alt: string, title: string) => () =>
    setLightbox({ src, alt, title });

  const snapshot = useMemo(
    () => ({
      problem:
        'Navigation needs to serve multiple audiences with different intents, but the current header pattern makes primary pathways compete.',
      users:
        'Patients & families, donors/supporters, researchers, clinicians, and visitors.',
      constraints: [
        'Multi-audience IA',
        'Donation conversion sensitivity',
        'Accessibility requirements',
        'Responsive behavior (desktop + mobile)',
        'Scalable nav taxonomy',
      ],
      role: '',
      roleTitle: 'UX Architect • Visual Designer • Interaction Designer',
      roleScope:
        'Led IA exploration and navigation pattern design with implementation-ready guidance for engineering handoff.',
      roleResponsibilities: [
        'Defined IA and navigation structure with clear audience pathways (patients vs donors).',
        'Designed three exploration directions with interaction rules for desktop and mobile.',
        'Documented accessibility considerations (focus order, contrast, target sizes) and produced implementation-ready guidance (components, states, interaction rules).',
      ],
      outcomes: [
        'Three viable navigation directions with clear tradeoffs',
        'Recommended next validation step (usability test + stakeholder review)',
        'Reusable header pattern proposal for engineering handoff',
      ],
    }),
    []
  );

  const goals = [
    'Clarify primary audiences and reduce competing top-level actions.',
    'Improve hierarchy and labeling for faster scanning.',
    'Standardize header patterns to support reuse across pages.',
    'Ensure predictable grouping and consistent CTAs for discoverability.',
    'Design with accessibility and responsive behavior (desktop vs mobile) in mind.',
  ];

  const approachCards = [
    {
      title: 'Discovery & Inputs',
      description:
        'Audited the current header structure and IA, mapped key tasks by audience (patients/families, donors/supporters, clinical/research), and captured constraints including donation sensitivity, multi-audience labeling, responsive behavior, and accessibility requirements.',
    },
    {
      title: 'Exploration / Design Work',
      description:
        'Developed three navigation models - Hierarchy-led, Utility-first, and Task-grouped - each with clear grouping logic, CTA placement rules, and defined desktop/mobile behaviors.',
    },
    {
      title: 'Validation & Accessibility',
      description:
        'Checked keyboard flow, focus order, target sizes, and color contrast against WCAG 2.1 AA targets. Documented responsive parity and tradeoffs for each direction to support decision-making.',
    },
    {
      title: 'Handoff / Implementation Readiness',
      description:
        'Produced a reusable header spec (components, states, and interaction rules) so engineering can implement the selected direction without redesign.',
    },
  ];

  const currentAndExplorations = [
    {
      src: `${IMG_BASE}/00-alsac-current-navigation.png`,
      alt: 'St. Jude current navigation baseline.',
      title: 'Current navigation',
      caption:
        'Baseline: Stacked header splits utility and navigation; primary actions compete.',
    },
    {
      src: `${IMG_BASE}/02-nav-exploration1.png`,
      alt: 'Exploration 1: Simplified hierarchy with clearer audience pathways.',
      title: 'Exploration 1',
      caption:
        'Hierarchy-led: Single-row hierarchy with grouped primary CTAs; reduced clutter and clearer scanning.',
    },
    {
      src: `${IMG_BASE}/02-nav-exploration2.png`,
      alt: 'Exploration 2: Utility-forward pattern.',
      title: 'Exploration 2',
      caption:
        'Utility-first: Utility actions surfaced in a top bar; high-intent actions remain visible while navigation moves into the menu.',
    },
    {
      src: `${IMG_BASE}/02-nav-exploration3.png`,
      alt: 'Exploration 3: Task-based grouping.',
      title: 'Exploration 3',
      caption:
        'Task-grouped: Mission ribbon anchors key tasks; clearer primary navigation with search always available.',
    },
  ];

  const whatChanged = [
    'Clarified primary audiences and reduced competing top-level actions.',
    'Strengthened hierarchy and labeling for faster scanning.',
    'Standardized header patterns to support reuse across pages.',
    'Improved discoverability with predictable grouping and consistent CTAs.',
    'Documented focus order, contrast, and target sizes for accessibility.',
    'Defined responsive behavior (desktop vs mobile) for parity and clarity.',
  ];

  const nextSteps = [
    'Validate chosen direction with quick usability test.',
    'Align content and labels with stakeholders for final top-level structure.',
    'Implement selected pattern with documented accessibility and responsive specs.',
  ];

  /** Exploration 1 copy shown in the lightbox modal only. */
  const exploration1NoteForModal = {
    intent:
      'Simplify the header into a single navigation row and prioritize the two primary actions so key pathways are immediately clear.',
    keyChanges: [
      'Single, consolidated primary navigation (reduces the "stacked header" feel)',
      'Primary CTA grouping: Donate (primary) + Patient Referrals (high-visibility secondary)',
      'Reduced top-level clutter to improve scanability and focus',
    ],
    tradeoffs: [
      'Utility items may need a new home (menu, footer, or secondary drawer)',
      'Requires content/label alignment and stakeholder agreement on what stays top-level',
    ],
  };

  /** Exploration 2 copy shown in the lightbox modal only. */
  const exploration2NoteForModal = {
    intent:
      'Utility-first header with navigation behind a menu for faster access to high-intent actions.',
    keyChanges: [
      'Utility-forward top bar (phone, Find Us, search) for quick help and wayfinding',
      'High-intent actions stay visible (Donate + Patient Referrals)',
      'Primary navigation consolidated into a menu (scales via drawer / mega-menu on open)',
    ],
    tradeoffs: [
      'Top-level categories are less discoverable unless the menu is clearly labeled',
      'Menu/drawer must be carefully adapted for mobile + accessibility (focus, keyboard, SR)',
    ],
  };

  /** Exploration 3 copy shown in the lightbox modal only. */
  const exploration3NoteForModal = {
    intent:
      'Introduce a mission-led ribbon to keep donation messaging persistent while keeping the main navigation calm and scannable.',
    keyChanges: [
      'Persistent mission ribbon with Donate + Patient Referrals surfaced together',
      'Cleaner primary nav dedicated to top-level IA',
      'Search remains available without dominating the header',
    ],
    tradeoffs: [
      'Adds a second bar (vertical space + sticky behavior must be managed)',
      'Ribbon hierarchy must not compete with alerts/banners',
    ],
  };

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
            St. Jude - Navigation Exploration
          </h1>
          <p className="text-xl text-muted-foreground w-full max-w-none">
            Navigation + IA exploration to clarify patient vs donor journeys (Desktop + Mobile).
          </p>
          <p className="text-sm text-muted-foreground mt-4 w-full max-w-none">
            This case study highlights selected workflows and design decisions from the navigation
            exploration.
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
                <TechStackAccordion title="Tech Stack (St. Jude environment)" items={getTechStackItems('stjude-navigation-exploration')} />
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentAndExplorations.map((item) => (
                  <div key={item.src} className="space-y-3">
                    <button
                      type="button"
                      onClick={openLightbox(item.src, item.alt, item.title)}
                      className="relative group w-full text-left rounded-2xl overflow-hidden border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      <Thumbnail
                        src={item.src}
                        alt={item.alt}
                        size="md"
                        fit="contain"
                      />
                      <div
                        className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/20 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                        aria-hidden
                      >
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg">
                          <ZoomIn className="h-6 w-6" />
                        </span>
                      </div>
                    </button>
                    <p className="text-sm text-muted-foreground w-full">{item.caption}</p>
                  </div>
                ))}
              </div>
            </section>

            <AppModal
              open={!!lightbox}
              onOpenChange={(open) => !open && setLightbox(null)}
              title="Navigation Exploration"
              size="xl"
            >
                {lightbox && (() => {
                  const currentIndex = currentAndExplorations.findIndex(
                    (item) => item.src === lightbox.src
                  );
                  const total = currentAndExplorations.length;
                  const currentItem = currentAndExplorations[currentIndex];
                  const navLabel = currentItem?.title
                    ? `${currentItem.title} (${currentIndex + 1} / ${total})`
                    : `${currentIndex + 1} / ${total}`;
                  const prevIndex = (currentIndex - 1 + total) % total;
                  const nextIndex = (currentIndex + 1) % total;
                  const goPrev = () => {
                    const item = currentAndExplorations[prevIndex];
                    setLightbox({ src: item.src, alt: item.alt, title: item.title });
                  };
                  const goNext = () => {
                    const item = currentAndExplorations[nextIndex];
                    setLightbox({ src: item.src, alt: item.alt, title: item.title });
                  };
                  return (
                    <>
                      <div className="flex min-h-0 flex-1 items-center justify-center">
                        <img
                          src={lightbox.src}
                          alt={lightbox.alt}
                          className="max-h-[85vh] w-auto max-w-full object-contain"
                        />
                      </div>
                      {[1, 2, 3].includes(currentIndex) && (() => {
                        const notes = currentIndex === 1 ? exploration1NoteForModal : currentIndex === 2 ? exploration2NoteForModal : exploration3NoteForModal;
                        return (
                          <div className="mt-4 shrink-0 space-y-3 border-t border-border pt-4 text-sm">
                            <p className="text-muted-foreground">{notes.intent}</p>
                            <div>
                              <div className="font-medium text-muted-foreground mb-1">Key Changes</div>
                              <ul className="space-y-1">
                                {notes.keyChanges.map((c) => (
                                  <li key={c} className="flex gap-2">
                                    <span className="text-primary">•</span>
                                    <span>{c}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className="font-medium text-muted-foreground mb-1">Tradeoffs</div>
                              <ul className="space-y-1">
                                {notes.tradeoffs.map((t) => (
                                  <li key={t} className="flex gap-2">
                                    <span className="text-primary">•</span>
                                    <span>{t}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        );
                      })()}
                      <div className="mt-4 flex shrink-0 items-center justify-center gap-4 border-t border-border pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={goPrev}
                          disabled={currentIndex === 0}
                          className="gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="size-5" aria-hidden />
                          Previous
                        </Button>
                        <span className="text-sm text-muted-foreground" aria-live="polite">
                          {navLabel}
                        </span>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={goNext}
                          disabled={currentIndex === total - 1}
                          className="gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                          aria-label="Next image"
                        >
                          Next
                          <ChevronRight className="size-5" aria-hidden />
                        </Button>
                      </div>
                    </>
                  );
                })()}
            </AppModal>

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
              <h2 className="text-2xl font-medium mb-6 w-full max-w-none">
                Results & Next Steps
              </h2>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-medium mb-3">Impact</h3>
                <p className="text-muted-foreground mb-6">
                  Delivered three viable navigation directions with clear tradeoffs. Reusable header
                  pattern proposal ready for engineering adoption. Recommended next step: quick
                  usability test and stakeholder review to select final pattern.
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
