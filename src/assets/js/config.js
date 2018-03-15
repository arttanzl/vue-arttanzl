/**
 * 
 * LG000254
 * 13360559052
 * 123456
 */

/*
// 线上打包
export default {
	isDevelopment:false,												// 开发测试环境
	domain_orders:'http://s.zhaocaichina.com:58802/clotteryService',	// 钱包接口域名地址
	staticPath:'./static/'												// dist 静态资源地址 图片引用
}
*/


// 开发测试 dev
export default {
	isDevelopment:false,												// 开发测试环境
	domain_orders:'http://119.23.219.6:58802/clotteryService',			// 钱包接口域名地址
	domain_activity:'http://119.23.219.6:8008/api/activity/',			// 派发奖品
	staticPath:'./src/assets',											// dev 静态资源地址 图片引用
	staticDomin:'http://192.168.1.165:8080/index.html#' 				// dev 项目根目录
}
/**/

/*
// 开发测试 dist
export default {
	isDevelopment:false,												// 开发测试环境
	domain_orders:'http://192.168.1.200:58802/clotteryService',	    	// 钱包接口域名地址
	staticPath:'./static/'												// dist 静态资源地址 图片引用
}
*/