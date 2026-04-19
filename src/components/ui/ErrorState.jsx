import Button from './Button';

function ErrorState({ title = 'Something went wrong', message = 'Please try again.', onRetry }) {
  return (
    <div className="panel flex flex-col items-center justify-center gap-4 px-6 py-12 text-center">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="max-w-lg text-sm text-text-muted">{message}</p>
      {onRetry && <Button onClick={onRetry}>Retry</Button>}
    </div>
  );
}

export default ErrorState;
