const Router = require('koa-router');
const router = new Router();
const sendFile = require('koa-sendfile');
const path = require('path');
const filePath = path.join(__dirname, '../../dist');
const mine = require('./mine');
const auth = require('./auth');
const lesson = require('./lesson');
const weixin = require('./weixin');
// console.log('​filePath', filePath);

router.post('/', async (ctx, next) => {
	ctx.body = { cd: 0, data: 'hello', msg: '' };
});

router.get('/ws/test', async (ctx, next) => {
	ctx.websocket.on('message', function(message) {
		// 返回给前端的数据
		ctx.websocket.send(message + 'service');
	});
});

router.get('/static/*', async (ctx, next) => {
	await sendFile(ctx, filePath + ctx.request.url);
});
router.get('/', async (ctx, next) => {
	await sendFile(ctx, `${filePath}/index.html`);
});
router.get('/login', async (ctx, next) => {
	await sendFile(ctx, `${filePath}/index.html`);
});
router.get('/register', async (ctx, next) => {
	await sendFile(ctx, `${filePath}/index.html`);
});

router.get('/mine/:path*', async (ctx, next) => {
	await sendFile(ctx, `${filePath}/index.html`);
});
router.get('/lesson/:path*', async (ctx, next) => {
	await sendFile(ctx, `${filePath}/index.html`);
});

router.get('/auth/:path*', async (ctx, next) => {
	await sendFile(ctx, `${filePath}/index.html`);
});

router.use('/mine', mine.routes());
router.use('/auth', auth.routes());
router.use('/lesson', lesson.routes());
router.use('/weixin', weixin.routes());

module.exports = router;
