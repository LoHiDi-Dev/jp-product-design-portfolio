import { Link } from 'react-router';
import { ArrowLeft, Download, Lock, Check, CheckCircle2 } from 'lucide-react';
import { Container } from '../../components/Container';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '../../components/ui/tooltip';

const whatChecklistCovers = [
  'Acceptance criteria + Definition of Done',
  'Critical flows smoke test (desktop + mobile)',
  'Cross-browser validation (Chrome / Safari / Edge)',
  'Accessibility checks (keyboard, focus, contrast)',
  'Performance budget (Lighthouse targets)',
  'Analytics + error monitoring validation',
  'Bug severity + triage rules',
  'Release sign-off + rollback notes',
];

const releaseGates = [
  'Must-pass: Accessibility',
  'Must-pass: Critical flows',
  'Must-pass: Performance budget',
  'Must-pass: Cross-browser',
  'Must-pass: Analytics events',
];

const severityRubric = [
  { level: 'Blocker', description: 'Prevents release or breaks critical flow' },
  { level: 'High', description: 'Major impact on user experience' },
  { level: 'Medium', description: 'Noticeable issue, has workaround' },
  { level: 'Low', description: 'Minor cosmetic or edge case' },
];

const plannedArtifacts = [
  {
    title: 'UAT Script Sample',
    description:
      'User acceptance testing scenarios with validation criteria and expected outcomes.',
  },
  {
    title: 'Bug Triage Workflow',
    description:
      'Severity classification, escalation paths, and resolution tracking framework.',
  },
  {
    title: 'Accessibility Validation Notes',
    description:
      'WCAG compliance checklist with keyboard navigation and screen reader testing.',
  },
];

export default function QaChecklist() {
  return (
    <div className="py-12">
      <Container>
        {/* Top bar */}
        <div className="mb-8">
          <Link
            to="/proof#production-readiness"
            className="inline-flex items-center gap-2 text-sm text-foreground/90 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden />
            Back to Proof
          </Link>
        </div>

        {/* Hero */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-medium mb-3">Sanitized QA Checklist</h1>
          <p className="text-foreground/85 text-lg max-w-2xl mb-6">
            A real-world release readiness checklist-sanitized to remove client, data, and internal system details.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline">Sanitized</Badge>
            <Badge variant="outline">Release Readiness</Badge>
            <Badge variant="outline">Web App</Badge>
            <Badge variant="outline">Last updated: Feb 2026</Badge>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="default" className="gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <a href="/artifacts/qa-checklist.pdf" download="qa-checklist.pdf">
                <Download className="w-4 h-4" aria-hidden />
                Download PDF
              </a>
            </Button>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="inline-flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="default"
                    className="gap-2 opacity-60 cursor-not-allowed"
                    disabled
                    aria-disabled="true"
                    aria-describedby="view-html-tooltip"
                    title="Planned"
                  >
                    View as HTML
                  </Button>
                  <span id="view-html-tooltip" className="text-xs text-muted-foreground">(Planned)</span>
                </span>
              </TooltipTrigger>
              <TooltipContent>Planned</TooltipContent>
            </Tooltip>
          </div>
        </header>

        {/* Document preview - static artifact, non-interactive */}
        <p className="text-sm text-muted-foreground mb-2">Document preview</p>
        <Card className="mb-10 border-border shadow-sm overflow-hidden">
          <div className="border-b border-border px-4 py-2 flex flex-wrap items-center justify-between gap-2 bg-muted/30">
            <span className="text-xs text-muted-foreground">100%</span>
            <span className="text-xs text-muted-foreground">1 / 2</span>
          </div>
          <CardContent className="p-6 md:p-8">
            <div className="pointer-events-none select-none [&_*]:cursor-default">
            <h2 className="text-xl font-medium mb-1">Release Readiness Checklist</h2>
            <p className="text-sm text-muted-foreground mb-6">Version 2.1 • Feb 16, 2026</p>
            <hr className="border-border mb-6" />

            <section className="mb-6">
              <h3 className="font-medium mb-3">Critical Flows - Smoke Test</h3>
              <ul className="space-y-2 text-sm">
                {['Login flow (email + password, SSO)', 'Primary user dashboard load', 'Checkout flow (end-to-end)', 'Error state handling (400, 500, timeout)', 'Payment confirmation flow'].map((label, i) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="inline-flex size-4 flex-shrink-0 items-center justify-center rounded border border-border bg-background" aria-hidden>
                      {i < 4 ? <Check className="w-2.5 h-2.5 text-muted-foreground" strokeWidth={2.5} /> : null}
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="font-medium mb-3">Cross-Browser Validation</h3>
              <ul className="space-y-2 text-sm">
                {['Chrome (latest stable)', 'Safari (macOS + iOS)', 'Edge (Windows)', 'Firefox (latest stable)'].map((label, i) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="inline-flex size-4 flex-shrink-0 items-center justify-center rounded border border-border bg-background" aria-hidden>
                      {i < 3 ? <Check className="w-2.5 h-2.5 text-muted-foreground" strokeWidth={2.5} /> : null}
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="font-medium mb-3">Accessibility Checks</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Keyboard navigation (Tab, Enter, Escape)', checked: true },
                  { label: 'Focus indicators visible', checked: true },
                  { label: 'Color contrast minimum 4.5:1', checked: true },
                  { label: 'Screen reader testing (NVDA/VoiceOver)', checked: false },
                  { label: 'Alt text for images', checked: false },
                ].map(({ label, checked }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="inline-flex size-4 flex-shrink-0 items-center justify-center rounded border border-border bg-background" aria-hidden>
                      {checked ? <Check className="w-2.5 h-2.5 text-muted-foreground" strokeWidth={2.5} /> : null}
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="font-medium mb-3">Performance Budget</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex justify-between gap-4"><span>Lighthouse Performance</span><span>&gt; 90</span></li>
                <li className="flex justify-between gap-4"><span>First Contentful Paint</span><span>&lt; 1.8s</span></li>
                <li className="flex justify-between gap-4"><span>Largest Contentful Paint</span><span>&lt; 2.5s</span></li>
                <li className="flex justify-between gap-4"><span>Cumulative Layout Shift</span><span>&lt; 0.1</span></li>
              </ul>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm mb-6">
              <div><span className="font-medium">QA Lead:</span> __________</div>
              <div><span className="font-medium">Product Owner:</span> __________</div>
              <div><span className="font-medium">Engineering Lead:</span> __________</div>
            </div>

            <p className="text-xs text-muted-foreground italic">
              This is a sanitized demo showcasing interaction patterns and state handling.
            </p>
            </div>
          </CardContent>
        </Card>

        {/* What this checklist covers */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium mb-4">What this checklist covers</h2>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 text-sm md:text-base">
            {whatChecklistCovers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Release gates */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium mb-4">Release gates</h2>
          <ul className="space-y-2 text-sm">
            {releaseGates.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Severity rubric */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium mb-4">Severity rubric</h2>
          <div className="space-y-2">
            {severityRubric.map(({ level, description }) => (
              <Card key={level} className="border-border bg-card">
                <CardContent className="px-6 py-4">
                  <div className="font-medium text-foreground">{level}</div>
                  <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Planned artifacts */}
        <section className="mb-8">
          <h2 className="text-2xl font-medium mb-4">Planned artifacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plannedArtifacts.map(({ title, description }) => (
              <Card
                key={title}
                className="border-border bg-muted/20 opacity-90 pointer-events-none"
                aria-disabled="true"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <CardTitle className="text-base">{title}</CardTitle>
                      <Badge variant="secondary" className="mt-2">Planned</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
