"use client";

import { Card } from "@/components/ui/card";
import { Star, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const image = "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080"

const brokers = [
    {
        name: "Nguyễn Văn A",
        company: "DreamHome Realty",
        image: image,
        rating: 4.8,
        description: "Chuyên viên tư vấn bất động sản cao cấp với hơn 10 năm kinh nghiệm.",
        email: "nguyenvana@email.com",
        phone: "+84 123 456 789",
    },
    {
        name: "Trần Thị B",
        company: "Luxury Estates",
        image: image,
        rating: 4.9,
        description: "Hỗ trợ khách hàng tìm kiếm căn hộ sang trọng, đầu tư sinh lời.",
        email: "tranthib@email.com",
        phone: "+84 987 654 321",
    },
    {
        name: "Trần Thị B",
        company: "Luxury Estates",
        image: image,
        rating: 4.9,
        description: "Hỗ trợ khách hàng tìm kiếm căn hộ sang trọng, đầu tư sinh lời.",
        email: "tranthib@email.com",
        phone: "+84 987 654 321",
    },
];

export default function BrokerList() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {brokers.map((broker, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="shadow-lg"
                    >
                        <Card className="p-4 flex items-center space-x-4 bg-white rounded-lg">
                            <div className="w-24 h-24 rounded-md overflow-hidden">
                                <Image src={broker.image}
                                    alt=""
                                    height={98}
                                    width={98}
                                    className="w-24 h-24 object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <div>
                                        <h2 className="text-lg font-semibold">{broker.name}</h2>
                                        <p className="text-sm text-gray-600">{broker.company}</p>
                                    </div>
                                    <div className="flex items-center text-yellow-500">
                                        <Star className="w-4 h-4" /> <span className="ml-1 text-xs">{broker.rating}</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{broker.description}</p>
                                <div className="flex space-x-3 mt-2 text-blue-500">
                                    <a href={`tel:${broker.phone}`} className="flex items-center text-sm">
                                        <Phone className="w-4 h-4 mr-1" /> {broker.phone}
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-6 gap-4">
                {brokers.map((broker, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Card className="p-2 flex flex-col items-center space-x-4 bg-white rounded-lg">
                            <div className="w-20 h-20 rounded-md overflow-hidden">
                                <Image src={broker.image}
                                    alt=""
                                    height={98}
                                    width={98}
                                    className="w-20 h-20 object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <div>
                                        <h2 className="text-sm font-semibold">{broker.name}</h2>
                                        <p className="text-xs text-gray-600">{broker.company}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-3 mt-1 text-blue-500">
                                    <a href={`tel:${broker.phone}`} className="flex items-center text-xs">
                                        {broker.phone}
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
                {brokers.map((broker, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Card className="p-2 flex flex-col items-center space-x-4 bg-white rounded-lg">
                            <div className="w-20 h-20 rounded-md overflow-hidden">
                                <Image src={broker.image}
                                    alt=""
                                    height={98}
                                    width={98}
                                    className="w-20 h-20 object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <div>
                                        <h2 className="text-sm font-semibold">{broker.name}</h2>
                                        <p className="text-xs text-gray-600">{broker.company}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-3 mt-1 text-blue-500">
                                    <a href={`tel:${broker.phone}`} className="flex items-center text-xs">
                                        {broker.phone}
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </>
    );
}
