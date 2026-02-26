import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Container } from './Container';

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/proof', label: 'Artifacts' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="inline-flex items-center gap-3 font-medium hover:opacity-90 transition-opacity"
            aria-label="Joel Stefano Premier - Home"
          >
            <img src="/logo.png" alt="" className="h-10 w-10 rounded-md object-contain shrink-0" />
            <span className="hidden sm:inline">Joel Stefano Premier</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) =>
              link.href === '/contact' ? (
                <Button key={link.href} asChild size="sm">
                  <Link to={link.href}>{link.label}</Link>
                </Button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm transition-colors hover:text-primary ${
                    isActive(link.href) ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {links.map((link) =>
                link.href === '/contact' ? (
                  <Button key={link.href} asChild size="sm" className="w-full justify-center">
                    <Link to={link.href} onClick={() => setMobileMenuOpen(false)}>
                      {link.label}
                    </Link>
                  </Button>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm transition-colors hover:text-primary ${
                      isActive(link.href) ? 'text-primary font-medium' : 'text-muted-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
