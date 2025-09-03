import { CoffeeModel } from '@prisma/client';
import { Coffee } from './coffee.entity';

export interface ICoffeeService {
	getCoffee(page: number, perPage: number, search: string): Promise<CoffeeModel[]>;
	getCoffeeById(id: number): Promise<CoffeeModel | null>;
	create(coffee: Coffee): Promise<CoffeeModel | null>;
	update(id: number, coffee: Coffee): Promise<CoffeeModel>;
	delete(id: number): Promise<CoffeeModel>;
	validateParams(coffee: Coffee): boolean;
}
