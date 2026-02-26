import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { TECH_STACK_GROUP_LABELS } from '../content/caseStudyTechStack';

export interface TechStackAccordionProps {
  /** Title shown in the card header, e.g. "Tech Stack (Ulta environment)" */
  title: string;
  /** Bullet items; group labels render as section headers, others as "Tool - purpose" bullets */
  items: string[];
}

const GROUP_LABELS_SET = new Set(TECH_STACK_GROUP_LABELS);

/**
 * Reusable Tech Stack accordion for case study pages.
 * Collapsed by default, keyboard accessible (Enter/Space toggles).
 */
export function TechStackAccordion({ title, items }: TechStackAccordionProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-8">
      <Collapsible defaultOpen={false}>
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-medium">{title}</h3>
          <CollapsibleTrigger
            className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            View stack
            <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <ul className="space-y-2 text-sm mt-4">
            {items.map((item, idx) => {
              const isGroupHeader = GROUP_LABELS_SET.has(item as (typeof TECH_STACK_GROUP_LABELS)[number]);
              return isGroupHeader ? (
                <li key={`${item}-${idx}`} className="font-medium text-foreground mt-4 first:mt-0 list-none">
                  {item}
                </li>
              ) : (
                <li key={`${item}-${idx}`} className="flex gap-2">
                  <span className="text-primary shrink-0">•</span>
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
