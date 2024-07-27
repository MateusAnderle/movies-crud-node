import prisma from "../lib/db/prisma";

export class GetAllCategoriesService {
  async execute() {
    const categories = await prisma.category.findMany();
    return categories;
  }
}
