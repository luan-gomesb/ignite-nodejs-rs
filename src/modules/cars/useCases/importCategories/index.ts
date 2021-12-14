import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';
import { ImportCategoriesController } from './ImportCategoriesController';

export default (): ImportCategoriesController => {
  const categoryRepository = new CategoryRepository();
  const importCategoriesUseCase = new ImportCategoriesUseCase(categoryRepository);
  const importCategoriesController = new ImportCategoriesController(importCategoriesUseCase);
  return importCategoriesController;
}