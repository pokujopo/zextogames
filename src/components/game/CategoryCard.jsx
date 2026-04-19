import { Link } from 'react-router-dom';
import { FolderOpen } from 'lucide-react';

function CategoryCard({ category }) {
  return (
    <Link to={`/categories/${category.slug}`} className="panel flex items-center justify-between p-5 transition hover:-translate-y-1 hover:border-primary/30">
      <div>
        <p className="text-lg font-semibold">{category.name}</p>
        <p className="mt-2 text-sm text-text-muted">{category.gameCount} games available</p>
      </div>
      <div className="rounded-2xl bg-primary/10 p-3 text-primary"><FolderOpen size={20} /></div>
    </Link>
  );
}

export default CategoryCard;
