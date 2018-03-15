<template>
    <footer v-if="footerbar">
        <div class="space"></div>
        <section class="footer">
            <div class="footerNav">
                <router-link to="/index">
                    <i class="home"></i>
                    <span>首页</span>
                </router-link>
                <router-link to="/lottery">
                    <i class="television"></i>
                    <span>终端</span>
                </router-link>
                <router-link to="/activity">
                    <i class="chart"></i>
                    <span>销售</span>
                </router-link>
                <router-link to="/ordersList">
                    <i class="list"></i>
                    <span>订单</span>
                </router-link>
                <router-link to="/user">
                    <i class="user"></i>
                    <span>我的</span>
                </router-link>
            </div>
        </section>
    </footer>
</template>

<script>
import Vue from 'vue';
export default {
    name: "myfooter",
    data() {
        return {
        };
    },
    computed:{
        // 是否显示底部
        footerbar(){
            let onfo = false;
            // 需要显示底部栏的页面
            if(this.$route.name == 'ordersList'){
                onfo = true
            }
            return onfo;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import './../assets/less/less.less';
.space {
    width: 100%; height: 50px; overflow: hidden;
}
.footer {
    width: 100%; height: 50px; position: fixed; background: #fff; bottom:0; left: 0; right: 0; box-sizing: border-box;
    .footerNav {
        display: -webkit-box; display: -webkit-flex; display: flex; -webkit-align-items: center;
        height: 50px; width: 100%; position: relative;
        a {
            -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; text-align: center;
            color: #dcdcdc; font-size: 13px; text-decoration: none; padding-top: 2px;
            * { display: block; margin: 0 auto; }
            i { width: 20px; height: 20px; overflow: hidden; }
            i.home { background: url('./../assets/img/i-foot-d1.png') no-repeat center center; background-size: cover; }
            i.television { background: url('./../assets/img/i-foot-d2.png') no-repeat center center; background-size: cover; }
            i.chart { background: url('./../assets/img/i-foot-d3.png') no-repeat center center; background-size: cover; }
            i.list { background: url('./../assets/img/i-foot-d4.png') no-repeat center center; background-size: cover; }
            i.user { background: url('./../assets/img/i-foot-d5.png') no-repeat center center; background-size: cover; }
            span { ._f(n,13px,15px); margin-top: 4px; color: #999; }
            &.router-link-exact-active,
            &.router-link-active {
                span { color: #fd9938; }
                i.home { background: url('./../assets/img/i-foot-a1.png') no-repeat center center; background-size: cover; }
                i.television { background: url('./../assets/img/i-foot-a2.png') no-repeat center center; background-size: cover; }
                i.chart { background: url('./../assets/img/i-foot-a3.png') no-repeat center center; background-size: cover; }
                i.list { background: url('./../assets/img/i-foot-a4.png') no-repeat center center; background-size: cover; }
                i.user { background: url('./../assets/img/i-foot-a5.png') no-repeat center center; background-size: cover; }
            }
        }
    }
}
</style>
