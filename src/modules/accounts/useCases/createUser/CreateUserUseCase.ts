import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../entities/User";

class CreateUserUseCase {

  constructor(private repository: IUsersRepository) { }


  async execute({ name, password, email, username, driver_license }: ICreateUserDTO): Promise<void> {
    return await this.repository.create({ name, password, email, username, driver_license })
  }
}

export { CreateUserUseCase };