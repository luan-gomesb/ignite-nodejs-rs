import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import AppError from "@errors/AppErrors";
import { UsersRepositoryTeste } from "@modules/accounts/repositories/implementations/UsersRepositoryTeste";

interface IToken {
  sub: string
}

function TokenMissingError() {
  return new AppError("Token missing!", 401);
}
function UserNotFoundError() {
  return new AppError("User Not Found", 401);
}

export const ensureAuthenticated = async (request: Request, response: Response, next: NextFunction) => {
  const auth = request.headers.authorization;
  if (!auth) throw TokenMissingError();

  const [b, token] = auth.split(" ");
  try {
    const { sub: id_user } = verify(token, "14b49a0684f6447465087515882f77d8") as IToken;
    const userRepository = UsersRepositoryTeste.getInstance();
    const user = await userRepository.findById(id_user);
    if (!user) {
      throw UserNotFoundError();
    }

  } catch (error) {
    return response.json({ error: error.message });
  }

  next();
};
