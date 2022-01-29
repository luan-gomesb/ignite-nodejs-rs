import { UsersRepositoryTeste } from "../repositories/implementations/UsersRepositoryTeste";
import { AuthenticateUserUseCase } from "../useCases/authenticateUser/AuthenticateUserUseCase";
import { CreateUserUseCase } from "../useCases/createUser/CreateUserUseCase";

let userRepository: UsersRepositoryTeste;
let createUserUseCase: CreateUserUseCase;
let authenticateUserUseCase: AuthenticateUserUseCase;
const user = { name: "Luan", username: "lng", password: "123456", email: "luangomesb@live.com", driver_license: "A" };
describe("authenticateUserUseCase ", () => {

  beforeAll(async () => {
    userRepository = new UsersRepositoryTeste();
    createUserUseCase = new CreateUserUseCase(userRepository);
    authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);
    await createUserUseCase.execute(user);
  });
  it("Expect to authenticate an user", async () => {
    const jwt = await authenticateUserUseCase.execute({ email: user.email, password: user.password });
    expect(jwt).toBeDefined();
  });
  it("Expect to not authenticate an user with incorrect Password", async () => {
    expect(async () => {
      const jwt = await authenticateUserUseCase.execute({ email: 'luangomesb@live.com', password: "1234569989" });
    }).rejects.toThrowError("Email or Password Incorrect");
  });
  it("Expect to not authenticate an user with incorrect Email", async () => {
    expect(async () => {
      const jwt = await authenticateUserUseCase.execute({ email: 'luan.gomesb@live.com', password: "123456" });
    }).rejects.toThrowError("Email or Password Incorrect");
  })

});