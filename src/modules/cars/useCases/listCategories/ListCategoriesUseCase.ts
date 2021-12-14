import Category from "../../model/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {
  }

  execute(): Category[] {
    return this.categoryRepository.getAll()
  }

}
export { ListCategoriesUseCase };