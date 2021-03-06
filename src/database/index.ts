import { createConnection, getConnectionOptions } from 'typeorm'
//configurações no arquivo ormconfig.json na raiz do app

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'database_ignite'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  createConnection({
    ...options
  });
});