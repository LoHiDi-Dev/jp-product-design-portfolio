import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion, useReducedMotion } from 'motion/react';
import { AppModal } from './AppModal';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Vite + ESM-friendly worker setup.
// eslint-disable-next-line import/no-unresolved
import pdfWorkerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerSrc;

type PdfReportModalProps = {
  triggerLabel: string;
  pdfUrl: string;
  title: string;
  subtitle?: string;
};

export function PdfReportModal({
  triggerLabel,
  pdfUrl,
  title,
  subtitle,
}: PdfReportModalProps) {
  const reducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [numPages, setNumPages] = useState<number>(0);
  const [page, setPage] = useState(1);
  const [dir, setDir] = useState<-1 | 1>(1);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);
  const [hasTurnedPage, setHasTurnedPage] = useState(false);

  const pageWrapRef = useRef<HTMLDivElement>(null);
  const [pageWidth, setPageWidth] = useState<number>(720);

  useEffect(() => {
    if (!open) return;
    setPage(1);
    setDir(1);
    setLoadError(null);
    setHasTurnedPage(false);
    const el = pageWrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const w = Math.max(320, el.clientWidth);
      setPageWidth(Math.min(w, 900));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [open]);

  const prev = useCallback(() => {
    setHasTurnedPage(true);
    setDir(-1);
    setPage((p) => Math.max(1, p - 1));
  }, []);

  const next = useCallback(() => {
    if (!numPages) return;
    setHasTurnedPage(true);
    setDir(1);
    setPage((p) => Math.min(numPages, p + 1));
  }, [numPages]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, prev, next]);

  const canPrev = page > 1;
  const canNext = numPages ? page < numPages : false;

  const motionProps = useMemo(() => {
    if (reducedMotion || !hasTurnedPage)
      return { initial: false as const, animate: { opacity: 1, rotateY: 0, x: 0 } };
    const turnAngle = 98;
    const fromRight = 32;
    const initial = {
      opacity: 0.96,
      x: fromRight,
      rotateY: turnAngle,
    };
    const animate = { opacity: 1, x: 0, rotateY: 0 };
    return {
      initial,
      animate,
      transition: {
        type: 'tween' as const,
        duration: 0.52,
        ease: [0.22, 0.48, 0.38, 0.98],
      },
      style: {
        transformOrigin: 'right center',
        transformPerspective: 1600,
        transformStyle: 'preserve-3d' as const,
        backfaceVisibility: 'hidden' as const,
      },
    };
  }, [reducedMotion, hasTurnedPage]);

  return (
    <AppModal
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button variant="ghost" size="sm" className="gap-2">
          <ExternalLink className="size-4" aria-hidden />
          {triggerLabel}
        </Button>
      }
      title={title}
      subtitle={subtitle}
      size="xl"
    >
      <div>
        <div
          ref={pageWrapRef}
          className="relative rounded-r-xl border border-border border-l-2 border-l-border/80 bg-muted/10 p-3 sm:p-4 pl-4 sm:pl-5 max-h-[70vh] overflow-auto shadow-[inset_8px_0_12px_-6px_rgba(0,0,0,0.08)]"
          style={{ perspective: '1400px' }}
        >
          <Document
            key={reloadKey}
            file={pdfUrl}
            loading={
              <div className="flex items-center justify-center py-16 text-sm text-muted-foreground">
                Loading PDF…
              </div>
            }
            error={
              <div className="flex flex-col items-center justify-center gap-3 py-16 text-sm text-muted-foreground">
                <div>Couldn&apos;t load the PDF.</div>
                {loadError ? (
                  <div className="max-w-[42ch] text-center text-xs">
                    {loadError}
                  </div>
                ) : null}
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setLoadError(null);
                    setReloadKey((k) => k + 1);
                  }}
                >
                  Retry
                </Button>
              </div>
            }
            onLoadError={(err) => setLoadError(err?.message ?? 'Failed to load')}
            onLoadSuccess={(info) => {
              setLoadError(null);
              setNumPages(info.numPages);
              setPage(1);
            }}
            className="flex justify-center"
          >
            {!loadError && (
              <motion.div key={page} {...motionProps}>
                <Page
                  pageNumber={page}
                  width={pageWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  loading={
                    <div className="flex items-center justify-center py-16 text-sm text-muted-foreground">
                      Rendering page…
                    </div>
                  }
                />
              </motion.div>
            )}
          </Document>
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-muted-foreground">
            {numPages ? (
              <span>
                Page <span className="text-foreground font-medium">{page}</span>{' '}
                of <span className="text-foreground font-medium">{numPages}</span>
              </span>
            ) : (
              <span>Page -</span>
            )}
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={prev} disabled={!canPrev}>
              Prev
            </Button>
            <Button variant="outline" size="sm" onClick={next} disabled={!canNext}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </AppModal>
  );
}
