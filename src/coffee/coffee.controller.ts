import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { ILoggerService } from '../logger/logger.interface';
import { TYPES } from '../types';
import { BaseController } from '../common/base.controller';
import { HTTPError } from '../errors/http-error.class';
import { ICoffeeController } from './coffee.controller.interface';
import { CoffeeDto } from './dto/coffee.dto';
import { ICoffeeService } from './coffee.service,interface';
import { ValidateMiddleware } from 'src/common/validate.middleware';

@injectable()
export class CoffeeController extends BaseController implements ICoffeeController {
	constructor(
		@inject(TYPES.ILoggerService) private loggerService: ILoggerService,
		@inject(TYPES.ICoffeeService) private coffeeService: ICoffeeService,
	) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/coffee',
				func: this.getCoffee,
				method: 'get',
				middwares: [new ValidateMiddleware(CoffeeDto)],
			},
		]);
	}

	async getCoffee(
		req: Request,
		res: Response<{}, {}, CoffeeDto>,
		next: NextFunction,
	): Promise<void> {
		const result = await this.coffeeService.getCoffee(req.params);
		if (!result) {
			return next(new HTTPError(400, 'Bad request', 'getCoffee'));
		}
		this.ok(res, result);
		// }
	}
}
