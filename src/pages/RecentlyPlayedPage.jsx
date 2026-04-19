import PageHeader from '@/components/common/PageHeader';
import GameCard from '@/components/game/GameCard';
import EmptyState from '@/components/ui/EmptyState';
import { useRecentStore } from '@/store/useRecentStore';

function RecentlyPlayedPage() {
  const items = useRecentStore((state) => state.items);

  return (
    <section className="section-space">
      <div className="page-shell space-y-8">
        <PageHeader eyebrow="Recent activity" title="Recently played & viewed" description="Continue where you left off with local-first state designed for future account sync." />
        {items.length ? <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{items.map((game) => <GameCard key={game.id} game={game} />)}</div> : <EmptyState title="No recent activity" message="Once you open a game or launch play, it will appear here." />}
      </div>
    </section>
  );
}

export default RecentlyPlayedPage;
