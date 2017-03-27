import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var state = {
	leftMenuShow:false,
	snum:'1',
	headimgurl:'../assets/img/tazha.jpg',
	name: "Tractore",
	notice: "100",
	memory: "43",
	xp: "25",
	percent:"65",
	reviewShow:1,
}

const getters = {
	stime:function(){
		var mydata = new Date();
		return mydata.getTime()
	},
}

const mutations = {
	go(state,n){
		n[0].push({ path: '/'+n[1] })
	}
}

// var xhr,state
// xhr = new XMLHttpRequest()

// xhr.open('GET','http://192.168.0.1/json/users.php',true);
// xhr.send();

// xhr.onreadystatechange = function(){
// 	if( xhr.readyState == 4 && xhr.status == 200 ){
// 		state = eval("(" + xhr.responseText + ")")
// 	}else{
// 		state = { serverIP:0 }
// 	}
// }



export default new Vuex.Store({
	state,
	getters,
	mutations,
})











