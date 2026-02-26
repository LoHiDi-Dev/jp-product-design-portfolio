import React from 'react';
import type { ImgHTMLAttributes } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { cn } from './ui/utils';

/** Canonical sizes - Ulta "Before → After" is md */
const SIZE_CLASSES: Record<string, string> = {
  sm: 'aspect-[16/9]',
  md: 'aspect-[1907/920]',
  square: 'aspect-square',
  /** Parent controls dimensions (e.g. absolute inset-0) */
  fill: '',
};

export type ThumbnailSize = keyof typeof SIZE_CLASSES;

export type ThumbnailFit = 'cover' | 'contain';

export interface ThumbnailProps {
  src?: string;
  alt?: string;
  placeholder?: string;
  /** sm: cards, md: Before/After sections (canonical), square: logos */
  size?: ThumbnailSize;
  /** cover: crop to fill (default), contain: fit full image */
  fit?: ThumbnailFit;
  /** Optional object-position for edge-case crops */
  objectPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  /** Additional container classes (e.g. for layout) */
  className?: string;
  /** Passed through to <img> */
  imgProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'className'>;
}

const CANONICAL_STYLES =
  'overflow-hidden rounded-2xl border border-border bg-muted shadow-sm';

/**
 * Canonical thumbnail component. Uses Ulta "Before → After" as reference.
 * - Same corner radius (rounded-2xl)
 * - Same border + shadow
 * - Fixed aspect per size
 * - object-fit: cover by default (no stretch)
 */
export function Thumbnail({
  src,
  alt = '',
  placeholder = 'Image placeholder',
  size = 'md',
  fit = 'cover',
  objectPosition = 'center',
  className = '',
  imgProps,
}: ThumbnailProps) {
  const fitClass = fit === 'cover' ? 'object-cover' : 'object-contain';
  const positionClass =
    objectPosition === 'center'
      ? 'object-center'
      : objectPosition === 'top'
        ? 'object-top'
        : objectPosition === 'bottom'
          ? 'object-bottom'
          : objectPosition === 'left'
            ? 'object-left'
            : 'object-right';

  const sizeClass = SIZE_CLASSES[size] ?? '';

  return (
    <div
      className={cn(
        CANONICAL_STYLES,
        sizeClass,
        'flex items-center justify-center min-h-0 min-w-0',
        className
      )}
    >
      {src ? (
        <ImageWithFallback
          src={src}
          alt={alt}
          className={cn('w-full h-full', fitClass, positionClass)}
          {...imgProps}
        />
      ) : (
        <div className="px-4 text-center text-sm text-muted-foreground">
          {placeholder}
        </div>
      )}
    </div>
  );
}
