
import { Router } from 'express'
import { accountsRouter } from './accounts.routes';
import { authenticateRoutes } from './authenticate.routes';
import { categoriesRouter } from './categories.routes'
import { specificationRouter } from './specifications.routes';
const routers = Router();
routers.get("/", (r, rr) => {
  rr.send('Me! ola');
})
//declarando todas de categoria criado como Routes() do express
routers.use('/categories', categoriesRouter);
//rotas de specification
routers.use('/specifications', specificationRouter);
routers.use('/accounts', accountsRouter);
routers.use(authenticateRoutes);

export { routers };

/* Importamos todas as rotas para esse arquivos e juntamos num objeto apenas
Assim, o serve precisa fazer apenas um import e terá todos as rotas do aplicação
Facilitando a leitura so serve e melhoor ainda, isolando responsabilidades 

at*/