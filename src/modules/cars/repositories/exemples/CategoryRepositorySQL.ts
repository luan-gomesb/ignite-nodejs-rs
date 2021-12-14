/* simularemos um repositorio que se conect com um banco SQL */
/* Para utilizar como repositorio de categoria, vamos implementar a interface de repositório */

import Category from "../../entities/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../ICategoryRepository";


class CategoryRepositorySQL implements ICategoryRepository {
  findByName(name: string): Category {
    throw new Error("Method not implemented.");
  }
  getAll(): Category[] {
    throw new Error("Method not implemented.");
  }
  create({ name, description }: ICreateCategoryDTO): void {
    throw new Error("Method not implemented.");
  }


}