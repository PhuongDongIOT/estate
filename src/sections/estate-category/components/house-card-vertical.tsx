"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { BedDouble, Bath, MapPin, Images } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import ImageGallery from "./image-gallery";

const image = "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080"
const image_2 = "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png";
const house = {
  title: "CHO THUÊ NHÀ ÂU CƠ, TÂY HỒ, HN - NHÀ RỘNG - HĐ LÂU DÀI",
  price: "20 triệu/tháng",
  area: "75 m²",
  beds: 2,
  baths: 3,
  location: "Tây Hồ, Hà Nội",
  description:
    "Cho thuê nhà riêng, ngõ rộng, có chỗ gửi xe cách nhà 40m. Xe tải, xe con ngang cửa. Diện tích 75m², sân rộng 19m², xây dựng 56m²; 3 tầng, 1 tum rộng như nhà; 2 phòng ngủ, 1 phòng khách, bếp, 3 nhà wc,...",
  images: [image, image_2, image, image_2],
};

export default function HouseCardVertical() {
  const [thumbnail, setThumbnail] = useState<string>(house.images[0])
  return (
    <Card className="grid grid-cols-1 md:grid-cols-3 gap-2 overflow-hidden border-none shadow-none transition duration-300 hover:shadow-sm">
      <div className="relative">
        {/* Main Image */}
        <motion.div
          key={thumbnail} // Trigger animation when thumbnail changes
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={thumbnail}
            alt={house.title}
            width={800}
            height={400}
            className="w-full h-28 object-cover rounded-t-2xl"
          />
        </motion.div>


        {/* VIP Badge */}
        <div className="absolute top-2 left-2 flex gap-2">
          <div className=" bg-red-600 text-white px-3 py-1 text-sm font-bold rounded-md shadow">
            VIP KIM CƯƠNG
          </div>
          <Badge variant="outline" className="text-green-600 border-green-600 px-2 py-1">
            XÁC THỰC
          </Badge>
        </div>

        {/* Small Images */}
        <div className="absolute bottom-3 right-3 flex space-x-2 bg-white/80 p-1 rounded-lg shadow-md">
          {house.images.slice(1, 3).map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="House"
              width={40}
              height={40}
              className="rounded-md shadow-sm object-cover transition-transform duration-300 hover:scale-110"
              onClick={() => setThumbnail(img)}
            />
          ))}
          <ImageGallery>
            <div className="h-full relative flex items-center justify-center bg-gray-800 text-white rounded-md px-2 z-50">
              <Images className="w-5 h-5" />
              <span className="ml-1 text-sm z-50">{house.images.length}+</span>
            </div>
          </ImageGallery>
        </div>
      </div>

      <CardContent className="col-span-2">
        <h3 className="text-md font-semibold mt-2 text-gray-800 line-clamp-1">{house.title}</h3>

        <div className="text-red-600 font-bold text-md mt-1">
          {house.price} <span className="text-gray-500">• {house.area}</span>
        </div>

        <div className="flex items-center space-x-4 text-gray-600 mt-2">
          <div className="flex items-center text-xs">
            <BedDouble className="mr-1 text-blue-500 w-5 h-5" /> {house.beds} Phòng ngủ
          </div>
          <div className="flex items-center text-xs">
            <Bath className="mr-1 text-purple-500 w-5 h-5" /> {house.baths} WC
          </div>
          <div className="flex items-center text-xs">
            <MapPin className="mr-1 text-red-500 w-5 h-5" /> {house.location}
          </div>
        </div>
        <Separator className="my-2" />
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-2">{house.description}</p>
      </CardContent>
    </Card>
  );
}
