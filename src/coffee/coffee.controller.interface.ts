import { NextFunction, Request, Response, Router } from 'express';

export interface ICoffeeController {
	router: Router;
	getCoffee(req: Request, res: Response, next: NextFunction): void;
}
