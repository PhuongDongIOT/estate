// import Link from "next/link"

// import { siteConfig } from "@/config/site"
import { type getGithubStars } from "@/lib/queries/github"
import type { getCategories, getFeaturedProducts } from "@/lib/queries/product"
import { type getFeaturedStores } from "@/lib/queries/store"
// import { cn } from "@/lib/utils"
// import { Badge } from "@/components/ui/badge"
// import { buttonVariants } from "@/components/ui/button"
import { ContentSection } from "@/components/organims/content-section"
// import { Icons } from "@/components/icons"
// import {
//   PageActions,
//   PageHeader,
//   PageHeaderDescription,
//   PageHeaderHeading,
// } from "@/components/page-header"
// import { ProductCard } from "@/components/product-card"
import { Shell } from "@/components/atoms/shell"
// import { StoreCard } from "@/components/store-card"

import { CategoryCard } from "./category-card"
import HomeFeatures from "@/components/layout/home-features"
import PropertyHighlightsCarousel from "@/components/layout/property-highlights-carousel"
import RealEstateModel from "@/app/(custom)/_components/real-estate-model"
import LocationCarousel from "@/components/organims/location-carousel"
// import PropertyGallery from "@/components/property-gallery"
import PropertyCard from "@/components/organims/property-card"
import { Home, Search, ShoppingBag } from "lucide-react"
import RealEstateIntro from "@/app/(custom)/_components/real-estate-intro"
import { SearchFilter } from "@/components/organims/search-filter"
import { PropertySearchBar } from "@/components/organims/property-search-bar"
import ExpandableTabsProduct from "./expandable-tabs-product"
import RealEstateCard from "@/app/(custom)/_components/real-estate-card"
import MovieShowcase from "./movie-showcase"
import GalleryEstate from "./gellary-estate"
import RealEstateListings from "./real-estate-listings"
import RealEstateTrending from "./real-estate-trending"
import TopicList from "@/components/molecules/topic-llist"
import BrokerList from "./broker-list"
import RealEstateNews from "./real-estate-news"
import RealEstateBrandCarousel from "./real-estate-brand-carousel"

const filterOptions = [
  { name: "Rent", icon: <Search size={16} /> },
  { name: "Buy", icon: <ShoppingBag size={16} /> },
  { name: "Sell", icon: <Home size={16} /> },
];

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

