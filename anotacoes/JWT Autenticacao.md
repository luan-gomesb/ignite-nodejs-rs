# JWT - Json Web Token

Com o JWT, vamos gerar um token para o usuário que utilizará nosso sistema, para garantir a segurança dos nossos dados.

O token garante que o usuário está autenticado, permitindo atribuirmos permissão para o mesmo.

## Estrutura
O token é dividide em 3 parte
#### Header - ALGORITHM & TOKEN TYPE
  - ALGORITHM
    Guarda a informação do algoritmo do hash que vamos utilizar
  - TOKEN TYPE
    Indica tipo que estamos utilizando que é o proprio JWT

HEADER:
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

#### Payload - DATA
  - Objeto com informações que desejamos guardar no token.
  - É importante que não coloquemos dados criticos, como senhas, mas podemos colocar nome de usuario, email e outras informações que podem ser visualizadas.

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```

#### VERIFY SIGNATURE
 Composto pelo encode do header e do payload

```js
 HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  'minha-senha-256bit'
) 
```
A função HMACSHA256 retornara nosso token, com todas as nossas informações e criptografa numa unica string.
Cada parte do nosso token fica separado por '.'

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
Kj2xlUonaqP5R41lgawuKxmwR7HYRQiPc_OeZ3b0AiU
```

## implementando no nosso projeto
   Vamos utilizar a lib jsonwebtoken no nosso projeto para nos auxiliar na criação dos token dos nossoa usuários

```
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D
```
