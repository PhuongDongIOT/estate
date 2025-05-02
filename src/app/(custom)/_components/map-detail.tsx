import { Button } from "@/components/ui/button";
import { SlidersHorizontal, Grid, List } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import HouseCardVertical from "@/sections/estate-category/components/house-card-vertical";

export default function MapDetail() {

    return (
        <div className="flex flex-col gap-x-24">
            <div className="flex justify-between items-center">
                <span className="text-xs text-gray-700 font-medium">Hotels in Kanazawa, 225 Results</span>
                <div className="flex gap-2">
                    <Button
                        // variant={view === "list" ? "default" : "outline"}
                        // onClick={() => setView("list")}
                        className="flex items-center gap-2 px-3"
                    >
                        <List size={18} />
                    </Button>
                    <Button
                        // variant={view === "grid" ? "default" : "outline"}
                        // onClick={() => setView("grid")}
                        className="flex items-center gap-2 px-3"
                    >
                        <Grid size={18} />
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2 px-3">
                        <SlidersHorizontal size={18} />
                    </Button>
                </div>
            </div>
            <ScrollArea>
                <div className="flex flex-col">
                    <HouseCardVertical />
                    <HouseCardVertical />
                    <HouseCardVertical />
                    <HouseCardVertical />
                </div>
            </ScrollArea>
        </div>
    );
}
