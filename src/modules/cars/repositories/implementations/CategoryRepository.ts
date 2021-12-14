import { getRepository, Repository } from "typeorm";
import Category from "../../entities/Category"
import { ICategoryRepository, ICreateCategoryDTO } from "../ICategoryRepository";


/* REPOSITORIO DE CATEGORIA SINGLETON */
class CategoryRepository implements ICategoryRepository {

  private categoryDb: Repository<Category>;

  constructor() {
    this.categoryDb = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    //cria entidade com typeorm
    const newCategory = await this.categoryDb.create({ name, description });
    //salva entidade no bnaco de dados
    await this.categoryDb.save(newCategory);
  }

  async findByName(name: string): Promise<Category> {
    return await this.categoryDb.findOne({ name });
  }
  async getAll(): Promise<Category[]> {
    return await this.categoryDb.find();

  }





}

export { CategoryRepository }