import { useState } from 'react';
import PageHeader from '@/components/common/PageHeader';
import SearchBar from '@/components/ui/SearchBar';
import FilterBar from '@/components/ui/FilterBar';
import Pagination from '@/components/ui/Pagination';
import SkeletonCard from '@/components/game/SkeletonCard';
import GameCard from '@/components/game/GameCard';
import EmptyState from '@/components/ui/EmptyState';
import ErrorState from '@/components/ui/ErrorState';
import { useDownloadGames } from '@/hooks/useGames';

function DownloadGamesPage() {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('');
  const [platform, setPlatform] = useState('');
  const [sort, setSort] = useState('latest');
  const [page, setPage] = useState(1);
  const query = useDownloadGames({ search, genre, platform, sort, page, limit: 6 });

  const games = query.data?.data || [];
  const meta = query.data?.meta || {};
  const genres = ['Action', 'Adventure', 'Racing', 'Sports', 'Strategy'];
  const platforms = ['Windows', 'macOS', 'Linux', 'PlayStation', 'Xbox'];

  return (
    <section className="section-space">
      <div className="page-shell space-y-8">
        <PageHeader eyebrow="Download catalog" title="Installable premium games" description="Search, filter, and browse download-ready titles fetched from your backend-normalized API layer." />
        <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
          <SearchBar value={search} onChange={setSearch} placeholder="Search downloadable games..." />
        </div>
        <FilterBar genre={genre} setGenre={setGenre} platform={platform} setPlatform={setPlatform} sort={sort} setSort={setSort} genres={genres} platforms={platforms} />

        {query.isLoading && <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{Array.from({ length: 6 }).map((_, idx) => <SkeletonCard key={idx} />)}</div>}
        {query.isError && <ErrorState message={query.error.message} onRetry={query.refetch} />}
        {!query.isLoading && !query.isError && games.length === 0 && <EmptyState title="No downloadable games found" message="Try adjusting your search, platform, or genre filters." />}
        {!query.isLoading && !query.isError && games.length > 0 && (
          <>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {games.map((game) => <GameCard key={game.id} game={game} />)}
            </div>
            <Pagination page={meta.page} totalPages={meta.totalPages} onPageChange={setPage} />
          </>
        )}
      </div>
    </section>
  );
}

export default DownloadGamesPage;
