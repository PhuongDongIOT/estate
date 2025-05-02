"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordion";

const sections = [
  {
    title: "Toàn cảnh dự án",
    description:
      "Chào mừng quý vị đến với dự án X – Tuyệt tác kiến trúc hiện đại, nơi hội tụ những giá trị sống đỉnh cao ngay giữa lòng [địa điểm].",
  },
  {
    title: "Vị trí đắc địa",
    description:
      "Tọa lạc tại vị trí vàng của [khu vực], X kết nối linh hoạt đến trung tâm thành phố, sân bay, trường học, bệnh viện và hàng loạt tiện ích cao cấp khác.",
  },
  {
    title: "Tiện ích nội khu",
    description:
      "Mỗi ngày tại X là một kỳ nghỉ dưỡng với hồ bơi vô cực, vườn nhiệt đới, phòng gym hiện đại và không gian vui chơi trẻ em.",
  },
  {
    title: "Loại hình sản phẩm",
    description:
      "Dự án X có đa dạng sản phẩm, từ căn hộ cao cấp, biệt thự ven hồ đến shophouse thương mại sầm uất.",
  },
  {
    title: "Không gian sống",
    description:
      "Không gian sống tại X được thiết kế theo tiêu chuẩn quốc tế, tận dụng ánh sáng tự nhiên, đảm bảo sự thoáng đãng và riêng tư.",
  },
  {
    title: "Chuyên gia đánh giá",
    description:
      "Dự án X không chỉ là nơi đáng sống mà còn là cơ hội đầu tư hấp dẫn với giá trị gia tăng mạnh mẽ trong tương lai.",
  },
  {
    title: "Cơ hội đầu tư",
    description:
      "Cơ hội sở hữu bất động sản đẳng cấp tại X chưa bao giờ dễ dàng đến thế! Đặt chỗ ngay hôm nay để nhận ưu đãi hấp dẫn.",
  },
  {
    title: "Tổng thể dự án",
    description:
      "X – Nơi kiến tạo tương lai, khởi nguồn cuộc sống thịnh vượng. Liên hệ ngay để trở thành chủ nhân của bất động sản đắt giá nhất khu vực!",
  },
];

export default function RealEstateIntro() {
  return (
    <div className="text-black">
      <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
        {sections.map((section, index) => (
          <>
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition duration-300"></div> */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{section.title}</AccordionTrigger>
                <AccordionContent>
                  {section.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </>
        ))}
      </div>
    </div>
  );
}
