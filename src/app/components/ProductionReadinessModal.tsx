import { Download, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { AppModal } from './AppModal';

const WHAT_THIS_COVERS = [
  'Testable acceptance criteria + Definition of Done',
  'Smoke testing for critical flows (desktop + mobile)',
  'Cross-browser validation (Chrome / Safari / Edge)',
  'Accessibility validation (keyboard, focus, contrast)',
  'Performance budget + monitoring readiness',
];

export function ProductionReadinessModal() {
  return (
    <AppModal
      trigger={
        <Button
          variant="ghost"
          size="sm"
          className="gap-2"
          aria-label="Open Production Readiness Checklist"
        >
          <ExternalLink className="size-4" aria-hidden />
          Open Production Readiness Checklist
        </Button>
      }
      title="Production Readiness Checklist"
      subtitle="This checklist is part of how I deliver work-validating scope, critical flows, accessibility, and performance before release."
      tags={
        <>
          <Badge variant="outline">Release Readiness</Badge>
          <Badge variant="outline">QA / Validation</Badge>
          <Badge variant="outline">Web App</Badge>
          <Badge variant="outline">Last updated: Feb 2026</Badge>
        </>
      }
      footer={
        <div className="flex justify-end">
          <Button asChild size="sm" className="gap-2">
            <a
              href="/artifacts/production-readiness-checklist.pdf"
              download="production-readiness-checklist.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Production Readiness Checklist PDF"
            >
              <Download className="size-4" aria-hidden />
              Download PDF
            </a>
          </Button>
        </div>
      }
      size="large"
    >
      <div className="rounded-2xl border border-border bg-background shadow-sm">
        <div className="p-4 sm:p-5">
          <p className="text-sm text-muted-foreground mb-2">Document preview</p>
          <div className="relative rounded-xl border border-border overflow-hidden bg-muted/10">
            <div className="relative aspect-[8.5/11] min-h-[320px] w-full">
              <iframe
                src="/artifacts/production-readiness-checklist.pdf#toolbar=0"
                title="Production Readiness Checklist PDF preview"
                className="absolute inset-0 h-full w-full border-0"
              />
              <div
                className="absolute inset-0 bg-transparent"
                aria-hidden
                style={{ pointerEvents: 'auto' }}
              />
            </div>
            <p className="border-t border-border px-4 py-3 text-xs text-muted-foreground italic">
              This is the checklist I use across projects to validate production
              readiness before release.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">What this covers</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {WHAT_THIS_COVERS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AppModal>
  );
}
