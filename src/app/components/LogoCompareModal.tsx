'use client';

import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { AppModal } from './AppModal';

const DESIGN_DIRECTION_BULLETS = [
  'Simplified silhouette for clearer recognition at small sizes.',
  'Adjusted contrast and stroke balance for better reproduction.',
  "Stronger hierarchy between symbol, 'RENO', and 'TEXAS' lockup.",
  'Cleaner geometry for consistent use across web, print, and signage.',
];

type LogoCompareModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

const ITEMS = [
  { key: 'before' as const, label: 'Before' },
  { key: 'after' as const, label: 'After' },
] as const;

export function LogoCompareModal({
  open,
  onOpenChange,
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: LogoCompareModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (open) {
      setCurrentIndex(0);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentIndex((i) => (i - 1 + 2) % 2);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentIndex((i) => (i + 1) % 2);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  const goPrev = () => setCurrentIndex((i) => (i - 1 + 2) % 2);
  const goNext = () => setCurrentIndex((i) => (i + 1) % 2);
  const atStart = currentIndex === 0;
  const atEnd = currentIndex === 1;

  const currentSrc = currentIndex === 0 ? beforeSrc : afterSrc;
  const currentAlt = currentIndex === 0 ? beforeAlt : afterAlt;
  const currentLabel = ITEMS[currentIndex].label;

  return (
    <AppModal
      open={open}
      onOpenChange={onOpenChange}
      title="Brand Identity - Logo Compare"
      size="large"
      bodyClassName="px-6 pb-4"
    >
      <div className="flex flex-col gap-4">
        <div className="flex min-h-[240px] max-h-[45vh] items-center justify-center rounded-xl border border-border bg-muted/10 p-4">
          <img
            src={currentSrc}
            alt={currentAlt}
            className="max-h-[35vh] w-auto max-w-full object-contain"
            draggable={false}
          />
        </div>

        <div className="flex shrink-0 items-center justify-center gap-4 border-t border-border pt-4">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={goPrev}
            disabled={atStart}
            className="gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-5" aria-hidden />
            Previous
          </Button>
          <span className="text-sm text-muted-foreground" aria-live="polite">
            {currentLabel} ({currentIndex + 1} / 2)
          </span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={goNext}
            disabled={atEnd}
            className="gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="Next image"
          >
            <ChevronRight className="size-5" aria-hidden />
            Next
          </Button>
        </div>

        <div className="rounded-xl border border-border bg-muted/10 p-4">
          <h4 className="text-sm font-medium mb-3">Design Direction (After)</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {DESIGN_DIRECTION_BULLETS.map((bullet, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-primary shrink-0">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AppModal>
  );
}
