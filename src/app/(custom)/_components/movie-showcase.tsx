import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {  Heart, Info } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

export default function MovieShowcase() {
    const movies = [
        { title: "Reacher", image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080" },
        { title: "Reacher", image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080" },
        { title: "Reacher", image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080" },
        { title: "Reacher", image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080" },
        { title: "Reacher", image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080" },
        { title: "Reacher", image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080" },
        { title: "Reacher", image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080" },
        { title: "Reacher", image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080" },
    ];

    return (
        <>
            <div className="relative text-gray-900 rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-[30rem] grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
                    <div className="flex-1 p-6">
                        <h1 className="text-4xl font-bold">Thiên Đường</h1>
                        <p className="mt-4 text-sm text-gray-800 max-w-xl">
                            Đặc vụ Xavier Collins phát hiện ra một trong những người quyền lực nhất thế giới
                            đã bị giết hại dã man. Nhưng sau cái chết bí ẩn của tổng thống, anh nhận ra bản thân
                            đang nằm trong một âm mưu đe dọa lớn lao...
                        </p>
                        <div className="mt-4 flex gap-3">
                            <Button variant="outline" className="flex items-center gap-2">
                                <Heart size={18} /> Yêu thích
                            </Button>
                            <Button variant="ghost" className="flex items-center gap-2">
                                <Info size={18} /> Thông tin
                            </Button>
                        </div>
                    </div>
                    <div className="relative w-full">
                        <div className="h-[30rem]">
                            <Image alt="" fetchPriority="high" width={918} height={1495} decoding="async" data-nimg="1" 
                            className="w-full h-full object-cover" src={movies[0].image} />
                        </div>
                        <div className="absolute bottom-24 right-0 w-full flex justify-end">
                            <Carousel
                                opts={{
                                    align: "start",
                                    dragFree: true
                                }}
                                className="w-full max-w-sm"
                            >
                                <CarouselContent>
                                    {Array.from({ length: 12 }).map((_, index) => (
                                        <CarouselItem key={index} className="basis-1/4 md:basis-1/5 p-0">
                                            <div className="p-1">
                                                <Card>
                                                    <CardContent className="flex aspect-square items-center justify-center p-4">
                                                        <span className="text-3xl font-semibold">{index + 1}</span>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative top-[-4rem]">
                <ScrollArea className="whitespace-nowrap bg-transparent">
                    <div className="flex justify-center flex-wrap gap-4">
                        {movies.map((movie, index) => (
                            <Card key={index} className="border-none shadow-none bg-transparent">
                                <CardContent className="p-2">
                                    <div className="h-24 w-24">
                                        <img src={movie.image} alt={movie.title} className="rounded-md h-24 w-24 object-cover" />
                                    </div>
                                    <p className="text-sm mt-2 text-center">{movie.title}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div></>
    );
}
