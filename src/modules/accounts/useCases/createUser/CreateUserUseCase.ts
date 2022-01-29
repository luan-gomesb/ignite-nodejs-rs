import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../entities/User";
import { hash } from "bcrypt";


class CreateUserUseCase {

  constructor(private repository: IUsersRepository) { }

  async execute({ name, password, email, username, driver_license }: ICreateUserDTO): Promise<void> {

    const passwordHash = await hash(password, 8);
    if (!passwordHash) {
      throw ("bcrypt error");
    }
    return await this.repository.create({ name, password: passwordHash, email, username, driver_license })


  }
}

export { CreateUserUseCase };