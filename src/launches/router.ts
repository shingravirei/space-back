import Router from '@koa/router';
import { Context } from 'koa';
import {
	getLatestLaunch,
	getNextLaunch,
	getNextLaunches,
	getPastLaunches,
} from './service.js';

const launchesRouter = new Router();

launchesRouter.get('/latest', async (ctx: Context) => {
	const resp = await getLatestLaunch();

	ctx.body = resp;
});

launchesRouter.get('/next', async (ctx: Context) => {
	const resp = await getNextLaunch();

	ctx.body = resp;
});

launchesRouter.get('/past', async (ctx: Context) => {
	const resp = await getPastLaunches();

	ctx.body = resp;
});

launchesRouter.get('/', async (ctx: Context) => {
	const resp = await getNextLaunches();

	ctx.body = resp;
});

export { launchesRouter };
