import { Shell } from "@/components/atoms/shell"
import { ProductCard } from "@/components/organims/product-card"
import { ScrollArea } from "@/components/ui/scroll-area"
import ShowDetail from "./_components/show-detail"
import SoundButton from "../_components/sound-button"

const productItem = {
  id: "xyz",
  category: "Test product 30 Nov",
  images: [{
    id: "xyz",
    name: "products",
    url: "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png"
  }],
  inventory: 10,
  name: "Test product 30 Nov",
  price: "10000"
}

interface ProductPageProps {
  params: {
    productId: string
  }
}
export default async function BlogsPage({ params }: ProductPageProps) {

  return (
    <Shell className="pb-12 md:pb-14">
      <ScrollArea className="pb-3.5">
        <SoundButton />
        <div className="flex flex-wrap justify-between">
          {Array.from({ length: 20 }).map((_, i) => (
            <ProductCard
              product={productItem}
              className="mim-w-[240px] max-w-[240px]"
            />))}
        </div>
      </ScrollArea>
      <ShowDetail />
    </Shell>
  )
}
