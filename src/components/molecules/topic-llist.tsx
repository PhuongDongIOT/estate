import Link from "next/link";
import { ArrowRight } from "lucide-react";

type TopicListProps = {
  topics: string[];
};

export default function TopicList({ topics }: TopicListProps) {
  return (
    <div className="w-full max-w-xs p-4 bg-white">
      <h3 className="text-sm font-bold text-gray-900 mb-4 border-b pb-2">Chủ đề nổi bật</h3>
      <ul className="space-y-1">
        {topics.map((topic, index) => (
          <li key={index}>
            <Link
              href="#"
              className="text-sm text-gray-700 hover:text-blue-600 flex items-center gap-2 transition-all duration-300 transform hover:translate-x-1 px-2 py-1 rounded-md hover:bg-blue-100"
            >
              {topic}
              <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
