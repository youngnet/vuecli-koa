import Mine from '@/pages/mine';
import MyCourse from '@/pages/mine/myCourse';
import Setting from '@/pages/mine/setting';
import Wallet from '@/pages/mine/wallet';
import Extend from '@/pages/mine/extend';
import ExtendMonthList from '@/pages/mine/extend/extend_list';
import ExtendDetailList from '@/pages/mine/extend/detail_list';
import changePhone from '@/pages/mine/changePhone';
import WalletDetail from '@/pages/mine/wallet/wallet_detail';
import WithDraw from '@/pages/mine/wallet/withdraw';
import NeedLearn from '@/pages/lesson/needLearn';
import Learned from '@/pages/lesson/learned';

export default [
	{ path: '/', redirect: '/mine' },
	{ path: '/mine', component: Mine },
	{ path: '/mine/setting', component: Setting },
	{
		path: '/mine/course',
		component: MyCourse,
		children: [ { path: 'needLearn', component: NeedLearn }, { path: 'learned', component: Learned } ]
	},
	{ path: '/mine/extend_month_list', component: ExtendMonthList },
	{ path: '/mine/extend_detail', component: ExtendDetailList },
	{ path: '/mine/extend', component: Extend },
	{ path: '/mine/wallet', component: Wallet },
	{ path: '/mine/changePhone', component: changePhone },
	{ path: '/mine/walletDetail', component: WalletDetail },
	{ path: '/mine/withdraw', component: WithDraw }
];
