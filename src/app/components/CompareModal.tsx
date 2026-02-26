import * as React from 'react';
import { AppModal } from './AppModal';

type CompareModalProps = {
  trigger: React.ReactNode;
  before?: React.ReactNode;
  after?: React.ReactNode;
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
  title?: string;
  hideAnnotations?: boolean;
};

const MARKER_TOOLTIPS: Record<1 | 2 | 3, string> = {
  1: '1: Labels & guidance',
  2: '2: Error recovery',
  3: '3: Focus + contrast',
};

function AnnotationMarker({
  n,
  style,
}: {
  n: 1 | 2 | 3;
  tone: 'before' | 'after';
  style: React.CSSProperties;
}) {
  const base =
    'absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shadow-lg ring-2 ring-background pointer-events-none bg-foreground text-background';
  return (
    <div className={base} style={style} aria-hidden title={MARKER_TOOLTIPS[n]}>
      {n}
    </div>
  );
}

const ANNOTATION_CARDS = [
  {
    n: 1 as const,
    title: 'Labels & guidance',
    body: 'Clear labels and helper text reduce input errors.',
  },
  {
    n: 2 as const,
    title: 'Error recovery',
    body: 'Specific inline feedback makes next steps obvious.',
  },
  {
    n: 3 as const,
    title: 'Focus + contrast',
    body: 'Visible focus and AA-friendly contrast improve usability.',
  },
] as const;

export function CompareModal({
  trigger,
  before,
  after,
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before',
  afterAlt = 'After',
  title = 'Featured Transformation',
  hideAnnotations = false,
}: CompareModalProps) {
  const [open, setOpen] = React.useState(false);

  const pinsBefore = React.useMemo(
    () => [
      { n: 1 as const, x: 88, y: 46 },
      { n: 2 as const, x: 16, y: 30 },
      { n: 3 as const, x: 32, y: 84 },
    ],
    []
  );

  const pinsAfter = React.useMemo(
    () => [
      { n: 1 as const, x: 88, y: 56 },
      { n: 2 as const, x: 18, y: 66 },
      { n: 3 as const, x: 84, y: 78 },
    ],
    []
  );

  const useNodes = before != null && after != null;
  const useImages = beforeSrc != null && afterSrc != null;

  const beforeContent = useNodes
    ? before
    : useImages
      ? (
          <div className="relative w-full rounded-xl border border-border bg-muted/10 min-h-[280px] max-h-[55vh] overflow-y-auto overflow-x-hidden">
            <img
              src={beforeSrc}
              alt={beforeAlt}
              className="w-full min-h-full object-contain object-top"
            />
          </div>
        )
      : null;
  const afterContent = useNodes
    ? after
    : useImages
      ? (
          <div className="relative w-full rounded-xl border border-border bg-muted/10 min-h-[280px] max-h-[55vh] overflow-y-auto overflow-x-hidden">
            <img
              src={afterSrc}
              alt={afterAlt}
              className="w-full min-h-full object-contain object-top"
            />
          </div>
        )
      : null;

  const showMarkers = useNodes;

  return (
    <AppModal
      open={open}
      onOpenChange={setOpen}
      trigger={trigger}
      title={title}
      size="xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3 min-w-0">
          <div className="text-sm font-medium text-muted-foreground">Before</div>
          <div className="relative w-full min-w-0">
            {beforeContent}
            {showMarkers &&
              pinsBefore.map((p) => (
                <AnnotationMarker
                  key={`b-${p.n}`}
                  n={p.n}
                  tone="before"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                />
              ))}
          </div>
        </div>
        <div className="space-y-3 min-w-0">
          <div className="text-sm font-medium text-muted-foreground">After</div>
          <div className="relative w-full min-w-0">
            {afterContent}
            {showMarkers &&
              pinsAfter.map((p) => (
                <AnnotationMarker
                  key={`a-${p.n}`}
                  n={p.n}
                  tone="after"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                />
              ))}
          </div>
        </div>
      </div>

      {!hideAnnotations && (
        <div className="pt-4 mt-4 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {ANNOTATION_CARDS.map((c) => (
              <div
                key={c.n}
                className="rounded-xl border border-border bg-muted/10 p-4 flex items-start gap-3"
              >
                <div
                  className="w-6 h-6 shrink-0 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-semibold"
                  aria-hidden
                >
                  {c.n}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium">{c.title}</div>
                  <p className="text-sm text-muted-foreground mt-1">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </AppModal>
  );
}
