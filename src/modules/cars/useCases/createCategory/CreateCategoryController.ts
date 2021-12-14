/* Nosso controle irá receber os dados da rota e implementará a criação da categoria
assim nossta rota, execute apenas sua função */
import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  //receberemos o usecase/serviço que o controller irá utilizar
  private createCategoryUseCase: CreateCategoryUseCase;
  constructor(createCategoryUseCase: CreateCategoryUseCase) {
    this.createCategoryUseCase = createCategoryUseCase;
  }

  /* Receberemos os parametros do router */
  handle(request: Request, response: Response) {
    const { name, description } = request.body;
    this.createCategoryUseCase.execute({ name, description })
    return response.status(201).send();
  }
}

export { CreateCategoryController };