import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import index from '../page/index.vue'
import Creat from '../page/Creat.vue'
import CreatSelect from '../page/CreatSelect.vue'
import CreatFinish from '../page/CreatFinish.vue'
import CreatSuccess from '../page/CreatSuccess.vue'
import Review from '../page/Review.vue'

const routes=[ // 此处不能用 ':'
	{path:'/',component:index},
	{path:'/Creat',component:Creat},
	{path:'/CreatSelect',component:CreatSelect},
	{path:'/CreatFinish',component:CreatFinish},
	{path:'/CreatSuccess',component:CreatSuccess},
	{path:'/Review',component:Review},
]

export default new VueRouter({
	mode:'history',
	base:__dirname,
	routes
})





