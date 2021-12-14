import { ICreateSpecificationDTO, ISpecificationRepository } from "../repositories/ISpecificationRepository";

class CreateSpecificationService {
  private repositorio: ISpecificationRepository;

  constructor(specificationRepository: ISpecificationRepository) {
    this.repositorio = specificationRepository;
  }

  execute({ name, description }: ICreateSpecificationDTO) {
    this.repositorio.create({ name, description })
  }

}

export { CreateSpecificationService };