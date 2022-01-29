import { UsersRepository } from "../../repositories/implementations/UsersRepository"
import { UsersRepositoryTeste } from "../../repositories/implementations/UsersRepositoryTeste";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export default (): AuthenticateUserController => {
  // const userRepository = new UsersRepository();
  const userRepository = UsersRepositoryTeste.getInstance();
  const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);
  const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);

  return authenticateUserController;
}