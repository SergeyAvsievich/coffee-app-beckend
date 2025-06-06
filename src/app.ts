import express, { Express } from 'express';
import { Server } from 'http';

export class App {
	app: Express;
	server: Server;
	port: number;

	constructor() {
		this.app = express();
		this.port = 8080;
	}

	useRoutes() {
		this.app.use('/coffee');
	}

	public async init(): Promise<void> {
		this.useRoutes();
		this.server = this.app.listen(this.port, () => {
			console.log(`Server started on port ${this.port}`);
		});
	}
}
