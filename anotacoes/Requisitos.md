# Requisitos

Sempre que vamos levantar os requisitos de um sistemas ou de uma funcionalidade,
Devemos saber 3 coisas principais
- **Requisitos Funcionais**
  - Funcionalidades que o sistema precisa ter
  - aquilo que o sistema ou requisito deve ser capas de fazer
- **Requisitos Não funcionais**
  - São requisitos que não estao ligados diretamente com a aplicação
    - Exemplos: qual banco de dados deve ser utilizado, Qual biblioteca utiliza
  - são coisas qu não interferem diretamente nas nossas regras e funcionalidades

- **Regras de Negocio**
  - São as regras por trás dos requisitos funcionais
    - Exemplos: Quais os campos obrigatorios, não podemos ter dados repetidos, data limite, etc
  - Regras que vão guiar e definir nossas funcionalidades


## Exemplo de requisito
**Cadastro de carro**
> **Requisitos Funcionais**
- Deve ser possível cadastrar um novo carro

> **Requisitos Não funcionais**
- Os dados devem ser salvos em um banco de dados

> **Regras de Negocio**
- O carro cadastrado precisa ter um license-pate
- Não deve ser possível cadastrar um carro com uma license-plate já existente.
- Não deve ser possível alterar a placa de um carro já cadastrado.
- o carro deve ser cadastrado com disponibilidade verdadeira por padrão
- Somente usuário com permissão de administrador pode cadastrar um carro
--- 
**Listagem de Carros**
> **Requisitos Funcionais**
- Deve ser possível listar os carros cadastrados

> **Requisitos Não funcionais**
- 
> **Regras de Negocio**
- Somente carros disponiveis podem ser listados
- Não deve ser necessário autenticação para listar os carros
---
**Listagem de Carros**
> **Requisitos Funcionais**
- Deve ser possível listar os carros cadastrados

> **Requisitos Não funcionais**
- 
> **Regras de Negocio**
- Somente carros disponiveis podem ser listados
- Não deve ser necessário autenticação para listar os carros