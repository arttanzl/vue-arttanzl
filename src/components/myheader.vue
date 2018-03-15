<template>
    <header class="header">
        <section class="subtop">
            <div class="goback">
                <!-- 根据页面路由显示不同的图标并执行不同的动作 start -->
                <span v-if="routeName=='ordersList'" v-on:click.stop="ordersListSearch">
                    <i class="i-search" scale="1.3"></i>
                </span>
                <span v-else v-on:click.stop="goback">
                    <i class="i-back" scale="1.3"></i>
                </span>
                <!-- 根据页面路由显示不同的图标并执行不同的动作 end -->
            </div>
            <!-- 设置标题文字 -->
            <div class="titleText" v-title="titleText">{{titleText}}</div>
            <div v-bind:class="[otherdoing,routeName]">
                <!-- 根据页面路由显示不同的图标并执行不同的动作 start -->
                <span v-if="routeName=='allocatPrizesInter'" v-on:click.stop="logoutAllocatPrizes">
                    退出登录
                </span>
                <span v-if="routeName=='awardsList'" v-on:click.stop="awardsListSearch">
                    <i class="i-search" scale="1.3"></i>
                </span>
                <!-- 根据页面路由显示不同的图标并执行不同的动作 end -->
            </div>
        </section>
    </header>
</template>

<script>
import Vue from 'vue';
import tools from './../assets/js/tools.js';
import {MessageBox} from 'mint-ui';
export default {
    name: "myheader",
    data() {
        return {
            routeName:this.$route.name,
            routeParamsID:this.$route.params.id,
            titleText:this.$route.meta.title,
            otherdoing:'otherdoing',
            isShowBack:true,
        };
    },
    computed: {},
    props: {
    },
    // updated: function () {
        // console.log(this.$route)
        // 页面加载完成
        // this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been re-rendered
        // })
    // },
    created:function(){
        // console.log(this.$route)
        // console.log(this.$router)
        // console.log(this.$store)
        // 返回事件绑定
        // var a = wv.getUser();
        wv.goback = this.goback;
    },
    methods: {
        // 返回区
        goback:function(){
            
            var vm = this;

            // 如果当前是钱包首页
            if(vm.routeName == 'allocatPrizesLogin'){
                wv.finishWebUI();
                return true;
            }
            // 如果当前在支付密码
            if(vm.routeName == 'paySecretAdd'){
                if(vm.routeParamsID == 'default'){
                    vm.$router.replace('/myWallet');
                }
                if(vm.routeParamsID == 'forget'){
                    vm.$router.replace('/paySecretManage');
                }
                return true;
            }
            
            // 彩票出库扫描
            if(vm.routeName == 'storeOutTicket'){
                MessageBox({ 
                    title: '温馨提示',
                    message: '您确认要放弃录入此条彩票信息？',
                    showConfirmButton:true,
                    confirmButtonText:'确定',
                    showCancelButton:true,
                    cancelButtonText:'取消'
                }).then(function(act){
                    // 确认执行
                    if(act=='confirm'){
                        if(localStorage.hasOwnProperty('outLotteryFaceNos')){
                            vm.$router.push('/storeOutTicketList');
                        }else{
                            vm.$router.replace('/storeOutProce');
                        }
                    }
                });
                return true;
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
            if(to.name == 'paySecretSet' ){
                if(to.params.id == 'reset'){
                    document.title = "修改支付密码";
                    this.titleText = "修改支付密码";
                }
                if(to.params.id == 'set'){
                    document.title = "设置支付密码";
                    this.titleText = "设置支付密码";
                }
                if(to.params.id == 'forget'){
                    document.title = "设置新支付密码";
                    this.titleText = "设置新支付密码";
                }
            }else{
                // 对路由变化作出响应...
                document.title = to.meta.title;
                this.titleText = to.meta.title;
            }

            // 当前路由名称
            this.routeName = to.name;
            // 当前动态路由参数
            if(to.params.id){
                this.routeParamsID = to.params.id;
            }
            
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import './../assets/less/less.less';
.header {
    width: 100%; height: 44px; left: 0; top: 0; z-index: 11; position: fixed; background:#fd9938;
    .i-back { width: 20px; height: 20px; display: inline-block; background: url('./../assets/img/i-back.png') no-repeat center center; background-size: cover; }
    .i-search { width: 20px; height: 20px; display: inline-block; background: url('./../assets/img/i-search.png') no-repeat center center; background-size: cover; }
    .i-light { width: 20px; height: 20px; display: inline-block; background: url('./../assets/img/i-light.png') no-repeat center center; background-size: cover; }
    .subtop {
        display: -webkit-box; display: -webkit-flex; display: flex; -webkit-align-items: center;
        height: 44px; width: 100%; color: #fff; position: relative;
        .goback {
            width: 44px; text-align: center;
            * { display: block; margin: 1rem auto; }
        }
        .titleText {
            -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; 
            text-align: center; line-height: 44px; font-size: 17px;
        }
        .otherdoing {
            width: 44px; text-align: center;
            &.allocatPrizesInter { 
                ._f(n,15px,1.5); width: 60px; padding-right: 10px;
            } 
            &.storeInList { 
                ._f(n,15px,1.5); width: 5rem; margin-right: 0.5rem;
                span { float: right; width: 2.5rem; text-align: center; }
            }
            &.storeOutList { 
                ._f(n,15px,1.5); width: 5rem; margin-right: 0.5rem;
                span { float: right; width: 2.5rem; text-align: center; }
            } 
            * { display: block; margin: 1rem auto; }
        }
    }
}
</style>
