import { Heart, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Modal from '@/components/ui/Modal';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { useUIStore } from '@/store/useUIStore';

function PreviewModal() {
  const { previewGame, closePreview } = useUIStore();
  const toggleItem = useFavoritesStore((state) => state.toggleItem);

  return (
    <Modal open={Boolean(previewGame)} onClose={closePreview} title={previewGame?.title || 'Game preview'}>
      {previewGame && (
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <img src={previewGame.cover} alt={previewGame.title} className="h-full max-h-[320px] w-full rounded-2xl object-cover" />
          <div>
            <div className="flex flex-wrap gap-2">{previewGame.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
            <p className="mt-4 text-text-muted">{previewGame.description}</p>
            <div className="mt-5 grid gap-3 text-sm text-text-muted sm:grid-cols-2">
              <div className="panel p-3">Type: {previewGame.type}</div>
              <div className="panel p-3">Platform: {previewGame.platform.join(', ')}</div>
              <div className="panel p-3">Source: {previewGame.source}</div>
              <div className="panel p-3">Rating: {previewGame.rating}</div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button as={Link} to={`/games/${previewGame.slug}`} onClick={closePreview}><PlayCircle size={18} /> {previewGame.type === 'online' ? 'Play now' : 'View details'}</Button>
              <Button variant="secondary" onClick={() => toggleItem(previewGame)}><Heart size={18} /> Add to favorites</Button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

export default PreviewModal;
