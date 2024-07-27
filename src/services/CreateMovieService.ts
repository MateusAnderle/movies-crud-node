import { Movie } from "@prisma/client";
import prisma from "../lib/db/prisma";

type MovieRequest = {
  name: string;
  description: string;
  duration: number;
  category_id: string;
};

export class CreateMovieService {
  async execute({
    name,
    description,
    duration,
    category_id,
  }: MovieRequest): Promise<Movie | Error> {
    const movieExists = await prisma.movie.findFirst({
      where: { name },
    });

    const categoryExists = await prisma.category.findFirst({
      where: { id: category_id },
    });

    if (movieExists) {
      return new Error("Movie already registered");
    }

    const newMovie = await prisma.movie.create({
      data: {
        name,
        description,
        duration,
        categoryId: category_id,
      },
    });

    return newMovie;
  }
}
