import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

function NotFoundPage() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="panel max-w-2xl p-10 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-primary">404</p>
        <h1 className="mt-4 text-5xl font-black">Level not found</h1>
        <p className="mt-4 text-text-muted">The page you requested does not exist in the current ZextoGames route map.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button as={Link} to="/">Go home</Button>
          <Button as={Link} variant="secondary" to="/search">Search games</Button>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
