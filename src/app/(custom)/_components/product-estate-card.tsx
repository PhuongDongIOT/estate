import { Card, CardContent } from "@/components/ui/card";

type ProductEstateCardProps = {
  sender: string;
  time: string;
  title: string;
  message: string;
};

export default function ProductEstateCard({ sender, time, title, message }: ProductEstateCardProps) {
  return (
    <Card className="w-full max-w-sm border rounded-lg shadow-md p-2 bg-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <CardContent className="p-0 flex flex-col gap-1">
        <div className="flex justify-between items-center text-gray-800 text-sm font-medium">
          <span className="font-semibold">{sender}</span>
          <span className="text-gray-500 text-xs">{time}</span>
        </div>
        <h3 className="text-md font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
          {message}
        </p>
      </CardContent>
    </Card>
  );
}
