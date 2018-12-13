const Router = require('koa-router');
const router = new Router();

router.post('/userinfo', async (ctx, next) => {
	ctx.body = { cd: 0, data: 1, msg:'' };
});

module.exports = router;
