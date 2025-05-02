"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

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

export default function HeroSectionProjects() {

    const [indexActive, setIndexActive] = useState<number>(0)
    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-col text-left p-8 space-y-4">
                <div>
                    <Badge className="inline bg-yellow-300 text-black px-3 py-1 rounded-sm">Enjoy millions</Badge>
                </div>

                <h1 className="text-5xl font-bold">
                    <span className="text-blue-600">Enjoy</span> millions of videos
                </h1>

                <p className="text-gray-500 max-w-lg">
                    Our platform isn’t for typical bloggers, humor or news content. It’s about art, witty ads and creative social videos.
                </p>

                <div className="flex items-center space-x-4">
                    <Button className="bg-blue-600 text-white px-6 py-3 text-lg rounded-lg flex items-center gap-2">
                        Upload <span className="text-xl">📹</span>
                    </Button>
                    <span className="text-gray-400">or</span>
                    <button className="flex items-center space-x-2 text-lg font-medium text-gray-700 hover:underline">
                        <PlayCircle className="text-blue-500" size={24} />
                        <span>Watch collection</span>
                    </button>
                </div>
                <Card className="flex items-center justify-around w-full max-w-md bg-gray-100 p-4 rounded-xl shadow-md">
                    <div className="text-center">
                        <h2 className="text-xl font-bold">6M</h2>
                        <p className="text-gray-500">Upload videos</p>
                    </div>
                    <div className="border-l border-gray-300 h-8"></div>
                    <div className="text-center">
                        <h2 className="text-xl font-bold">0M</h2>
                        <p className="text-gray-500">Upload podcasts</p>
                    </div>  
                    <div className="border-l border-gray-300 h-8"></div>
                    <div className="text-center">
                        <h2 className="text-xl font-bold">0M</h2>
                        <p className="text-gray-500">Upload couts</p>
                    </div>
                </Card>
            </div>
            <div className="grid grid-cols-4 gap-3">
                {[...Array(3)].map((_, index) => (
                    <motion.div
                        key={index}
                        layout
                        initial={{ opacity: 0.8, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            layout: { type: "spring", stiffness: 120, damping: 15 },
                            opacity: { duration: 0.3 },
                            scale: { duration: 0.3 },
                        }}
                        className={cn(
                            "rounded-lg overflow-hidden cursor-pointer",
                            index === indexActive ? "col-span-2" : ""
                        )}
                        onClick={() => setIndexActive(index)}
                    >
                        <Image
                            src={itemProperty.image} // Thay thế bằng dữ liệu thực tế
                            alt=""
                            width={1920}
                            height={1920}
                            className="h-full object-cover"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
