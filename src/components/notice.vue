<template> 
		<span id="notice"> {{ numText }} </span>	
</template>


<script>
	
	export default{
		name:'notice',
		props:['num'],
		computed:{
			numText:function () {
				var tempNum = parseInt(this.num)
				if(tempNum>99){
					return '99+'
				}else{
					return tempNum
				}
			}	
		}
	}
</script>

<style scoped lang='less'>
	@import '../assets/css/main.less';
	#notice{
		display: inline-block;
		background: #eb6419;
		color: #fff;
		font-size: 12px;
		width: 20px;
		height: 20px;
		line-height: 20px;
		text-align: center;
		border-radius: 15px;
		padding: 5px;
		/*min-width: 15px;*/
		/*min-height: 15px;*/
	}

</style>
























