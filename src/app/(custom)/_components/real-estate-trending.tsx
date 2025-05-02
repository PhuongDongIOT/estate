"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Flame, Heart, MessageSquare } from "lucide-react";

const image = "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080";

const trendingProperties = [
  { title: "Biệt thự ven sông", image: image },
  { title: "Căn hộ cao cấp", image: image },
  { title: "Nhà phố hiện đại", image: image },
  { title: "Villa nghỉ dưỡng", image: image },
  { title: "Penthouse sang trọng", image: image },
];

const favoriteProperties = [
  { title: "Căn hộ cao cấp", image: image },
  { title: "Nhà phố hiện đại", image: image },
  { title: "Biệt thự ven sông", image: image },
  { title: "Khu đô thị xanh", image: image },
  { title: "Dinh thự hoàng gia", image: image },
];

const comments = [
  { user: "Hao bạc", text: "Vị trí quá đẹp!", property: "Biệt thự ven sông" },
  { user: "Margaret Qualley", text: "Không gian sống lý tưởng!", property: "Penthouse sang trọng" },
  { user: "Tepp Ctez", text: "Giá này có hợp lý không nhỉ?", property: "Nhà phố hiện đại" },
  { user: "kkk", text: "Tôi muốn xem thêm hình ảnh!", property: "Căn hộ cao cấp" },
];

export default function RealEstateTrending() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 rounded-lg shadow-md border-[1px] border-zinc-400 border-collapse">
      <Category title="🔥 BẤT ĐỘNG SẢN HOT" properties={trendingProperties} />
      <Category title="💛 YÊU THÍCH NHẤT" properties={favoriteProperties} />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <MessageSquare className="mr-2" /> BÌNH LUẬN MỚI
        </h2>
        <ScrollArea className="h-[300px] pr-2">
          {comments.map((comment, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-3 rounded-lg mb-2 shadow-md"
            >
              <p className="text-sm font-medium">{comment.user}: <span className="text-gray-400">{comment.text}</span></p>
              <p className="text-xs text-gray-600">🏡 {comment.property}</p>
            </motion.div>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
}
interface CategoryProps {
  title: string;
  icon?: React.ReactNode
  properties: Array<{
    image: string;
    title: string;
  }>
}
function Category({ title, icon, properties }: CategoryProps) {
  return (
    <div className="md:border-r-[1px] border-zinc-400 p-4 ">
      <h2 className="text-lg font-semibold mb-4 flex items-center">{icon} {title}</h2>
      <ScrollArea className="pr-2">
        {properties.map((property, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col space-x-3 p-2"
          >
            <div className="flex items-center gap-2">
              <img src={property.image} alt={property.title} className="w-12 h-12 rounded-md object-cover" />
              <div>
                <p className="text-sm font-medium">{index + 1}. {property.title}</p>
                <p className="ml-4 text-xs text-gray-600">{property.title}</p>
              </div>
            </div>
            <Separator className="my-2" />
          </motion.div>
        ))}
      </ScrollArea>
    </div>
  );
}
