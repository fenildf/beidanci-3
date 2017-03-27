<template> 
	<div id="leftMenu">
		<div class="menu">
			<h2 class="text-align-center text-color-white">CET-4</h2>
			<h3 class="text-align-center text-color-white">四级单词记忆管理</h3>
		</div>	
		<div id="hide" @click="closeMenu"></div>
	</div>
</template>

<script>
	
	export default{
		name:'leftMenu',
		props:['Title', 'show'],
		methods:{
			closeMenu:function(){
				this.$store.state.leftMenuShow = false;	
			}
		}

	}
</script>

<style scoped lang='less'>
	@import '../assets/css/main.less';
	#leftMenu{

	}
	.menu{
		z-index: 100;
		height: 100%;
		width: 70%;
		position: fixed;
		padding-top: 30px;
		top: 0;
		left: 0;
		background: @gray-dark;
		h2{
			font-size: 250%;
		}
	}
	#hide{
		z-index: 99;
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: @black;
		opacity: 0.2;
	}

</style>
































