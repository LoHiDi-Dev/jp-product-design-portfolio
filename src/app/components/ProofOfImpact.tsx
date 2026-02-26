import React, { useCallback, useId, useMemo, useState } from 'react';
import { Switch } from './ui/switch';
import { Button } from './ui/button';
import { CompareModal } from './CompareModal';
import { OtpAfterCard, OtpBeforeCard } from './OtpDemoCards';
import { usePrefersReducedMotion } from '../hooks/useInViewOnce';

export function ProofOfImpact() {
  const id = useId();
  const beforeTabId = `poi-tab-before-${id}`;
  const afterTabId = `poi-tab-after-${id}`;
  const panelId = `poi-panel-${id}`;

  const [view, setView] = useState<'before' | 'after'>('before');
  const [a11yDemoOn, setA11yDemoOn] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const a11yPulseClass =
    a11yDemoOn && !prefersReducedMotion ? 'motion-safe:animate-pulse' : '';
  const a11yHighlightClass = a11yDemoOn
    ? 'ring-2 ring-primary/40 ring-offset-2 ring-offset-background'
    : '';

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setView('before');
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setView('after');
    }
  }, []);

  const previewCard = useMemo(() => {
    const pulse = a11yDemoOn ? a11yPulseClass : '';
    return view === 'before' ? (
      <OtpBeforeCard a11yEmphasis={a11yDemoOn} a11yPulseClassName={pulse} />
    ) : (
      <OtpAfterCard a11yEmphasis={a11yDemoOn} a11yPulseClassName={pulse} />
    );
  }, [a11yDemoOn, a11yPulseClass, view]);

  const beforeNode = useMemo(
    () => (
      <OtpBeforeCard
        a11yEmphasis={a11yDemoOn}
        a11yPulseClassName={a11yDemoOn ? a11yPulseClass : ''}
      />
    ),
    [a11yDemoOn, a11yPulseClass]
  );
  const afterNode = useMemo(
    () => (
      <OtpAfterCard
        a11yEmphasis={a11yDemoOn}
        a11yPulseClassName={a11yDemoOn ? a11yPulseClass : ''}
      />
    ),
    [a11yDemoOn, a11yPulseClass]
  );

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-medium mb-2">Design Impact</h2>
        <p className="text-sm text-muted-foreground">
          See measurable design improvements
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          A small interactive demo of how I validate UX improvements.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Before and after view"
        className={`flex items-center gap-2 rounded-lg p-1 w-fit transition-shadow duration-200 ${a11yHighlightClass} ${a11yPulseClass}`}
      >
        <button
          id={beforeTabId}
          role="tab"
          aria-selected={view === 'before'}
          aria-controls={panelId}
          tabIndex={view === 'before' ? 0 : -1}
          onClick={() => setView('before')}
          onKeyDown={onKeyDown}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
            view === 'before'
              ? 'bg-primary/10 text-primary border border-primary/30'
              : 'bg-background text-muted-foreground border border-border hover:bg-muted/50'
          }`}
        >
          Before
        </button>
        <button
          id={afterTabId}
          role="tab"
          aria-selected={view === 'after'}
          aria-controls={panelId}
          tabIndex={view === 'after' ? 0 : -1}
          onClick={() => setView('after')}
          onKeyDown={onKeyDown}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
            view === 'after'
              ? 'bg-primary/10 text-primary border border-primary/30'
              : 'bg-background text-muted-foreground border border-border hover:bg-muted/50'
          }`}
        >
          After
        </button>
      </div>

      <div className="w-full min-w-0">
        {/* Demo + meta follow the column width (stable, no competing centering) */}
        <div className="w-full">
          <div
            id={panelId}
            role="tabpanel"
            aria-labelledby={view === 'before' ? beforeTabId : afterTabId}
            className="w-full"
          >
            {previewCard}
          </div>

          {/* Breathing room under card; meta block internal spacing */}
          <div className="mt-5 flex w-full min-w-0 flex-col gap-3">
            <div className="flex w-full min-w-0 flex-wrap items-center justify-between gap-2">
              <div className="flex min-w-0 shrink items-center gap-2">
                <Switch
                  id="poi-a11y-demo"
                  checked={a11yDemoOn}
                  onCheckedChange={setA11yDemoOn}
                  aria-label="Accessibility demo (preview)"
                />
                <label htmlFor="poi-a11y-demo" className="text-sm font-medium cursor-pointer shrink-0">
                  Accessibility demo (preview): {a11yDemoOn ? 'On' : 'Off'}
                </label>
              </div>
              {a11yDemoOn && (
                <span className="shrink-0 text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                  Contrast: AA
                </span>
              )}
            </div>

            <CompareModal
              trigger={
                <Button
                  variant="outline"
                  size="sm"
                  className={`w-full min-w-0 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${a11yHighlightClass} ${a11yPulseClass}`}
                >
                  Open interactive compare
                </Button>
              }
              before={beforeNode}
              after={afterNode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
