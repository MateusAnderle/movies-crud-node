import { Category } from "@prisma/client";
import prisma from "../lib/db/prisma";

type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  async execute({
    name,
    description,
  }: CategoryRequest): Promise<Category | Error> {
    const categoryExists = await prisma.category.findFirst({
      where: { name },
    });

    if (categoryExists) {
      return new Error("Category already registered");
    }

    const newCategory = await prisma.category.create({
      data: {
        name,
        description,
      },
    });

    return newCategory;
  }
}
