import * as React from "react"
import { type Metadata } from "next"
import { Skeleton } from "@/components/ui/skeleton"
import { GridPattern } from "@/components/organims/grid-pattern"
import { Shell } from "@/components/atoms/shell"

// import { Onboarding } from "./_components/onboarding"

export const metadata: Metadata = {
  title: "Onboarding",
  description: "Get started with your new store",
}

export default async function OnboardingPage() {

  return (
    <Shell className="h-[calc(100vh-4rem)] max-w-screen-sm">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className="[mask-image:radial-gradient(300px_circle_at_left_top,white,transparent)]"
      />
      <React.Suspense fallback={<Skeleton className="size-full" />}>
        {/* <Onboarding userId={userId} /> */}
      </React.Suspense>
    </Shell>
  )
}
