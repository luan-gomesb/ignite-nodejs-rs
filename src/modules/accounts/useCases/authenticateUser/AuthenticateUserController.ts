import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) { }
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;
      const token = await this.authenticateUserUseCase.execute({ email, password });
      return response.status(200).json(token);
    } catch (error) {
      return response.status(error.statusCode).json({ error: error.message });
    }
  }
}
export { AuthenticateUserController };