/* Repositorio ira implementar a interface de repositorio */

import Category from "../../model/Category";
import Specification from "../../model/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];
  constructor() {
    this.specifications = [];
  }
  all(): Category[] {
    return this.specifications;
  }
  create({ name, description }: ICreateSpecificationDTO): void {
    const newSpecification = new Specification(name, description);
    this.specifications.push(newSpecification);
  }

}

export { SpecificationRepository };