export class Coffee {
	id: number;
	name: string;
	description: string;
	rating: number;
	size: string;
	price: number;
	image: string;

	constructor(partial: Partial<Coffee>) {
		Object.assign(this, partial);
	}
}
