import { Container } from '../components/Container';
import { Button } from '../components/ui/button';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import { engineeringProof } from '../data/proof';
import { CompareModal } from '../components/CompareModal';
import { PdfReportModal } from '../components/PdfReportModal';
import { ProductionReadinessModal } from '../components/ProductionReadinessModal';
import { useInViewOnce, usePrefersReducedMotion } from '../hooks/useInViewOnce';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Switch } from '../components/ui/switch';
import { Input } from '../components/ui/input';

export default function Proof() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const accessibilitySectionRef = useRef<HTMLElement | null>(null);
  const accessibilityInView = useInViewOnce(accessibilitySectionRef, {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px',
  });
  const revealAccessibilityCards = prefersReducedMotion ? true : accessibilityInView;

  const revealCardClasses = prefersReducedMotion
    ? ''
    : 'transition-opacity duration-300 ease-out';
  const revealCardState = prefersReducedMotion
    ? 'opacity-100'
    : revealAccessibilityCards
      ? 'opacity-100'
      : 'opacity-0';
  const staggerDelay = (index: number) => (prefersReducedMotion ? undefined : `${index * 80}ms`);

  const hoverLiftCardClasses = prefersReducedMotion
    ? ''
    : 'transition-[box-shadow,border-color] duration-200 ease-out hover:shadow-sm hover:border-foreground/15';
  const focusWithinCardClasses =
    'focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background';

  // Accessibility Playground state (local to this section)
  const [showEmailError, setShowEmailError] = useState(false);
  const [showLowContrast, setShowLowContrast] = useState(false);
  const focusDemoTimeoutsRef = useRef<number[]>([]);
  const focusPrimaryRef = useRef<HTMLButtonElement | null>(null);
  const focusSecondaryRef = useRef<HTMLButtonElement | null>(null);
  const focusLinkRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    return () => {
      focusDemoTimeoutsRef.current.forEach((t) => window.clearTimeout(t));
      focusDemoTimeoutsRef.current = [];
    };
  }, []);

  const runFocusWalkthrough = () => {
    if (prefersReducedMotion) return;

    focusDemoTimeoutsRef.current.forEach((t) => window.clearTimeout(t));
    focusDemoTimeoutsRef.current = [];

    const steps: Array<{ el: HTMLElement | null; delay: number }> = [
      { el: focusPrimaryRef.current, delay: 0 },
      { el: focusSecondaryRef.current, delay: 320 },
      { el: focusLinkRef.current, delay: 640 },
    ];

    steps.forEach(({ el, delay }) => {
      const id = window.setTimeout(() => el?.focus(), delay);
      focusDemoTimeoutsRef.current.push(id);
    });
  };

  const normalizeEngineeringCta = (label?: string) => {
    if (!label) return label;
    switch (label) {
      case 'View Report':
        return 'Read report';
      case 'View Demo':
        return 'View demo';
      case 'View Figma':
        return 'View in Figma';
      case 'View GitHub':
        return 'View on GitHub';
      case 'Open Compare':
        return 'View comparison';
      default:
        return label;
    }
  };

  const engineeringOutcomes: Record<string, string> = {
    'MediVite Design System + UI Kit':
      'Outcome: improved UI consistency and reduced handoff friction.',
    'Secure Login UX for Warehouse Ops':
      'Outcome: clearer first-time setup and safer recovery flows.',
    'UX Audit + Heuristic Evaluation (Cart + Checkout)':
      'Outcome: prioritized fixes with severity ratings for faster iteration.',
    'Oil Dinor Redesign (Home, PLP, PDP + Mobile)':
      'Outcome: clearer navigation and faster product decision-making.',
  };

  const productionDeliverables = [
    'Acceptance criteria + Definition of Done (DoD)',
    'UAT scripts + smoke test plan (critical flows)',
    'Release checklist + launch / rollback notes',
    'Bug triage workflow (severity, priority, SLA)',
    'Accessibility validation notes (WCAG-focused)',
  ];

  const releaseReadinessChecklist = [
    'Requirements + acceptance criteria approved',
    'Critical flows smoke-tested (desktop + mobile)',
    'Cross-browser pass (Chrome / Safari / Edge)',
    'Accessibility pass (keyboard, contrast, focus states)',
    'Performance budget met (Lighthouse targets)',
    'Analytics + error monitoring validated',
  ];

  const accessibilityWork = [
    { criterion: 'Perceivable', status: 'Color contrast, alt text, text resize' },
    { criterion: 'Operable', status: 'Keyboard navigation, focus management' },
    { criterion: 'Understandable', status: 'Clear labels, error messages, instructions' },
    { criterion: 'Robust', status: 'Semantic HTML, ARIA when needed' },
  ];

  return (
    <div className="py-16">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Artifacts</h1>
          <p className="text-lg text-muted-foreground w-full leading-relaxed">
            Artifacts that show how I design, validate, and ship&mdash;covering design delivery, production readiness, and accessibility.
          </p>
        </div>

        {/* Engineering Proof */}
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-6">Design &amp; Implementation Artifacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engineeringProof.map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-medium mb-3">{item.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-sm font-medium text-primary mb-1">
                      What it shows
                    </div>
                    <p className="text-sm">{item.what}</p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-primary mb-1">
                      My contribution
                    </div>
                    <p className="text-sm">{item.contribution}</p>
                  </div>

                  {engineeringOutcomes[item.title] && (
                    <p
                      className="text-sm text-muted-foreground truncate"
                      title={engineeringOutcomes[item.title]}
                    >
                      {engineeringOutcomes[item.title]}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  {!item.hideGitHub &&
                    (item.repoUrl ? (
                      <Button asChild variant="outline" size="sm" className="gap-2">
                        <a href={item.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" /> View on GitHub
                        </a>
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        disabled
                        title="Add repoUrl in src/app/data/proof.ts"
                      >
                        <Github className="w-4 h-4" /> GitHub link pending
                      </Button>
                    ))}
                  {item.reportPdfUrl ? (
                    <PdfReportModal
                      triggerLabel={normalizeEngineeringCta(item.ctaLabel) ?? 'Read report'}
                      pdfUrl={item.reportPdfUrl}
                      title={item.reportTitle ?? 'UX Audit Report'}
                      subtitle={item.reportSubtitle}
                    />
                  ) : item.compare ? (
                    <CompareModal
                      beforeSrc={item.compare.beforeSrc}
                      afterSrc={item.compare.afterSrc}
                      trigger={
                        <Button variant="ghost" size="sm" className="gap-2">
                          <ExternalLink className="w-4 h-4" />{' '}
                          {normalizeEngineeringCta(item.ctaLabel) ?? 'View comparison'}
                        </Button>
                      }
                    />
                  ) : (
                    item.caseStudy &&
                    (!item.figmaUrl || item.ctaLabel) && (
                      <Link to={item.caseStudy}>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <ExternalLink className="w-4 h-4" />{' '}
                          {normalizeEngineeringCta(item.ctaLabel) ?? 'View demo'}
                        </Button>
                      </Link>
                    )
                  )}
                  {item.figmaUrl && (
                    <Button asChild variant="ghost" size="sm" className="gap-2">
                      <a href={item.figmaUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" /> View in Figma
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Production Readiness (Delivery & QA) */}
        <section id="production-readiness" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-medium mb-6">Production Readiness</h2>
          <div className="bg-card border border-border rounded-2xl p-8">
            <p className="text-foreground/85 mb-6">
              I ship production-ready releases by translating design intent into testable acceptance criteria, validation checklists, and cross-functional sign-off.
            </p>
            <p className="text-foreground/85 mb-6">
              This is the checklist and documentation format I use to reduce risk, speed reviews, and get clean cross-functional sign-off.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="order-2 md:order-1">
                <h3 className="font-medium mb-4">Deliverables</h3>
                <ul className="space-y-2 text-sm leading-relaxed">
                  {productionDeliverables.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted rounded-xl p-6 order-1 md:order-2">
                <h3 className="font-medium mb-4">Release Readiness Checklist</h3>
                <ul className="space-y-2 text-sm leading-relaxed" role="list">
                  {releaseReadinessChecklist.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked
                        readOnly
                        className="rounded border-border accent-primary size-4 flex-shrink-0"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <ProductionReadinessModal />
                  <p className="mt-2 text-xs text-muted-foreground">
                    This is the checklist I use across projects to validate production readiness before release.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section ref={accessibilitySectionRef}>
          <h2 className="text-2xl font-medium mb-6">Accessibility & Inclusive Design</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div
              className={[
                'bg-card border border-border rounded-2xl p-8',
                revealCardClasses,
                revealCardState,
                focusWithinCardClasses,
              ].join(' ')}
              style={{ transitionDelay: staggerDelay(0) }}
            >
              <h3 className="font-medium mb-6">WCAG 2.1 AA-aligned practices (target)</h3>
              
              <div className="space-y-4">
                {accessibilityWork.map((item) => (
                  <div key={item.criterion}>
                    <div className="font-medium mb-2 text-sm">{item.criterion}</div>
                    <p className="text-sm text-muted-foreground">{item.status}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={[
                'bg-card border border-border rounded-2xl p-8',
                revealCardClasses,
                revealCardState,
                focusWithinCardClasses,
              ].join(' ')}
              style={{ transitionDelay: staggerDelay(1) }}
            >
              <h3 className="font-medium mb-6">Tools & Audits</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="font-medium mb-2 text-sm">Audit Tools</div>
                  <p className="text-sm text-muted-foreground">
                    Stark, Axe DevTools, Lighthouse, WAVE
                  </p>
                </div>

                <div>
                  <div className="font-medium mb-2 text-sm">Testing Methods</div>
                  <p className="text-sm text-muted-foreground">
                    Screen reader testing (NVDA, VoiceOver), keyboard-only navigation, 
                    color contrast validation
                  </p>
                </div>

                <div>
                  <div className="font-medium mb-2 text-sm">Focus Management</div>
                  <p className="text-sm text-muted-foreground">
                    Visible focus indicators, logical tab order, skip links
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Accessibility Examples */}
          <div
            className={[
              'bg-card border border-border rounded-2xl p-8',
              revealCardClasses,
              revealCardState,
              focusWithinCardClasses,
            ].join(' ')}
            style={{ transitionDelay: staggerDelay(2) }}
          >
            <h3 className="font-medium">Accessibility - Try it yourself</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Press Tab to test focus states. Click labels to verify associations. Contrast examples reflect AA targets.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              This is a sanitized demo showcasing interaction patterns and state handling.
            </p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-3"
              onClick={() => {
                setShowEmailError(false);
                setShowLowContrast(false);
              }}
            >
              Reset demo
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              {/* Card 1: Focus Ring */}
              <Card
                className={[
                  'rounded-2xl border-border/80 bg-muted/30',
                  revealCardClasses,
                  revealCardState,
                  'focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background',
                ].join(' ')}
                style={{ transitionDelay: staggerDelay(3) }}
              >
                <CardHeader className="pb-0">
                  <CardTitle className="text-sm font-medium">Focus Ring</CardTitle>
                  <CardDescription className="text-xs">
                    Press Tab to move focus across controls.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    <Button asChild size="sm">
                      <button ref={focusPrimaryRef} type="button">
                        Primary
                      </button>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <button ref={focusSecondaryRef} type="button">
                        Secondary
                      </button>
                    </Button>
                    <Button asChild variant="link" size="sm" className="px-1">
                      <button ref={focusLinkRef} type="button">
                        Link-style
                      </button>
                    </Button>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={runFocusWalkthrough}
                      disabled={prefersReducedMotion}
                    >
                      Run focus walkthrough
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      {prefersReducedMotion ? 'Disabled with reduced motion enabled.' : 'Guided focus walk-through.'}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2: Labels + Errors */}
              <Card
                className={[
                  'rounded-2xl border-border/80 bg-muted/30',
                  revealCardClasses,
                  revealCardState,
                  'focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background',
                ].join(' ')}
                style={{ transitionDelay: staggerDelay(4) }}
              >
                <CardHeader className="pb-0">
                  <CardTitle className="text-sm font-medium">Labels + Errors</CardTitle>
                  <CardDescription className="text-xs">
                    Click the label to focus the input. Toggle error state to verify ARIA wiring.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      aria-describedby={showEmailError ? 'email-help email-error' : 'email-help'}
                      aria-invalid={showEmailError ? 'true' : undefined}
                    />
                    <p id="email-help" className="text-xs text-muted-foreground">
                      We’ll only use this to show label and error semantics.
                    </p>
                    {showEmailError && (
                      <p
                        id="email-error"
                        role="alert"
                        className="text-xs font-medium text-destructive"
                      >
                        Please enter a valid email address.
                      </p>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Switch checked={showEmailError} onCheckedChange={setShowEmailError} />
                      <span className="text-sm whitespace-nowrap">Show error</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Sets <code className="font-mono">aria-invalid</code> + updates <code className="font-mono">aria-describedby</code>
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Card 3: Contrast */}
              <Card
                className={[
                  'rounded-2xl border-border/80 bg-muted/30',
                  revealCardClasses,
                  revealCardState,
                  'focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background',
                ].join(' ')}
                style={{ transitionDelay: staggerDelay(5) }}
              >
                <CardHeader className="pb-0">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <CardTitle className="text-sm font-medium">Contrast</CardTitle>
                      <CardDescription className="text-xs">
                        Token-based samples aligned to AA targets.
                      </CardDescription>
                    </div>
                    <Badge variant="outline">AA target (4.5:1+)</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="rounded-xl border border-border bg-background p-4">
                    <div className="text-sm font-medium">Heading text</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Body text on the standard background using project tokens.
                    </p>
                    <div className="mt-3">
                      <Button size="sm">Button label</Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Switch checked={showLowContrast} onCheckedChange={setShowLowContrast} />
                      <span className="text-sm">Compare</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Reveals a low-contrast example.</span>
                  </div>

                  {showLowContrast && (
                    <div className="rounded-xl border border-border bg-muted/30 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm font-medium">Low contrast (example)</div>
                        <Badge variant="secondary">Example</Badge>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground/60">
                        This block is intentionally low-contrast to illustrate what to avoid.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Note */}
        <div className="mt-12 bg-muted border border-border rounded-2xl p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Some project details are redacted to respect confidentiality. Public links are provided where possible.
          </p>
        </div>
      </Container>
    </div>
  );
}
