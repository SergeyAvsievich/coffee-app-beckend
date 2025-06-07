import { Response, Request } from "express";
import { BaseController } from "../common/base.controller";
import { LoggerService } from "../logger/logger.service";

export class CoffeeController extends BaseController {
    constructor(logger: LoggerService) {
        super(logger);
        this.bindRoutes([
            { path: '/coffee', func: this.getCoffee, method: 'get' }
        ]);
    }

    getCoffee(req: Request, res: Response) {
        this.ok(res, 'Coffee');
    }
}