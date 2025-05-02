"use client";

import VercelTabs from "@/components/organims/vercel-tabs";

const image = "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080"

const newsArticles = [
    {
        title: "Phó TGĐ Batdongsan.com.vn: Ngân hàng hỗ trợ cho vay đến 80% Phó TGĐ Batdongsan.com.vn: Ngân hàng hỗ trợ cho vay đến 80%...",
        image: image,
    },
    {
        title: "VNDirect bất ngờ đòi tiền Bkav Pro của ông Nguyễn Tử Quảng liên quan đến...",
        image: image,
    },
    {
        title: "Bi kịch 'lời nguyền tuổi 35' ở Trung Quốc: Đến lao công cũng phải là người...",
        image: image,
    },
    {
        title: "Sức mạnh tuổi 94 của Warren Buffett: Berkshire Hathaway đã nộp tổng cộng...",
        image: image,
    },
    {
        title: "Sức mạnh tuổi 94 của Warren Buffett: Berkshire Hathaway đã nộp tổng cộng...",
        image: image,
    },
    {
        title: "Sức mạnh tuổi 94 của Warren Buffett: Berkshire Hathaway đã nộp tổng cộng...",
        image: image,
    },
    {
        title: "Sức mạnh tuổi 94 của Warren Buffett: Berkshire Hathaway đã nộp tổng cộng...",
        image: image,
    },
    {
        title: "Sức mạnh tuổi 94 của Warren Buffett: Berkshire Hathaway đã nộp tổng cộng...",
        image: image,
    },
    {
        title: "Sức mạnh tuổi 94 của Warren Buffett: Berkshire Hathaway đã nộp tổng cộng...",
        image: image,
    },
    {
        title: "Sức mạnh tuổi 94 của Warren Buffett: Berkshire Hathaway đã nộp tổng cộng...",
        image: image,
    },
];

const tabs = [
    { id: "overview", label: "Overview" },
    { id: "integrations", label: "Integrations" },
    { id: "activity", label: "Activity" },
    { id: "domains", label: "Domains" }
]

export default function RealEstateNews() {
    return (
        <>
            <div className="mb-4">
                <VercelTabs
                    tabs={tabs}
                    onTabChange={(tabId) => console.log(`Tab changed to: ${tabId}`)}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid grid-cols-2 gap-4">
                    {newsArticles.slice(0, 3).map((article, index) => (
                        <div key={index} className={index === 0 ? "col-span-2" : ""}>
                            <img
                                src={article.image}
                                alt={article.title}
                                className={index === 0 ? "w-full h-60 rounded-md object-cover" : "w-full h-32 rounded-md object-cover"}
                            />
                            <p className="mt-1 text-sm font-medium text-gray-800 line-clamp-3">{article.title}</p>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-2">
                    {newsArticles.map((article, index) => (
                        <div className="border-b">
                            <div key={index} className="grid grid-cols-3 gap-2">
                                <div className="col-span-2">
                                    <div className="flex gap-2 items-center mb-2">
                                        <div className="font-medium border border-gray-300 text-xs px-2 py-1">Blogs</div>
                                        <p className="text-xs text-gray-400">April 16,2020</p>
                                    </div>
                                    <p className="w-full text-sm font-medium text-gray-800 line-clamp-2">{article.title}</p>
                                </div>
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-20 h-20 rounded-md object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </>
    );
}
