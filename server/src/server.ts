import Koa from 'koa';
import Router from '@koa/router';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx: any) => {
  ctx.body = 'Hello World';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);

console.log("Server listening at http://localhost:3000");
