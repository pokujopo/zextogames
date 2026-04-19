function SidebarPlaceholder() {
  return (
    <aside className="panel hidden w-72 shrink-0 p-4 lg:block">
      <p className="text-sm uppercase tracking-[0.25em] text-text-muted">Future Admin</p>
      <div className="mt-5 space-y-3 text-sm text-text-muted">
        <div className="rounded-xl border border-white/10 p-3">Games management</div>
        <div className="rounded-xl border border-white/10 p-3">Categories</div>
        <div className="rounded-xl border border-white/10 p-3">Users & reports</div>
      </div>
    </aside>
  );
}

export default SidebarPlaceholder;
