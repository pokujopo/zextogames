function FormSection({ title, description, children }) {
  return (
    <section className="panel p-5">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && <p className="mt-1 text-sm text-text-muted">{description}</p>}
      </div>
      {children}
    </section>
  );
}

export default FormSection;
