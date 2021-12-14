import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

//mudamos para singleston
// const categoriesRepository = new CatetoryRepository();
export default (): CreateCategoryController => {
  const categoriesRepository = new CategoryRepository();

  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

  const createCategoryController = new CreateCategoryController(createCategoryUseCase);

  return createCategoryController;
}


/* Para retirar a isolar ainda mais as responsabilidades
Retiramos do router a função de definir quem era o repositorios e de buscar o use case que será usado no controller
Então, o index da pasta use case será usada no import, disponibilizando o nosso controller já instanciado, com o repositorio definido, também exporter o repositorio para posder fazer a consulta
Como exportamos um controller e um repositório já criado, quando importamos no routes basta usar o método desejado

*/