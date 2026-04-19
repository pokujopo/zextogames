import { useMemo, useState } from 'react';
import PageHeader from '@/components/common/PageHeader';
import SearchBar from '@/components/ui/SearchBar';
import CategoryCard from '@/components/game/CategoryCard';
import SkeletonCard from '@/components/game/SkeletonCard';
import { useCategories } from '@/hooks/useCategories';

function CategoriesPage() {
  const [search, setSearch] = useState('');
  const query = useCategories();
  const items = useMemo(() => (query.data || []).filter((category) => category.name.toLowerCase().includes(search.toLowerCase())), [query.data, search]);

  return (
    <section className="section-space">
      <div className="page-shell space-y-8">
        <PageHeader eyebrow="Genres & collections" title="Browse categories" description="Structured category routing with detail pages and backend-ready game counts." />
        <SearchBar value={search} onChange={setSearch} placeholder="Search categories..." />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {query.isLoading ? Array.from({ length: 6 }).map((_, idx) => <SkeletonCard key={idx} />) : items.map((category) => <CategoryCard key={category.id} category={category} />)}
        </div>
      </div>
    </section>
  );
}

export default CategoriesPage;
