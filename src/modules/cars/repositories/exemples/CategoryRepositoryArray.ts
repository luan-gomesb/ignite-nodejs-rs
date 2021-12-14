import Category from "../../entities/Category"
import { ICategoryRepository, ICreateCategoryDTO } from "../ICategoryRepository";

/* REPOSITORIO DE CATEGORIA SINGLETON */
class CategoryRepository implements ICategoryRepository {

  // GUARDARA A INSTANCIA DA CLASSE
  private static INSTANCE: CategoryRepository;

  private categories: Category[];
  //construtur da classe privado para somente a propria classe poder fazer uma instancia
  private constructor() {
    this.categories = [];
  }
  getAll(): Category[] {
    return this.categories;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category(name, description);
    this.categories.push(category);
  }

  findByName(name: string): Category {
    return this.categories.find((category) => category.name === name);
  }

  static getInstance(): CategoryRepository {
    //verifica se já temos instancia
    if (!this.INSTANCE) {
      this.INSTANCE = new CategoryRepository();
    }
    //retorna a instancia estatica
    return this.INSTANCE;
  }




}

export { CategoryRepository }