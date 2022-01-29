import { resolveConfig } from "prettier";
import Category from "../../entities/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../ICategoryRepository";

class CategoryRepositoryInMemory implements ICategoryRepository {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    var category = this.categories.find(({ name: categoryName }) => {
      return (categoryName === name);
    });
    return category;
  }

  async getAll(): Promise<Category[]> {
    return [...this.categories];
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category(name, description);
    this.categories.push(category);
  }

};
export { CategoryRepositoryInMemory };