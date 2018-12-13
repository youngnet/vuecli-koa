var router = require('koa-router')();

import user from "./user";
router.use('/user', user.routes(), user.allowedMethods());

export default router;
