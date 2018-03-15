/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-12-13 16:00:07
 * @version $Id$
 */


export default {
	// alert conform 提示
	// opts = {
	//  title:'标题',
	//  msg:'提示文字',
	//  type:'conform',     // conform | alert
	//  call:function(){}       // conform | alert
	// }
	/*
	sysTip : function(opts){
	    if(!opts.msg){
	        return;
	    }
	    if(opts.type == 'confirm'){
	        opts.btns = '<span class="sure">确认</span><span class="none">取消</span>';
	    }else{
	        opts.btns = '<span class="sure">确认</span>';
	    }
	    var html = $('<div class="dialog confirm">\
	            <div class="mask"></div>\
	            <div class="main">\
	                <div class="cont">\
	                    <h2 class="title">'+opts.title+'</h2>\
	                    <div class="msgText">'+opts.msg+'</div>\
	                    <div class="btns">'+opts.btns+'</div>\
	                </div>\
	            </div>\
	        </div>');
	    html.on('touchstart click','.sure',function(e){
	    	e.stopPropagation();
	    	e.preventDefault();
	        if(opts.call){
	            opts.call();
	        }
	        html.off().remove();
	    }).on('touchstart click','.none',function(e){
	    	e.stopPropagation();
	    	e.preventDefault();
	        html.off().remove();
	    }).appendTo('body');
	}
	*/
	sysToast:function(msg){
		if(!msg){
	        return;
	    }
	    var html = $('<div style="display:none; background: #f64f4e; color:#fff; width: 100%; height: 30px; font: normal 12px/30px Helvetica, Arial, \'Microsoft Yahei UI\', \'Microsoft YaHei\', SimHei, simsun, sans-serif; position: fixed; left: 0; top: 0px; padding: 0 10px; box-sizing: border-box; z-index:100;">'+msg+'</div>');
	    html.appendTo('body');
	    html.fadeIn(300,function(){
		    window.setTimeout(function(){
		    	html.fadeOut(300,function(){
		    		html.remove();
		    	});
		    },1000*2);
	    })
	},
	randID:function(len) {
        var timestamp = new Date().getTime() || 0,
            chars = 'abcdefghijklmnopqrstuvwxyz',
            uuid = '';
        this.timestamp = this.timestamp == timestamp ? timestamp + 1 : timestamp;
        timestamp = '' + this.timestamp;
        len = len || 20;
        for (var i = 0; i < len; i++) {
            var k = timestamp.charAt(i);
            if (k == '') {
                k = Math.floor(Math.random() * 26);
            }
            uuid += chars.charAt(k) || 'x';
        }
        return uuid;
    }
}
