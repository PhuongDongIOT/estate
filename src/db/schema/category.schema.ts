import { z } from "zod";

export const CategorySchema = z.object({
    id: z.string().min(6).max(30).optional(),
    name: z.string().min(3).max(100),
    slug: z.string().min(3).max(100),
    image: z.string().url().optional(),
    description: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
});
