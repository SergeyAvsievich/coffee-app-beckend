import { Container, ContainerModule } from 'inversify';
import { App } from './app';
import { CoffeeController } from './coffee/coffee.controller';
import { ExeptionFilter } from './errors/exeption.filter';
import { LoggerService } from './logger/logger.service';
import { TYPES } from './types';
import { ILoggerService } from './logger/logger.interface';
import { IExeptionFilter } from './errors/exeption.filter.interface';
import { ICoffeeController } from './coffee/coffee.controller.interface';
import { CoffeeService } from './coffee/coffee.service';
import { IConfigService } from './config/config.service.interface';
import { ConfigService } from './config/config.service';
import { ICoffeeService } from './coffee/coffee.service.interface';

export const appBindings = new ContainerModule(({ bind }) => {
	bind<ILoggerService>(TYPES.ILoggerService).to(LoggerService).inSingletonScope();
	bind<ICoffeeController>(TYPES.ICoffeeController).to(CoffeeController);
	bind<ICoffeeService>(TYPES.ICoffeeService).to(CoffeeService).inSingletonScope();
	bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter).inSingletonScope();
	bind<IConfigService>(TYPES.IConfigService).to(ConfigService).inSingletonScope();
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
