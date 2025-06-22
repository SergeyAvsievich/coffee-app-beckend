import { inject, injectable } from 'inversify';
import { Coffee } from './coffee.entity';
import { CoffeeDto } from './dto/coffee.dto';
import { TYPES } from 'src/types';
import { IConfigService } from 'src/config/config.service.interface';
import { ICoffeeService } from './coffee.service.interface';

@injectable()
export class CoffeeService implements ICoffeeService {
	constructor(@inject(TYPES.IConfigService) private configService: IConfigService) {}
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
