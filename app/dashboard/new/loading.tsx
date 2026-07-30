import { Skeleton } from "@/components/ui/skeleton";

export default function NewLinkLoading() {
  return (
    <main
      className="
        mx-auto
        max-w-3xl
        space-y-8
        p-6
        md:p-8
      "
    >
      <div className="space-y-3">
        <Skeleton className="h-8 w-56" />

        <Skeleton className="h-4 w-80" />
      </div>

      <div
        className="
          space-y-6
          rounded-xl
          border
          p-6
        "
      >
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />

          <Skeleton
            className="
              h-10
              w-full
            "
          />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />

          <Skeleton
            className="
              h-10
              w-full
            "
          />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />

          <Skeleton
            className="
              h-10
              w-full
            "
          />
        </div>

        <Skeleton
          className="
            h-10
            w-32
          "
        />
      </div>
    </main>
  );
}
