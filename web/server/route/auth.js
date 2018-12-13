const Router = require('koa-router');
const router = new Router();

router.post('/changePhone', async (ctx, next) => {
	ctx.body = { cd: 0, data: 1 };
});

module.exports = router;