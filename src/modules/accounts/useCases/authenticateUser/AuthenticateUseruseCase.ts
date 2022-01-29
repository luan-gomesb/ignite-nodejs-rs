import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}
export default class AuthenticateUserUseCase {
  constructor(private repository: IUsersRepository) { }

  async execute({ email, password }: IRequest): Promise<void> {

  }
};
