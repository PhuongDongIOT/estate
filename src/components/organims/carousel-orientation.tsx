"use client";

import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image";

const image = "https://ui.aceternity.com/_next/image?url=%2Fdemo%2Fthumbnail.png&w=3840&q=75";

const locations = [
    { name: "Bà Rịa - Vũng Tàu", img: image },
    { name: "Bình Dương", img: image },
    { name: "Bình Dương", img: image },
    { name: "Bình Dương", img: image },
    { name: "Bình Dương", img: image },
    { name: "Bình Dương", img: image },
    { name: "Bình Dương", img: image },
    { name: "Bình Dương", img: image },
    { name: "Bình Dương", img: image },
    { name: "Bình Dương", img: image },
];

export function CarouselOrientation() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            orientation="vertical"
            className="w-full max-w-xs"
        >
            <CarouselContent className="h-64 md:h-[22rem] gap-4">

                {locations.map((location, index) => (
                    <CarouselItem key={index} className="pt-1 basis-1/4 md:basis-1/12">
                        <div
                            key={index}
                            className="flex w-full gap-2 bg-white hover:shadow-lg transition-all duration-300"
                        >
                            <Image
                                src={location.img}
                                alt={location.name}
                                width={150}
                                height={100}
                                className="w-16 h-10 object-cover rounded-sm"
                            />
                            <p className="text-center mt-2 font-medium">{location.name}</p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
