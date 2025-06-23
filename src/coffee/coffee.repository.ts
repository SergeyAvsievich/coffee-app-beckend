import { ICoffeeRepository } from './coffee.repository.interface';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { PrismaService } from '../database/prisma.service';
import { Coffee } from './coffee.entity';
import { CoffeeModel } from '@prisma/client';

@injectable()
export class CoffeeRepository implements ICoffeeRepository {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}
	async create(coffee: Coffee): Promise<CoffeeModel> {
		return await this.prismaService.client.coffeeModel.create({ data: coffee });
	}

	async update(id: number, coffee: Coffee): Promise<CoffeeModel> {
		return await this.prismaService.client.coffeeModel.update({ where: { id }, data: coffee });
	}

	async delete(id: number): Promise<CoffeeModel> {
		return await this.prismaService.client.coffeeModel.delete({ where: { id } });
	}

	async getCoffee(page: number, perPage: number = 10, search: string = ''): Promise<CoffeeModel[]> {
		// pagination
		return await this.prismaService.client.coffeeModel.findMany({
			take: perPage,
			skip: (page - 1) * perPage,
			where: {
				name: {
					contains: search,
				},
			},
		});
	}

	async getCoffeeById(id: number): Promise<CoffeeModel | null> {
		return await this.prismaService.client.coffeeModel.findUnique({ where: { id } });
	}
}
