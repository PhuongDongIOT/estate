import Image from "next/image";
import { Card } from "@/components/ui/card";

interface ProfileCardProps {
    image: string;
    name: string;
    title: string;
    description: string;
    linkedinUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    image,
    name,
    title,
    description,
    linkedinUrl,
}) => {
    return (
        <Card className="max-w-sm p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl text-white shadow-lg text-center">
            <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full border-1 border-white shadow-md overflow-hidden flex items-center">
                    <Image
                        src={image}
                        alt={name}
                        width={80}
                        height={80}
                        className="h-full object-cover"
                    />
                </div>
            </div>
            <h2 className="text-xl font-bold mt-2">{name}</h2>
            <p className="text-sm text-gray-200 line-clamp-2">{title}</p>
            <p className="text-sm mt-1 line-clamp-3">{description}</p>
            <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-white text-blue-600 font-semibold px-3 py-1 rounded-lg shadow-md hover:bg-gray-200 transition"
            >
                <span className="flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                    >
                        <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.61c-1.14 0-2.07-.93-2.07-2.07s.93-2.07 2.07-2.07c1.15 0 2.08.93 2.08 2.07s-.93 2.07-2.08 2.07zM20.45 20.45h-3.56v-5.64c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98v5.74H9.28V9h3.41v1.56h.05c.48-.91 1.64-1.88 3.38-1.88 3.61 0 4.28 2.38 4.28 5.47v6.3z" />
                    </svg>
                    Connect
                </span>
            </a>
        </Card>
    );
};

export default ProfileCard;
