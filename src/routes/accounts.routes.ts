import express, { Request, Response, Router } from "express";
import createUserController from "../modules/accounts/useCases/createUser";

const accountsRouter = Router();
accountsRouter.use(express.json());

accountsRouter.get('/', (resquest: Request, response: Response) => {
  return response.send("/accounts funcionando");

});

accountsRouter.post('/', (resquest: Request, response: Response) => {
  createUserController().handle(resquest, response);
});
export { accountsRouter }