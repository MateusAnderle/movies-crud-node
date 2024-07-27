import { Category } from "@prisma/client";
import prisma from "../lib/db/prisma";

type CategoryUpdateRequest = {
  id: string;
  name: string;
  description: string;
};

export class UpdateCategoryService {
  async execute({
    id,
    name,
    description,
  }: CategoryUpdateRequest): Promise<Category | Error> {
    const categoryExists = await prisma.category.findFirst({
      where: { id },
    });

    if (!categoryExists) {
      return new Error("Category does not exist");
    }

    const updateCategory = await prisma.category.update({
      where: { id },
      data: {
        name,
        description,
      },
    });

    return updateCategory;
  }
}
