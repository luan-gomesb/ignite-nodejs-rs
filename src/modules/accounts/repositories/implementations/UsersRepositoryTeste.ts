import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";
/* Repositorio conexaõ com postgree utilizando typeorm */


class UsersRepositoryTeste implements IUsersRepository {
  /* cria variavel do tipo repositorios de usuario */
  private repository: User[] = [];
  static instance: UsersRepositoryTeste;
  private constructor() { }
  static getInstance() {
    if (!this.instance) {
      this.instance = new UsersRepositoryTeste();
    }
    return this.instance;
  }


  async create({ name, username, email, password, driver_license }: ICreateUserDTO): Promise<void> {
    // const { name, usename, email, password, driver_license } = user;
    const newUser = { name, username, email, password, driver_license };
    const user = new User();
    Object.assign(user, newUser);
    this.repository.push(user);
    return;
  }
  async list(): Promise<User[]> {
    return [...this.repository];
  }
  async findByEmail(email: string): Promise<User> {
    return this.repository.find((user) => user.email === email);
  }
  async findById(id: string): Promise<User> {
    return this.repository.find((user) => user.id === id);
  }

}

export { UsersRepositoryTeste };