export class Coffee {
	id: number;
	name: string;
	brand: string;
	flavors: string[];

	constructor(partial: Partial<Coffee>) {
		Object.assign(this, partial);
	}
}
