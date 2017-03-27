<template>
  <div id="app">
    <transition name='fade' mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

// import store from './store/index.js'
// import router from './router/router.js'// 暂时将路由加到App.vue中测试

export default {
  name: 'app',
  // router, //若在此引入 router.js文件，则在下面使用router时不能加"this.$; 若在main.js中引入router.js文件，则需加上"this.$ "

  // store,  //store亦然，此处引入不能加"this.$", 在main.js中引入则需加'this.$'
  beforeCreate:function(){
   if(this.$store.state.snum == 1 ){
     this.$router.push({ path: '/' })
   }else{
     this.$router.push({ path:'/Creat' })
   }
  }
}
</script>

<style lang="less">
@import './assets/css/main.less';
@import './assets/css/animate.min.css';

// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
