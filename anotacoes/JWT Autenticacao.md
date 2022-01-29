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

Vamos criar token JWT com o sign() da jsonwebtoken.
- Primeiro o payload - um objeto dados n]ao criticos que queremos guardar no token e trocar entre front e backend
- Segundo parametro é a palavra-chave secreta, geralmente, definimos uma md5 e colocarmos
14b49a0684f6447465087515882f77d8 - luan-gomes-ignite
  - Usaremos essa chave para verificar a existencia e validade do nosso token
- Terceiro é o nosso header. Além dos algorithm e type, podemos passar  outros dados referentes ao token como:
  - subject: recebe o id do usuario que vamos autenticar
  - expireIn: recebe o tempo de expiração
    - Aqui vamos colocar 1d para 1 dia
```ts
  const jwtoken = sign(
      {},
      "14b49a0684f6447465087515882f77d8",
      {
        subject: user.id,
        expiresIn: "1d"
      }
    )
```


## implementando no nosso projeto
Criamos uma caso de uso inicial para autenticação do nosso usuario, que retorna um token JWT
Com o caso de uso, criamos a rotapar autenticacao de usuario, que cria um token e retorna ser utilizados para acessar as rotas que necessitam de autenticação.
Vamos criar um middleware, que verificara o token e permitirá ou  não o avanço para a rota desejada

Agora que o usuario possui um token, que recebeu da nosssa aplicação no momento de autenticação, ele precisará passar esse token no header da chamada http.
O nosso middleare irá naalise esse token, sem esse token, ele não poderá avançar para as rotas.

O token, deve ser passado no header authorization.
Por padrão, o token JWT utiliza a autorização do tipo "bearer token";
Quando recebemos ela no request.header.authorization do express, ela sempre terá o seguinte formato "bearer hashToken"
exemplo
```
"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDM0OTM1MjEsImV4cCI6MTY0MzU3OTkyMSwic3ViIjoiMWJlNGY0MzktZWQ3NC00MDQxLWI5ZDMtOWIxOTEyYjY5MzdlIn0.B46-E-IGLl0KGe9S96i0AxhPCeZLkpJBw6vQAnn7lKc"

```
iremos ignorar a palavra bearer e anaisar a penas o token.
pode fazer um regex, replace, o que preferir para retirar a string.

Uma vez que temos o token, vamos verificar se é um token valido, utilizando a lib jsonwebtoken, com o método verify

O verify() irá receber:
- o Token que recebemos da requisição
- A palavra-chave secreta que utilizamos para criação do token, quando usamos o método sign

a função verifiy, lança um erro caso o token não seja valido, então, utiliza sempre dentro de um try-catch
````ts
  const [b, token] = auth.split(" ");
  try {
    const decodedToken = verify(token, "14b49a0684f6447465087515882f77d8");
  } catch (error) {
    throw new Error("Invalid Token!");
  }
````

Como oclocamos o id do usuario autenticado no token quando usamos o assign, na propriedade sub, reeberemos ele de volta na requisição e conseguiremos validar se o uruario é valido, se está ativo se tem permissão necessário, ou seja qual for a decisão que desejamos tomar.






