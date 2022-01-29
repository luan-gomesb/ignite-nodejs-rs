import { CategoryRepositoryInMemory } from "../repositories/implementations/CategoryRepositoryInMemory"
import { CreateCategoryUseCase } from "../useCases/createCategory/CreateCategoryUseCase";

let createCategory: CreateCategoryUseCase;
let categoryRepository: CategoryRepositoryInMemory;

describe("Create Category", () => {
  //antes de cada teste, vamos instancias um novo repositorio e um novo caso de uso
  beforeAll(() => {
    categoryRepository = new CategoryRepositoryInMemory();
    createCategory = new CreateCategoryUseCase(categoryRepository);
  })

  it("should be able to create a new Category", async () => {
    const testCategory = { name: "new Category", description: "Test Category im memory" };
    await createCategory.execute(testCategory);
    const createdCategory = await categoryRepository.findByName(testCategory.name)
    const categories = await categoryRepository.getAll();
    expect(categories).toHaveLength(1);
    expect(createdCategory).toHaveProperty('id');
  })

  it("should not be able to create a Category with an existent name", async () => {
    expect(async () => {
      const testCategory = { name: "new Category", description: "Test Category im memory" };
      await createCategory.execute(testCategory);
      await createCategory.execute(testCategory);
    }).rejects.toThrowError("Category already exists!");
  })

})