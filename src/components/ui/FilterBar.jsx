import SortDropdown from './SortDropdown';

function FilterBar({ genre, setGenre, platform, setPlatform, sort, setSort, genres = [], platforms = [] }) {
  return (
    <div className="panel grid gap-4 p-4 md:grid-cols-3">
      <select className="input-base" value={genre} onChange={(e) => setGenre(e.target.value)} aria-label="Filter by genre">
        <option value="">All genres</option>
        {genres.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
      <select className="input-base" value={platform} onChange={(e) => setPlatform(e.target.value)} aria-label="Filter by platform">
        <option value="">All platforms</option>
        {platforms.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
      <SortDropdown value={sort} onChange={setSort} />
    </div>
  );
}

export default FilterBar;
