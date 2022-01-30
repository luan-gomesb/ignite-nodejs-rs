# Importações Typescript modules
Como utilizamos varios arquivos e pasta, temos que importar bastante arquivos e faer muitas importações.

O typescript nos auxilia na importação de arquivos, possibilitando a criação de alias ou atalhos para as principais pastas do nosso sistema.

Para isso, vamos adicionar duas ocnfigurações ao nosso arquivo de configura~çao do typescript no projeto.

- BaseUrl  -> indica para o typescript onde está nossa pasta principal do rojeto, onde vamos colocar o mdulo, e sempre inicia a procula a partir da pasta especificada
```js
"baseUrl": "./src"
```
Agore sempre que vamos importar algo, nosssa ide ira sugestionar a partir da pasta src.
- Paths -> Um objeto com uma lista de alias para pastas especificas a partir da baseUrl, para que possamos criar atalhos para nossos modulos mais utilizamos, ajudando no momento da iportação

```js
"paths": {
  //Alias       : Caminho a partir da baseUrl 
  "@modules/*" : ["modules/*"],
  "@errors/*": ["errors/*"]
  //...
}
```

Agora com nossoa alias, podemos importar mais rapidamente sem nos perder
exemplo:
```ts
/* antigo */
import AppError from "../../../errors/AppErrors";
/* novo */
import AppError from "@errors/AppErrors";
```
Agora, além de precisar escrever menos, o alias nos ajuda a saber exatamente o que estamos importando.
# Ts-node-dev
O ts node dev não entende os alias que criamos nos paths, e por isso ira apresentar erros, pois não consgue encontrar o modulo.
Para resolver isso, precismos instalar uma lib no nosso projeto.
- tsconfig-paths -> irá traduzir para o ts-node-dev os nossos alias, e tudo funcionara normalmente.
Adicionamos como dependencia de desenvolvimento
```bash
yarn add tsconfig-paths -D
```

depois precisamos adicionar como parametro ao nosso comando no package.json

iremos adicionar o parametro "-r tsconfig-paths/register"
```json
//antes
"dev": "ts-node-dev --inspect --transpile-only --poll --ignore-watch node_modules --respawn src/server.ts"
//depois
"dev": "ts-node-dev -r tsconfig-paths/register --inspect --transpile-only --poll --ignore-watch node_modules --respawn src/server.ts",

// a mesma coisa no typeorm
"typeorm": "ts-node-dev -r tsconfig-paths/register ./node_modules/typeorm/cli",
```

# Jest 
O jest também não entende os alias que criamos, e ntm não consegue achar o arquivos para importar