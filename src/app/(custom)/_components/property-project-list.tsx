import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getRandomInt } from "@/utils/get-random-int";
import Image from "next/image";

const properties = [
  {
    image: "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png",
    price: "$1,950,000",
    beds: 4,
    baths: 3,
    sqft: 1868,
    address: "201 Prague Dr, San Jose, CA 95119",
  },
  {
    image: "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png",
    price: "$479,000",
    beds: 1,
    baths: 1,
    sqft: 560,
    address: "244 Stonegate Cir, San Jose, CA 95110",
  },
  {
    image: "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png",
    price: "$1,120,000",
    beds: 3,
    baths: 3,
    sqft: 1430,
    address: "4774 Snow Dr, San Jose, CA 95111",
  },
];

export default function PropertyProjectList() {
  const indexRandom = getRandomInt(0, 2);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {properties.map((property, index) => (
        <Card key={index} className={cn("rounded-lg overflow-hidden border-none shadow-none", index === indexRandom ? "col-span-1 md:col-span-2" : 0)}>
          <Image
            src={property.image}
            alt="Property Image"
            width={500}
            height={300}
            className="w-full h-64 object-cover"
          />
          <CardContent className="p-4">
            <p className="text-lg font-semibold">{property.price}</p>
            <p className="text-sm text-gray-600">
              {property.beds} beds • {property.baths} baths • {property.sqft} sqft
            </p>
            <p className="text-sm text-gray-500 line-clamp-1">{property.address}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
