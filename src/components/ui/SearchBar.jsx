import { Search } from 'lucide-react';

function SearchBar({ value, onChange, placeholder = 'Search games, genres, tags...' }) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
      <input
        aria-label="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="input-base pl-11"
      />
    </div>
  );
}

export default SearchBar;
