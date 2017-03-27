<template> 
	<div id="ceshi">
		<!-- <div class="tempText"> {{percentText}} </div>
		<div class="main">
			<div id="da" v-show="da"></div>
			<div id="xiao" v-show="xiao"></div>
			<div id="hui"></div>
			<div id="circlestext"> {{percenttextsay}} </div>
			<div id="circles">
				<div id="percent" class="bg-master-gradient"></div>
			</div>
		</div> -->
		<div class="cntent">
			
		</div>
	</div>	
</template>


<script>
	
	export default{
		name:'seshi',
		data(){
			return{
				da:true,
				xiao:true,
				percentTextSay:'已完成',
				percent:this.$store.state.percent
			}
		},

		computed:{
			percentText:function(){
				if(this.percent == 0){
					this.percentTextSay = "点击这里"
				}
				return this.percent + "%"
			}
		},

		methods:{
			// if(this.percent < 50){
			// 	var xiao = parseInt(180-this.percent*1.8)
			// 	document.getElementById('xiao').style.transform = "rotate(-"+ xiao +"deg)";
			// }else{
			// 	var da = parseInt((this.percent-50)*3.6)
			// 	document.getElementById("xiao").style.transform = "rotate(-180deg)";
			// 	document.getElementById('da').style.transform = "rotate("+ da + "deg)";
			// }

			// var circleNum = document.getElementById('circleNum')
		},
		nounted:function(){
			this.change()
		}
	}
</script>

<style scoped lang='less'>
	@import '../assets/css/main.less';
	#ceshi{
		width: 100%;	
		height: 200px;
		text-align: center;
		background: #cfc;
	}
	.cntent{
		/*position: relative;*/
		background: #ccc;
		height: 200px;
		width: 100%;
		/*display: block;*/
	}
	

</style>














