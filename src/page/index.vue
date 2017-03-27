<template>
  <div id="index">
  	<header-md title="CET-4" show="y" ></header-md>
  	<leftMenu v-show="this.$store.state.leftMenuShow"></leftmenu>	
  	<face></face>
  	<speed class="animated pulse"></speed>

  	<!-- 底部按钮 -->
  	<div id="btn" class="text-size-md">
  		<div id="btnMain">
  			<div id="btnLeft">继续计划</div>
  			<div id="btnRight" @click="go([$router,'Review'])" >复习单词</div>
  			<div class="cf"></div>
  		</div>
  	</div>
  </div>
</template>

<script>
	import { mapState,mapGetters,mapMutations } from 'vuex'
	import headerMd from "../components/header-md.vue"
	import leftMenu from "../components/leftMenu.vue"
	import face from "../components/face.vue"
	import speed from "../components/speed.vue"

	export default{
		name:'creat', //name 一般用于排错，显示出错组件的name 
		components:{
			headerMd,
			leftMenu,
			face,
			speed,
		},
		methods:{
			...mapMutations([
					'go'
				]),
			// goIndex:function(){
			// 	console.log('前往首页')
			// 	this.$router.push({path:'/'})
			// },

			// toCreat:function(){
			// 	this.$router.push({ path:'/Creat' })
			// }
		},
		computed:{
			...mapGetters([
					"stime"
				]),
		},
		// 	//ajax请求数据
		// mounted:function(){
		// 	console.log(this.stime)
		// 	if(this.$parent.come != 0 ){
		// 		var xhr, state;
		// 		xhr = new XMLHttpRequest();
		// 		xhr.onreadystatechange = function(){
		// 			if (xhr.readystate==4 && xhr.status==200){
		// 				state = eval("(" + xhr.responsetext + ")")
		// 			}else{
		// 				//处理错误
		// 			}
		// 		}
		// 		xhr.open('get','http://'+ this.$store.state.severip + 'json/users.php?data='+ this.stime,true)
		// 		xhr.send();
		// 		this.$store.state.percent = 'aaa'	
		// 	}
			
		// }
	}
</script>

<style lang="less" scoped>
@import '../assets/css/main.less';

#btn{
	position: fixed;
	bottom: 15px;
	width: 100%;
	color: @white;
}
#btnMain{
	width: 300px;
	margin: 0 auto;
}
#btnLeft{
	float: left;
	height: 40px;
	line-height: 40px;
	text-align: center;
	width: 150px;
	border-radius: 20px 0 0 20px;
	background: @green;
}
#btnRight{
	float: left;
	height: 40px;
	line-height: 40px;
	text-align: center;
	width: 150px;
	border-radius: 0	 20px 20px 0;
	background: @orange;
}

</style>


