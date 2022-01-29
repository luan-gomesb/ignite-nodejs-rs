import express, { Request, Response, Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { UsersRepositoryTeste } from "../modules/accounts/repositories/implementations/UsersRepositoryTeste";
import createUserController from "../modules/accounts/useCases/createUser";

const accountsRouter = Router();
accountsRouter.use(express.json());

accountsRouter.get('/', ensureAuthenticated, async (resquest: Request, response: Response) => {
  const repository = UsersRepositoryTeste.getInstance();
  return response.json(await repository.list());

});

accountsRouter.post('/', (resquest: Request, response: Response) => {
  createUserController().handle(resquest, response);
});
export { accountsRouter }