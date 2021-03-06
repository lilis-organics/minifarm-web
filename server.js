const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const mount = require('koa-mount');
const statics = require('koa-static');

const getPage = page => require(`./.next/serverless/pages/${page}`);

const server = new Koa();

server.use(logger());

server.use(mount('/static', statics(path.join(__dirname, 'static'))));

server.use(mount('/_next', statics(path.join(__dirname, '.next'))));

const router = new Router();

router.get('/', async ctx => {
  await getPage('index').render(ctx.req, ctx.res);
  ctx.response = false;
});

router.get('/about', async ctx => {
  await getPage('about').render(ctx.req, ctx.res);
  ctx.response = false;
});

router.get('/p/:id', async ctx => {
  const queryParams = { id: ctx.params.id };
  ctx.query = queryParams;
  await getPage('post').render(ctx.req, ctx.res);
  ctx.response = false;
});

router.get('*', async ctx => {
  await getPage('_error').render(ctx.req, ctx.res);
  ctx.response = false;
});

// register middleware to change koa default status from 404 to 200
server.use(async (ctx, next) => {
  ctx.res.statusCode = 200;
  await next();
});

server.use(router.routes());

// this is for running unit testing or local koa erver
if (process.env.stage === 'local' || process.env.NODE_ENV === 'local') {
  server.listen(3000, () => console.log('server listening on port: 30000'));
}

module.exports = server;
