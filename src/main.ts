import { App } from './app';
import { LoggerService } from './logger/logger.service';

async function bootsrap(): Promise<void> {
	const app = new App(new LoggerService());
	await app.init();
}

bootsrap();