const itemRealEstate = {
  title: "Bất động sản bán",
  description: "Bạn có thể tìm thấy ngôi nhà mơ ước hoặc cơ hội đầu tư hấp dẫn thông qua lượng tin rao lớn, uy tín về các loại hình bất động sản bán tại Việt Nam, bao gồm bán nhà riêng, bán nhà mặt tiền, bán căn hộ chung cư, bán biệt thự, bán đất, bán shophouse và các loại hình BĐS khác.",
  imageUrl: "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png"
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

interface LobbyProps {
  githubStarsPromise: ReturnType<typeof getGithubStars>
  productsPromise: ReturnType<typeof getFeaturedProducts>
  categoriesPromise: ReturnType<typeof getCategories>
  storesPromise: ReturnType<typeof getFeaturedStores>
}
export async function Lobby({
  githubStarsPromise,
  productsPromise,
  categoriesPromise,
  storesPromise,
}: LobbyProps) {
  // @see the "Parallel data fetching" docs: https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#parallel-data-fetching
  const [githubStars, products, categories, stores] = await Promise.all([
    githubStarsPromise,
    productsPromise,
    categoriesPromise,
    storesPromise,
  ])

  return (
    <>

      <section className="relative py-6">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://tailwindui.com//plus-assets/img/beams-template-header.png" alt="" className="absolute bottom-0 hidden lg:block" />
          <img src="https://tailwindui.com//plus-assets/img/beams-templates.png" alt="" className="absolute -top-[7rem] left-1/2 -ml-[16rem] w-[60.4375rem] max-w-none sm:-ml-[10rem] md:-ml-[16rem] lg:-top-[10rem] lg:-ml-[22rem] lg:hidden" />
        </div>
        <div className="mx-auto max-w-6xl py-24">
          <PropertySearchBar
            tabs={["Nhà đất bán", "Nhà đất cho thuê", "Dự án"]}
            defaultTab="Rent"
            defaultLocation="Barcelona, Spain"
          />
        </div>
      </section>
      <section className="mx-auto py-6">
        <GalleryEstate />
      </section>
      <Shell className="max-w-6xl gap-0">
        <ContentSection
          title="News"
          // description=""
          href="/locations"
          linkText="View all news"
          className="pt-10 md:pt-14"
          asChild
        >
          <RealEstateNews />
        </ContentSection>
        <section
          className="grid animate-fade-up grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-4"
          style={{ animationDelay: "0.50s", animationFillMode: "both" }}
        >
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </section>
        <section>
          <RealEstateListings />
        </section>
        <section>
          <RealEstateListings />
        </section>
        <section>
          <RealEstateListings />
        </section>
        <section>
          <RealEstateTrending />
        </section>
        {/* <ContentSection
          title="Features"
          description="Explore features from around the world"
          href="/locations"
          linkText="View all features"
          className="pt-14 md:pt-20 lg:pt-24"
          asChild
        >
          <HomeFeatures />
        </ContentSection> */}
        <ContentSection
          title="Products"
          description="Explore products from around the world"
          href="/locations"
          linkText="View all products"
          className="pt-14 md:pt-20 lg:pt-24"
          asChild
        >
          <>
            <SearchFilter options={filterOptions} placeholder="Find your dream home..." defaultSelected="Rent" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 min-h-screen">
              <PropertyCard {...itemProperty} />
              <PropertyCard {...itemProperty} />
              <PropertyCard {...itemProperty} />
              <PropertyCard {...itemProperty} />
              <PropertyCard {...itemProperty} />
              <PropertyCard {...itemProperty} />
              <PropertyCard {...itemProperty} />
              <PropertyCard {...itemProperty} />
              <PropertyCard {...itemProperty} />
              <PropertyCard {...itemProperty} />
            </div>
          </>
        </ContentSection>
        <section>
          <MovieShowcase />
        </section>
        {/* <ContentSection
          title="Highlights"
          description="Explore highlight from around the world"
          href="/locations"
          linkText="View all Highlights"
          className="pt-14 md:pt-20 lg:pt-24"
          asChild
        >
          <PropertyHighlightsCarousel />
        </ContentSection> */}

        <ContentSection
          title="Estate"
          description="Explore estates from around the world"
          href="/estates"
          // linkText="View all Locations"
          className="pt-6 md:pt-14"
          asChild
        >
          <BrokerList />
        </ContentSection>
        <ContentSection
          title="Locations"
          description="Explore locations from around the world"
          href="/locations"
          // linkText="View all Locations"
          className="pt-6 md:pt-14"
          asChild
        >
          <LocationCarousel />
        </ContentSection>
        {/* <ContentSection
          title="Featured Models"
          description="Explore models from around the world"
          href="/models"
          linkText="View all Models"
          className="pt-14 md:pt-20 lg:pt-24"
          asChild
        >
          <RealEstateModel />
        </ContentSection> */}
        {/* <ContentSection
            title="Introduces"
            description="Explore introduces from around the world"
            href="/models"
            linkText="View all Introduces "
            className="pt-14 md:pt-20 lg:pt-24"
            asChild
          >
            <RealEstateIntro />
          </ContentSection> */}
        <ContentSection
          title="Features"
          description="Explore features from around the world"
          href="/models"
          linkText="View all features"
          className="pt-14 md:pt-20 lg:pt-24"
          asChild
        >
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            <RealEstateCard {...itemRealEstate} />
            <RealEstateCard {...itemRealEstate} />
            <RealEstateCard {...itemRealEstate} />
            <RealEstateCard {...itemRealEstate} />
          </div>
        </ContentSection>
        <section className="mt-10 md:mt-14">
          <RealEstateBrandCarousel />
        </section>
        <section className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4">
          <TopicList topics={topics} />
          <TopicList topics={topics} />
          <TopicList topics={topics} />
          <TopicList topics={topics} />
        </section>
      </Shell >

    </>
  )
}
