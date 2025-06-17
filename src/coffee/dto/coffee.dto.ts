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
	readonly id: number;
	readonly name: string;
	readonly brand: string;
	readonly flavors: string[];
}
