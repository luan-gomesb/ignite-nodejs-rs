import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }
  async handle(request: Request, response: Response) {
    return response.json(await this.listCategoriesUseCase.execute());
  }
}
export { ListCategoriesController }