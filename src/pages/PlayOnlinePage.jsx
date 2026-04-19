import { useState } from 'react';
import PageHeader from '@/components/common/PageHeader';
import SearchBar from '@/components/ui/SearchBar';
import FilterBar from '@/components/ui/FilterBar';
import Pagination from '@/components/ui/Pagination';
import SkeletonCard from '@/components/game/SkeletonCard';
import OnlineGameCard from '@/components/game/OnlineGameCard';
import EmptyState from '@/components/ui/EmptyState';
import ErrorState from '@/components/ui/ErrorState';
import { useOnlineGames } from '@/hooks/useGames';
import { useRecentStore } from '@/store/useRecentStore';

function PlayOnlinePage() {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('');
  const [platform, setPlatform] = useState('');
  const [sort, setSort] = useState('latest');
  const [page, setPage] = useState(1);
  const recent = useRecentStore((state) => state.items);
  const query = useOnlineGames({ search, genre, platform, sort, page, limit: 6 });
  const games = query.data?.data || [];
  const meta = query.data?.meta || {};

  return (
    <section className="section-space">
      <div className="page-shell space-y-8">
        <PageHeader eyebrow="Browser gaming" title="Play instantly online" description="Responsive play-online catalog with recently played support and embed-ready detail routing." />
        {recent.length > 0 && (
          <div className="panel p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Continue playing</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">{recent.slice(0, 3).map((game) => <OnlineGameCard key={game.id} game={game} />)}</div>
          </div>
        )}
        <SearchBar value={search} onChange={setSearch} placeholder="Search browser games..." />
        <FilterBar genre={genre} setGenre={setGenre} platform={platform} setPlatform={setPlatform} sort={sort} setSort={setSort} genres={['Action', 'Adventure', 'Multiplayer']} platforms={['Browser', 'Mobile']} />
        {query.isLoading && <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{Array.from({ length: 6 }).map((_, idx) => <SkeletonCard key={idx} />)}</div>}
        {query.isError && <ErrorState message={query.error.message} onRetry={query.refetch} />}
        {!query.isLoading && !query.isError && games.length === 0 && <EmptyState title="No online games found" message="Change the current filters or search another browser title." />}
        {!query.isLoading && !query.isError && games.length > 0 && (
          <>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{games.map((game) => <OnlineGameCard key={game.id} game={game} />)}</div>
            <Pagination page={meta.page} totalPages={meta.totalPages} onPageChange={setPage} />
          </>
        )}
      </div>
    </section>
  );
}

export default PlayOnlinePage;
