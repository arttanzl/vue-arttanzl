<template>
    <div id="app">
        <!-- <myhead></myhead> -->
        <main class="mainView">
          <router-view/>
        </main> 
        <!-- <myfoot></myfoot> -->
    </div>
</template>

<script>
// import myhead from '@/components/myheader';
// import myfoot from '@/components/myfooter';
import {MessageBox} from 'mint-ui';
export default {
    name: 'app',
    data() {
        return {
            fromUrlName:null,                       // 来源页面
            routeName:this.$route.name,             // 当前路由名称
            routeParamsID:this.$route.params.id,    // 当前路由参数
        }
    },
    //components:{
        // myhead,myfoot
    //}
    created:function(){
        /*
        var vm = this;
        // 存取登录信息
        wv.getSession({
            success:function(data){            
                if( typeof(data) == 'string' ){
                    data = JSON.parse(data);
                }
                // 过滤别提示
                if(window.location.toString().indexOf('allocatPrizesLogin') == -1 && 
                window.location.toString().indexOf('allocatPrizesInter') == -1 ){
                    // 没有登录信息，退出
                    if(!data.loginId || !data.sessionId){
                        wv.sessionDisabled({
                            msg:"登录态已失效，请重新登录。"
                        });
                    }
                }
                //  登录信息
                vm.$store.state.session = data; 
                vm.$store.state.loginId = data.loginId;
                vm.$store.state.sessionId = data.sessionId;
            }
        })    
        // 返回事件
        wv.goback = this.goback;
        */
    },
    methods: {
        // 返回区
        goback:function(){
            
            var vm = this;

            // 如果当前是派发奖品页入口
            if(vm.routeName == 'allocatPrizesLogin'){
                wv.finishWebUI();
                return true;
            }

            if(vm.routeName == 'allocatPrizesInter'){
                if(vm.fromUrlName){
                    MessageBox({ 
                        title: '温馨提示',
                        message: '您确认要退出登录吗？',
                        showConfirmButton:true,
                        confirmButtonText:'确定',
                        showCancelButton:true,
                        cancelButtonText:'取消'
                    }).then(function(act){
                        // 确认执行
                        if(act=='confirm'){
                            vm.$router.go(-1);
                        }
                    });
                }else{
                    wv.finishWebUI();
                }
                return true;
            }

            // 如果当前是订单详情页
            if(vm.routeName == 'ordersDetail'){
                if(vm.fromUrlName){
                    vm.$router.go(-1);
                    return true;
                }
                wv.finishWebUI();
                return true;
            }

            // 如果当前是订单详情页
            if(vm.routeName == 'ordersSearch'){
                wv.finishWebUI();
                return true;
            }

            // 如果当前是订单搜索结果页
            if(vm.routeName == 'ordersList' && vm.routeParamsID){
                if(vm.routeParamsID !== 'default' && vm.routeParamsID !== 'wait' && vm.routeParamsID !== 'refund'){
                    vm.$router.go(-1);
                    return true;
                }
            }

            // 如果当前是兑奖列表页
            if(vm.routeName == 'awardsList' && vm.routeParamsID){
                if(vm.routeParamsID !== 'default' && vm.routeParamsID !== 'done'){
                    vm.$router.go(-1);
                    return true;
                }else{
                    wv.finishWebUI();
                    return true;
                }
            }
            vm.$router.go(-1);
            return true;

        },
        // 订单搜索
        ordersListSearch:function(){
            this.$router.push('/ordersSearch');
        },
        // 新消息
        newMessages:function(){

        },
        // 兑奖搜索
        awardsListSearch:function(){
            this.$router.push('/awardsSearch');
        },
        // 退出派发奖品
        logoutAllocatPrizes:function(){
            var vm = this;
            MessageBox({ 
                title: '退出登录',
                message: '您确认要退出登录吗？',
                showConfirmButton:true,
                confirmButtonText:'确定',
                showCancelButton:true,
                cancelButtonText:'取消'
            }).then(function(act){
                // 确认执行
                if(act=='confirm'){
                    vm.$store.state.activityLoginInfos = null;
                    vm.$router.replace('/allocatPrizesLogin');
                }
            });
        }
    },
    watch: {
        // 中由守卫监听
        '$route' (to, from) {

            // 特定页面隐藏 goback
            // this.isShowBack = false;

            // 动态路由标题
            if(to.name == 'ordersList' && to.params.id){
                if(to.params.id == 'default' || to.params.id == 'wait' || to.params.id == 'refund'){
                    document.title = "订单";
                }else{
                    document.title = "搜索结果";
                }
            }else if(to.name == 'ordersDetail' ){
                document.title = "订单详情";
            }else if(to.name == 'ordersSearch' ){
                document.title = "订单搜索";
            }else if(to.name == 'awardsList' && to.params.id){
                if(to.params.id == 'default' || to.params.id == 'done'){
                    document.title = "兑奖记录";
                }else{
                    document.title = "搜索结果";
                }
            }else if(to.name == 'awardsDetail' ){
                document.title = "兑奖详情";
            }else if(to.name == 'awardsSearch' ){
                document.title = "兑奖搜索";
            }else if(to.name =='allocatPrizesLogin'){
                document.title = "扫彩猫 · 发放奖品登录";
            }else if(to.name =='allocatPrizesInter'){
                document.title = "扫彩猫 · 发放奖品";
            }else{
                // 对路由变化作出响应...
                document.title = '招彩猫';
            }

            // 当前路由名称
            this.fromUrlName = from.name;
            this.routeName = to.name;
            // // 当前动态路由参数
            if(to.params.id){
                this.routeParamsID = to.params.id;
            }
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import './assets/less/less.less';

html,body {
    background: #F0F0F0;
}

// 分组块
.part {
    margin: 0.85rem auto; background: #fff; padding: 0;
}

/* 弹窗 */
.dialog { position: fixed; left: 0; right: 0; top: 0; bottom: 0; z-index: 4999; }
.dialog .mask { position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: #000; opacity: 0.5; }
.dialog .main { position: fixed; z-index: 5000; width: 80%;
    top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%); background-color: #FFFFFF; text-align: center;
    border-radius: 5px; }
.dialog .main .cont { display:block; zoom:1; }
.dialog .main .cont:after { content:"."; height:0px; line-height:0px; font-size:0px; display:block; clear:both; overflow: hidden; visibility:hidden; }
// .dialog .main .close { padding: 1rem; width: 1.5rem; height: 1.5rem; background: url('./assets/img/i-close.png') no-repeat 1rem 1rem; background-size: 1.5rem 1.5rem; position: absolute; right: 0; top: 0; text-indent: -9999px; }

// confirm alert 弹窗
/*
.confirm {
    .cont {
        .title { ._f(b,1.5rem,3rem); color: #000; padding: 1rem 1rem 0 1rem; }
        .msgText { text-align: left;  padding:0 1rem 1rem 1rem; ._f(n,1.1rem,1.5); }
        .btns {
            display: -webkit-box; display: -webkit-flex; display: flex; -webkit-align-items: center; border-top: 1px solid #EFEFEF;
            span {
                -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; ._f(b,1.2rem,3rem); border-right: 1px solid #EFEFEF; 
                &:last-child { border-right: none; }
                &.sure { color: #F89939; }
            }
        }
    }
}
*/

// 部分组件样式重置
.mint-msgbox-message {
    ._f(n,16px,24px); color: #666;
}
</style>
