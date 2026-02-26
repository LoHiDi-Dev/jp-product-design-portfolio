import { Link, useLocation } from 'react-router';
import { ArrowRight, Download } from 'lucide-react';
import { Container } from '../components/Container';
import { ProjectCard } from '../components/ProjectCard';
import { WhatIDoSection } from '../components/sections/WhatIDoSection';
import { ProofOfImpact } from '../components/ProofOfImpact';
import { Button } from '../components/ui/button';
import { selectedWork, personalWork as personalWorkData, getDisplayChips } from '../data/workProjects';
import { useEffect } from 'react';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash || window.location.hash;
    if (
      hash === '#selected-work' ||
      hash === 'selected-work' ||
      hash === '#personal-work' ||
      hash === 'personal-work'
    ) {
      const id = hash.replace('#', '');
      const scrollToSection = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      requestAnimationFrame(() => {
        requestAnimationFrame(scrollToSection);
      });
    }
  }, [location.pathname, location.hash]);
  const proofChips = [
    'UX Strategy',
    'Product Design',
    'Design Systems',
    'WCAG Accessibility',
    'Stakeholder Alignment',
    'Cross-Functional Delivery',
    'Prototyping & QA',
    'Front-end fluency (React/TypeScript)',
  ];

  const credibilityStrip = [
    'Jillamy, Inc.',
    'Ulta Beauty',
    'Tractor Supply Co.',
    'CVS Health / Aetna',
    'American Airlines',
  ];

  const personalWork = personalWorkData;

  const howIWork = [
    {
      phase: 'Discover',
      description:
        'Research, stakeholder input, and analytics to understand users and system context.',
    },
    {
      phase: 'Define',
      description:
        'Goals, success metrics, flows, and constraints to align UX, business, and engineering.',
    },
    {
      phase: 'Design',
      description:
        'Wireframes, UI patterns, and design system specs that translate cleanly into code.',
    },
    {
      phase: 'Validate',
      description:
        'Usability + accessibility checks, plus technical QA to de-risk release.',
    },
    {
      phase: 'Ship',
      description:
        'Support delivery with monitoring, iteration, and documentation.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
            {/* Left: Content */}
            <div className="lg:col-span-7 flex flex-col">
              <h1 className="text-3xl md:text-4xl font-medium mb-3 md:mb-4 leading-tight max-w-[24ch]">
                Senior Product Designer (UX)
              </h1>
              <p className="text-base font-medium text-foreground/80 mb-5">
                Design Systems &bull; Accessibility (WCAG 2.1) &bull; Analytics-informed Iteration &bull; Implementation-aware Delivery
              </p>
              <p className="text-lg text-muted-foreground mb-7 max-w-[60ch]">
                I help teams ship accessible products with confidence&mdash;aligning user needs, business goals, and engineering constraints. From discovery through design systems and QA-ready acceptance criteria, I reduce ambiguity and speed up delivery.
              </p>

              {/* Credibility Strip */}
              <div className="mb-8">
                <div className="text-sm font-medium text-muted-foreground mb-3">Experience:</div>
                <div className="flex flex-wrap items-center gap-3">
                  {credibilityStrip.map((company, i) => (
                    <span key={company} className="flex items-center gap-3">
                      <span className="text-sm font-medium">{company}</span>
                      {i < credibilityStrip.length - 1 && (
                        <span className="text-muted-foreground">&bull;</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/work">
                  <Button size="lg" className="gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                    View Case Studies <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="secondary" className="gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" asChild>
                  <a href="/Joel-Premier-Resume.pdf" download="Joel-Premier-Resume.pdf">
                    <Download className="w-4 h-4" /> Download Resume
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 max-w-[68ch]">
                {proofChips.map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1.5 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Proof of Impact Module */}
            <div className="w-full min-w-0 lg:col-span-5 flex flex-col">
              <div className="flex-1 flex flex-col justify-between rounded-xl border border-border bg-card p-6">
                <ProofOfImpact />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Selected Work */}
      <section id="selected-work" className="py-16">
        <Container>
          <div className="mb-12">
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h2 className="text-3xl font-medium">Selected Work</h2>
              <Link to="/work" className="hidden md:inline-block text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded shrink-0">
                View all work &rarr;
              </Link>
            </div>
            <p className="text-muted-foreground">Selected case studies showcasing product impact, measurable outcomes, and end-to-end design delivery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedWork.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                role={project.role}
                timeline={project.timeline}
                outcome={project.outcome}
                tags={getDisplayChips(project)}
                href={project.href}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
              />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/work" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              View all work &rarr;
            </Link>
          </div>
        </Container>
      </section>

      {/* Services */}
      <WhatIDoSection className="py-16" />

      {/* How I Work */}
      <section className="py-16 bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-2">How I Work</h2>
            <p className="text-muted-foreground">
              A structured approach to product delivery&mdash;from UX discovery to implementation-ready handoff.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute top-6 left-8 right-8 h-0.5 bg-border hidden md:block" />

              {/* Phases */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                {howIWork.map((item, index) => (
                  <div key={item.phase} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-medium relative z-10">
                      {index + 1}
                    </div>
                    <h3 className="font-medium mb-2">{item.phase}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Personal Work */}
      <section id="personal-work" className="py-16">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-medium mb-2">Selected Personal Work</h2>
            <p className="text-muted-foreground">
              Curated explorations and side experiments (more added over time).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personalWork.map((project, i) => (
              <ProjectCard
                key={i}
                title={project.title}
                role={project.role}
                timeline={project.timeline}
                outcome={project.outcome}
                tags={getDisplayChips(project)}
                href={project.href}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                isPersonal={project.isPersonal}
                badge={project.badge}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-primary text-primary-foreground">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-medium mb-4">Let&rsquo;s design what customers actually use.</h2>
            <p className="text-lg mb-8 opacity-90">
              Senior IC/Lead roles and consulting engagements focused on measurable outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  Let&rsquo;s Talk <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="/Joel-Premier-Resume.pdf" download="Joel-Premier-Resume.pdf">
                  <Download className="w-4 h-4" /> Download Resume
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
