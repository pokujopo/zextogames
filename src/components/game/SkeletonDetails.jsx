function SkeletonDetails() {
  return (
    <div className="page-shell section-space space-y-8">
      <div className="skeleton h-80 rounded-[2rem]" />
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="skeleton h-8 w-1/2" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-5/6" />
          <div className="skeleton h-32 w-full" />
        </div>
        <div className="skeleton h-72 rounded-[2rem]" />
      </div>
    </div>
  );
}

export default SkeletonDetails;
