<template> 
	<div class="HeaderMd">
		<h3> {{Title}} </h3>		
		<div v-show="moreShow" id="menu" class='img' @click="openMenu">
			<img src="../assets/img/menu.jpg" alt="三">
		</div>
	</div>
</template>


<script>
	
	export default{
		name:'HeaderMd',
		props:['Title', 'show'],
		computed:{
			moreShow:function(){ //此判断是因为传过来的值是字符串，需将其转成boolean值
				if(this.show == 'y'){
					return this.moreShow = true 
					//此处不要写成 this.show  (会污染原始数据而报错),可以直接 return true
				}else{
					return this.moreShow = false
				}
			}
		},
		methods:{
			openMenu:function(){
				this.$store.state.leftMenuShow = true;
			}
		}
	}
</script>

<style scoped lang='less'>
	@import '../assets/css/main.less';
	.HeaderMd{
		height: 35px;
		width: 100%;
		color: @white;
		box-shadow: #ddd 0 3px;
		background: linear-gradient(270deg,@green 0%, @turquoise 100% )
	}
	h3{
		padding-left: 20px;
		height: 35px;
		line-height: 35px;
		float: left;
	}
	.img{
		float: right;
		margin-right: 10px;
	}
	.img img{
		height: 35px;
	}


</style>




















