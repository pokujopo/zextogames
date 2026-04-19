import { Heart, Share2, Star } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/common/SectionHeader';
import GameCard from '@/components/game/GameCard';
import SkeletonDetails from '@/components/game/SkeletonDetails';
import EmptyState from '@/components/ui/EmptyState';
import ErrorState from '@/components/ui/ErrorState';
import { useGameDetails, useTrendingGames } from '@/hooks/useGames';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { useRecentStore } from '@/store/useRecentStore';
import { useToastStore } from '@/store/useToastStore';

function GameDetailsPage() {
  const { slug } = useParams();
  const { data: game, isLoading, isError, error, refetch } = useGameDetails(slug);
  const relatedQuery = useTrendingGames();
  const toggleFavorite = useFavoritesStore((state) => state.toggleItem);
  const favorites = useFavoritesStore((state) => state.items);
  const addRecent = useRecentStore((state) => state.addRecent);
  const pushToast = useToastStore((state) => state.pushToast);
  const isFavorite = favorites.some((item) => item.slug === slug);

  if (isLoading) return <SkeletonDetails />;
  if (isError) return <section className="section-space"><div className="page-shell"><ErrorState message={error.message} onRetry={refetch} /></div></section>;
  if (!game) return <section className="section-space"><div className="page-shell"><EmptyState title="Game not found" message="This game could not be loaded from the current catalog." /></div></section>;

  const related = (relatedQuery.data || []).filter((item) => item.slug !== game.slug).slice(0, 4);

  const handlePrimaryAction = () => {
    addRecent(game);
    pushToast({ title: game.type === 'online' ? 'Game launched' : 'Download initiated', message: `${game.title} is ready for the next step.`, variant: 'success' });
  };

  return (
    <section className="section-space">
      <div className="page-shell space-y-10">
        <div className="panel overflow-hidden">
          <img src={game.cover} alt={game.title} className="h-[320px] w-full object-cover md:h-[420px]" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex flex-wrap gap-2">{game.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
            <h1 className="mt-5 text-4xl font-black md:text-5xl">{game.title}</h1>
            <p className="mt-4 text-lg text-text-muted">{game.description}</p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-text-muted">
              <div className="panel px-4 py-3">Genre: {game.genre}</div>
              <div className="panel px-4 py-3">Platforms: {game.platform.join(', ')}</div>
              <div className="panel px-4 py-3">Source: {game.source}</div>
              <div className="panel inline-flex items-center gap-2 px-4 py-3"><Star size={14} className="text-primary" /> {game.rating}</div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={handlePrimaryAction}>{game.type === 'online' ? 'Play now' : 'Download game'}</Button>
              <Button variant="secondary" onClick={() => toggleFavorite(game)}><Heart size={18} className={isFavorite ? 'fill-primary text-primary' : ''} /> Wishlist</Button>
              <Button variant="secondary"><Share2 size={18} /> Share</Button>
            </div>
          </div>

          <div className="panel p-6">
            <h2 className="text-xl font-semibold">Game metadata</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><dt className="text-text-muted">Release date</dt><dd>{game.releaseDate}</dd></div>
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><dt className="text-text-muted">Download size</dt><dd>{game.size}</dd></div>
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><dt className="text-text-muted">Type</dt><dd>{game.type}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-text-muted">Catalog slug</dt><dd>{game.slug}</dd></div>
            </dl>
          </div>
        </div>

        <div>
          <SectionHeader title="Screenshots gallery" />
          <div className="grid gap-4 md:grid-cols-3">
            {game.screenshots.map((shot) => <img key={shot} src={shot} alt={`${game.title} screenshot`} className="h-64 w-full rounded-2xl border border-white/10 object-cover" />)}
          </div>
        </div>

        <div className="panel p-6">
          <SectionHeader title="Reviews & comments" description="UI-ready review area prepared for backend comments, ratings, and moderation extensions." />
          <div className="rounded-2xl border border-dashed border-white/15 p-8 text-center text-text-muted">Connect this section to `/games/:slug/reviews` later for real review data.</div>
        </div>

        <div>
          <SectionHeader title="Related games" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">{related.map((item) => <GameCard key={item.id} game={item} />)}</div>
        </div>
      </div>
    </section>
  );
}

export default GameDetailsPage;
