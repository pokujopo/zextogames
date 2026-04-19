function SkeletonCard() {
  return (
    <div className="panel overflow-hidden">
      <div className="skeleton h-56 w-full" />
      <div className="space-y-4 p-5">
        <div className="skeleton h-5 w-2/3" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-5/6" />
        <div className="skeleton h-10 w-full" />
      </div>
    </div>
  );
}

export default SkeletonCard;
