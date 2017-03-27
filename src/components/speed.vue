<template> 
	<div id="speed">
		<div class="content">
			<div id="circle">
				<div id="minCircle"> {{percentText}} </div>
				
				<div id="left">
					<div id="leftCircle"></div>
				</div>
				<div id="right">
					<div id="rightCircle"></div>
				</div>
			</div>
		</div>


		
	</div>	
</template>


<script>
	
	export default{
		name:'speed',
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
			change(){
			
				var leftCircle = document.getElementById('leftCircle')
				var rightCircle = document.getElementById('rightCircle')

				if( this.percent <= 50 ){
					leftCircle.style.transform = 'rotate('+ this.percent*3.6 + 'deg)'
				}else{
					leftCircle.style.transform = 'rotate(180deg)';
					rightCircle.style.transform = 'rotate('+((this.percent-50)*3.6)+'deg)';
				}
			}
		},
		mounted:function(){
			this.change()
		}
	}
</script>

<style scoped lang='less'>
	@import '../assets/css/main.less';
	#speed{
		width: 100%;	
		height: 200px;
		/*text-align: center;*/
	}
	.content{
		margin: 50px auto;
		width: 200px;
		height: 200px;
		position: relative;
		text-align: center;
	}
	#circle{
		position: absolute;
		/*z-index: 1;*/
		width: 200px;
		height: 200px;
		border-radius: 100px;
		background: @green;
	}
	#minCircle{
		position: absolute;
		z-index: 10;
		width: 150px;
		height: 150px;
		line-height: 150px;
		text-align: center;
		color: #efefef;
		font-size: 35px;
		margin: 0 auto;
		top: 25px;
		left: 25px;
		border-radius: 75px;
		background: #155;
	}
	#left,#right{
		width:200px; height:200px; position: absolute; top: 0px;left: 0px;
	}
	#leftCircle{
		position: absolute;
		width: 200px;
		height: 200px;
		border-radius: 100px;
		background: #efe;
		clip:rect(0px,auto,auto,100px);
	}
	#left{ clip:rect(0px,auto,auto,100px); }
	#rightCircle{
		position: absolute;
		width: 200px;
		height: 200px;
		border-radius: 100px;
		background: #efe;
		clip:rect(0px,100px,auto,0px);
	}
	#right{ clip:rect(0px,100px,auto,0px); }	

		

</style>













