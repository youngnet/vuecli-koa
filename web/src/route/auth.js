import Login from '@/pages/auth/login';
import Reg from '@/pages/auth/register';
import BaseInfo from '@/pages/auth/baseInfo';

export default [
	{
		path: '/login',
		component: Login,
		beforeEnter: (to, from, next) => {
			next();
		}
	},
	{ path: '/register', component: Reg },
	{ path: '/auth/baseInfo', component: BaseInfo }
];
