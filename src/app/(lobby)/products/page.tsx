import { type Metadata } from "next"
import { env } from "@/env.js"
import type { SearchParams } from "@/types"
import { getProducts } from "@/lib/queries/product"
import { AlertCard } from "@/components/molecules/alert-card"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/molecules/page-header"
import { Shell } from "@/components/atoms/shell"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Products",
  description: "Buy products from our stores",
}

interface ProductsPageProps {
  searchParams: SearchParams
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const productsTransaction = await getProducts(searchParams)

  return (
    <Shell>
      <PageHeader>
        <PageHeaderHeading size="sm">Products</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Buy products from our stores
        </PageHeaderDescription>
      </PageHeader>
      <AlertCard />
    </Shell>
  )
}
