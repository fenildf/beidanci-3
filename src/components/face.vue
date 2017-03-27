<template> 
	<div class="face">
		<div class='fl faceimg'>
			<img src="../assets/img/tazha.jpg">
		</div>
		<div class="fl showx">
			<div  id="showName">
				{{ showName }}
				<notice :num="this.$store.state.notice" v-show="noticeShow" class="notice"></notice>
			</div>
			<h4>
				记忆力：<span class="text-color-orange"> {{ $store.state.memory }} </span>
				经验值：<span class="text-color-green"> {{ $store.state.xp }} </span>
			</h4>
		</div>
		<div class="cf"></div>
	</div>
</template>


<script>

	import notice from "./notice.vue"
	export default{
		name:'face',
		components:{ notice },
		props:['openid'],
		computed:{
			noticeShow:function () {
				if(this.$store.state.notice == 0){
					return false
				}else{
					return true
				}
			},
			showName:function(){
				var showName = this.$store.state.name
				if(showName.length>10){
					showName = showName.substring(0,8) + "..."
				}
				return showName
			}
		},
		mounted:function(){
			if(this.showName.length < 5){
				document.getElementById('showName').style.fontSize = '200%'
			}	
		}
	}
</script>

<style scoped lang='less'>
	@import '../assets/css/main.less';
	
	.face{
		padding: 50px 20px 20px 20px;
		width: 100%;
	}
	.fl{
		float: left;
	}
	.faceimg{
		width: 25%;
	}
	.faceimg img{
		width: 100%;
		border: 6px solid #eae9e9;
	}
	.showx{
		margin: 10px 0 0 30px;
	}
	.showx #showName{
		position: relative;
		font-size: 200%;
	}
	.showx h4{
		margin-top: 20px;
		font-size: 100%;
	}
	.showx span{
		margin-right: 10px;
	}
	.notice{
		position: absolute;
		bottom: 15px;
		margin: 0 0 0px 5px;
		/*display: inline-block;*/
	}



</style>



























