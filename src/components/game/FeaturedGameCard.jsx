import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

function FeaturedGameCard({ game }) {
  return (
    <div className="panel overflow-hidden lg:grid lg:grid-cols-[1fr_1.1fr]">
      <img src={game.cover} alt={game.title} className="h-full min-h-[280px] w-full object-cover" />
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap gap-2">{game.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
        <h3 className="mt-5 text-3xl font-bold">{game.title}</h3>
        <p className="mt-4 text-text-muted">{game.description}</p>
        <div className="mt-6 flex gap-3">
          <Button as={Link} to={`/games/${game.slug}`}>Explore game</Button>
          <Button as={Link} variant="secondary" to={game.type === 'online' ? '/play-online' : '/download'}>{game.type === 'online' ? 'Play online' : 'See downloads'}</Button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedGameCard;
