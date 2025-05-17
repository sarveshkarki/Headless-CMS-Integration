import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-14 w-full max-w-md" />
            <Skeleton className="h-14 w-full max-w-md" />
            <Skeleton className="h-6 w-full max-w-sm" />
            <div className="flex flex-col sm:flex-row gap-3">
              <Skeleton className="h-12 w-40" />
              <Skeleton className="h-12 w-40" />
            </div>
            <div className="flex items-center gap-4 pt-4">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-6 w-32" />
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px]">
            <Skeleton className="aspect-[4/3] w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
