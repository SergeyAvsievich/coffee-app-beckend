import express, { Express } from 'express';
import { Server } from 'http';
import { LoggerService } from './logger/logger.service';
import { CoffeeController } from './coffee/coffee.controller';

export class App {
	app: Express;
	server: Server;
	port: number;
	logger: LoggerService;
	coffeeController: CoffeeController


	constructor(logger: LoggerService, coffeeController: CoffeeController) {
		this.app = express();
		this.port = 8080;
		this.logger = logger;
		this.coffeeController = coffeeController
	}

	useRoutes() {
		this.app.use(this.coffeeController.router);
	}

	public async init(): Promise<void> {
		this.useRoutes();
		this.server = this.app.listen(this.port, () => {
			this.logger.log(`Server started on port ${this.port}`);
		});
	}
}
