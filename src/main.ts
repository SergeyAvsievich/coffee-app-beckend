import { App } from './app';

async function bootsrap(): Promise<void> {
	const app = new App();
	await app.init();
}

bootsrap();
