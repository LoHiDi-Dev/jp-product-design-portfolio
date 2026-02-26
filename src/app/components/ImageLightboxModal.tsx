import { useEffect, useLayoutEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { AppModal } from './AppModal';

export type ImageLightboxItem = {
  src: string;
  alt: string;
  title?: string;
};

type ImageLightboxModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: ImageLightboxItem[];
  initialIndex?: number;
  /** Modal header title. Defaults to "Image preview". Item titles (e.g. Before/After) show in the bottom nav. */
  modalTitle?: string;
};

export function ImageLightboxModal({
  open,
  onOpenChange,
  items,
  initialIndex = 0,
  modalTitle = 'Image preview',
}: ImageLightboxModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const total = items.length;
  const item = total > 0 ? items[currentIndex] : null;

  // Sync to selected index before paint so the clicked thumbnail's image shows first
  useLayoutEffect(() => {
    if (open) {
      const idx = Math.min(Math.max(0, initialIndex), Math.max(0, total - 1));
      setCurrentIndex(total > 0 ? idx : 0);
    }
  }, [open, initialIndex, total]);

  useEffect(() => {
    if (!open || total <= 1) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentIndex((i) => (i - 1 + total) % total);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentIndex((i) => (i + 1) % total);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, total]);

  const goPrev = () => setCurrentIndex((i) => (i - 1 + total) % total);
  const goNext = () => setCurrentIndex((i) => (i + 1) % total);
  const atStart = currentIndex === 0;
  const atEnd = currentIndex === total - 1;
  const showNav = total > 1;

  const navLabel =
    item?.title != null && item.title !== ''
      ? `${item.title} (${currentIndex + 1} / ${total})`
      : `${currentIndex + 1} / ${total}`;

  return (
    <AppModal
      open={open}
      onOpenChange={onOpenChange}
      title={modalTitle}
      size="xl"
    >
      {item && (
        <>
          <div className="flex min-h-0 flex-1 items-center justify-center">
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-[85vh] w-auto max-w-full object-contain"
            />
          </div>
          {showNav && (
            <div className="mt-4 flex shrink-0 items-center justify-center gap-4 border-t border-border pt-4">
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
                {navLabel}
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
          )}
        </>
      )}
    </AppModal>
  );
}
