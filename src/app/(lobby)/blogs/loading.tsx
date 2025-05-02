import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Icons } from "@/components/atoms/icons"
import { ProductCardSkeleton } from "@/components/molecules/product-card-skeleton"
import { Shell } from "@/components/atoms/shell"

export default function BlogsLoading() {
  return (
    <Shell>
      <div className="space-y-6 overflow-hidden">
        <Skeleton className="h-7 w-1/4" />
        <ScrollArea className="pb-3.5">
          <div className="flex flex-wrap justify-between">
            {Array.from({ length: 20 }).map((_, i) => (
              <ProductCardSkeleton key={i} className="min-w-[240px]" />
            ))}
          </div>
        </ScrollArea>
      </div>
    </Shell>
  )
}
