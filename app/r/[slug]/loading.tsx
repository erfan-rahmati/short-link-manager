import { Skeleton } from "@/components/ui/skeleton";

export default function RedirectLoading() {
  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        p-6
      "
    >
      <div
        className="
          space-y-4
          text-center
        "
      >
        <Skeleton className="mx-auto h-8 w-48" />

        <Skeleton className="mx-auto h-4 w-64" />
      </div>
    </main>
  );
}
