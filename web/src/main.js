// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './route';
import api from './api';
import VueMeta from 'vue-meta';
// Vue.config.productionTip = false;
import * as filters from './utils/filters';

// 注册全局过滤器
Object.entries(filters).forEach(([ key, value ]) => {
	Vue.filter(key, value);
});
// 请求api
Vue.use(api);
Vue.use(VueMeta);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
});
