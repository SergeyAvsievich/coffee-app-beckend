import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { ILoggerService } from '../logger/logger.interface';
import { TYPES } from '../types';
import { BaseController } from '../common/base.controller';
import { HTTPError } from '../errors/http-error.class';
import { ICoffeeController } from './coffee.controller.interface';

@injectable()
export class CoffeeController extends BaseController implements ICoffeeController {
	constructor(@inject(TYPES.ILoggerService) private loggerService: ILoggerService) {
		super(loggerService);
		this.bindRoutes([{ path: '/coffee', func: this.getCoffee, method: 'get' }]);
	}

	getCoffee(req: Request, res: Response, next: NextFunction): void {
		// if (req.params) {
		next(new HTTPError(400, 'Bad request', 'getCoffee'));
		// }
		// this.ok(res, 'Coffee')
	}
}
