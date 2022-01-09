import { UsersRepositoryTeste } from "../../src/modules/accounts/repositories/implementations/UsersRepositoryTeste";
import { CreateUserUseCase } from "../../src/modules/accounts/useCases/createUser/CreateUserUseCase";

describe("createCategoryUseCase", () => {
  const userRepository = new UsersRepositoryTeste();
  const createUserUseCase = new CreateUserUseCase(userRepository);
  it("List users before create expect contains 0 intens", () => {
    expect(userRepository.list().length).toBe(0);
  });
  it("CreateUserUserCase", () => {
    const user = { name: "Luan", username: "lng", password: "123456", email: "luangomesb@live.com", driver_license: "A" };
    createUserUseCase.execute(user).then(a => {
    });
    expect(userRepository.list().length).toBe(1);
  });

  it("List users after createUser expet to contains 1 item", () => {
    expect(userRepository.list().length).toBe(1);
  });

})