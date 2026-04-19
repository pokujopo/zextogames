import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '@/components/common/PageHeader';
import SearchBar from '@/components/ui/SearchBar';
import Tabs from '@/components/ui/Tabs';
import FilterBar from '@/components/ui/FilterBar';
import GameCard from '@/components/game/GameCard';
import CategoryCard from '@/components/game/CategoryCard';
import SkeletonCard from '@/components/game/SkeletonCard';
import EmptyState from '@/components/ui/EmptyState';
import { useSearchGames } from '@/hooks/useGames';

function SearchResultsPage() {
  const [params, setParams] = useSearchParams();
  const [sort, setSort] = useState('latest');
  const [genre, setGenre] = useState('');
  const [platform, setPlatform] = useState('');
  const search = params.get('q') || '';
  const tab = params.get('tab') || 'all';
  const query = useSearchGames({ search, sort, genre, platform });

  const games = query.data?.games || [];
  const categories = query.data?.categories || [];
  const filteredGames = useMemo(() => {
    if (tab === 'downloadable') return games.filter((game) => game.type === 'download');
    if (tab === 'online') return games.filter((game) => game.type === 'online');
    return games;
  }, [games, tab]);

  return (
    <section className="section-space">
      <div className="page-shell space-y-8">
        <PageHeader eyebrow="Global search" title="Search across the Zexto catalog" description="Tabbed search UX for all games, downloadable titles, online games, and categories." />
        <SearchBar value={search} onChange={(value) => setParams({ q: value, tab })} />
        <Tabs
          tabs={[{ label: 'All', value: 'all' }, { label: 'Downloadable', value: 'downloadable' }, { label: 'Online', value: 'online' }, { label: 'Categories', value: 'categories' }]}
          value={tab}
          onChange={(value) => setParams({ q: search, tab: value })}
        />
        {tab !== 'categories' && <FilterBar genre={genre} setGenre={setGenre} platform={platform} setPlatform={setPlatform} sort={sort} setSort={setSort} genres={['Action', 'Adventure', 'Racing', 'Multiplayer', 'Sports', 'Strategy']} platforms={['Windows', 'Browser', 'macOS', 'Linux', 'Mobile', 'PlayStation', 'Xbox']} />}

        {query.isLoading && <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{Array.from({ length: 6 }).map((_, idx) => <SkeletonCard key={idx} />)}</div>}
        {!query.isLoading && search && tab === 'categories' && (
          categories.length ? <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{categories.map((category) => <CategoryCard key={category.id} category={category} />)}</div> : <EmptyState title="No matching categories" message="Try another search keyword." />
        )}
        {!query.isLoading && search && tab !== 'categories' && (
          filteredGames.length ? <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filteredGames.map((game) => <GameCard key={game.id} game={game} />)}</div> : <EmptyState title="No matching games" message="Try another search term or change the filters." />
        )}
        {!search && <EmptyState title="Start searching" message="Use the search bar above to explore titles, categories, and catalog data." />}
      </div>
    </section>
  );
}

export default SearchResultsPage;
