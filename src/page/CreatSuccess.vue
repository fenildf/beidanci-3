<template>
  <div id="CreatSuccess">
  	<header-md title="CET-4" show="y" ></header-md>
	<div class="text-size-lg text-align-center registered">注册成功</div>	
	<div class="text-align-center text-size-md">
		<span class="text-redColor">+600</span>
		<span>经验值</span>
	</div>	
  	<bottomBtn @click.native="go([$router,''])" value="查看计划" color="orange" class="bottomBtn bgImg"></bottomBtn>
  </div>
</template>

<script>
	
	import { mapMutations } from "vuex"
	import headerMd from "../components/header-md.vue"
	import bottomBtn from "../components/bottomBtn.vue"


	export default{
		name:'creat', //name 一般用于排错，显示出错组件的name 
		components:{
			headerMd,
			bottomBtn,
		},
		methods:{
			...mapMutations([
					'go'
				]),
			// goIndex:function(){
			// 	console.log('前往首页')
			// 	this.$router.push({path:'/'})
			// },
		} 
	}
</script>

<style lang="less" scoped>
@import '../assets/css/main.less';
#CreatSuccess{
	width: 100%;
	background: @bgColor;
}
.bgImg{
	background: url('../assets/img/opacity.png');
}

.registered{
	margin: 250px 0 10px 0;
}
.text-redColor{
	color: #F23152;
}
</style>





























