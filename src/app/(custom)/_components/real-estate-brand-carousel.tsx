"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const image = "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080"

const logos = [
    { src: image, alt: "TT Realty" },
    { src: image, alt: "Green House" },
    { src: image, alt: "Thiên Minh Capital" },
    { src: image, alt: "HausLand" },
    { src: image, alt: "CityLand" },
    { src: image, alt: "Hoàng Thổ Group" },
    { src: image, alt: "Hoàng Thổ Group" },
    { src: image, alt: "Hoàng Thổ Group" },
];

export default function RealEstateBrandCarousel() {
    return (
        <div className="mx-auto max-w-sm md:max-w-3xl xl:max-w-5xl pointer-events-none">
            <div className="flex">
                <Carousel
                    opts={{
                        loop: true,
                        dragFree: false
                    }}
                    plugins={[
                        Autoplay({
                            delay: 1000,
                        }),
                    ]}
                    className="w-full mx-auto">
                    <CarouselContent className="-ml-4">
                        {logos.map((logo, index) => (
                            <CarouselItem key={index} className="pl-2 basis-1/3 md:basis-1/6">
                                <div className="flex items-center justify-center shadow-lg overflow-hidden">
                                    <div className="h-20 w-32 md:h-28 md:w-40">
                                        <Image src={logo.src} alt={logo.alt} width={120} height={80} className="w-full object-cover" />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}
