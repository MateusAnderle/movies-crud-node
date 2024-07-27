import prisma from "../lib/db/prisma";

export class GetAllMoviesService {
  async execute() {
    const movies = await prisma.movie.findMany({
      include: {
        category: true,
      },
    });
    return movies;
  }
}
