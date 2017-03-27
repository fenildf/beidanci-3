<template> 
	<div id="Review">
		<header-md title="CET-4" show="y" ></header-md>	
		<face></face>

		<div class="padding-md">	
			<p class="text-indent">单词的遗忘遵循遗忘曲线规律，根据遗忘曲线规律，可以更好的记住单词。
				</p>
			<div class="text-size-md padding-top-md">复习规则:</div>
		
			<ul class="padding-top-sm">
				<li>1、回答正确，将获得&nbsp;1&nbsp;点经验。</li>
				<li>2、回答错误，扣除&nbsp;1&nbsp;点经验。</li>
				<li>3、如果一个单词连续错误&nbsp;3&nbsp;次，该单词将移入任务区，重新学习。</li>
			</ul>
			<p class="padding-top-md">你需要足够的经验才能开启计划</p>
			<p class="text-align-right padding-top-lg">
				<input type="checkbox" id="checkbox" v-model='reviewShow'>
				以后不再提示
			</p>
		</div>

		<bottomBtn @click.native="go([$router,'CreatSelect'])" value="开始复习" color="orange" class="bottomBtn bgImg"></bottomBtn>
	</div>	
</template>


<script>
	
	import headerMd from "../components/header-md.vue"
	import face from "../components/face.vue"
	import bottomBtn from "../components/bottomBtn.vue"
	export default{
		name:'Review',
		data(){
			return{
				reviewShow:false
			}
		},
		components:{
			headerMd,
			face,
			bottomBtn,
		},
		watch:{
			reviewShow:function(newval){
				console.log(newval)
				var formData = new FormData();
				if(newval == true ){
					formData.append('reviewShow',1)
					this.$http.post('http://' + this.$store.state.serverIP + '/json/updatauser.php',formData).then(function(response){
						console.log(response.data)
					},function(error){
						this.$router.push({ path:'/ErrorPage' })
					})
				}
			}
		}
	}
</script>

<style scoped lang='less'>
	@import '../assets/css/main.less';

</style>













