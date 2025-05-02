import * as React from "react";
import { LobbySkeleton } from "../../../_components/lobby-skeleton";
import { Shell } from "@/components/atoms/shell";
import HeroSectionProjects from "../../../_components/hero-section-projects";

export default async function IndexPage() {

    return (
        <Shell className="max-w-6xl gap-0">
            <React.Suspense fallback={<LobbySkeleton />}>
                <div className="mx-auto w-full">
                    <HeroSectionProjects />
                </div>
            </React.Suspense>
        </Shell>
    )
}
