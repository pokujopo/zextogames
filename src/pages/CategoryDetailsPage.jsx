import { useParams } from 'react-router-dom';
import PageHeader from '@/components/common/PageHeader';
import GameCard from '@/components/game/GameCard';
import SkeletonCard from '@/components/game/SkeletonCard';
import EmptyState from '@/components/ui/EmptyState';
import { useCategoryDetail } from '@/hooks/useCategories';

function CategoryDetailsPage() {
  const { slug } = useParams();
  const query = useCategoryDetail(slug);

  if (query.isLoading) return <section className="section-space"><div className="page-shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">{Array.from({ length: 6 }).map((_, idx) => <SkeletonCard key={idx} />)}</div></section>;
  if (!query.data) return <section className="section-space"><div className="page-shell"><EmptyState title="Category not found" message="This category route is ready, but the requested data was not found." /></div></section>;

  return (
    <section className="section-space">
      <div className="page-shell space-y-8">
        <PageHeader eyebrow="Category details" title={query.data.name} description={`${query.data.gameCount} titles available under this category.`} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {query.data.games.map((game) => <GameCard key={game.id} game={game} />)}
        </div>
      </div>
    </section>
  );
}

export default CategoryDetailsPage;
