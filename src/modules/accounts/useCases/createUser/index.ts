import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { UsersRepositoryTeste } from "../../repositories/implementations/UsersRepositoryTeste";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";



/* Instanciar objetos necessarios para execucao do caso de uso */
export default (): CreateUserController => {
  /* intancia camada de service */
  const userRepository = new UsersRepositoryTeste();
  /* intancia caso de usso e injeta repositorio que é a dependencia */
  /* camada de dominio */
  const createUserUseCase = new CreateUserUseCase(userRepository);
  /* instancia controller adicionando caso de uso que é us a dependencia */
  const createUserController = new CreateUserController(createUserUseCase);
  return createUserController;
};