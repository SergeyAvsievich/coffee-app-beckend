import express, { Express } from 'express';
import { Server } from 'http';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { ExeptionFilter } from './errors/exeption.filter';
import { ILoggerService } from './logger/logger.interface';
import { TYPES } from './types';
import { ICoffeeController } from './coffee/coffee.controller.interface';

@injectable()
export class App {
	app: Express;
	server: Server;
	port: number;

	constructor(
		@inject(TYPES.ILoggerService) private logger: ILoggerService,
		@inject(TYPES.ICoffeeController) private coffeeController: ICoffeeController,
		@inject(TYPES.ExeptionFilter) private exeptionFilter: ExeptionFilter,
	) {
		this.app = express();
		this.port = 8080;
	}

	useRoutes(): void {
		this.app.use(this.coffeeController.router);
	}

	useExeptionFilters(): void {
		this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
	}

	public async init(): Promise<void> {
		this.useRoutes();
		this.useExeptionFilters();
		this.server = this.app.listen(this.port, () => {
			this.logger.log(`Server started on port ${this.port}`);
		});
	}
}
