import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';
//importa banco de dados
import "./database";
import { routers } from './routes';


const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routers);

app.listen("3333");