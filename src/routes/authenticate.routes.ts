import express, { Request, Response, Router } from "express";
import authenticateUserController from "../modules/accounts/useCases/authenticateUser";

const authenticateRoutes = Router();
authenticateRoutes.use(express.json());
//chama o controller
authenticateRoutes.post("/session", (resquest: Request, response: Response) => {
  authenticateUserController().handle(resquest, response);
});
export { authenticateRoutes }