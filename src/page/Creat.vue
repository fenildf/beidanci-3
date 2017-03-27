<template>
  <div id="creat" @click="">
  	<header-lg bigTitle="CET-4" noteTitle="四级单词记忆管理"></header-lg>
  	<div class="text-text padding-md lastDiv">
  		<p class='text-size-md'>Hi,</p>
  		<p class="text-indent">同学，距离大学英语考试还有 200 天了，根据考试大纲要求，你需要记忆 3441 个单词和 360 个短语。你每天需要记忆 17 个单词。让我帮你规划你的学习管理。</p>
  		<p class='text-indent'>养成式记忆法，帮你规划了单词遗忘曲线，助你更高效地记忆单词。邀请你身边的小伙伴一起加入社区，参与社区的组织活动(如单词接龙、俚语猜猜、作文漂流等，更多活动，请加入社区了解)，让你的单词记忆更加有趣。马上加入吧！</p>
  		<p class='text-indent'>养成式记忆法，帮你规划了单词遗忘曲线，助你更高效地记忆单词。邀请你身边的小伙伴一起加入社区，参与社区的组织活动(如单词接龙、俚语猜猜、作文漂流等，更多活动，请加入社区了解)，让你的单词记忆更加有趣。马上加入吧！</p>
  		<p class='text-indent'>养成式记忆法，帮你规划了单词遗忘曲线，助你更高效地记忆单词。邀请你身边的小伙伴一起加入社区，参与社区的组织活动(如单词接龙、俚语猜猜、作文漂流等，更多活动，请加入社区了解)，让你的单词记忆更加有趣。马上加入吧！</p>
  		<p class='text-indent'>养成式记忆法，帮你规划了单词遗忘曲线，助你更高效地记忆单词。邀请你身边的小伙伴一起加入社区，参与社区的组织活动(如单词接龙、俚语猜猜、作文漂流等，更多活动，请加入社区了解)，让你的单词记忆更加有趣。马上加入吧！</p>
  	</div>
	
	<!-- 此处的click事件默认是组件的click事件，而非给页面的click事件，需要加上.native 才是此页面的click事件 -->
  	<bottomBtn @click.native="go([$router,'CreatSelect'])" value="创建计划" color="orange" class="bottomBtn bgImg"></bottomBtn>
  </div>
</template>

<script>
	
	import { mapMutations } from "vuex"
	import headerLg from "../components/header-lg.vue"
	import bottomBtn from "../components/bottomBtn.vue"

	export default{
		name:'creat', //name 一般用于排错，显示出错组件的name 
		components:{
			headerLg,
			bottomBtn,
		},
		methods:{
			...mapMutations([  // 从vuex引入公共函数
					'go'
				]),
			// goCreatSelect:function(){ // 本地定义点击函数
			// 	console.log('创建计划')
			// 	this.$router.push({path:'/CreatSelect'})
			// },
		} 
	}
</script>

<style lang="less" scoped>
@import '../assets/css/main.less';
#creat{
	width: 100%;
	background: @bgColor;
}
.bgImg{
	background: url('../assets/img/opacity.png');
}
.lastDiv{
	margin-bottom: 65px;
}
</style>





