import * as React from "react";
// import { LobbySkeleton } from "../../_components/lobby-skeleton";
import Gallery from "../../_components/gallary";
import HeroGeometric from "@/components/molecules/hero-geometric";
import PostCard from "@/components/organims/post-card";
import { ContentSection } from "@/components/organims/content-section";
import { Shell } from "@/components/atoms/shell"
import PostVerticalCard from "@/components/organims/post-vertical-card";
import ProductEstateCard from "@/app/(custom)/_components/product-estate-card";
import TopicList from "@/components/molecules/topic-llist";
import { CarouselOrientation } from "@/components/organims/carousel-orientation";
import Example from "../../_components/example";
import NewsSection from "../../_components/news-section";
import NewsShowcase from "../../_components/news-showcase";
import SpotlightNews from "../../_components/spotlight-news";

const postCard = {
    "imageUrl": "https://ui.aceternity.com/_next/image?url=%2Fdemo%2Fthumbnail.png&w=3840&q=75",
    "category": "MUA BĐS",
    "date": "18/02/2025 16:01",
    "author": "Nguyễn Nam",
    "title": "Để Không Bị Hớ Khi Mua Đất Nền, Nhà Đầu Tư Đừng Bỏ Qua Các Bước Này",
    "description": "Hiểu và xác định được giá trị lô đất là một trong những yếu tố hạn chế tối đa rủi ro nhà đầu tư phải đối mặt khi đầu tư đất nền...",
    "tags": ["Bất động sản Hà Nội", "đất nền", "Thị trường đất nền"],
    "blogUrl": "/bai-viet/khong-bi-ho-mua-dat-nen"
}

const producEstate = {
    "sender": "William Smith",
    "time": "09:34 AM",
    "title": "Meeting Tomorrow",
    "message": "Hi team, just a reminder about our meeting tomorrow at 10 AM...."
}

const topics = [
    "Tin tức bất động sản",
    "Bất động sản Hà Nội",
    "Bất động sản Hồ Chí Minh",
    "Báo cáo thị trường",
    "Mua bất động sản",
    "Bán bất động sản",
    "Thuê bất động sản",
    "Quy hoạch - Pháp lý",
    "Tài chính",
    "Video đánh giá",
];

const itemFeedback = {
    "reviewerName": "Cristina W",
    "reviewerRole": "Founder of BAC",
    "feedbackText": "The service was outstanding! It really exceeded my expectations.",
    "avatarUrl": postCard.imageUrl
}

export default async function IndexPage() {

    return (
        <>
            <div className="shadow-lg">
                <HeroGeometric />
            </div>
            <section className=" my-10 md:my-14">
                <Gallery />
            </section>
            <Shell className="max-w-6xl gap-0">
                <ContentSection
                    title="Post"
                    description="Explore posts from around the world"
                    href="/locations"
                    linkText="View all posts"
                    // className="mt-10 md:mt-14"
                    asChild
                >
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-4">
                            <PostVerticalCard {...postCard} />
                            <PostVerticalCard {...postCard} />
                            <PostVerticalCard {...postCard} />
                            <PostVerticalCard {...postCard} />
                            <PostVerticalCard {...postCard} />
                        </div>
                        <div className="flex flex-col gap-4">

                            <NewsSection />
                            <NewsShowcase />
                            <SpotlightNews />
                            {/* <div className="flex justify-center pb-10">
                                <Example />
                            </div>
                            <div className="flex flex-col gap-2">
                                <ProductEstateCard {...producEstate} />
                                <ProductEstateCard {...producEstate} />
                                <ProductEstateCard {...producEstate} />
                                <ProductEstateCard {...producEstate} />
                            </div>
                            <div>
                                <CarouselOrientation />
                            </div> */}
                        </div>
                    </div>
                </ContentSection>
                <ContentSection
                    title="Post"
                    description="Explore posts from around the world"
                    href="/locations"
                    linkText="View all posts"
                    className="pt-14 md:pt-10"
                    asChild
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                        </div>
                        <div className="flex flex-col gap-2">
                            <ProductEstateCard {...producEstate} />
                            <ProductEstateCard {...producEstate} />
                            <ProductEstateCard {...producEstate} />
                            <ProductEstateCard {...producEstate} />
                            <ProductEstateCard {...producEstate} />
                            <ProductEstateCard {...producEstate} />
                        </div>
                    </div>
                </ContentSection>
                <section className="grid grid-cols-2 md:grid-cols-4">
                    <TopicList topics={topics} />
                    <TopicList topics={topics} />
                    <TopicList topics={topics} />
                    <TopicList topics={topics} />
                </section>

            </Shell>

        </>
    )
}
