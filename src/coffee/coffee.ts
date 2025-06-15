import express from 'express';

const coffeeRouter = express.Router();

coffeeRouter.get('/coffee', (req, res) => {
	res.send('Coffee');
});

export { coffeeRouter };
