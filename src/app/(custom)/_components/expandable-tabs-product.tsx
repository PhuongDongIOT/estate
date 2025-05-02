"use client";

import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { Mail } from "@/sections/mail/components/mail";
import { FileText, Lock, MailCheck, User } from "lucide-react";

const tabs = [
    { title: "Profile", icon: User },
    { title: "Messages", icon: MailCheck },
    { title: "Documents", icon: FileText },
    { title: "Privacy", icon: Lock },
];

const ExpandableTabsProduct = () => {
    return (
        <div className="flex">
            <ExpandableTabs
                tabs={tabs}
                activeColor="text-blue-500"
                className="border-blue-200 dark:border-blue-800"
            />
        </div>
    )
}

export default ExpandableTabsProduct;
