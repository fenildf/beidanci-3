<template>
  <div id="CreatSelect" class="">
  	<header-lg bigTitle="CET-4" noteTitle="四级单词记忆管理"></header-lg>
  	<div class="selectPadding">
  		<div class="text-size-lg">选择考试时间</div>
  		<div class="padding-top-sm">
  			CET考试时间定于每年的六月12号的第三个周六
  		</div>
  	</div>	
  	<div class="selectPadding">
  		<div class="text-size-lg">
  			<span id='changText'>2017年</span>
  		</div>
  		<div class="padding-top-sm">
  			<span>选择其它考试时间</span>
  			<span class="more" @click="clickMore()">选择更多时间</span>
  		</div>
  	</div>

  	<div class="padding-sm radio-lg">
  		<ul>
  			<li class="radio active" id="2017-06-17" @click="dateSelect('2017-06-17')">
  				<div class="">
  					<p>2017年</p>
  					<p>6月17日</p>
  				</div>
  			</li>
  			<li class="radio noactive" id="2017-12-16" @click="dateSelect('2017-12-16')">
  				<div class="">
  					<p>2017年</p>
  					<p>12月16日</p>
  				</div>
  			</li>
  			<div v-show="radioMore">
  				<li class="radio noactive" id="2018-06-16" @click="dateSelect('2018-06-16')">
  				<div class="">
  					<p>2018年</p>
  					<p>6月17日</p>
  				</div>
	  			</li>
	  			<li class="radio noactive" id="2018-12-16" @click="dateSelect('2018-12-16')">
	  				<div class="">
	  					<p>2018年</p>
	  					<p>12月16日</p>
	  				</div>
	  			</li>
	  			<li class="radio noactive" id="2019-06-16" @click="dateSelect('2019-06-16')">
	  				<div class="">
	  					<p>2019年</p>
	  					<p>6月17日</p>
	  				</div>
	  			</li>
	  			<li class="radio noactive" id="2019-12-16" @click="dateSelect('2019-12-16')">
	  				<div class="">
	  					<p>2019年</p>
	  					<p>12月16日</p>
	  				</div>
	  			</li>
  			</div>
  			<div class="cf"></div>
  		</ul>
  	</div>

  	<div class="lastDiv padding-lg">
  		<div class="text-size-lg">预留备考时间</div>
  		<ul class='ready padding-top-sm'>
  			<li class="day active" id="90" @click="daySelect('90')">
  				<div>90天</div>
  			</li>
  			<li class="day noactive" id="60" @click="daySelect('60')">
  				<div>60天</div>
  			</li>
  			<li class="day noactive" id="30" @click="daySelect('30')">
  				<div>30天</div>
  			</li>
  			<div class="cf"></div>
  		</ul>
	</div>

  	<bottomBtn @click.native="go([$router,'CreatFinish'])" value="开始背单词" color="orange" class="bottomBtn bgImg"></bottomBtn>
  </div>
</template>

<script>
	
	import { mapMutations } from "vuex"
	import headerLg from "../components/header-lg.vue"
	import bottomBtn from "../components/bottomBtn.vue"
	export default{
		name:'CreatSelect', //name 一般用于排错，显示出错组件的name 
		components:{
			bottomBtn,
			headerLg
		},
		data:function(){
			return{
				radioMore:false
			}
		},
		methods:{
			...mapMutations([
					"go"
				]),
			
			dateSelect:function(id){
				var obj = document.getElementsByClassName('radio')
				for (var i = 0; i<obj.length; i++){
					obj[i].setAttribute("class","radio noactive")
				}
				document.getElementById(id).setAttribute("class","radio active")
				// document.getElementById('changText').innerHTML(innerText)
				//html中调用dateSelsct()括号内的参数需要加引号，否则其值与'id'不匹配，导致报错 setAttribute' of null
			},
			daySelect:function(id){
				var obj = document.getElementsByClassName('day')
				for (var i = 0; i<obj.length; i++){
					obj[i].setAttribute("class","day noactive")
				}	
				document.getElementById(id).setAttribute("class","day active")
			},
			clickMore:function(){
				// this.radioMore != radioMore;
				// 注意'='和'=='的区别，前者赋值，后者判断.
				if(this.radioMore == true){
					this.radioMore = false
				}else{
					this.radioMore = true
				}
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../assets/css/main.less';
#CreatSelect{
	width: 100%;
	// height: 1000px;
	background: @bgColor;
	// background: url('../assets/img/wangge.jpg');
}
.bgImg{
	background: url('../assets/img/opacity.png');
}
.more{
	color: @green;
}
.addHeight{
	height: 35px;
}
.selectPadding{
	padding: 15px 0 0 30px;
}
.lastDiv{
	margin-bottom: 55px;
}
.radio-lg{
	li{
		float: left;
		width: 40%;
		height: 120px;
		padding: 5px;
		font-size: @font-size-lmd;
		letter-spacing: 2px;
		margin-left: 15px;
		div{
			padding-top: 30px;
			text-align: center;
			height: 90px;
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





