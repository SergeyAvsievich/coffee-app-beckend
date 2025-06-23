import { inject, injectable } from 'inversify';
import { IConfigService } from '../config/config.service.interface';
import { ILoggerService } from '../logger/logger.interface';
import { TYPES } from '../types';
import { ICoffeeRepository } from './coffee.repository.interface';
import { ICoffeeService } from './coffee.service.interface';
import { CoffeeDto } from './dto/coffee.dto';
import { Coffee } from './coffee.entity';
import { CoffeeModel } from '@prisma/client';

@injectable()
export class CoffeeService implements ICoffeeService {
	constructor(
		@inject(TYPES.IConfigService) private configService: IConfigService,
		@inject(TYPES.ILoggerService) private loggerService: ILoggerService,
		@inject(TYPES.ICoffeeRepository) private coffeeRepository: ICoffeeRepository,
	) {}
	async getCoffee(page: number, perPage: number, search: string): Promise<CoffeeModel[]> {
		const coffeeList = await this.coffeeRepository.getCoffee(page, perPage, search);
		return coffeeList;
	}

	async getCoffeeById(id: number): Promise<CoffeeModel | null> {
		return this.coffeeRepository.getCoffeeById(id);
	}

	async create(coffee: Coffee): Promise<CoffeeModel | null> {
		if (this.validateParams(coffee)) {
			return this.coffeeRepository.create(coffee);
		}

		return null;
	}

	async update(id: number, coffee: Coffee): Promise<CoffeeModel> {
		return this.coffeeRepository.update(id, coffee);
	}

	async delete(id: number): Promise<CoffeeModel> {
		return this.coffeeRepository.delete(id);
	}

	validateParams(coffee: Coffee): boolean {
		return true;
	}
}
