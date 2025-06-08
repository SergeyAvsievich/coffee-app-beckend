import express, { Express } from 'express';
import { Server } from 'http';
import { LoggerService } from './logger/logger.service';
import { CoffeeController } from './coffee/coffee.controller';
import { ExeptionFilter } from './errors/exeption.filter';

export class App {
	app: Express;
	server: Server;
	port: number;
	logger: LoggerService;
	coffeeController: CoffeeController
	exeptionFilter: ExeptionFilter

	constructor(logger: LoggerService, coffeeController: CoffeeController, exeptionFilter: ExeptionFilter) {
		this.app = express();
		this.port = 8080;
		this.logger = logger;
		this.coffeeController = coffeeController
		this.exeptionFilter = exeptionFilter
	}

	useRoutes() {
		this.app.use(this.coffeeController.router);
	}

	useExeptionFilters() {
		this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter))
	}

	public async init(): Promise<void> {
		this.useRoutes();
		this.useExeptionFilters();
		this.server = this.app.listen(this.port, () => {
			this.logger.log(`Server started on port ${this.port}`);
		});
	}
}
