// import Witcher from './init';

import { sessionOptions } from './config/session';

import session from 'express-session';

import express from 'express';
const app = express();



// app.use(express.static(pathToSwaggerUi));
app.set('trust proxy', 1);
app.use(session(sessionOptions));

import routes from './routes/index';
app.use('/', routes);

export default app;
