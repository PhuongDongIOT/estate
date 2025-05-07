import * as React from "react"
import { SiteHeader } from "@/components/layout/site-header"

export default async function CartLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={null} />
      <main className="flex-1">{children}</main>
    </div>
  )
}
