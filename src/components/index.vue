<template>
	<article>
		<section class="part">
            <mt-cell
                title="派发奖品"
                to="/allocatPrizesLogin"
                is-link
                value="">
            </mt-cell>
        </section>
        <section class="part">
        	<mt-cell
                title="订单"
                to="/ordersList/default"
                is-link
                value="">
            </mt-cell>
        </section>
        <section class="part">
            <mt-cell
                title="兑奖记录"
                to="/awardsList/default"
                is-link
                value="">
            </mt-cell>
        </section>
        <div>
            <input placeholder="测试用session" v-model="session">
            <br>
            <input placeholder="测试用loginId" v-model="loginId">
            <br>
            <input placeholder="测试用sessionId" v-model="sessionId">
        </div>
	</article>
</template>

<!-- javascript start -->
<script>
import Vue from 'vue';
import { Cell } from 'mint-ui';
Vue.component(Cell.name, Cell);
export default {
    name: "init",
    data() {
        return {
            session:null,
            loginId:null,
            sessionId:null
        };
    },
    computed: {},
    props: {},
    created:function() {
        this.session = JSON.stringify(this.$store.state.session);
        this.loginId = this.$store.state.loginId;
        this.sessionId = this.$store.state.sessionId;
    },
    methods: {}
};
</script>
<!-- javascript end -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import './../assets/less/less.less';
input {
    width: 100%; height: 48px; padding: 16px; margin:0 0 0.85rem 0; box-sizing: border-box;
}
</style>
