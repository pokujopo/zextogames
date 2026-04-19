import Button from './Button';

function EmptyState({ title, message, actionLabel, onAction }) {
  return (
    <div className="panel flex flex-col items-center justify-center gap-4 px-6 py-12 text-center">
      <div className="rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-text-muted">No results</div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 max-w-md text-sm text-text-muted">{message}</p>
      </div>
      {actionLabel && <Button onClick={onAction}>{actionLabel}</Button>}
    </div>
  );
}

export default EmptyState;
