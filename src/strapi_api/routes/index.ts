import express from 'express';
const router = express.Router();

/*
* ///////////// Importing Exceptions /////////////
* */
import RouteException from '../core/exceptions/RouteException';
import ApiError from "../core/ApiError";
import {Response, Request} from "express";

// Route doesn't exist (404)
router.use(() => {
    throw new RouteException("ROUTE_DOES_NOT_EXIST");
});

// centralized error handling via middleware.
router.use((err: ApiError, req: Request, res: Response) => {
    console.log(err);

    res.status(err.httpCustomStatusCode || 500);

    delete err.httpCustomStatusCode;

    res.json({
        status: false,
        error: err
    });

});

export default router;