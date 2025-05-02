import * as React from "react";
import { Shell } from "@/components/atoms/shell"
import HeroBlogCard from "@/components/organims/hero-blog-card";
import ArticleContent from "@/components/molecules/article-content";
import ProfileCard from "@/app/(custom)/_components/profile-card";
import SocialShareCard from "@/components/molecules/social-share-card";
import TableOfContents from "@/components/organims/table-of-contents";

const itemBlog = {
    "image": "https://ui.aceternity.com/_next/image?url=%2Fdemo%2Fthumbnail.png&w=3840&q=75",
    "category": "Artificial Intelligence",
    "title": "Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers",
    "date": "Oct 19",
    "readTime": "10 min"
}

const textBlogDetail = {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi molestiae aspernatur magni laudantium tempora assumenda sunt nulla enim modi, pariatur iusto hic et porro at, est rerum. Sint, numquam?"
}

const itemProfile = {
    "image": "https://ui.aceternity.com/_next/image?url=%2Fdemo%2Fthumbnail.png&w=3840&q=75",
    "name": "Tamás Hám-Szabó",
    "title": "Founder of SAAS First - the Best AI and Data-Driven Customer Engagement Tool",
    "description": "With 11 years in SaaS, I’ve built MillionVerifier and SAAS First. Passionate about SaaS, data, and AI. Let’s connect if you share the same drive for success!",
    "linkedinUrl": "https://ui.aceternity.com/_next/image?url=%2Fdemo%2Fthumbnail.png&w=3840&q=75"
}

export default async function IndexPage() {

    return (
        <Shell className="w-full max-w-6xl gap-4">
            <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
                    <HeroBlogCard {...itemBlog} />
                </div>
                <div className="flex flex-col justify-between">
                    <ProfileCard {...itemProfile} />
                    <SocialShareCard />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2 flex flex-col gap-2">
                    <ArticleContent {...textBlogDetail} />
                    <ArticleContent {...textBlogDetail} />
                    <ArticleContent {...textBlogDetail} />
                    <ArticleContent {...textBlogDetail} />
                    <ArticleContent {...textBlogDetail} />
                    <ArticleContent {...textBlogDetail} />
                    <ArticleContent {...textBlogDetail} />
                    <ArticleContent {...textBlogDetail} />
                </div>
                <div>
                    <TableOfContents />
                </div>
            </div>
        </Shell>
    )
}
