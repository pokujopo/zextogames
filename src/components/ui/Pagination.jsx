import Button from './Button';

function Pagination({ page = 1, totalPages = 1, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-8 flex items-center justify-center gap-3">
      <Button variant="secondary" onClick={() => onPageChange(page - 1)} disabled={page === 1}>Previous</Button>
      <span className="text-sm text-text-muted">Page {page} of {totalPages}</span>
      <Button variant="secondary" onClick={() => onPageChange(page + 1)} disabled={page === totalPages}>Next</Button>
    </div>
  );
}

export default Pagination;
