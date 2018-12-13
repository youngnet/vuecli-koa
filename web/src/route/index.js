import Vue from 'vue';
import Router from 'vue-router';
import auth from './auth';
import mine from './mine';
import lesson from './lesson';
Vue.use(Router);

const routes = [].concat(auth, mine, lesson);

const router = new Router({
	mode: 'history',
	routes
});

router.beforeEach((to, from, next) => {
	console.log(this, '​to', to);
	next();
});

export default router;
