import {Logger, ILogObj} from 'tslog'

export class LoggerService {
    private logger: Logger<ILogObj>

    constructor() {
        this.logger = new Logger({ name: 'LoggerService' });
    }

    log(...args: unknown[]) {
        this.logger.info(1, '', ...args);
    }
    error(...args: unknown[]) {
        console.error(1, '', ...args);
    }
    warn(...args: unknown[]) {
        console.warn(1, '', ...args);
    }
}