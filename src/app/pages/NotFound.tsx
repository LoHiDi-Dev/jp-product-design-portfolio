import { Link } from 'react-router';
import { Container } from '../components/Container';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-32">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-8xl font-medium text-muted mb-8">404</div>
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Page Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/work">
              <Button size="lg" className="gap-2">
                <ArrowLeft className="w-4 h-4" /> View Work
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline">
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
