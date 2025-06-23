import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { ILoggerService } from '../logger/logger.interface';
import { TYPES } from '../types';
import { BaseController } from '../common/base.controller';
import { HTTPError } from '../errors/http-error.class';
import { ICoffeeController } from './coffee.controller.interface';
import { ICoffeeService } from './coffee.service.interface';

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
				// middwares: [new ValidateMiddleware(CoffeeDto)],
			},
			{
				path: '/coffee/:id',
				func: this.getCoffeeById,
				method: 'get',
				// middwares: [new ValidateMiddleware(CoffeeDto)],
			},
			{
				path: '/coffee',
				func: this.createCoffee,
				method: 'post',
				// middwares: [new ValidateMiddleware(CoffeeDto)],
			},
			{
				path: '/coffee/:id',
				func: this.deleteCoffee,
				method: 'delete',
				// middwares: [new ValidateMiddleware(CoffeeDto)],
			},
			{
				path: '/coffee/:id',
				func: this.updateCoffee,
				method: 'put',
				// middwares: [new ValidateMiddleware(CoffeeDto)],
			},
		]);
	}

	async getCoffee(req: Request, res: Response, next: NextFunction): Promise<void> {
		const page = req.query.page ? +req.query.page : 1;
		const perPage = req.query.perPage ? +req.query.perPage : 10;
		const search = req.query.search ? req.query.search : '';
		const result = await this.coffeeService.getCoffee(page, perPage, search as string);
		if (!result) {
			return next(new HTTPError(400, 'Bad request', 'getCoffee'));
		}
		this.ok(res, result);
	}

	async getCoffeeById(req: Request, res: Response, next: NextFunction): Promise<void> {
		const result = await this.coffeeService.getCoffeeById(+req.params.id);
		if (!result) {
			return next(new HTTPError(400, 'Bad request', 'getCoffeeById'));
		}
		this.ok(res, result);
	}

	async createCoffee(req: Request, res: Response, next: NextFunction): Promise<void> {
		const result = await this.coffeeService.create(req.body);
		if (!result) {
			return next(new HTTPError(400, 'Bad request', 'createCoffee'));
		}
		this.ok(res, result);
	}

	async deleteCoffee(req: Request, res: Response, next: NextFunction): Promise<void> {
		const result = await this.coffeeService.delete(+req.params.id);
		if (!result) {
			return next(new HTTPError(400, 'Bad request', 'deleteCoffee'));
		}
		this.ok(res, result);
	}

	async updateCoffee(req: Request, res: Response, next: NextFunction): Promise<void> {
		const result = await this.coffeeService.update(+req.params.id, req.body);
		if (!result) {
			return next(new HTTPError(400, 'Bad request', 'updateCoffee'));
		}
		this.ok(res, result);
	}
}
