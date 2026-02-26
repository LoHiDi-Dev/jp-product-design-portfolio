import React from 'react';
import {
  Target,
  Lightbulb,
  CheckCircle2,
  TestTube,
  Users,
  Rocket,
} from 'lucide-react';
import { Container } from '../Container';
import { ServiceCard } from '../ServiceCard';

const WHAT_I_DO_SERVICES = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'UX Strategy & Research',
    description:
      'Discovery, journeys, and analytics to frame the problem, define outcomes, and align stakeholders.',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Product & Interface Design',
    description:
      'User flows, interaction design, and UI that reduce complexity and improve task completion.',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'Design Systems & Accessibility',
    description:
      'Reusable components, tokens, and WCAG-minded patterns for consistent, inclusive UI at scale.',
  },
  {
    icon: <TestTube className="w-6 h-6" />,
    title: 'Usability Testing & QA',
    description:
      'Test plans, audits, and iteration loops to validate designs and reduce release risk.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Service & System Design',
    description:
      'Cross-touchpoint mapping and workflows that align people, process, and platform behavior.',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Design Handoff & Build Support',
    description:
      'Developer-ready specs plus hands-on front-end support to speed delivery and reduce rework.',
  },
] as const;

export interface WhatIDoSectionProps {
  /** Section element id (e.g. for anchor links). */
  id?: string;
  /** Section wrapper class (e.g. py-16 on Home, space-y-8 on About). */
  className?: string;
  /** If true, content is wrapped in Container. Use false when already inside Container (e.g. About). Default true. */
  wrapInContainer?: boolean;
}

export function WhatIDoSection({
  id,
  className = '',
  wrapInContainer = true,
}: WhatIDoSectionProps) {
  const content = (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-medium mb-2">What I Do</h2>
        <p className="text-muted-foreground">
          End-to-end product delivery - strategy, design systems, and front-end implementation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHAT_I_DO_SERVICES.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </>
  );

  return (
    <section id={id} className={className || undefined}>
      {wrapInContainer ? <Container>{content}</Container> : content}
    </section>
  );
}
