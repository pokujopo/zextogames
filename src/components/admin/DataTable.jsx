function DataTable({ columns = [], rows = [] }) {
  return (
    <div className="panel overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5 text-text-muted">
            <tr>{columns.map((column) => <th key={column.key} className="px-4 py-3 font-medium">{column.label}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="border-t border-white/10">
                {columns.map((column) => <td key={column.key} className="px-4 py-3">{row[column.key]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
