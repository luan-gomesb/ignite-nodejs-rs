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

# simulando Repositórios

Como nosso objetivo é testar apenas as nossas regras de negocio no caso de uso, vamos simular o repositorio, assim não precisaremos acessar o banco de dados