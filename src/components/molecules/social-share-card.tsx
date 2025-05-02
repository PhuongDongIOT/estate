import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const SocialShareCard = () => {
    return (
        <Card className="max-w-sm p-2 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl text-white shadow-lg text-center">
            <p className="text-lg font-semibold">Share with your community!</p>
            <div className="flex justify-center mt-2 gap-4">
                <Button variant="outline" className="p-2 bg-white text-blue-700 rounded-lg shadow-md hover:bg-gray-200 transition">
                    <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="p-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-200 transition">
                    <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="p-2 bg-white text-blue-800 rounded-lg shadow-md hover:bg-gray-200 transition">
                    <Linkedin className="w-5 h-5" />
                </Button>
            </div>
        </Card>
    );
};

export default SocialShareCard;
