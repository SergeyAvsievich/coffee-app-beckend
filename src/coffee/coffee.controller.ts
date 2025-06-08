import { Response, Request, NextFunction } from "express";
import { BaseController } from "../common/base.controller";
import { LoggerService } from "../logger/logger.service";
import { HTTPError } from "../errors/http-error.class";

export class CoffeeController extends BaseController {
    constructor(logger: LoggerService) {
        super(logger);
        this.bindRoutes([
            { path: '/coffee', func: this.getCoffee, method: 'get' }
        ]);
    }

    getCoffee(req: Request, res: Response, next: NextFunction) {
        // if (req.params) {
        next(new HTTPError(400, 'Bad request', 'getCoffee'))
        // }
        // this.ok(res, 'Coffee')
    }
}