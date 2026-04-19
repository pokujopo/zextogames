function PageHeader({ eyebrow, title, description, actions }) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow && <p className="text-sm uppercase tracking-[0.25em] text-primary">{eyebrow}</p>}
        <h1 className="mt-3 text-3xl font-bold md:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-text-muted">{description}</p>}
      </div>
      {actions && <div>{actions}</div>}
    </div>
  );
}

export default PageHeader;
