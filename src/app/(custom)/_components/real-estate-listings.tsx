"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const properties = [
    {
        title: "Luxury Villa in Beverly Hills",
        image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
        price: "$2,500,000",
        bedrooms: 5,
        bathrooms: 4,
    },
    {
        title: "Modern Apartment in New York",
        image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
        price: "$1,200,000",
        bedrooms: 3,
        bathrooms: 2,
    },
    {
        title: "Beachfront House in Miami",
        image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
        price: "$3,800,000",
        bedrooms: 6,
        bathrooms: 5,
    },
    {
        title: "Beachfront House in Miami",
        image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
        price: "$3,800,000",
        bedrooms: 6,
        bathrooms: 5,
    },
    {
        title: "Beachfront House in Miami",
        image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
        price: "$3,800,000",
        bedrooms: 6,
        bathrooms: 5,
    },
    {
        title: "Beachfront House in Miami",
        image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
        price: "$3,800,000",
        bedrooms: 6,
        bathrooms: 5,
    },
    {
        title: "Beachfront House in Miami",
        image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
        price: "$3,800,000",
        bedrooms: 6,
        bathrooms: 5,
    },
];

export default function RealEstateListings() {
    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-5 max-w-md md:max-w-max">
            <div className="flex md:flex-col justify-start gap-4 mb-4">
                <h2 className="text-2xl font-bold">
                    <span className="text-purple-400">Real Estate</span> Listings
                </h2>
                <div className="inline">
                    <Button variant="ghost" className="text-gray-800 flex items-center hover:text-purple-400 transition-all">
                        View All <ChevronRight className="w-5 h-5 ml-1" />
                    </Button>
                </div>
            </div>
            <div className="flex space-x-4 col-span-4">
                <Carousel
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
                        {properties.map((property, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-1/2 md:basis-1/4"
                            >
                                <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Card className="shadow-lg rounded-lg overflow-hidden transition-transform">
                                        <CardContent className="p-2">
                                            <img
                                                src={property.image}
                                                alt={property.title}
                                                className="rounded-lg w-full h-40 object-cover transition-transform hover:scale-105"
                                            />
                                            <div className="mt-2 text-sm flex justify-between items-center">
                                                <span className="px-2 py-1 bg-gray-700 rounded">🛏 {property.bedrooms} Beds</span>
                                                <span className="px-2 py-1 bg-blue-600 text-white rounded">🛁 {property.bathrooms} Baths</span>
                                            </div>
                                            <h3 className="mt-2 text-gray-800 font-semibold line-clamp-2">{property.title}</h3>
                                            <p className="text-center text-green-400 font-bold">{property.price}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent >
                    <CarouselPrevious className="hidden md:inline-flex" />
                    <CarouselNext className="hidden md:inline-flex" />
                </Carousel>
            </div>
        </div >
    );
}
