import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create(user: ICreateUserDTO): Promise<void>;
  list(): Promise<User[]>;
}
export { IUsersRepository };