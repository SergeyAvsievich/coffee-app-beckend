import { App } from './app';
import { CoffeeController } from './coffee/coffee.controller';
import { LoggerService } from './logger/logger.service';

async function bootsrap(): Promise<void> {
	const logger = new LoggerService();
	const app = new App(logger, new CoffeeController(logger));
	await app.init();
}

bootsrap();
