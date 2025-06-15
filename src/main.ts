import { Container, ContainerModule } from 'inversify';
import { App } from './app';
import { CoffeeController } from './coffee/coffee.controller';
import { ExeptionFilter } from './errors/exeption.filter';
import { LoggerService } from './logger/logger.service';
import { TYPES } from './types';
import { ILoggerService } from './logger/logger.interface';
import { IExeptionFilter } from './errors/exeption.filter.interface';
import { ICoffeeController } from './coffee/coffee.controller.interface';

export const appBindings = new ContainerModule(({ bind }) => {
	bind<ILoggerService>(TYPES.ILoggerService).to(LoggerService);
	bind<ICoffeeController>(TYPES.ICoffeeController).to(CoffeeController);
	bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
	bind<App>(TYPES.Application).to(App);
});

interface IBootstrapReturn {
	appContainer: Container;
	app: App;
}

function bootstrap(): IBootstrapReturn {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	app.init();
	return { appContainer, app };
}

export const { app, appContainer } = bootstrap();
