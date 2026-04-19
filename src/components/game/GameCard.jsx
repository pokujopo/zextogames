import { Heart, PlayCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { useToastStore } from '@/store/useToastStore';
import { useUIStore } from '@/store/useUIStore';

function GameCard({ game }) {
  const toggleItem = useFavoritesStore((state) => state.toggleItem);
  const items = useFavoritesStore((state) => state.items);
  const pushToast = useToastStore((state) => state.pushToast);
  const openPreview = useUIStore((state) => state.openPreview);
  const isFavorite = items.some((item) => item.id === game.id);

  const onToggleFavorite = () => {
    const action = toggleItem(game);
    pushToast({ title: `Favorite ${action}`, message: `${game.title} has been ${action} your wishlist.`, variant: action === 'added' ? 'success' : 'info' });
  };

  return (
    <article className="panel overflow-hidden transition hover:-translate-y-1 hover:border-primary/30">
      <div className="relative">
        <img src={game.thumbnail} alt={game.title} className="h-56 w-full object-cover" />
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge variant={game.type === 'online' ? 'info' : 'accent'}>{game.type === 'online' ? 'Online' : 'Download'}</Badge>
          <Badge>{game.genre}</Badge>
        </div>
        <button aria-label="Add to wishlist" onClick={onToggleFavorite} className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/50 p-2 text-white">
          <Heart size={16} className={isFavorite ? 'fill-primary text-primary' : ''} />
        </button>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold"><Link to={`/games/${game.slug}`}>{game.title}</Link></h3>
            <p className="mt-2 line-clamp-2 text-sm text-text-muted">{game.shortDescription}</p>
          </div>
          <div className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-sm">
            <Star size={14} className="text-primary" /> {game.rating}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">{game.platform.map((item) => <Badge key={item}>{item}</Badge>)}</div>
        <div className="flex gap-3">
          <Button className="flex-1" as={Link} to={`/games/${game.slug}`}>{game.type === 'online' ? 'Play now' : 'View details'}</Button>
          <Button variant="secondary" onClick={() => openPreview(game)} aria-label="Quick preview"><PlayCircle size={18} /></Button>
        </div>
      </div>
    </article>
  );
}

export default GameCard;
