// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import store from './store/index.js'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)



// require("!style!css!less!./assets/css/main.less");
// import("!style!css!less!./assets/css/main.less")

// import index from './page/index.vue'
// import Creat from './page/Creat.vue'

// // Vue.config.productionTip = false

// const router = new VueRouter({
// 	mode:'history',
// 	base:__dirname,
// 	routes:[
// 		{path:'/',component:index},
// 		{path:'/Creat',component:Creat},
// 	]
// })

/* eslint-disable no-new */
// var vm = new Vue({
//   el: '#app',
//   router,
//   store,
//   template: `
//   	<div>
//   		<transition name='fade' mode="out-in">
//   			<router-view></router-view>
//   		</transition>
//   	</div>
//   `,
//   beforeCreate:function(){
//   	if(this.$store.state.snum == 1 ){
//   		router.push({ path: '/' })
//   	}else{
//   		router.push({ path:'/Creat' })
//   	}
//   }
// })

import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router/router.js'// 暂时将路由加到App.vue中测试

new Vue({
  el:"#app",
  store,
  router,
  data:{
  	examTime:'2017-06-17',
  	preExamDay:'30',
  	come: 0,
  },
  render: xx => xx(App)
})



