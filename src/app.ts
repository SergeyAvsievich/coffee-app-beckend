import express, { Express } from 'express';
import { Server } from 'http';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { ExeptionFilter } from './errors/exeption.filter';
import { ILoggerService } from './logger/logger.interface';
import { TYPES } from './types';
import { ICoffeeController } from './coffee/coffee.controller.interface';
import { json } from 'body-parser';
import { IConfigService } from './config/config.service.interface';
import { IExeptionFilter } from './errors/exeption.filter.interface';
import { PrismaService } from './database/prisma.service';

@injectable()
export class App {
	app: Express;
	server: Server;
	port: number;

	constructor(
		@inject(TYPES.ILoggerService) private logger: ILoggerService,
		@inject(TYPES.ICoffeeController) private coffeeController: ICoffeeController,
		@inject(TYPES.ExeptionFilter) private exeptionFilter: IExeptionFilter,
		@inject(TYPES.IConfigService) private configService: IConfigService,
		@inject(TYPES.PrismaService) private prismaService: PrismaService,
	) {
		this.app = express();
		this.port = 8080;
	}

	useMiddleware(): void {
		this.app.use(json());
	}

	useRoutes(): void {
		this.app.use(this.coffeeController.router);
	}

	useExeptionFilters(): void {
		this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
	}

	public async init(): Promise<void> {
		this.useMiddleware();
		this.useRoutes();
		this.useExeptionFilters();
		await this.prismaService.connect();
		this.server = this.app.listen(this.port, () => {
			this.logger.log(`Server started on port ${this.port}`);
		});
	}
}
