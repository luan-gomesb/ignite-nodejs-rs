import Category from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {
  }

  async execute(): Promise<Category[]> {
    return await this.categoryRepository.getAll()
  }

}
export { ListCategoriesUseCase };