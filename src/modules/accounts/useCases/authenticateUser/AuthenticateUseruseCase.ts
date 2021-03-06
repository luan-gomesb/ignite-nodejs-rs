import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import AppError from "../../../../errors/AppErrors";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  token: string,
  user: { name: string, email: string };
}
function UserUnauthorizedError() {
  return new AppError("Email or Password Incorrect", 401);
}


class AuthenticateUserUseCase {
  constructor(private repository: IUsersRepository) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    //verifica se temos usuario
    const user = await this.repository.findByEmail(email);
    if (!user) {
      throw UserUnauthorizedError();
    }
    //verifica se senha esta correta
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw UserUnauthorizedError();
    }
    const jwtoken = sign({}, "14b49a0684f6447465087515882f77d8", {
      subject: user.id,
      expiresIn: "1d"
    })
    const { name: userName, email: userEmail } = user;
    return {
      user: { name: userName, email: userEmail },
      token: jwtoken
    }
  }
};
export { AuthenticateUserUseCase }