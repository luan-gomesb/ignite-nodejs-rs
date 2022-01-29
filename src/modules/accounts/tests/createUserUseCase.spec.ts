import { UsersRepositoryTeste } from "../repositories/implementations/UsersRepositoryTeste";
import { CreateUserUseCase } from "../useCases/createUser/CreateUserUseCase";

let userRepository: UsersRepositoryTeste;
let createUserUseCase: CreateUserUseCase;
const user = { name: "Luan", username: "lng", password: "123456", email: "luangomesb@live.com", driver_license: "A" };
describe("CreateUserUseCase", () => {

  beforeAll(() => {
    userRepository = new UsersRepositoryTeste();
    createUserUseCase = new CreateUserUseCase(userRepository);
  });
  // it("List users before create expect contains 0 intens", () => {
  //   expect(userRepository.list().length).toBe(0);
  // });
  it("should be able to create a new User", async () => {

    await createUserUseCase.execute(user);
    const usuarios = await userRepository.list();
    // console.log(usuarios);
    expect(usuarios).toBeDefined();

  });

  it("List users after createUser expect to contains 1 item", async () => {
    const usuarios = await userRepository.list();
    expect(usuarios).toHaveLength(1);
  });


})