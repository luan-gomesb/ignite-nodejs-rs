import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";
/* Repositorio conexaõ com postgree utilizando typeorm */


class UsersRepository implements IUsersRepository {
  /* cria variavel do tipo repositorios de usuario */
  private repository: Repository<User>;
  constructor() {
    //instancia o repositorio
    this.repository = getRepository(User)
  }
  async list(): Promise<User[]> {
    return await this.repository.find();
  }
  async create(user: ICreateUserDTO): Promise<void> {
    const { name, username, email, password, driver_license } = user;
    const newUser = this.repository.create({ name, username, email, password, driver_license });
    await this.repository.save(newUser);
  }
  async findByEmail(email: string): Promise<User> {
    const users = await this.repository.find({ where: { email: email } });
    if (users.length) {
      return users[0];
    } else {
      return;
    }
  }
}

export { UsersRepository };