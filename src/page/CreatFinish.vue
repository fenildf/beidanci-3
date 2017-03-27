
<template>
  <div id="CreatFinish" @click="">
  	<header-lg bigTitle="CET-4" noteTitle="四级单词记忆管理"></header-lg>
  	<div class="padding-md"></div>
  	<div class="padding-lg">
		<div class="text-size-lg">真实姓名</div>
		<div>
			<input type="text" v-model="name" class='inputs text-size-md' placeholder="请输入姓名">
		</div>
		<div class="text-size-lg padding-top-sm">注册手机号</div>
		<div>
			<input type="text" v-model="mobile" class='inputs text-size-md' placeholder="请输入手机号">
		</div>
  	</div>
	
	<div class="sexBox">
  		<div class="text-size-lg">性别</div>
  		<ul class='ready padding-top-sm '>
  			<li class="sex active" id="nan" @click="sexSelect('nan')">
  				<div>男</div>
  			</li>
  			<li class="sex noactive" id="nv" @click="sexSelect('nv')">
  				<div>女</div>
  			</li>
  			<div class="cf"></div>
  		</ul>
	</div>

  	<bottomBtn @click.native="goCreatSuccess" value="完成注册" color="orange" class="bottomBtn bgImg"></bottomBtn>
  </div>
</template>

<script>
	import Vue from 'vue'	
	import VueResource from 'vue-resource'	
	Vue.use(VueResource)

	import headerLg from "../components/header-lg.vue"
	import bottomBtn from "../components/bottomBtn.vue"
	export default{
		name:'CreatFinish', //name 一般用于排错，显示出错组件的name 
		components:{
			headerLg,
			bottomBtn,
		},
		data(){
			return {
				name:'',
				mobile:'',
				sex:'',
			}
		},
		methods:{
			goCreatSuccess:function(){
				//一般判断name和mobile字段不为空用.length>0判断，!=''判断会更耗时
				// if( this.name !='' && this.mobile !='' ){
				// 	var formData = new FormData();
				// 	formData.append('sex', this.sex)
				// 	formData.append('name', this.name)
				// 	formData.append('mobile', this.mobile)
				// 	formData.append('examTime', this.$parent.examTime)
				// 	formData.append('preExamDay', this.$parent.preExamDay)

				// 	this.$http.post("http://" + this.$store.state.serverIP +"/json/post_reguser.php", formData).then(function(response){
				// 		if(response.data == '1'){
				// 			this.$router.push({path:'/CreatSuccess'})
				// 		}
				// 	},function(){
				// 		this.$router.push({ path:'/ErrorPage' })
				// 	})
				// }

				this.$router.push({path:'/CreatSuccess'})
			},
			sexSelect:function(id){
				var obj = document.getElementsByClassName('sex')
				for (var i = 0; i<obj.length; i++){
					obj[i].setAttribute("class","sex noactive")
				}	
				document.getElementById(id).setAttribute("class","sex active")
			},
		} 
	}
</script>

<style lang="less" scoped>
@import '../assets/css/main.less';
#CreatFinish{
	width: 100%;
	background: @bgColor;
}
.bgImg{
	background: url('../assets/img/opacity.png');
}
.inputs{
	border: 1px solid @gray-lighter;
	width: 100%;
	height: 35px;
	border-radius: 10px;
	margin: 15px 0 15px 0;
	outline: none;
	text-indent: 10px;
}

.sexBox{
	padding: 0 0 50px 30px;
}
.ready { 
	li{
		float: left;
		height: 60px;
		width: 60px;
		margin-right: 3px;
		padding: 5px;
		font-size: @font-size-lmd;
		letter-spacing: 1px;
		div{
			width: 60px;
			height: 60px;
			line-height: 60px;
			text-align: center;
			background: #fcf;
		}
	}
	
	.active{
		border: 1px solid @green;
		div{
			background: @green;
			color: @white;
		}
	}
	.noactive{
		border: 1px solid #C9EADE;
		div{
			background: @gray-light;
			color: @white;
		}
	}
}

</style>














