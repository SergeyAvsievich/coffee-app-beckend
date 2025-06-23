import { CoffeeModel } from '@prisma/client';
import { Coffee } from './coffee.entity';

export interface ICoffeeRepository {
	create(coffee: Coffee): Promise<CoffeeModel>;
	update(id: number, coffee: Coffee): Promise<CoffeeModel>;
	delete(id: number): Promise<CoffeeModel>;
	getCoffee(page: number, perPage: number, search: string): Promise<CoffeeModel[]>;
	getCoffeeById(id: number): Promise<CoffeeModel | null>;
}
