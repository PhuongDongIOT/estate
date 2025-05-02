"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export interface GalleryEstateItem {
    id: string;
    title: string;
    description: string;
    href: string;
    image: string;
}

export interface GalleryEstateProps {
    title?: string;
    description?: string;
    items?: GalleryEstateItem[];
}

const data = [
    {
        id: "shadcn-ui",
        title: "shadcn/ui: Building a Modern Component Library",
        description:
            "Explore how shadcn/ui revolutionized React component libraries by providing a unique approach to component distribution and customization, making it easier for developers to build beautiful, accessible applications.",
        href: "https://ui.shadcn.com",
        image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: "tailwind",
        title: "Tailwind CSS: The Utility-First Revolution",
        description:
            "Discover how Tailwind CSS transformed the way developers style their applications, offering a utility-first approach that speeds up development while maintaining complete design flexibility.",
        href: "https://tailwindcss.com",
        image:
            "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: "astro",
        title: "Astro",
        description:
            "Learn how Astro's innovative 'Islands Architecture' and zero-JS-by-default approach is helping developers build faster websites while maintaining rich interactivity where needed.",
        href: "https://astro.build",
        image:
            "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: "react",
        title: "React",
        description:
            "Vị trí nằm trong Kđt Ngô Thì Nhậm, nói không với quy hoạch, cách MP Quang Trung, đường sắt trên cao 200m.",
        href: "https://react.dev",
        image:
            "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: "nextjs",
        title: "Đấu giá Ngô Thì Nhậm, view chung cư, 50m2, giá tốt nhất khu",
        description:
            "Vị trí nằm trong Kđt Ngô Thì Nhậm, nói không với quy hoạch, cách MP Quang Trung, đường sắt trên cao 200m.",
        href: "https://nextjs.org",
        image:
            "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: "nextjs",
        title: "Đấu giá Ngô Thì Nhậm, view chung cư, 50m2, giá tốt nhất khu",
        description:
            "Vị trí nằm trong Kđt Ngô Thì Nhậm, nói không với quy hoạch, cách MP Quang Trung, đường sắt trên cao 200m.",
        href: "https://nextjs.org",
        image:
            "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: "nextjs",
        title: "Đấu giá Ngô Thì Nhậm, view chung cư, 50m2, giá tốt nhất khu",
        description:
            "Vị trí nằm trong Kđt Ngô Thì Nhậm, nói không với quy hoạch, cách MP Quang Trung, đường sắt trên cao 200m.",
        href: "https://nextjs.org",
        image:
            "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: "nextjs",
        title: "Đấu giá Ngô Thì Nhậm, view chung cư, 50m2, giá tốt nhất khu",
        description:
            "Vị trí nằm trong Kđt Ngô Thì Nhậm, nói không với quy hoạch, cách MP Quang Trung, đường sắt trên cao 200m.",
        href: "https://nextjs.org",
        image:
            "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: "nextjs",
        title: "Đấu giá Ngô Thì Nhậm, view chung cư, 50m2, giá tốt nhất khu",
        description:
            "Vị trí nằm trong Kđt Ngô Thì Nhậm, nói không với quy hoạch, cách MP Quang Trung, đường sắt trên cao 200m.",
        href: "https://nextjs.org",
        image:
            "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: "nextjs",
        title: "Đấu giá Ngô Thì Nhậm, view chung cư, 50m2, giá tốt nhất khu",
        description:
            "Vị trí nằm trong Kđt Ngô Thì Nhậm, nói không với quy hoạch, cách MP Quang Trung, đường sắt trên cao 200m.",
        href: "https://nextjs.org",
        image:
            "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
];

const GalleryEstate: React.FC<GalleryEstateProps> = ({
    title = "Case Studies",
    description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
    items = data,
}) => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!carouselApi) {
            return;
        }
        const updateSelection = () => {
            setCurrentSlide(carouselApi.selectedScrollSnap());
        };
        updateSelection();
        carouselApi.on("select", updateSelection);
        return () => {
            carouselApi.off("select", updateSelection);
        };
    }, [carouselApi]);

    return (
        <section className="mx-auto w-full max-w-6xl">
            <Carousel
                setApi={setCarouselApi}
                opts={{
                    align: "center",
                    loop: true,
                    dragFree: true
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                className="w-full"
            >
                <CarouselContent className="w-full">
                    {items.map((item) => (
                        <CarouselItem
                            key={item.id}
                            className="basis-1/2 md:basis-1/6"
                        >
                            <a href={item.href} className="group rounded-xl">
                                <div className="group relative h-full min-h-40 max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-2 text-primary-foreground">
                                        <div className="mb-1 text-md font-semibold line-clamp-1">
                                            {item.title}
                                        </div>
                                        <div className="text-sm line-clamp-2">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
};

export default GalleryEstate;
