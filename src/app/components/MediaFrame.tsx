import React from 'react';
import type { ImgHTMLAttributes } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MediaFrameProps {
  /** Public URL (recommended) or imported asset */
  src?: string;
  alt?: string;
  /** Shown when src is not provided */
  placeholder?: string;
  /** Container classes (e.g., aspect ratio + rounding) */
  className?: string;
  /** Image classes (e.g., object-fit) */
  imgClassName?: string;
  /** Passed through to the underlying <img> */
  imgProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'className'>;
}

/**
 * Consistent media wrapper for thumbnails and before/after images.
 * - If src is provided: renders an image with safe fallback.
 * - Otherwise: renders a centered placeholder label.
 */
export function MediaFrame({
  src,
  alt = '',
  placeholder = 'Image placeholder',
  className = '',
  imgClassName = 'w-full h-full object-cover',
  imgProps,
}: MediaFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border bg-muted shadow-sm flex items-center justify-center text-muted-foreground ${className}`}
    >
      {src ? (
        <ImageWithFallback src={src} alt={alt} className={imgClassName} {...imgProps} />
      ) : (
        <div className="px-4 text-center text-sm">{placeholder}</div>
      )}
    </div>
  );
}
