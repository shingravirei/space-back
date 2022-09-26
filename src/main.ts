import cors from '@koa/cors';
import Router from '@koa/router';
import Koa, { Context } from 'koa';
import koaBody from 'koa-body';
import logger from 'koa-logger';
import { launchesRouter } from './launches/router.js';

const app = new Koa();
const appRouter = new Router();

app.use(koaBody());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
	app.use(logger());
}

appRouter.get('/ping', (ctx: Context) => {
	ctx.body = 'pong';
});

appRouter.use('/v1/launches', launchesRouter.routes());

app.use(appRouter.routes()).use(appRouter.allowedMethods());

app.listen(3000, () => {
	console.log(`server running on port 3000`);
});
