import { Skeleton } from "@/components/ui/skeleton";

export function AboutSkeleton() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mx-auto w-full max-w-[500px]">
            <Skeleton className="aspect-[4/3] w-full h-full" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-12 w-full max-w-md" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
