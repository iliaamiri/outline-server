// import Witcher from './init';

import { sessionOptions } from './config/session';
import { corsOptions } from './config/cors';

import session from 'express-session';

import express from 'express';
const app = express();

import * as SwaggerUI from "swagger-ui-dist";
const pathToSwaggerUi = SwaggerUI.absolutePath();

import cors from 'cors';

app.use(express.static(pathToSwaggerUi));
app.set('trust proxy', 1);
app.use(session(sessionOptions));
app.use(cors(corsOptions));
app.use(express.json());

import routes from './routes/index';
app.use('/', routes);

export default app;
