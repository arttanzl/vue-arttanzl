import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// 调试入口
const index = resolve => {
    require.ensure(['@/components/index'], () => {
        resolve(require('@/components/index'))
    })
}

export default new Router({
	routes: [
	    {
			path: '/',
			name: 'index',
			component: index,
			meta:{
				title: "首页"
			}
	    }
	]
});
