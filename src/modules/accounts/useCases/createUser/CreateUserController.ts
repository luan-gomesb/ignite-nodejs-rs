import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController {
  //recebe caso de uso por injecao para inversao de dependencia
  constructor(private createUserUseCase: CreateUserUseCase) { }

  //transforma dados da camada superior para o o objeto conhecido pelo dominio
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, password, email, driver_license } = request.body;
    await this.createUserUseCase.execute({ name, username, password, email, driver_license });
    return response.status(201).send();
  }
}
export { CreateUserController };

