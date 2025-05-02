import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Image from "next/image";

interface ContactCardProps {
  
}

export default function ContactCard() {
  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
      <div className="flex items-center gap-4 w-full">
        <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center font-bold text-lg text-gray-700">
          M
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-lg">Quang Minh</p>
          <p className="text-sm text-gray-500">Xem thêm 77 tin khác</p>
        </div>
      </div>
      <Separator className="my-4 w-full" />
      <div className="flex flex-col gap-3 w-full">
        <Button variant="outline" className="flex items-center gap-3 border-gray-300 px-4 py-3 w-full text-gray-700 hover:bg-gray-100">
          <Image src="/zalo-logo.png" alt="Zalo" width={24} height={24} />
          <span className="font-medium">Chat qua Zalo</span>
        </Button>
        <Button className="bg-teal-500 text-white flex items-center gap-3 px-4 py-3 w-full rounded-lg shadow-md hover:bg-teal-600">
          <PhoneCall className="w-6 h-6" />
          <span className="font-medium">0932 603 *** · Hiện số</span>
        </Button>
      </div>
    </div>
  );
}
