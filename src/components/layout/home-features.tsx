"use client";

import { Button } from "@/components/ui/button";
import { Shield, DollarSign, Scissors, Lock } from "lucide-react";
import { motion } from "framer-motion";

interface Feature {
    icon: any;
    title: string;
    description: string;
}

const defaultFeatures: Feature[] = [
    {
        icon: Shield,
        title: "Property Insurance",
        description:
            "We offer our customer property protection of liability coverage and insurance for their better life.",
    },
    {
        icon: DollarSign,
        title: "Best Price",
        description:
            "Not sure what you should be charging for your property? No need to worry, let us do the numbers for you.",
    },
    {
        icon: Scissors,
        title: "Lowest Commission",
        description:
            "You no longer have to negotiate commissions and haggle with other agents it only cost 2%!",
    },
    {
        icon: Lock,
        title: "Overall Control",
        description:
            "Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control.",
    },
];

function FeatureItem({ icon: Icon, title, description }: Feature) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
        >
            <div>
                <div className="w-fit p-3 bg-purple-100 rounded-full">
                    <Icon size={24} className="text-purple-600" />
                </div>
            </div>
            <div>
                <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
            </div>
        </motion.div>
    );
}

export default function PropertyFeatures({ features = defaultFeatures }: { features?: Feature[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
            >
                <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
                    The new way to find <br /> your new home
                </h2>
                <p className="text-gray-600 text-lg">
                    Find your dream place to live in with more than 10k+ properties listed.
                </p>
                <Button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 shadow-lg">
                    Browse Properties
                </Button>
            </motion.div>

            {/* Right Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
                {features.map((feature, index) => (
                    <FeatureItem key={index} icon={feature.icon} title={feature.title} description={feature.description} />
                ))}
            </motion.div>
        </div>
    );
}
