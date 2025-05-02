"use client";

import { Shell } from "@/components/atoms/shell";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, AlertTriangle, Share2, TriangleAlert, ArrowRight } from "lucide-react";
import { Building, Home, Ruler, Bath, Bed, FileText } from "lucide-react";
import { LineChartComponent } from "./line-chart-component";
import { Alert } from "@/components/ui/alert";
import ImageGalleryEstate from "./image-gellary-estate";
import ContactCard from "./contact-card";
import { MapComponent } from "@/components/organims/map-component";
import { ContentSection } from "@/components/organims/content-section";
import PropertyCard from "@/components/organims/property-card";

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

export default function RealEstateDetail() {
    return (
        <Shell className="max-w-6xl gap-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-2">
                    <ImageGalleryEstate />
                    <div className="w-full">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Quận 6 - 2 tỷ 450 (Nắm chủ). Chính chủ gửi bán nhà
                        </h2>
                        <p className="text-sm text-gray-500">
                            Hẻm 183/, Đường Tân Hòa Đông, Phường 14, Quận 6, Hồ Chí Minh
                        </p>
                        <Separator className="my-3" />
                        <div className="flex justify-between text-gray-700">
                            <div className="text-center">
                                <p className="text-sm font-semibold">Mức giá</p>
                                <p className="text-lg font-bold text-green-600">2,45 tỷ</p>
                                <p className="text-xs text-gray-500">~165,54 triệu/m²</p>
                            </div>
                            <Separator orientation="vertical" className="h-12" />
                            <div className="text-center">
                                <p className="text-sm font-semibold">Diện tích</p>
                                <p className="text-lg font-bold">14,8 m²</p>
                                <p className="text-xs text-gray-500">Mặt tiền 3.6 m</p>
                            </div>
                            <Separator orientation="vertical" className="h-12" />
                            <div className="text-center">
                                <p className="text-sm font-semibold">Phòng ngủ</p>
                                <p className="text-lg font-bold">2 PN</p>
                            </div>
                            <Separator orientation="vertical" className="h-12" />
                            <div className="flex justify-between text-gray-600 items-center gap-8">
                                <Share2 className="w-5 h-5 cursor-pointer hover:text-gray-800" />
                                <AlertTriangle className="w-5 h-5 cursor-pointer hover:text-gray-800" />
                                <Heart className="w-5 h-5 cursor-pointer hover:text-red-500" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Separator className="my-4" />
                        <div className="text-gray-700">
                            <p className="text-sm font-semibold">Thông tin mô tả</p>
                            <p className="text-sm">DT: 3.6 x 4.1m.</p>
                            <p className="text-sm">DT đất: 14.8m². DT sàn: 39.8m².</p>
                            <p className="text-sm">Hiện trạng: 1 trệt 2 lầu. Nhà có 2 phòng ngủ 3 toilet. Hẻm trước nhà 1m6 cách 1 căn ra hẻm xe tải 6m, xe hơi đậu cách nhà 4m. Nhà mới như hình dọn vào ở liền.</p>
                            <p className="text-sm">Hướng: Tây Bắc.</p>
                            <p className="text-sm">Giá: 2 tỷ 450 thương lượng.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold">LH:</span>
                            <span className="text-sm bg-gray-200 px-2 py-1 rounded">0932 603 ***</span>
                            <Button className="text-sm bg-blue-500 text-white px-3 py-1 rounded">Hiện số</Button>
                        </div>
                    </div>
                    <div className="w-full">
                        <Separator className="my-3" />
                        <div className="grid grid-cols-2 gap-4 text-gray-700">
                            <div className="flex items-center gap-2">
                                <Ruler className="w-5 h-5" />
                                <p className="text-sm">Diện tích: <span className="font-bold">14,8 m²</span></p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Home className="w-5 h-5" />
                                <p className="text-sm">Mặt tiền: <span className="font-bold">3,6 m</span></p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Bed className="w-5 h-5" />
                                <p className="text-sm">Phòng ngủ: <span className="font-bold">2 phòng</span></p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Bath className="w-5 h-5" />
                                <p className="text-sm">Phòng tắm: <span className="font-bold">3 phòng</span></p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Building className="w-5 h-5" />
                                <p className="text-sm">Số tầng: <span className="font-bold">3 tầng</span></p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FileText className="w-5 h-5" />
                                <p className="text-sm">Pháp lý: <span className="font-bold">Sổ đỏ/ Sổ hồng</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <LineChartComponent />
                        <Alert>
                            <div className="flex grow justify-between gap-3">
                                <div className="flex gap-2">
                                    <TriangleAlert className="text-amber-500" size={16} strokeWidth={2} />
                                    <p className="text-sm">Some information is missing!</p>
                                </div>
                                <a href="#" className="group whitespace-nowrap text-sm font-medium">
                                    Link
                                    <ArrowRight
                                        className="-mt-0.5 ms-1 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
                                        size={16}
                                        strokeWidth={2}
                                    />
                                </a>
                            </div>
                        </Alert>
                    </div>
                    <ContentSection
                        title="Bản đồ"
                        // description=""
                        href=""
                        // linkText="View all news"
                        className="pt-10 md:pt-14"
                        asChild
                    >
                        <MapComponent/>
                    </ContentSection>
                </div>
                <div className="hidden md:block">
                    <ContactCard />
                </div>
            </div>

            <ContentSection
                title="Products"
                description="Explore products from around the world"
                href="/locations"
                linkText="View all products"
                className="pt-10 md:pt-14"
                asChild
            >
                <>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <PropertyCard {...itemProperty} />
                        <PropertyCard {...itemProperty} />
                        <PropertyCard {...itemProperty} />
                        <PropertyCard {...itemProperty} />
                        <PropertyCard {...itemProperty} />
                    </div>
                </>
            </ContentSection>
            <ContentSection
                title="Products"
                description="Explore products from around the world"
                href="/locations"
                linkText="View all products"
                className="pt-10 md:pt-14"
                asChild
            >
                <>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <PropertyCard {...itemProperty} />
                        <PropertyCard {...itemProperty} />
                        <PropertyCard {...itemProperty} />
                        <PropertyCard {...itemProperty} />
                        <PropertyCard {...itemProperty} />
                    </div>
                </>
            </ContentSection>
        </Shell>
    );
}
