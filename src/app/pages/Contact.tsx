import { Container } from '../components/Container';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, Phone, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { siteLinks } from '../data/site';
import { useForm, ValidationError } from '@formspree/react';

const springFast = { type: 'spring' as const, stiffness: 400, damping: 28 };
const springPop = { type: 'spring' as const, stiffness: 500, damping: 25 };

function LookingForItem({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover)');
    setCanHover(mq.matches);
    const handler = () => setCanHover(mq.matches);
    if (mq.addEventListener) {
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
    mq.addListener(handler);
    return () => mq.removeListener(handler);
  }, []);

  const hoverEnabled = canHover && !reducedMotion;

  return (
    <motion.li
      className="flex gap-3 rounded-xl px-2 py-1 -mx-2 transition-colors group hover:bg-primary/[0.07] cursor-default"
      initial={false}
      whileHover={
        hoverEnabled
          ? {
              y: -2,
              scale: 1.01,
              transition: springFast,
            }
          : undefined
      }
      transition={springFast}
    >
      <motion.span
        className="text-primary mt-1 inline-flex shrink-0 w-[1em] justify-center origin-center"
        initial={false}
        whileHover={
          hoverEnabled
            ? {
                scale: 1.12,
                rotate: -6,
                transition: springPop,
              }
            : undefined
        }
        transition={springPop}
      >
        ✓
      </motion.span>
      <span
        className={
          hoverEnabled ? 'transition-colors duration-150 group-hover:text-foreground/90' : ''
        }
      >
        {children}
      </span>
    </motion.li>
  );
}

type ContactFormFields = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormFields>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [state, formspreeSubmit, reset] = useForm<ContactFormFields>('xaqdqzbg');
  const [submitAttempted, setSubmitAttempted] = useState(false);

  useEffect(() => {
    if (!state.succeeded) return;
    setFormData({ name: '', email: '', company: '', message: '' });
    const t = setTimeout(() => {
      reset();
      setSubmitAttempted(false);
    }, 5000);
    return () => clearTimeout(t);
  }, [state.succeeded, reset]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem('_gotcha') as HTMLInputElement)?.value;
    if (honeypot) return;
    setSubmitAttempted(true);
    formspreeSubmit(e);
  };

  const showError =
    submitAttempted && !state.succeeded && !state.submitting;

  return (
    <div className="py-16">
      <Container>
        {/* Header - same H1/section rhythm as About */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-medium mb-2">
            Let's build what customers actually use.
          </h1>
          <p className="text-xl text-muted-foreground">
            Senior IC/Lead roles + consulting engagements focused on measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Form */}
          <div className="min-w-0 bg-card border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-medium mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
              {/* Honeypot: hidden from users, bots may fill it. Named to avoid autofill. */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="absolute left-[-9999px] w-px h-px opacity-0 pointer-events-none"
                aria-hidden="true"
              />
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  required
                  className="mt-2"
                />
                <ValidationError errors={state.errors} field="email" className="text-sm text-destructive mt-1" />
              </div>
              <div>
                <Label htmlFor="company">Company (optional)</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your company"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  required
                  className="mt-2"
                />
                <ValidationError errors={state.errors} field="message" className="text-sm text-destructive mt-1" />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={state.submitting}
              >
                {state.submitting ? 'Sending…' : 'Send Message'}
              </Button>
              {state.succeeded && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-3 flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-900 text-sm font-medium transition-opacity duration-200"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
                  <span>Message sent - thank you. I'll reply within 24 hours.</span>
                </div>
              )}
              {showError && (
                <p className="text-sm text-destructive">
                  Something went wrong.{' '}
                  <a
                    href="mailto:jojo.s.1er@gmail.com"
                    className="underline hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                  >
                    Please email me directly
                  </a>
                  .
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="min-w-0 flex flex-col gap-6 lg:h-full">
            {/* Direct Contact */}
            <div className="bg-card border border-border rounded-2xl p-6 shrink-0">
              <h2 className="text-2xl font-medium mb-6">Direct Contact</h2>
              <div className="space-y-4">
                <a
                  href={`mailto:${siteLinks.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      Email
                    </div>
                    <div className="text-sm text-muted-foreground">{siteLinks.email}</div>
                  </div>
                </a>
                <a
                  href={`tel:${siteLinks.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      Phone
                    </div>
                    <div className="text-sm text-muted-foreground">{siteLinks.phoneDisplay}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Location & Availability */}
            <div className="bg-card border border-border rounded-2xl p-6 flex-1 min-h-0">
              <h3 className="font-medium mb-4">Location & Availability</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Based in:</strong> Irving, TX
                </p>
                <div>
                  <strong className="text-foreground">Open to:</strong>
                  <ul className="mt-1 space-y-0.5 list-none pl-0">
                    <li>Remote (U.S.)</li>
                    <li>Hybrid (DFW)</li>
                    <li>International (remote or on-site)</li>
                  </ul>
                </div>
                <p>
                  <strong className="text-foreground">Languages:</strong> English (fluent), French (native)
                </p>
              </div>
            </div>
          </div>

          {/* What I'm Looking For - full width below on desktop */}
          <div className="min-w-0 bg-primary/5 border border-primary/20 rounded-2xl p-8 lg:col-span-2">
            <h3 className="font-medium mb-4">What I'm Looking For</h3>
            <ul className="space-y-1 text-sm">
              <LookingForItem>Senior Product Designer / UX Lead (IC or Lead)</LookingForItem>
              <LookingForItem>
                Design Systems leadership (scalable components, governance, accessibility)
              </LookingForItem>
              <LookingForItem>
                Product UX + Front-End build (React / Next.js, TypeScript, Tailwind)
              </LookingForItem>
              <LookingForItem>
                UX-to-Engineering bridge roles (design-to-dev collaboration, implementation quality)
              </LookingForItem>
              <LookingForItem>
                Product-focused consulting (discovery → design → shipped outcomes)
              </LookingForItem>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
