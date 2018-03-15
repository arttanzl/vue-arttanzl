import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		session:null,					// session
		loginId:null,
		sessionId:null,
		activityLoginInfos:null 		// 派奖登录信息
	},
	actions: {
		// set_weixinName:function(){
		// 	this.commit('setweixinName');
		// }
	},
	mutations: {
		// updata_transactionVisible:function(){
		// 	if(this.state.transactionVisible){
		// 		this.state.transactionVisible = false;
		// 	}else{
		// 		this.state.transactionVisible = true;
		// 	}
		// }
	}
})
