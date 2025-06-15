import { NextFunction, Request, Response, Router } from 'express';

export interface IControllerRoute {
	path: string;
	func: (req: Request, res: Response, func: NextFunction) => void;
	method: keyof Pick<Router, 'get' | 'post' | 'put' | 'delete' | 'patch'>;
}
