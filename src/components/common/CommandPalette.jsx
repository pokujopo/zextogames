import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Modal from '@/components/ui/Modal';
import { useUIStore } from '@/store/useUIStore';
import { mockGames } from '@/mocks/games';

function CommandPalette() {
  const { commandPaletteOpen, toggleCommandPalette } = useUIStore();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const results = useMemo(
    () => mockGames.filter((game) => game.title.toLowerCase().includes(query.toLowerCase())).slice(0, 6),
    [query],
  );

  return (
    <Modal open={commandPaletteOpen} onClose={() => toggleCommandPalette(false)} title="Quick search">
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
          <input className="input-base pl-11" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for games, categories, tags..." />
        </div>
        <div className="space-y-2">
          {results.map((game) => (
            <button
              key={game.id}
              type="button"
              onClick={() => { navigate(`/games/${game.slug}`); toggleCommandPalette(false); }}
              className="flex w-full items-center gap-4 rounded-xl border border-white/10 p-3 text-left hover:bg-white/5"
            >
              <img src={game.thumbnail} alt={game.title} className="h-16 w-20 rounded-lg object-cover" />
              <div>
                <p className="font-semibold">{game.title}</p>
                <p className="text-sm text-text-muted">{game.genre} • {game.type === 'online' ? 'Play online' : 'Download'}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default CommandPalette;
