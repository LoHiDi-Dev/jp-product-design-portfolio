import { Link } from 'react-router';
import { Container } from './Container';
import { siteLinks } from '../data/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card mt-24">
      <Container className="pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-medium mb-4 hover:opacity-90 transition-opacity w-fit"
              aria-label="Joel Stefano Premier - Home"
            >
              <img src="/logo.png" alt="" className="h-10 w-10 rounded-md object-contain shrink-0" />
              <span>Joel Stefano Premier</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Senior Product Designer (UX) &bull; Design Systems &bull; Accessibility (WCAG 2.1) &bull; Implementation-aware
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium mb-4 text-sm">Navigation</h4>
            <div className="flex flex-col gap-3">
              <Link to="/work" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Work
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-medium mb-4 text-sm">Resources</h4>
            <div className="flex flex-col gap-3">
              <Link to="/proof" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Artifacts
              </Link>
              <a
                href="/Joel-Premier-Resume.pdf"
                download="Joel-Premier-Resume.pdf"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium mb-4 text-sm">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${siteLinks.email}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Email me
              </a>
              <a
                href={`tel:${siteLinks.phone}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Call me
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 pb-1 border-t border-border text-center space-y-1">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Joel Stefano Premier. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
