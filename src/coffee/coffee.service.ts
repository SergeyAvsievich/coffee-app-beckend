import { injectable } from 'inversify';
import { Coffee } from './coffee.entity';
import { ICoffeeService } from './coffee.service,interface';
import { CoffeeDto } from './dto/coffee.dto';

@injectable()
export class CoffeeService implements ICoffeeService {
	async getCoffee(dto: CoffeeDto): Promise<Coffee[]> {
		// get coffelist
		// проверка параметров
		// если все ок - возвращаем кофе
		// иначе - возвращаем ошибку
		return [];
	}

	validateParams(dto: CoffeeDto): boolean {
		return true;
	}
}
