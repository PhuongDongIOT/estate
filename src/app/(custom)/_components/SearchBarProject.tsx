import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MapPin, Building2, Tag, Bed, SlidersHorizontal } from "lucide-react";

export default function SearchBarProject() {
  return (
    <Card className="flex items-center p-4 rounded-md shadow-md bg-white w-full max-w-5xl mx-auto space-x-3">
      <div className="flex items-center space-x-2 px-4 py-2 rounded-md border">
        <MapPin className="text-gray-500" />
        <div>
          <p className="text-xs text-gray-400">Location</p>
          <p className="text-sm font-medium">San Jose, CA</p>
        </div>
      </div>

      <Separator orientation="vertical" className="h-6" />

      <div className="flex items-center space-x-2 px-4 py-2 rounded-md border">
        <Building2 className="text-gray-500" />
        <div>
          <p className="text-xs text-gray-400">Property type</p>
          <p className="text-sm font-medium">Apartments</p>
        </div>
      </div>

      <Separator orientation="vertical" className="h-6" />

      <div className="flex items-center space-x-2 px-4 py-2 rounded-md border">
        <Tag className="text-gray-500" />
        <div>
          <p className="text-xs text-gray-400">Price</p>
          <p className="text-sm font-medium">$2,000 - $13,000</p>
        </div>
      </div>

      <Separator orientation="vertical" className="h-6" />

      <div className="flex items-center space-x-2 px-4 py-2 rounded-md border">
        <Bed className="text-gray-500" />
        <div>
          <p className="text-xs text-gray-400">Bedrooms</p>
          <p className="text-sm font-medium">3 - 5</p>
        </div>
      </div>

      <Separator orientation="vertical" className="h-6" />

      <Button variant="ghost" className="flex items-center space-x-2 px-4 py-2 rounded-md border">
        <SlidersHorizontal className="text-gray-500" />
        <span>More</span>
      </Button>
      
      <Button className="bg-black text-white px-6 py-2 rounded-md">Search</Button>
    </Card>
  );
}
