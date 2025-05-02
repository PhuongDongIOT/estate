"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const images = [
  "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png",
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=1080&q=80",
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=1080&q=80",
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=1080&q=80",
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=1080&q=80",
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=1080&q=80",
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=1080&q=80",
];

export default function ImageGalleryEstate() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
  };

  return (
    <div>
        {/* Lightbox Dialog */}
        <div className="w-full bg-white rounded-lg">

          <div className="relative w-full h-96 flex items-center justify-center">
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-3 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-900 transition z-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-900 transition z-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Main Image in Dialog */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex justify-center items-center"
              >
                <Image
                  src={selectedImage}
                  alt="Large View"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail Carousel in Dialog (ShadCN Carousel) */}
          <div className="my-4">
            <Carousel
            opts={{
                loop: true,
                dragFree: true
            }}
             className="w-full">
              <CarouselContent className="flex gap-2">
                {images.map((img, index) => (
                  <CarouselItem key={index} className="basis-1/6 py-2">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-full h-20 rounded-lg overflow-hidden shadow-md cursor-pointer ${
                        selectedImage === img ? "ring-2 ring-blue-500" : ""
                      }`}
                      onClick={() => {
                        setSelectedImage(img);
                        setCurrentIndex(index);
                      }}
                    >
                      <Image src={img} alt={`Thumbnail ${index}`} width={80} height={80} className="w-full h-full object-cover" />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
    </div>
  );
}
