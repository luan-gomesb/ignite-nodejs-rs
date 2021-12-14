import Specification from "../entities/Specification";

/* 
  Interface de repositorio de categoria
  Irá definir o contrato de repositório
*/
interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  all(): Specification[];
}
/* Interface para definir o contrato do objeto que iremos trafegar entre as camadas */
interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export { ISpecificationRepository, ICreateSpecificationDTO };