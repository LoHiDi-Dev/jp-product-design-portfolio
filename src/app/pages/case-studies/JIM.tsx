import { Container } from '../../components/Container';
import { CaseStudySnapshot } from '../../components/CaseStudySnapshot';
import { BeforeAfterSideBySide } from '../../components/BeforeAfterSideBySide';
import { BeforeAfterModal, AnnotationPin } from '../../components/BeforeAfterModal';
import { Button } from '../../components/ui/button';
import { ExternalLink, Github, Code2, Database, Layers, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function JIMCaseStudy() {
  const [modalOpen, setModalOpen] = useState(false);

  const annotations: AnnotationPin[] = [
    { x: 20, y: 30, label: 'Navigation', caption: 'Simplified workflow navigation with clear hierarchy' },
    { x: 50, y: 40, label: 'Form Design', caption: 'Clear validation and feedback patterns prevent errors' },
    { x: 75, y: 60, label: 'Error States', caption: 'Prevention-focused guardrails reduce operational mistakes' },
    { x: 35, y: 70, label: 'Role-Based UI', caption: 'Contextual interfaces based on operator permissions' },
  ];

  const snapshot = {
    problem: 'Multiple warehouses needed standardized inventory workflows with clear operator feedback and prevention-focused guardrails',
    users: 'Warehouse operators managing inventory across multiple sites',
    constraints: 'Real-time SKU normalization, role-based permissions, edge-case validation requirements',
    role: 'End-to-end ownership: discovery, UX design, architecture, development, QA, iteration',
    outcomes: [
      'Delivered standardized workflows across warehouses',
      'Improved operator speed and accountability',
      'Enhanced decision-making with clear feedback patterns',
      'Implemented role-based experiences with protected routes',
    ],
  };

  const keyChanges = [
    'Operator-first UX with clear confirmation patterns',
    'Prevention-focused guardrails for edge cases',
    'Role-based access control and protected routes',
    'High-performance SKU search and normalization',
    'Structured event logging for accountability',
    'Component-driven front end (React, TypeScript, Tailwind)',
  ];

  const systemComponents = [
    'Design system with reusable components and tokens',
    'Form validation patterns with clear error states',
    'Authentication and authorization mirroring UX permissions',
    'REST API patterns with consistent error handling',
    'Event logging architecture for audit trails',
  ];

  return (
    <div className="py-16">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
              Current Project
            </span>
            <span className="text-sm text-muted-foreground">Nov 2025 &ndash; Present</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-4">
            Jillamy, Inc. &mdash; JIM (Inventory &amp; Ops Portal)
          </h1>
          <p className="text-xl text-muted-foreground">
            In-House Senior Product Designer (UX) | UI Development (React/TypeScript)
          </p>
        </div>

        {/* Executive Snapshot */}
        <section className="mb-12 bg-muted/30 border border-border rounded-2xl p-8">
          <h2 className="text-lg font-medium mb-4">Executive Snapshot</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div><span className="font-medium text-primary">Role:</span> In-House Senior Product Designer (UX) | UI Development</div>
            <div><span className="font-medium text-primary">Platform:</span> Web (React/TypeScript)</div>
            <div><span className="font-medium text-primary">Scope:</span> End-to-end: discovery, UX design, architecture, development, QA</div>
            <div><span className="font-medium text-primary">Team:</span> Solo IC (design + implementation), warehouse stakeholders</div>
            <div className="md:col-span-2 lg:col-span-3"><span className="font-medium text-primary">Problem:</span> Multiple warehouses needed standardized inventory workflows with clear operator feedback and prevention-focused guardrails.</div>
            <div className="md:col-span-2 lg:col-span-3"><span className="font-medium text-primary">Outcomes:</span> Standardized workflows across warehouses, improved operator speed and accountability, role-based experiences with protected routes.</div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Before/After - FIRST */}
            <section>
              <h2 className="text-2xl font-medium mb-6">Before → After</h2>
              <BeforeAfterSideBySide
                beforePlaceholder="Before: Manual inventory tracking"
                afterPlaceholder="After: Standardized portal interface"
                beforeSrc="/images/placeholders/before.svg"
                afterSrc="/images/placeholders/after.svg"
              />
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  onClick={() => setModalOpen(true)}
                  className="w-full md:w-auto focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  View Detailed Comparison with Annotations
                </Button>
              </div>
            </section>

            {/* Modal */}
            <BeforeAfterModal
              open={modalOpen}
              onOpenChange={setModalOpen}
              title="JIM: Before → After Transformation"
              beforePlaceholder="Before: Manual inventory tracking"
              afterPlaceholder="After: Standardized portal interface"
              beforeSrc="/images/placeholders/before.svg"
              afterSrc="/images/placeholders/after.svg"
              annotations={annotations}
            />

            {/* What Changed */}
            <section>
              <h2 className="text-2xl font-medium mb-6">What Changed</h2>
              <div className="bg-card border border-border rounded-2xl p-8">
                <ul className="space-y-3">
                  {keyChanges.map((change, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Approach */}
            <section>
              <h2 className="text-2xl font-medium mb-6">Approach</h2>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="font-medium mb-4">Research & Analysis</h3>
                  <p className="text-muted-foreground">
                    Conducted task analysis and stakeholder working sessions to understand warehouse workflows. 
                    Translated operational constraints into user flows, edge-case rules, and acceptance criteria.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="font-medium mb-4">Information Architecture</h3>
                  <p className="text-muted-foreground">
                    Designed operator-first UX with clear feedback, confirmation patterns, and prevention-focused 
                    guardrails to reduce errors and improve decision-making.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="font-medium mb-4">Accessibility</h3>
                  <p className="text-muted-foreground">
                    Implemented accessible form patterns, keyboard navigation, and clear error states following 
                    WCAG 2.1 guidelines for warehouse environments.
                  </p>
                </div>
              </div>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-2xl font-medium mb-6">Solution</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-video bg-muted rounded-2xl border border-border flex items-center justify-center text-muted-foreground">
                  Key screen: Dashboard
                </div>
                <div className="aspect-video bg-muted rounded-2xl border border-border flex items-center justify-center text-muted-foreground">
                  Key screen: Inventory management
                </div>
                <div className="aspect-video bg-muted rounded-2xl border border-border flex items-center justify-center text-muted-foreground">
                  Edge state: Error handling
                </div>
                <div className="aspect-video bg-muted rounded-2xl border border-border flex items-center justify-center text-muted-foreground">
                  Edge state: Confirmation patterns
                </div>
              </div>
            </section>

            {/* System Thinking */}
            <section>
              <h2 className="text-2xl font-medium mb-6">System Thinking</h2>
              <div className="bg-card border border-border rounded-2xl p-8">
                <ul className="space-y-3">
                  {systemComponents.map((component, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>{component}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Implementation Evidence */}
            <section>
              <h2 className="text-2xl font-medium mb-6">Implementation Evidence</h2>
              <p className="text-muted-foreground mb-8">
                Design-led implementation demonstrating production-ready UI architecture,
                accessible patterns, and systems thinking&mdash;owned end-to-end from UX through code.
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                {/* Component Library */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Layers className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">Component Library & Design System</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Demonstrates: Reusable React components with TypeScript, Tailwind CSS, 
                        design tokens, and compound component patterns. Fully typed with 
                        comprehensive prop interfaces and accessibility built-in.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 text-xs bg-muted rounded-full">React</span>
                        <span className="px-3 py-1 text-xs bg-muted rounded-full">TypeScript</span>
                        <span className="px-3 py-1 text-xs bg-muted rounded-full">Tailwind CSS</span>
                        <span className="px-3 py-1 text-xs bg-muted rounded-full">Design Tokens</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2 focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      <Github className="w-4 h-4" /> View GitHub
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      <ExternalLink className="w-4 h-4" /> Live Storybook
                    </Button>
                  </div>
                </div>

                {/* Authentication & Routing */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Code2 className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">Authentication & Protected Routes</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Demonstrates: Role-based access control (RBAC), JWT authentication, 
                        protected routes with React Router, session management, and contextual 
                        permission checks. Security patterns prevent unauthorized access.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 text-xs bg-muted rounded-full">JWT Auth</span>
                        <span className="px-3 py-1 text-xs bg-muted rounded-full">RBAC</span>
                        <span className="px-3 py-1 text-xs bg-muted rounded-full">React Router</span>
                        <span className="px-3 py-1 text-xs bg-muted rounded-full">Context API</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2 focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      <Github className="w-4 h-4" /> View GitHub
                    </Button>
                  </div>
                </div>

                {/* API Architecture */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Database className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">REST API Architecture & Data Patterns</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Demonstrates: RESTful API design with Node.js/Express, input validation, 
                        consistent error handling, database schema design, event logging for audit 
                        trails, and optimized queries for high-performance operations.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 text-xs bg-muted rounded-full">Node.js</span>
                        <span className="px-3 py-1 text-xs bg-muted rounded-full">REST API</span>
                        <span className="px-3 py-1 text-xs bg-muted rounded-full">PostgreSQL</span>
                        <span className="px-3 py-1 text-xs bg-muted rounded-full">Validation</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2 focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      <Github className="w-4 h-4" /> View GitHub
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      <ExternalLink className="w-4 h-4" /> API Docs
                    </Button>
                  </div>
                </div>

                {/* Form Validation & State Management */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">Form Patterns & State Management</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Demonstrates: Complex form validation with real-time feedback, 
                        optimistic UI updates, error boundary patterns, and React Hook Form 
                        integration with custom validation rules for business logic.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 text-xs bg-muted rounded-full">React Hook Form</span>
                        <span className="px-3 py-1 text-xs bg-muted rounded-full">Validation</span>
                        <span className="px-3 py-1 text-xs bg-muted rounded-full">Error Boundaries</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2 focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      <Github className="w-4 h-4" /> View GitHub
                    </Button>
                  </div>
                </div>
              </div>

              {/* Tech Stack Summary */}
              <div className="mt-8 p-6 bg-muted/50 rounded-2xl">
                <h3 className="font-medium mb-4">Full Tech Stack</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium mb-2 text-muted-foreground">Frontend</div>
                    <ul className="space-y-1">
                      <li>• React 18 with TypeScript</li>
                      <li>• React Router for navigation</li>
                      <li>• Tailwind CSS + design tokens</li>
                      <li>• React Hook Form + Zod validation</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium mb-2 text-muted-foreground">Backend</div>
                    <ul className="space-y-1">
                      <li>• Node.js + Express REST API</li>
                      <li>• PostgreSQL with optimized queries</li>
                      <li>• JWT authentication + RBAC</li>
                      <li>• Event logging & audit trails</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-2xl font-medium mb-6">Results & Next Steps</h2>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-medium mb-4">Impact</h3>
                <p className="mb-6 text-muted-foreground">
                  Successfully deployed across multiple warehouse sites with standardized workflows. 
                  Operators report improved clarity and confidence in decision-making. Reduced errors 
                  through prevention-focused validation and clear feedback patterns.
                </p>

                <h3 className="font-medium mb-4">Next Steps</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span>Expand analytics dashboard for warehouse managers</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span>Add mobile-first interface for on-floor operations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span>Implement advanced reporting and audit trail features</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <CaseStudySnapshot {...snapshot} />
          </aside>
        </div>
      </Container>
    </div>
  );
}