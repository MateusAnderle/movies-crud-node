import prisma from "../lib/db/prisma";

type CategoryRequest = {
  id: string;
};

export class DeleteCategoryService {
  async execute({ id }: CategoryRequest): Promise<undefined | Error> {
    const categoryExists = await prisma.category.findFirst({
      where: { id },
    });

    if (!categoryExists) {
      return new Error("Category not registered");
    }

    await prisma.category.delete({
      where: { id },
    });
  }
}
