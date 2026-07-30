import { Skeleton } from "@/components/ui/skeleton";

export default function LinkDetailLoading() {
  return (
    <main
      className="
        mx-auto
        max-w-5xl
        space-y-8
        p-6
        md:p-8
      "
    >
      {/* Header */}
      <div className="space-y-3">
        <Skeleton className="h-8 w-48" />

        <Skeleton className="h-4 w-72" />
      </div>

      {/* Link Information Card */}
      <div
        className="
          space-y-6
          rounded-xl
          border
          p-6
        "
      >
        <Skeleton className="h-6 w-40" />

        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />

          <Skeleton className="h-6 w-full" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />

          <Skeleton className="h-6 w-full" />
        </div>

        <div
          className="
            grid
            gap-4
            md:grid-cols-2
          "
        >
          <Skeleton className="h-20 w-full rounded-lg" />

          <Skeleton className="h-20 w-full rounded-lg" />
        </div>
      </div>

      {/* Chart */}
      <Skeleton
        className="
          h-[300px]
          w-full
          rounded-xl
        "
      />
    </main>
  );
}
