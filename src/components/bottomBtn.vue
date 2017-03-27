<template>
	<div id="bottomBtn">
		<button id="btn" v-bind:class="colorName" class="text-size-md"> {{ value }} </button>
	</div>
</template>

<script>
	export default{
		name:'bottomBtn',
		props:['value','color','position'],
		computed:{
			colorName:function(){
				if(this.color == 'orange'){
					return this.colorName = 'orange'
				}else if(this.color == 'green'){
					return this. colorName = 'green'
				}
			}
		}
	}	
</script>

<style scoped lang="less">
	@import "../assets/css/variables.less";
	#bottomBtn{
		width: 100%;
		height: 50px;
		text-align: center;
		padding: 10px 0 10px 0;
	}
	#btn{
		margin-top: 5px;
		height: 40px;
		width: 60%;
		color: #fff;
		border: 0px;
		letter-spacing: 2px;
		border-radius: @border-radius;
		outline: none;
	}
	.orange{
		background: @orange;
	}
	.green{
		background: @green;
	}
</style>






