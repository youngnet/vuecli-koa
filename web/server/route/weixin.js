const Router = require('koa-router');
const router = new Router();

router.get('/oauth', async (ctx, next) => {
    let wxConfig = await ctx.post('')
	// 获取用户详细信息使用 snsapi_userinfo
	let { scope = 'snsapi_base', state } = ctx.request.query;
	state = decodeURIComponent(state);
	state = JSON.parse(state);
	state = querystring.stringify(state);
	let redirect_uri = ctx.protocol + `://${ctx.host}/weixin/auth2`;
	let weixin_url = `https://open.weixin.qq.com/connect/oauth2/authorize?${qs.stringify({
		appid: wxConfig.appid,
		redirect_uri,
		response_type: 'code',
		scope,
		state
	})}#wechat_redirect`;
    ctx.redirect(weixin_url);
    // ctx.redirect('/mine');
});

router.get('/oauth2', async (ctx, next) => {
	var { code, state } = ctx.request.query;

	var { returnUrl, ...other } = querystring.parse(state);
	if (code) {
		let wxConfig = await ctx.wxConfig();
		if (!wxConfig) {
			ctx.redirect('/login');
			// ctx.body = "无法获取公众号信息"
			return;
		}

		var url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${wxConfig.appid}&secret=${wxConfig.appsecret}&code=${code}&grant_type=authorization_code`;
		var res = await ctx.get(url);

		var { access_token, openid } = res;

		console.log('###openid', openid);
		ctx.redirect(`${returnUrl}?openid=${openid}&${qs.stringify(other)}`);
	} else {
		ctx.body = 'error: no code ';
	}
});

router.post('/shareConfig', async (ctx, next) => {
	let { url } = ctx.request.body;
	// ctx.body = await ctx.post('/wx/getShareConfig', { url });
	ctx.body = {
		cd: 0,
		msg: null,
		data: {
			appId: '1', // 必填，公众号的唯一标识
			timestamp: '2', // 必填，生成签名的时间戳
			nonceStr: '3', // 必填，生成签名的随机串
			signature: '4' // 必填签名
		}
	};
});

router.post('/payConfig', async (ctx, next) => {
	let { id } = ctx.request.body;
	ctx.body = {
		cd: 0,
		msg: '',
		data: {
			appId: 'res.data.appId',
			timestamp: 'res.data.timestamp',
			nonceStr: 'res.data.nonceStr',
			package: 'res.data.package',
			signType: 'res.data.signType',
			paySign: 'res.data.paySign'
		}
	};
});

module.exports = router;
