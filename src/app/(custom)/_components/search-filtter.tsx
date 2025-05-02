import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Search, CalendarIcon, Users, Filter, Star, Wifi, DollarSign } from "lucide-react";

export default function SearchFillter() {
    return (

        <div className="grid grid-cols-2 md:grid-cols-5 items-center gap-3 bg-white p-4">
            <div className="col-span-2 flex items-center gap-2 border rounded-lg w-full pr-2">
                <Input placeholder="Best place in Kanazawa" className="border-none focus:ring-0" />
                <Search className="text-gray-500" size={18} />
            </div>

            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="text-xs font-normal flex items-center gap-2 px-4">
                        <CalendarIcon size={16} /> Sat, 8 May
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar />
                </PopoverContent>
            </Popover>

            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="text-xs font-normal flex items-center gap-2 px-4">
                        <CalendarIcon size={16} /> Sat, 8 Jul
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar />
                </PopoverContent>
            </Popover>

            <Button variant="outline" className="text-xs font-normal flex items-center gap-2 px-4">
                <Users size={16} /> 2
            </Button>

            <div className="col-span-5 grid grid-cols-4 gap-4">
                <Button variant="link" className="text-blue-600 flex items-center gap-2">
                    <Filter size={16} /> All Filters (3)
                </Button>

                <Button variant="outline" className="text-xs font-normal flex items-center gap-2 px-4">
                    <Star size={16} /> 4+ Rating
                </Button>

                <Button variant="outline" className="text-xs font-normal flex items-center gap-2 px-4">
                    <DollarSign size={16} /> $100 - $500
                </Button>

                <Button variant="outline" className="text-xs font-normal flex items-center gap-2 px-4">
                    <Wifi size={16} /> Free Wifi
                </Button>
            </div>
        </div>
    )
}