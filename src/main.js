// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// 路由
import router from './router';
// 全局 vuex
import store from './store';
// android ios 对接
import {wv} from './assets/js/wv.js';

// 注册title 全局指令
Vue.directive('title', {
	inserted: function (el, binding) {
		document.title = binding.value;
	}
});
Vue.directive('focus', {
    inserted:function (el, {value}) {
        if (value) {
            el.focus()
        }
    },
    update: function (el, {value}) {
        if (value) {
            el.focus()
        }
    },
    componentUpdated:function (el, {value}) {
        if (value) {
            el.focus()
        }
    }
});

// ajax
// import VueResource from 'Vue-resource'

// 图标
// import 'vue-awesome/icons';
// import Icon from 'vue-awesome/components/Icon';
// Vue.component('icon',Icon);

// 基础样式
import './assets/less/base.less';

// mint-ui 框架
// import MintUI from 'mint-ui';
// Vue.use(MintUI);
import 'mint-ui/lib/style.css';

// Jquery
import $ from './assets/js/jquery-1.10.1.js';

// false 来关闭生产模式下给出的提示
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store, // inject store to all children
	template: '<App/>',
	components: { App }
});
