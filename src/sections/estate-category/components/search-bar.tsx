"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { Filter, Search, ChevronDown, ShieldCheck, Medal } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
    const [verified, setVerified] = useState(false);
    const [professional, setProfessional] = useState(false);

    return (
        <div className="flex flex-col gap-3 bg-white py-4 w-full max-w-5xl">
            {/* Input Search */}
            <div className="flex gap-2">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <Input
                        placeholder="Tìm kiếm bất động sản..."
                        className="pl-12 pr-28 w-full h-12 rounded-lg border focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                </div>

                {/* Button Tìm Kiếm */}
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 h-12 rounded-lg shadow-md">
                    Tìm kiếm
                </Button>
            </div>
            <div className="grid grid-cols-3 md:flex gap-2">

                {/* Bộ lọc nâng cao */}
                <Button variant="outline" className="flex items-center gap-2 px-4 h-12 border-gray-300 hover:border-gray-500 transition">
                    <Filter className="w-5 h-5 text-gray-600" /> Lọc
                </Button>

                {/* Dropdown Loại nhà đất */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            className="flex items-center gap-2 px-4 h-12 border-gray-300 hover:border-gray-500 transition"
                        >
                            Loại nhà đất <ChevronDown className="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        <DropdownMenuItem>Căn hộ</DropdownMenuItem>
                        <DropdownMenuItem>Nhà riêng</DropdownMenuItem>
                        <DropdownMenuItem>Biệt thự</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Dropdown Mức giá */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            className="flex items-center gap-2 px-4 h-12 border-gray-300 hover:border-gray-500 transition"
                        >
                            Mức giá <ChevronDown className="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        <DropdownMenuItem>Dưới 1 tỷ</DropdownMenuItem>
                        <DropdownMenuItem>1 - 3 tỷ</DropdownMenuItem>
                        <DropdownMenuItem>Trên 3 tỷ</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Tin xác thực */}
                <div className="flex items-center gap-2 px-4 py-2 border rounded-lg border-gray-300 hover:border-gray-500 transition cursor-pointer">
                    <ShieldCheck className="text-green-600 w-5 h-5" />
                    <span className="text-sm font-medium">Tin xác thực</span>
                    <Switch checked={verified} onCheckedChange={setVerified} />
                </div>

                {/* Môi giới chuyên nghiệp */}
                <div className="col-span-2 flex items-center gap-2 px-4 py-2 border rounded-lg border-gray-300 hover:border-gray-500 transition cursor-pointer">
                    <Medal className="text-blue-500 w-5 h-5" />
                    <span className="text-sm font-medium">Môi giới chuyên nghiệp</span>
                    <Switch checked={professional} onCheckedChange={setProfessional} />
                </div>
            </div>
        </div>
    );
}
