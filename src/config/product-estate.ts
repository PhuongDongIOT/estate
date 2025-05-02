import type { Category, Subcategory } from "@/db/schema"

import { generateId } from "@/lib/id"

export type ProductConfig = typeof productConfig

export const productConfig = {
  categories: [
    {
      id: generateId(),
      name: "Nhà đất cho thuê",
      description: "The best skateboards for all levels of skaters.",
      image: "/images/categories/skateboard-one.webp",
      subcategories: [
        {
          id: generateId(),
          name: "Cho thuê căn hộ chung cư",
          description: "The board itself.",
        },
        {
          id: generateId(),
          name: "Cho thuê chung cư mini, căn hộ dịch vụ",
          description: "The wheels that go on the board.",
        },
        {
          id: generateId(),
          name: "Cho thuê nhà riêng",
          description: "The trucks that go on the board.",
        },
        {
          id: generateId(),
          name: "Cho thuê nhà biệt thự, liền kề",
          description: "The bearings that go in the wheels.",
        },
        {
          id: generateId(),
          name: "Cho thuê nhà mặt phố",
          description: "The griptape that goes on the board.",
        },
        {
          id: generateId(),
          name: "Cho thuê shophouse, nhà phố thương mại",
          description: "The hardware that goes on the board.",
        },
        {
          id: generateId(),
          name: "Cho thuê nhà trọ, phòng trọ",
          description: "The tools that go with the board.",
        },
        {
          id: generateId(),
          name: "Cho thuê nhà trọ, phòng trọ",
          description: "The tools that go with the board.",
        },
        {
          id: generateId(),
          name: "Cho thuê văn phòng",
          description: "The tools that go with the board.",
        },
        {
          id: generateId(),
          name: "Cho thuê, sang nhượng cửa hàng, ki ốt",
          description: "The tools that go with the board.",
        },
      ],
    },
    {
      id: generateId(),
      name: "Dự án",
      description: "Stylish and comfortable skateboarding clothing.",
      image: "/images/categories/clothing-one.webp",
      subcategories: [
        {
          id: generateId(),
          name: "Căn hộ chung cư",
          description: "Cool and comfy tees for effortless style.",
        },
        {
          id: generateId(),
          name: "Cao ốc văn phòng",
          description: "Cozy up in trendy hoodies.",
        },
        {
          id: generateId(),
          name: "Trung tâm thương mại",
          description: "Relaxed and stylish pants for everyday wear.",
        },
        {
          id: generateId(),
          name: "Khu đô thị mới",
          description: "Stay cool with casual and comfortable shorts.",
        },
        {
          id: generateId(),
          name: "Khu phức hợp",
          description: "Top off your look with stylish and laid-back hats.",
        },
      ],
    },
    {
      id: generateId(),
      name: "Tin tức",
      description: "Rad shoes for long skate sessions.",
      image: "/images/categories/shoes-one.webp",
      subcategories: [
        {
          id: generateId(),
          name: "Low Tops",
          description: "Rad low tops shoes for a stylish low-profile look.",
        },
        {
          id: generateId(),
          name: "High Tops",
          description: "Elevate your style with rad high top shoes.",
        },
        {
          id: generateId(),
          name: "Slip-ons",
          description: "Effortless style with rad slip-on shoes.",
        },
        {
          id: generateId(),
          name: "Pros",
          description: "Performance-driven rad shoes for the pros.",
        },
        {
          id: generateId(),
          name: "Classics",
          description: "Timeless style with rad classic shoes.",
        },
      ],
    },
    {
      id: generateId(),
      name: "Phân tích đánh giá",
      description:
        "The essential skateboarding accessories to keep you rolling.",
      image: "/images/categories/backpack-one.webp",
      subcategories: [
        {
          id: generateId(),
          name: "Skate Tools",
          description:
            "Essential tools for maintaining your skateboard, all rad.",
        },
        {
          id: generateId(),
          name: "Bushings",
          description: "Upgrade your ride with our rad selection of bushings.",
        },
        {
          id: generateId(),
          name: "Shock & Riser Pads",
          description:
            "Enhance your skateboard's performance with rad shock and riser pads.",
        },
        {
          id: generateId(),
          name: "Skate Rails",
          description:
            "Add creativity and style to your tricks with our rad skate rails.",
        },
        {
          id: generateId(),
          name: "Wax",
          description:
            "Keep your board gliding smoothly with our rad skate wax.",
        },
        {
          id: generateId(),
          name: "Socks",
          description: "Keep your feet comfy and stylish with our rad socks.",
        },
        {
          id: generateId(),
          name: "Backpacks",
          description: "Carry your gear in style with our rad backpacks.",
        },
      ],
    },
    {
        id: generateId(),
        name: "Môi giới",
        description:
          "The essential skateboarding accessories to keep you rolling.",
        image: "/images/categories/backpack-one.webp",
        subcategories: [],
    }
  ] satisfies ({
    subcategories: Omit<
      Subcategory,
      "slug" | "categoryId" | "createdAt" | "updatedAt"
    >[]
  } & Pick<Category, "id" | "name" | "description" | "image">)[],
}
