import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { Container } from '../components/Container';
import { HighlightCards } from '../components/HighlightCards';
import { WhatIDoSection } from '../components/sections/WhatIDoSection';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Download,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { siteLinks } from '../data/site';

export default function About() {
  const [philosophyTab, setPhilosophyTab] = useState<'design' | 'development'>('design');
  /** Tools & Platforms - tooling only. Order: Design, Ideation, Front, Back, Testing & QA, Data & DevOps, Collaboration, Communication. */
  const toolsByCategory: Record<string, string[]> = {
    'Design & Prototyping': ['Figma', 'FigJam', 'Sketch', 'Adobe CC', 'Framer', 'Webflow', 'Axure RP', 'UXPin', 'Zeplin'],
    'Design & Ideation': [
      'Figma',
      'FigJam',
      'Miro',
      'Whimsical',
      'Relume',
      'Webflow',
      'Framer',
    ],
    'Front-End': ['React', 'Next.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'HTML/CSS/JavaScript'],
    'Back-End & APIs': ['Laravel (PHP)', 'Node.js (TypeScript)', 'REST APIs', 'PostgreSQL', 'Redis', 'OpenAPI/Swagger', 'Auth0'],
    'Testing & Quality Assurance': ['Playwright', 'Cypress', 'Vitest', 'Jest', 'Postman', 'Sentry (Error Tracking)'],
    'Data & DevOps': ['Prisma ORM', 'Docker', 'Git', 'GitHub Actions', 'Terraform', 'Vercel', 'AWS/Google Cloud', 'CI/CD'],
    'Collaboration & Project Delivery': ['Jira', 'Linear', 'Confluence', 'Notion', 'Miro', 'Slack', 'Microsoft Teams', 'Zoom', 'Google Workspace'],
    'Communication': ['Slack', 'Microsoft Teams', 'Zoom', 'Google Meet', 'Loom', 'Email', 'Notion'],
  };

  /** Single shared title style for all Tools accordion card labels (enforces identical font/size/weight). */
  const TOOLS_CARD_TITLE_CLASS = 'text-base font-medium text-foreground';

  /** Tools accordion: single open state. Default: Design & Prototyping. Only one panel open; opening one closes others. */
  const TOOLS_CARD_IDS = [
    'design-prototyping',
    'design-ideation',
    'front-end',
    'back-end-apis',
    'testing-quality-assurance',
    'data-devops',
    'collaboration-project-delivery',
    'communication',
  ] as const;
  const [openId, setOpenId] = useState<string>('');
  const toolsCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (openId !== '' && toolsCardsRef.current && !toolsCardsRef.current.contains(e.target as Node)) {
        setOpenId('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openId]);

  return (
    <div className="py-16">
      <Container>
        <div className="space-y-16">
          {/* 0. Header profile block */}
          <header className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-medium mb-2">Joel Stefano Premier</h1>
              <p className="text-xl font-medium text-foreground/90 mb-1">
                Senior Product Designer (UX/UI)
              </p>
              <p className="text-base text-muted-foreground">
                Design Systems • Accessibility • Service-first UX
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 group">
                <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/15" aria-hidden="true">
                  <MapPin className="w-4 h-4 text-primary opacity-90 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </span>
                <span>Irving, TX</span>
              </div>
              <div className="flex items-center gap-2 group">
                <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/15" aria-hidden="true">
                  <Phone className="w-4 h-4 text-primary opacity-90 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </span>
                <a href={`tel:${siteLinks.phone}`} className="hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
                  {siteLinks.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2 group">
                <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/15" aria-hidden="true">
                  <Mail className="w-4 h-4 text-primary opacity-90 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </span>
                <a href={`mailto:${siteLinks.email}`} className="hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
                  {siteLinks.email}
                </a>
              </div>
              <div className="flex items-center gap-2 group">
                <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/15" aria-hidden="true">
                  <Globe className="w-4 h-4 text-primary opacity-90 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </span>
                <span>English (fluent), French (native)</span>
              </div>
            </div>

            <p className="text-muted-foreground w-full">
              I help teams ship accessible products with confidence-aligning user needs, business goals, and engineering constraints. From discovery through design systems and QA-ready acceptance criteria, I reduce ambiguity and speed up delivery. I'm also React/TypeScript fluent to strengthen handoffs and implementation quality when needed.
            </p>

            {/* Highlights */}
            <HighlightCards />
          </header>

          {/* 1. Background - editorial block, no heavy card */}
          <section id="background" className="space-y-6">
            <h2 className="text-2xl font-medium">Background</h2>
            <div className="space-y-4 w-full">
              <p className="text-muted-foreground w-full leading-relaxed">
                I started in full-stack web development before moving into product UX design. That hybrid foundation helps me bridge strategy, design, and engineering so teams can ship with confidence.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1.5 w-full text-sm">
                <li>Bridge strategy, design, and engineering in a workflow-driven UX approach.</li>
                <li>Translate complex workflows into shippable UI and system patterns.</li>
                <li>Hands-on React and TypeScript implementation support when needed to reduce handoff friction.</li>
              </ul>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground shrink-0">Industries:</span>
              {['E-commerce', 'Healthcare', 'Transportation', 'Fintech', 'Hospitality', 'Government', 'Consulting', 'Nonprofit', 'Enterprise SaaS'].map((label) => (
                <span
                  key={label}
                  className="px-3 py-1 text-sm bg-muted/80 text-muted-foreground rounded-full border border-border cursor-default"
                >
                  {label}
                </span>
              ))}
            </div>
          </section>

          {/* 2. Philosophy - segment links on same line as heading, right-aligned */}
          <section id="philosophy" className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-2xl font-medium">Philosophy</h2>
              <div className="inline-flex rounded-xl bg-muted p-1 gap-0.5" role="tablist" aria-label="Philosophy view">
                <button
                  type="button"
                  role="tab"
                  aria-selected={philosophyTab === 'design'}
                  aria-controls="philosophy-design-panel"
                  id="philosophy-design-tab"
                  onClick={() => setPhilosophyTab('design')}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    philosophyTab === 'design'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-background/80 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Design
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={philosophyTab === 'development'}
                  aria-controls="philosophy-development-panel"
                  id="philosophy-development-tab"
                  onClick={() => setPhilosophyTab('development')}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    philosophyTab === 'development'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-background/80 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Development
                </button>
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <div
                role="tabpanel"
                id={philosophyTab === 'design' ? 'philosophy-design-panel' : 'philosophy-development-panel'}
                aria-labelledby={philosophyTab === 'design' ? 'philosophy-design-tab' : 'philosophy-development-tab'}
              >
              {philosophyTab === 'design' && (
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I design for real-world workflows, balancing user needs, business outcomes, and technical
                    constraints. I use research, data, and rapid iteration to reduce friction, improve clarity, and
                    build inclusive interfaces that scale through consistent patterns and accessible design systems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Workflow-first UX</span>
                    <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Evidence-driven decisions</span>
                    <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Accessible, scalable systems</span>
                  </div>
                </div>
              )}
              {philosophyTab === 'development' && (
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I build UI that matches design intent-clean components, durable state, and accessible interactions. I prioritize maintainability, performance, and predictable patterns so teams can ship confidently and iterate fast.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Component-first UI</span>
                    <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Accessible by default</span>
                    <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Production-ready patterns</span>
                  </div>
                </div>
              )}
              </div>
            </div>
          </section>

          {/* 3. What I Do */}
          <WhatIDoSection id="what-i-do" className="space-y-8" wrapInContainer={false} />

          {/* Where to next - primary CTA + text link, no container chrome */}
          <section className="pt-2 pb-10">
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/work">
                <Button className="gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  View Case Studies
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="sm" className="gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  Let's Talk <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Tools & Platforms - click anywhere outside the cards closes the open card */}
          <section id="tools" className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-medium">Tools & Platforms</h2>
              <p className="text-muted-foreground max-w-2xl">
                Tooling I use to collaborate, design, build, and ship.
              </p>
            </div>
            <div ref={toolsCardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {Object.entries(toolsByCategory).map(([category, items], index) => {
                const cardId = TOOLS_CARD_IDS[index];
                const panelId = `${cardId}-panel`;
                const triggerId = `${cardId}-trigger`;
                const isOpen = openId === cardId;
                const hasContent = items.length > 0;
                const handleToggle = () => {
                  setOpenId((prev) => (prev === cardId ? '' : hasContent ? cardId : prev));
                };
                return (
                  <div
                    key={cardId}
                    className="self-start w-full bg-card border border-border rounded-2xl overflow-hidden"
                  >
                    <button
                      type="button"
                      id={triggerId}
                      onClick={handleToggle}
                      aria-expanded={isOpen && hasContent}
                      aria-controls={isOpen && hasContent ? panelId : undefined}
                      className="flex w-full items-center justify-between gap-2 px-6 py-4 text-left transition-colors hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                    >
                      <span className={TOOLS_CARD_TITLE_CLASS}>{category}</span>
                      <ChevronDown
                        className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 motion-reduce:transition-none ${isOpen ? '' : 'rotate-[-90deg]'}`}
                        aria-hidden
                      />
                    </button>
                    {isOpen && hasContent && (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        className="flex flex-wrap gap-2 px-6 pb-6 pt-0"
                      >
                        {items.map((tool) => (
                          <span key={tool} className="px-3 py-1 text-sm bg-muted rounded-full">
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* CTA - Download resume PDF (required at bottom) */}
          <section id="resume" className="space-y-4">
            <h2 className="text-2xl font-medium">Download my resume</h2>
            <p className="text-muted-foreground">
              Download a PDF version of my resume for quick review or sharing.
            </p>
            <Button variant="default" className="gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" asChild>
              <a href="/Joel-Premier-Resume.pdf" download="Joel-Premier-Resume.pdf">
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </Button>
          </section>
        </div>
      </Container>
    </div>
  );
}
