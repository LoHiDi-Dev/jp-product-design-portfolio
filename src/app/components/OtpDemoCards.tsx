import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

type OtpDemoCardProps = {
  a11yEmphasis?: boolean;
  a11yPulseClassName?: string;
};

function Banner({
  tone,
  children,
}: {
  tone: 'error' | 'success';
  children: React.ReactNode;
}) {
  const base = 'rounded-lg border px-3 py-2 text-sm flex items-start gap-2';
  const styles =
    tone === 'error'
      ? 'border-destructive/25 bg-destructive/10 text-destructive'
      : 'border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950/50 dark:text-green-200';
  return (
    <div className={`${base} ${styles}`} role="status" aria-live="polite">
      {children}
    </div>
  );
}

export function OtpBeforeCard({ a11yEmphasis, a11yPulseClassName }: OtpDemoCardProps) {
  const weakFocus =
    'focus-visible:ring-1 focus-visible:ring-muted-foreground/20 focus-visible:ring-offset-0';
  const emphasis = a11yEmphasis
    ? 'ring-2 ring-primary/40 ring-offset-2 ring-offset-background'
    : '';

  return (
    <div className="rounded-2xl border border-border bg-background p-5 shadow-sm w-full">
      <div className="space-y-4">
        <div>
          <div className="text-base font-medium">Enter verification code</div>
          <p className="text-sm text-muted-foreground">Check your email for the code</p>
        </div>

        <Banner tone="error">Something went wrong.</Banner>

        <div className="space-y-2">
          <div className={`${emphasis} ${a11yPulseClassName ?? ''} rounded-lg`}>
            <Input
              aria-label="Code"
              placeholder="Code"
              inputMode="numeric"
              autoComplete="one-time-code"
              className={weakFocus}
            />
          </div>
          <p className="text-xs text-muted-foreground/45">Enter the code we sent to you</p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <Button className={`${a11yEmphasis ? `${emphasis} ${a11yPulseClassName ?? ''}` : ''} ${weakFocus}`}>
            Continue
          </Button>
          <button
            type="button"
            className="text-sm text-muted-foreground hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
          >
            Resend
          </button>
        </div>
      </div>
    </div>
  );
}

export function OtpAfterCard({ a11yEmphasis, a11yPulseClassName }: OtpDemoCardProps) {
  const emphasis = a11yEmphasis
    ? 'ring-2 ring-primary/50 ring-offset-2 ring-offset-background'
    : '';
  const labelTone = a11yEmphasis ? 'text-primary' : 'text-foreground';
  const errorId = 'otp-after-error';
  const helpId = 'otp-after-help';

  return (
    <div className="rounded-2xl border border-border bg-background p-5 shadow-sm w-full">
      <div className="space-y-4">
        <div>
          <div className="text-base font-medium">Enter verification code</div>
          <p className="text-sm text-muted-foreground">
            We sent a 6-digit code to joel@email.com.
            <br />
            Expires in 10 minutes.
          </p>
        </div>

        <Banner tone="success">Code sent. Check your messages.</Banner>

        <div className="space-y-2">
          <label htmlFor="otp-after-code" className={`text-sm font-medium ${labelTone}`}>
            Verification code
          </label>
          <div className={`${emphasis} ${a11yPulseClassName ?? ''} rounded-lg`}>
            <Input
              id="otp-after-code"
              placeholder="000000"
              inputMode="numeric"
              autoComplete="one-time-code"
              aria-invalid="true"
              aria-describedby={`${helpId} ${errorId}`}
              className="tracking-[0.2em]"
            />
          </div>
          <p id={helpId} className="text-xs text-muted-foreground">
            6 digits. Numbers only.
          </p>
          <p id={errorId} className="text-xs text-destructive" role="alert">
            That code doesn’t match. Try again or resend.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Button className={`${emphasis} ${a11yPulseClassName ?? ''}`}>Verify & continue</Button>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <Button variant="outline" disabled className="justify-start">
              Resend available in 00:32
            </Button>
            <button
              type="button"
              className="text-sm text-muted-foreground hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded whitespace-nowrap shrink-0"
            >
              Change verification method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
