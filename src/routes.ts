import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryControllers";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";
import { CreateMovieController } from "./controllers/CreateMovieController";
import { GetAllMoviesController } from "./controllers/GetAllMoviesController";

const routes = Router();

routes.get("/movies", new GetAllMoviesController().handle);
routes.post("/movies", new CreateMovieController().handle);

routes.get("/categories", new GetAllCategoriesController().handle);
routes.post("/categories", new CreateCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);

export { routes };
