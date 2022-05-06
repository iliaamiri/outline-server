import express, {Response, Request, NextFunction} from 'express';
import cors from 'cors';
import { corsOptions } from '../config/cors';

const router = express.Router(); // general router
const apiRouter = express.Router();

router.use(cors(corsOptions));
router.use(express.json());

const apiPrefix = '/api';

router.use(apiPrefix, apiRouter);

import accessKeyRoutes from "./api/accessKey.routes";
apiRouter.use('/keys', accessKeyRoutes);

import swaggerUi from "swagger-ui-express";
const { default: swaggerDocument } = await import('../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

/*
* ///////////// Importing Exceptions /////////////
* */
import RouteException from '../core/exceptions/RouteException';
import ApiError from "../core/ApiError";

// Route doesn't exist (404)
router.use((req: Request, res: Response, next: NextFunction) => {
    throw new RouteException("ROUTE_DOES_NOT_EXIST");
});

// centralized error handling via middleware.
router.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
    console.log("Exception: ", err);

    res.status(err.httpCustomStatusCode || 500);

    delete err.httpCustomStatusCode;

    res.json({
        status: false,
        error: err
    });

});

export default router;