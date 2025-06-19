import { Coffee } from './coffee.entity';
import { CoffeeDto } from './dto/coffee.dto';

export interface ICoffeeService {
	getCoffee(dto: CoffeeDto): Promise<Coffee[]>;
	validateParams(dto: CoffeeDto): boolean;
}
