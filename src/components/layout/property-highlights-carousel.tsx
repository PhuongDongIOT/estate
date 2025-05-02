"use client";

import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay"
import { Home, Search, Globe } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const highlightFeatures = [
  {
    icon: Home,
    title: "Virtual Home Tour",
    description:
      "Communicate directly with landlords and explore virtual tours before buying or renting your property.",
  },
  {
    icon: Search,
    title: "Find the Best Deal",
    description:
      "Browse thousands of properties, save your favorites, and set up alerts to never miss a great opportunity.",
  },
  {
    icon: Globe,
    title: "Global Property Access",
    description:
      "Discover properties worldwide with in-depth market insights for smart investments.",
  },
  {
    icon: Globe,
    title: "Global Property Access",
    description:
      "Discover properties worldwide with in-depth market insights for smart investments.",
  },
  {
    icon: Globe,
    title: "Global Property Access",
    description:
      "Discover properties worldwide with in-depth market insights for smart investments.",
  },
];

export default function PropertyHighlightsCarousel() {

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold">
          We make it easy for{" "}
          <span className="text-purple-400">tenants</span> and{" "}
          <span className="text-blue-400">landlords</span>.
        </h2>
        <p className="text-gray-300 mt-4">
          Whether you’re selling, financing, or buying a new home, we simplify the process while saving time and money.
        </p>
      </motion.div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="mx-auto w-full max-w-sm md:max-w-full">
        <CarouselContent className="my-2">
          {highlightFeatures.map((feature, index) => (
            <CarouselItem className="basis-1/2 md:basis-1/3">
              <motion.div
                key={index}
                initial={{ opacity: 0.5, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full flex-shrink-0"
              >
                <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-lg transition">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-500 bg-opacity-40 rounded-full">
                      <feature.icon size={24} className="text-cyan-600" />
                    </div>
                    <h4 className="text-lg font-semibold line-clamp-2">{feature.title}</h4>
                  </div>
                  <p className="mt-3 text-sm opacity-90 line-clamp-2">{feature.description}</p>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Statistics Section */}
      < motion.div
        initial={{ opacity: 0, y: 30 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center gap-8 text-center"
      >
        <div>
          <h3 className="text-3xl font-bold text-purple-400">7.4%</h3>
          <p className="text-gray-300">Property Return Rate</p>
        </div>
        <div className="w-px bg-gray-600 h-12 hidden md:block"></div>
        <div>
          <h3 className="text-3xl font-bold text-purple-400">3,856</h3>
          <p className="text-gray-300">Properties for Sale & Rent</p>
        </div>
        <div className="w-px bg-gray-600 h-12 hidden md:block"></div>
        <div>
          <h3 className="text-3xl font-bold text-purple-400">2,540</h3>
          <p className="text-gray-300">Daily Completed Transactions</p>
        </div>
      </motion.div >
    </>
  );
}
