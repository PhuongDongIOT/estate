'use client';

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Bookmark } from "lucide-react";

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

export function CarouselProject() {
    return (
        <div className="grid grid-cols-4">
            <div className="col-span-3">
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 4000,
                        }),
                    ]}
                    className="relative w-full">
                    <CarouselContent className="w-full h-[30rem] gap-0">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem className="w-full pl-0" key={index}>
                                <Image
                                    src={itemProperty.image} // Thay thế bằng dữ liệu thực tế
                                    alt=""
                                    width={1920}
                                    height={1920}
                                    className="h-full object-cover"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
            <div className="h-full">
                <Card className="h-full flex flex-col justify-between p-6 rounded-xl shadow-none border-none">
                    <div>
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-gray-500 text-sm">201 Prague Dr,</p>
                                <p className="text-gray-500 text-sm">San Jose, CA 95119</p>
                            </div>
                            <Bookmark className="w-6 h-6 text-gray-400 hover:text-gray-700 transition" />
                        </div>

                        <div className="flex justify-between my-6">
                            <div className="text-center">
                                <p className="text-2xl font-semibold text-gray-900">4</p>
                                <p className="text-gray-500 text-sm">Beds</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-semibold text-gray-900">3</p>
                                <p className="text-gray-500 text-sm">Baths</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-semibold text-gray-900">1,868</p>
                                <p className="text-gray-500 text-sm">Sqft</p>
                            </div>
                        </div>

                        <p className="text-3xl font-bold text-gray-900">$1,650,000</p>
                        <Button variant="outline" className="w-full mt-3 py-2 rounded-lg border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                            Split Options
                        </Button>

                    </div>
                    <CardContent className="mt-5 p-4 bg-gray-50 rounded-lg flex flex-wrap items-center gap-4 border border-gray-200">
                        <Avatar className="w-12 h-12">
                            <AvatarImage src="/agent.jpg" alt="Agent" />
                            <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium text-gray-900">Amelia Stephenson</p>
                            <p className="text-gray-500 text-xs">Real Estate Agent</p>
                        </div>
                        <Button variant="outline" size="sm" className="w-full ml-auto px-4 py-1 text-gray-700 border-gray-300 hover:bg-gray-100 transition">
                            Contact
                        </Button>
                    </CardContent>
                    <p className="text-center text-gray-500 text-xs mt-2">Earliest at 11:00 tomorrow</p>
                </Card>
            </div>
        </div>
    )
}
