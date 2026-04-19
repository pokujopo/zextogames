function SortDropdown({ value, onChange }) {
  return (
    <select className="input-base" value={value} onChange={(e) => onChange(e.target.value)} aria-label="Sort games">
      <option value="latest">Latest</option>
      <option value="rating">Highest rated</option>
      <option value="name">Name</option>
    </select>
  );
}

export default SortDropdown;
