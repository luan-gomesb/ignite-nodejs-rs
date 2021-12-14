import Category from "../entities/Category";

/* Interface de repositorio de categoria
irá definir o contrato de repositório
*/
interface ICategoryRepository {
  findByName(name: string): Promise<Category>;
  getAll(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}
/* Interface para definir o contrato do objeto que iremos trafegar entre as camadas */
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export { ICategoryRepository, ICreateCategoryDTO };