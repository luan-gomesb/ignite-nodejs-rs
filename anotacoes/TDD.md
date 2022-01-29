# testes TDD com jest

usamos describe para descrever um conjunto de testes.
Passamos uma descrição como parametro e uma função que conterá nossos testes

```ts
  describe("Create Category", () => {});
```
Desntro da nossa função, utilizamos it(), para cada teste que  desejamos declara.
semelhante ao describe, passamos a descrição e uma função, agora contendo a execução do teste

```ts
it("should be able to create a new Category", () => {});
```

## BeforeEach() e BeforeAll() 
O Jest disponibiliza duas funções, que nos auxiliam nos teste
- BeforeAll() -> Executa a função passada antes da execução do conjunto de testes.
- BeforeEach() - > Executa a função antes de cada teste

Usamos essas funções para nos auxiliar a instanciar objetos necessários e setar o teste antes da execução.
```ts
  beforeEach(() => {
    const createCategoryRepository = new CategoryRepositoryInMemory();
    const createCategory = new CreateCategoryUseCase(createCategoryRepository);
  })
```

## expect()
A função expect será executada dentro de cada teste para validar o mesmo.
Com ele, vamos testar se o resultado foi o esperado ou não.
Ele contém varias funções para nos auxiliar na verificação do resultado.

```ts
  it("should be able to create a new Category", async () => {
    //... teste
    const createdCategory = await categoryRepository.findByName(testCategory.name);
    //expect verificar se o objeto contém a propriedade id, utilizando o método toHaveProperty;
    expect(createdCategory).toHaveProperty('id');
  })
```
O expect também testa retorno de erros
Quando vamos forçar um erro, podemos passar um função para o expect e verificar se deu o erro que estamos esperando

```ts
  it("should not be able to create a Category with an existent name", async () => {
    expect(async () => {
      const testCategory = { name: "new Category", description: "Test Category im memory" };
      await createCategory.execute(testCategory);
      await createCategory.execute(testCategory);
    }).rejects.toThrowError("Category already exists!");
  })
```
Aqui, esperamos receber um erro "Category already exists!" pois estamos tentando criar uma categoria que já existe

# simulando Repositórios

Como nosso objetivo é testar apenas as nossas regras de negocio no caso de uso, vamos simular o repositorio, assim não precisaremos acessar o banco de dados
Esse repositorio guardaa os dados em memoria somente para executar o teste.