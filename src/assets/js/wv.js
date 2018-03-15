
/*

	// IOS Android 数据交互 

*/
import config from './config.js';
var wv = {

	// 测试环境，调用模拟接口数据
	isDevelopment:config.isDevelopment,

	// 获得终端类型 android | ios
	clientAgent:function(){
		var userAgent = window.navigator.userAgent;
		if (/(iPhone|iPad|iPod|iOS)/i.test(userAgent)) {
		    return 'ios';
		} else if (/(Android)/i.test(userAgent)) {
			return 'android';
		} else {
		    return 'pc';
		};
	},

	// 访问终端检测
	browser : {
	    versions:function(){
	        var u = navigator.userAgent, app = navigator.appVersion;
	        return {
	            trident: u.indexOf('Trident') > -1, //IE内核
	            presto: u.indexOf('Presto') > -1, //opera内核
	            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
	            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
	            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
	            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
	            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
	            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
	            iPad: u.indexOf('iPad') > -1, //是否iPad
	            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
	            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
	            qq: u.match(/\sQQ/i) == " qq" //是否QQ
	        };
	    }(),
	    language:(navigator.browserLanguage || navigator.language).toLowerCase()
	},

	// 向 ios 发送请求命令
	iosSend:function(obj){
		window.webkit.messageHandlers.zhaocaimao.postMessage(obj);
	},

	// 初始化数据获取请求
	// opts: {}
	// success: function ( param_call )
	/*
	getParams:function(opts){
		var clientAgent = this.clientAgent();
		if(clientAgent=='android'){
			var data = window.jsJavaInterface.getParams();
			if(opts.success && opts.success.constructor == Function ){
				opts.success(data);
			}
		}
		if(clientAgent=="ios"){
			// 定义同名请求回调
			if(opts.success && opts.success.constructor == Function ){
				this['getParams_call'] = opts.success;
			}
			// 发送请求命令
			var iosParams = ['getParams'];
			this.iosSend(iosParams);
		}
	},
	*/

	// 获取session
	getSession:function(opts){
		// 测试数据
		if(this.isDevelopment){
			var data = JSON.stringify({
				"sessionId":"CgcGAgs2MDM3NDMxNjAzTEcwMDAyNzlTVVJFWg%3D%3D",
				"loginId":"LG000279"
			});
			if(opts.success && opts.success.constructor == Function ){
				opts.success(data);
			}
		}else{
			var clientAgent = this.clientAgent();
			if(clientAgent=='android'){
				var data = window.jsJavaInterface.getSession();
				if(opts.success && opts.success.constructor == Function ){
					opts.success(data);
				}
			}
			if(clientAgent=="ios"){
				// 定义同名请求回调
				if(opts.success && opts.success.constructor == Function ){
					this['getSession_call'] = opts.success;
				}
				// 发送请求命令
				var iosParams = {
					interflowParam:'getSession'
				};
				this.iosSend(iosParams);
			}
		}
	},

	// session失效，重新去登录请求
	sessionDisabled:function(opts){
		if(this.isDevelopment){
			alert('当前设备不支持重新登录')
		}else{
			var clientAgent = this.clientAgent();
			if(clientAgent=='android'){
				window.jsJavaInterface.sessionDisabled(opts.msg);
			}
			if(clientAgent=="ios"){
				// 发送请求命令
				var iosParams = {
						interflowParam:'sessionDisabled'
					};
				this.iosSend(iosParams);
			}	
		}
	},

	// 关闭WebView界面
	finishWebUI:function(opts){
		if(this.isDevelopment){
			alert('当前设备不支持webview关闭窗口')
		}else{
			var clientAgent = this.clientAgent();
			if(clientAgent=='android'){
				window.jsJavaInterface.finishWebUI();
			}
			if(clientAgent=="ios"){
				// 发送请求命令
				var iosParams = {
						interflowParam:'finishWebUI'
					};
				this.iosSend(iosParams);
			}	
		}
	},

	// 二维码扫描
	openQrcode:function(opts){
		// 测试数据
		if(this.isDevelopment){
			if(opts.success && opts.success.constructor == Function ){
				opts.success('35044202018770502681498311147');
			}
		}else{
			var clientAgent = this.clientAgent();
			if(clientAgent=='android'){
				if(opts.success && opts.success.constructor == Function ){
					this['openQrcode_call'] = opts.success;
				}
				// 发送数据
				window.jsJavaInterface.openQrcode();
			}
			if(clientAgent=="ios"){
				// 定义同名请求回调
				if(opts.success && opts.success.constructor == Function ){
					this['openQrcode_call'] = opts.success;
				}
				// 发送请求命令
				var iosParams = {
					interflowParam:'openQrcode'
				};
				this.iosSend(iosParams);
			}
		}
	},

	// 获取LBS定位地址
	getLBS:function(opts){
		// 测试数据
		if(this.isDevelopment){
			var data = JSON.stringify({
				address:'广东省深圳市福田区金中环大厦3706室'
			});
			if(opts.success && opts.success.constructor == Function ){
				opts.success(data);
			}
		}else{
			var clientAgent = this.clientAgent();
			if(clientAgent=='android'){
				if(opts.success && opts.success.constructor == Function ){
					this['getLBS_call'] = opts.success;
				}
				// 发送数据
				window.jsJavaInterface.getLBS();
			}
			if(clientAgent=="ios"){
				// 定义同名请求回调
				if(opts.success && opts.success.constructor == Function ){
					this['getLBS_call'] = opts.success;
				}
				// 发送请求命令
				var iosParams = {
					interflowParam:'getLBS'
				};
				this.iosSend(iosParams);
			}
		}
	},
 
	// 跳转至指定的界面位置
	openUrl:function(opts){
		// 测试数据
		if(this.isDevelopment){
			if(opts.success && opts.success.constructor == Function ){
				window.location = opts.url;
			}
		}else{
			var clientAgent = this.clientAgent();
			if(clientAgent=='android'){
				// 发送数据
				window.jsJavaInterface.openUrl(opts.url);
			}
			if(clientAgent=="ios"){
				// 发送请求命令
				var iosParams = {
					interflowParam:'openUrl',
					url:opts.url
				};
				this.iosSend(iosParams);
			}
		}
	},

	// 设置titlebar 右测
	// right_type=1,代表文字，right_type=2,代表图片（搜索图片strParam="search_img"） js，右测点击事件调用的js
	setTitleBarRight:function(opts){
		// 测试数据
		if(this.isDevelopment){
			if(opts.js && opts.js.constructor == Function ){
				opts.js();
			}
		}else{
			var clientAgent = this.clientAgent();
			if(clientAgent=='android'){
				// 发送数据
				window.jsJavaInterface.setTitleBarRight(opts.right_type, opts.strParam, opts.js);
			}
			if(clientAgent=="ios"){
				// 发送请求命令
				var iosParams = {
					interflowParam:'setTitleBarRight',
					right_type:opts.right_type,
					strParam:opts.strParam,
					js:opts.js
				};
				this.iosSend(iosParams);
			}
		}
	},

	/**
	 * 设置titlebar 右测可见性
	 * //线程javaBrige
	 * visible=0,可见，其他不可见
	 * right_type=1,代表文字，right_type=2,代表图片
	 */
	setTitleBarRightVisible:function(opts){
		// 测试数据
		if(this.isDevelopment){
			alert('浏览器不支持关闭或显示APP右侧图标文字功能~')
		}else{
			var clientAgent = this.clientAgent();
			if(clientAgent=='android'){
				// 发送数据
				window.jsJavaInterface.setTitleBarRightVisible(opts.right_type, opts.visible);
			}
			if(clientAgent=="ios"){
				// 发送请求命令
				var iosParams = {
					interflowParam:'setTitleBarRightVisible',
					right_type:opts.right_type,
					visible:opts.visible
				};
				this.iosSend(iosParams);
			}
		}
	},

	// 返回事件调用
	goback:null,

}

// 将方法附加在Vue对象上
window.wv = wv
if (window.Vue) {
	window.Vue.use(wv)
}
export {wv}

