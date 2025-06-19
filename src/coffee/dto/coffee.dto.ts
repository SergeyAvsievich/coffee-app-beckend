import { IsArray, IsString } from 'class-validator';

export class CreateCoffeeDto {
	readonly name: string;
	readonly brand: string;
	readonly flavors: string[];
}

export class UpdateCoffeeDto {
	readonly name?: string;
	readonly brand?: string;
	readonly flavors?: string[];
}

export class PaginationQueryDto {
	readonly offset: number;
	readonly limit: number;
}

export class FilterCoffeeDto {
	readonly search: string;
}

export class CoffeeDto {
	@IsString({ message: 'id must be a string' })
	readonly id: number;
	@IsString({ message: 'name must be a string' })
	readonly name: string;
	@IsString({ message: 'brand must be a string' })
	readonly brand: string;
	@IsArray({ message: 'flavors must be an array' })
	readonly flavors: string[];
}
