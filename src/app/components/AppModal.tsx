'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';

import { cn } from './ui/utils';

/** Size presets for modal width */
export type AppModalSize = 'default' | 'large' | 'xl';

const SIZE_CLASSES: Record<AppModalSize, string> = {
  default: 'sm:max-w-3xl',
  large: 'sm:max-w-4xl',
  xl: 'sm:max-w-5xl',
};

type AppModalContentProps = {
  /** Modal title (required for aria-labelledby) */
  title: string;
  /** Optional subtitle/description */
  subtitle?: React.ReactNode;
  /** ID for aria-describedby when subtitle has id */
  descriptionId?: string;
  /** Optional tags/chips row */
  tags?: React.ReactNode;
  /** View controls in header (e.g. mode toggles) - NOT primary CTAs */
  headerActions?: React.ReactNode;
  /** Primary CTA(s) at bottom of modal */
  footer?: React.ReactNode;
  /** Size preset */
  size?: AppModalSize;
  /** Additional class for content container */
  className?: string;
  /** Body content (scrollable) */
  children: React.ReactNode;
  /** When false, overlay click does not close */
  closeOnOverlayClick?: boolean;
  /** Custom close button - if not provided, default X is used */
  closeButton?: React.ReactNode;
  /** Override body container class (e.g. p-0 for full-bleed) */
  bodyClassName?: string;
} & Omit<
  React.ComponentProps<typeof DialogPrimitive.Content>,
  'title' | 'children'
>;

const AppModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  AppModalContentProps
>(
  (
    {
      title,
      subtitle,
      descriptionId,
      tags,
      headerActions,
      footer,
      size = 'large',
      className,
      children,
  closeOnOverlayClick = true,
  closeButton,
  bodyClassName,
  id,
  ...props
    },
    ref
  ) => {
    const titleId = id ?? `app-modal-title-${React.useId()}`;
    return (
      <DialogPrimitive.Content
        ref={ref}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        aria-modal="true"
        onInteractOutside={
          closeOnOverlayClick ? undefined : (e) => e.preventDefault()
        }
        onPointerDownOutside={
          closeOnOverlayClick ? undefined : (e) => e.preventDefault()
        }
        className={cn(
          'fixed top-[50%] left-[50%] z-50 flex max-h-[90vh] w-[95vw] translate-x-[-50%] translate-y-[-50%] flex-col overflow-hidden rounded-xl border border-border bg-background shadow-lg',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200',
          SIZE_CLASSES[size],
          className
        )}
        {...props}
      >
        {/* Close button - fixed top-right, min 40px hit target */}
        {!closeButton && (
          <DialogPrimitive.Close
            className="ring-offset-background focus:ring-ring absolute top-4 right-4 z-20 flex min-h-10 min-w-10 items-center justify-center rounded-md opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
            aria-label="Close"
          >
            <XIcon className="size-4" aria-hidden />
          </DialogPrimitive.Close>
        )}
        {closeButton && (
          <div className="absolute top-4 right-4 z-20">{closeButton}</div>
        )}

        {/* Sticky header */}
        <div
          className={cn(
            'sticky top-0 z-10 shrink-0 border-b border-border bg-background/95 px-5 py-4 backdrop-blur-sm sm:px-6',
            'pr-14'
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1 space-y-1">
              <DialogPrimitive.Title
                id={titleId}
                className="text-lg font-semibold leading-tight"
              >
                {title}
              </DialogPrimitive.Title>
              {subtitle && (
                <div
                  id={descriptionId}
                  className="text-sm text-muted-foreground"
                >
                  {subtitle}
                </div>
              )}
              {tags && (
                <div className="flex flex-wrap gap-2 pt-2">{tags}</div>
              )}
            </div>
            {headerActions && (
              <div className="flex shrink-0 items-center gap-2">
                {headerActions}
              </div>
            )}
          </div>
        </div>

        {/* Scrollable body */}
        <div
          className={cn(
            'min-h-0 flex-1 overflow-y-auto px-5 py-4 sm:px-6',
            bodyClassName
          )}
        >
          {children}
        </div>

        {/* Footer - CTAs at bottom */}
        {footer && (
          <div className="shrink-0 border-t border-border bg-background/95 px-5 py-4 backdrop-blur-sm sm:px-6">
            {footer}
          </div>
        )}
      </DialogPrimitive.Content>
    );
  }
);
AppModalContent.displayName = 'AppModalContent';

type AppModalProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** When provided, modal is trigger-based (uncontrolled or controlled via open/onOpenChange) */
  trigger?: React.ReactNode;
  children: React.ReactNode;
};

type AppModalPropsFull = AppModalProps &
  Omit<AppModalContentProps, 'children'> & {
    children: React.ReactNode;
  };

/**
 * Unified app modal with consistent overlay, container, sticky header, and scrollable body.
 * Use for document viewers, comparisons, galleries, and all artifact modals.
 */
export function AppModal({
  open,
  onOpenChange,
  trigger,
  children,
  ...contentProps
}: AppModalPropsFull) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {trigger && (
        <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      )}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
          )}
        />
        <AppModalContent {...contentProps}>{children}</AppModalContent>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export { AppModalContent };
