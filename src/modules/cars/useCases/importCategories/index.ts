import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';
import { ImportCategoriesController } from './ImportCategoriesController';

const categoryRepository = CategoryRepository.getInstance();
const importCategoriesUseCase = new ImportCategoriesUseCase(categoryRepository);
const importCategoriesController = new ImportCategoriesController(importCategoriesUseCase);
export { importCategoriesController };