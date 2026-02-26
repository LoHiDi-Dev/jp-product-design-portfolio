import React from 'react';
import type { ImgHTMLAttributes } from 'react';
import { ZoomIn } from 'lucide-react';
import { Thumbnail, type ThumbnailSize } from './Thumbnail';

interface BeforeAfterSideBySideProps {
  beforeLabel?: string;
  afterLabel?: string;
  beforePlaceholder?: string;
  afterPlaceholder?: string;
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
  /** Canonical size: md (Before/After), square (logos). frameClassName/imgClassName deprecated. */
  size?: ThumbnailSize;
  frameClassName?: string;
  imgClassName?: string;
  beforeImgProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'className'>;
  afterImgProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'className'>;
  /** When set, the Before image is clickable and shows a zoom icon; use with a lightbox */
  onBeforeClick?: () => void;
  /** When set, the After image is clickable and shows a zoom icon; use with a lightbox */
  onAfterClick?: () => void;
}

export function BeforeAfterSideBySide({
  beforeLabel = 'Before',
  afterLabel = 'After',
  beforePlaceholder = 'Before image placeholder',
  afterPlaceholder = 'After image placeholder',
  beforeSrc,
  afterSrc,
  beforeAlt = '',
  afterAlt = '',
  className = '',
  size = 'md',
  frameClassName: _frameClassName,
  imgClassName: _imgClassName,
  beforeImgProps,
  afterImgProps,
  onBeforeClick,
  onAfterClick,
}: BeforeAfterSideBySideProps) {
  const zoomOverlay = (
    <div
      className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/20 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
      aria-hidden
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg">
        <ZoomIn className="h-6 w-6" />
      </span>
    </div>
  );

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
      {/* Before */}
      <div>
        <div className="text-sm font-medium mb-3 text-muted-foreground">{beforeLabel}</div>
        <div
          className={`relative group overflow-hidden rounded-2xl ${onBeforeClick ? 'cursor-pointer' : ''}`}
          onClick={onBeforeClick}
          onKeyDown={
            onBeforeClick
              ? (e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onBeforeClick();
                  }
                }
              : undefined
          }
          role={onBeforeClick ? 'button' : undefined}
          tabIndex={onBeforeClick ? 0 : undefined}
          aria-label={onBeforeClick ? `Expand ${beforeLabel} image` : undefined}
        >
          <Thumbnail
            src={beforeSrc}
            alt={beforeAlt}
            placeholder={beforePlaceholder}
            size={size}
            fit={size === 'square' ? 'contain' : 'contain'}
            imgProps={beforeImgProps}
          />
          {onBeforeClick && zoomOverlay}
        </div>
      </div>

      {/* After */}
      <div>
        <div className="text-sm font-medium mb-3 text-muted-foreground">{afterLabel}</div>
        <div
          className={`relative group overflow-hidden rounded-2xl ${onAfterClick ? 'cursor-pointer' : ''}`}
          onClick={onAfterClick}
          onKeyDown={
            onAfterClick
              ? (e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onAfterClick();
                  }
                }
              : undefined
          }
          role={onAfterClick ? 'button' : undefined}
          tabIndex={onAfterClick ? 0 : undefined}
          aria-label={onAfterClick ? `Expand ${afterLabel} image` : undefined}
        >
          <Thumbnail
            src={afterSrc}
            alt={afterAlt}
            placeholder={afterPlaceholder}
            size={size}
            fit={size === 'square' ? 'contain' : 'contain'}
            imgProps={afterImgProps}
          />
          {onAfterClick && zoomOverlay}
        </div>
      </div>
    </div>
  );
}
