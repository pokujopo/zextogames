import Button from '@/components/ui/Button';

function SectionHeader({ title, description, actionLabel, actionHref }) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
        {description && <p className="mt-2 max-w-2xl text-text-muted">{description}</p>}
      </div>
      {actionLabel && <Button as="a" href={actionHref} variant="secondary">{actionLabel}</Button>}
    </div>
  );
}

export default SectionHeader;
