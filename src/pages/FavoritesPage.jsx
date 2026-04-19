import PageHeader from '@/components/common/PageHeader';
import GameCard from '@/components/game/GameCard';
import EmptyState from '@/components/ui/EmptyState';
import { useFavoritesStore } from '@/store/useFavoritesStore';

function FavoritesPage() {
  const items = useFavoritesStore((state) => state.items);

  return (
    <section className="section-space">
      <div className="page-shell space-y-8">
        <PageHeader eyebrow="Wishlist" title="Saved favorites" description="Local-first wishlist persistence, ready for syncing with protected user endpoints later." />
        {items.length ? <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{items.map((game) => <GameCard key={game.id} game={game} />)}</div> : <EmptyState title="Wishlist is empty" message="Add games from any card or game detail page to see them here." />}
      </div>
    </section>
  );
}

export default FavoritesPage;
