import { injectable } from 'inversify';
import 'reflect-metadata';
import { ILogObj, Logger } from 'tslog';
import { ILoggerService } from './logger.interface';

@injectable()
export class LoggerService implements ILoggerService {
	public logger: Logger<ILogObj>;

	constructor() {
		this.logger = new Logger({ name: 'LoggerService' });
	}

	log(...args: unknown[]): void {
		this.logger.info(1, '', ...args);
	}
	error(...args: unknown[]): void {
		console.error(1, '', ...args);
	}
	warn(...args: unknown[]): void {
		console.warn(1, '', ...args);
	}
}
