import { App } from './app';
import { CoffeeController } from './coffee/coffee.controller';
import { ExeptionFilter } from './errors/exeption.filter';
import { LoggerService } from './logger/logger.service';

async function bootsrap(): Promise<void> {
	const logger = new LoggerService();
	const app = new App(logger, new CoffeeController(logger), new ExeptionFilter(logger));
	await app.init();
}

bootsrap();
