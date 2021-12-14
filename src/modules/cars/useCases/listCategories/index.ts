import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { ListCategoriesController } from "./ListCategoriesController";

//exporta o controller montado
export default (): ListCategoriesController => {
  const categoryRepository = new CategoryRepository();
  const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
  const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);
  return listCategoriesController;
}
