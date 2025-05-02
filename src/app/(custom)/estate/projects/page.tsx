import * as React from "react";
import { LobbySkeleton } from "../../_components/lobby-skeleton";
import { Shell } from "@/components/atoms/shell";
import { CarouselProject } from "../../_components/carousel-project";
import SearchBarProject from "../../_components/SearchBarProject";
import PropertyProjectList from "../../_components/property-project-list";
import { ContentSection } from "@/components/organims/content-section";
import PropertyCard from "@/components/organims/property-card";
import PanoramaViewer from "../../_components/panorama-viewer";

const itemProperty = {
    "image": "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png",
    "price": 2095,
    "title": "Palm Harbor",
    "location": "2699 Green Valley, Highland Lake, FL",
    "beds": 3,
    "baths": 2,
    "size": 35,
    "popular": true
}

export default async function IndexPage() {

    return (
        <div className="relative w-full">
            <div className="w-full h-[80vh]">
                <PanoramaViewer />
            </div>
            <div className="mx-auto relative max-w-7xl w-full h-[30rem]">
                <CarouselProject />
            </div>
            <Shell className="max-w-6xl gap-0">
                <React.Suspense fallback={<LobbySkeleton />}>
                    <ContentSection
                        title="News"
                        // description=""
                        href="/locations"
                        linkText="View all news"
                        className="pt-10 md:pt-14"
                        asChild
                    >
                        <div className="flex flex-col gap-4">
                            <PropertyProjectList />
                            <PropertyProjectList />
                            <PropertyProjectList />
                        </div>
                    </ContentSection>
                    <ContentSection
                        title="Products"
                        description="Explore products from around the world"
                        href="/locations"
                        linkText="View all products"
                        className="pt-10 md:pt-14"
                        asChild
                    >
                        <>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                <PropertyCard {...itemProperty} />
                                <PropertyCard {...itemProperty} />
                                <PropertyCard {...itemProperty} />
                                <PropertyCard {...itemProperty} />
                                <PropertyCard {...itemProperty} />
                            </div>
                        </>
                    </ContentSection>
                    <ContentSection
                        title="Products"
                        description="Explore products from around the world"
                        href="/locations"
                        linkText="View all products"
                        className="pt-10 md:pt-14"
                        asChild
                    >
                        <>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                <PropertyCard {...itemProperty} />
                                <PropertyCard {...itemProperty} />
                                <PropertyCard {...itemProperty} />
                                <PropertyCard {...itemProperty} />
                                <PropertyCard {...itemProperty} />
                            </div>
                        </>
                    </ContentSection>
                </React.Suspense>
            </Shell>
        </div>
    )
}
