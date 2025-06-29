import "server-only"

import { cache } from "react"
import { unstable_noStore as noStore } from "next/cache"
import { db } from "@/db"
import { products, stores } from "@/db/schema"
import { count, countDistinct, eq } from "drizzle-orm"
// import { getPlanLimits } from "@/lib/subscription"

/**
 * Cache is used with a data-fetching function like fetch to share a data snapshot between components.
 * It ensures a single request is made for multiple identical data fetches, with the returned data cached and shared across components during the server render.
 * @see https://react.dev/reference/react/cache#reference
 */

export async function getUserUsageMetrics(input: { userId: string }) {
  noStore()
  try {
    const data = await db
      .select({
        storeCount: countDistinct(stores.id),
        productCount: count(products.id),
      })
      .from(stores)
      .leftJoin(products, eq(stores.id, products.storeId))
      .where(eq(stores.userId, input.userId))
      .groupBy(stores.userId)
      .execute()
      .then((res) => res[0])

    return {
      storeCount: data?.storeCount ?? 0,
      productCount: data?.productCount ?? 0,
    }
  } catch (err) {
    return {
      storeCount: 0,
      productCount: 0,
    }
  }
}
