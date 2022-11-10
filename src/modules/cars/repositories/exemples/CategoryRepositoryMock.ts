import Category from "../../entities/Category"
import { ICategoryRepository, ICreateCategoryDTO } from "../ICategoryRepository";

/* REPOSITORIO DE CATEGORIA SINGLETON */
class CategoryRepositoryMock implements ICategoryRepository {

  // GUARDARA A INSTANCIA DA CLASSE
  private static INSTANCE: ICategoryRepository;

  private categories: Category[];
  //construtur da classe privado para somente a propria classe poder fazer uma instancia
  private constructor() {
    this.categories = [];
  }
  async getAll(): Promise<Category[]> {
    return this.categories;
  }
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category(name, description);
    this.categories.push(category);
  }

  async findByName(name: string): Promise<Category> {
    return this.categories.find((category) => category.name === name);
  }

  static getInstance(): ICategoryRepository {
    //verifica se já temos instancia
    if (!this.INSTANCE) {
      this.INSTANCE = new CategoryRepositoryMock();
    }
    //retorna a instancia estatica
    return this.INSTANCE;
  }
}

export { CategoryRepositoryMock }