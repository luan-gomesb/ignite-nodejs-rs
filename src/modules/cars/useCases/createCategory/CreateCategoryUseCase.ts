import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IResquest {
  name: string;
  description: string
}
/* 
[]- Definir tipo de retorno
[]- Alterar o retorno de Erro
[]- Acessar  o repositorio
[]-Retornar algo
*/
class CreateCategoryUseCase {
  //precisamos utilizar no serviço o Interface/contrato principal de repositório
  // assim, o serviço funcionara com qualquer classe que implemente a interface
  private catetoriesRepository: ICategoryRepository;
  //recebemos o repositorio para segui o principio da inversão de dependencia
  constructor(repositorio: ICategoryRepository) {
    this.catetoriesRepository = repositorio;
  }

  execute({ name, description }: IResquest): void {
    const categoryAlreadyExists = this.catetoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }
    this.catetoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase }