import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <main
      className="
        mx-auto
        max-w-6xl
        space-y-8
        p-6
        md:p-8
      "
    >
      {/* Header Skeleton */}
      <div className="space-y-3">
        <Skeleton className="h-8 w-48" />

        <Skeleton className="h-4 w-72" />
      </div>

      {/* Stats Skeleton */}
      <div
        className="
          grid
          gap-6
          md:grid-cols-3
        "
      >
        {[1, 2, 3].map((item) => (
          <Skeleton
            key={item}
            className="
              h-32
              w-full
              rounded-xl
            "
          />
        ))}
      </div>

      {/* Chart Skeleton */}
      <Skeleton
        className="
          h-[300px]
          w-full
          rounded-xl
        "
      />

      {/* Links Skeleton */}
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <Skeleton
            key={item}
            className="
              h-40
              w-full
              rounded-xl
            "
          />
        ))}
      </div>
    </main>
  );
}
