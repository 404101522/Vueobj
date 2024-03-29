// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
//引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入轮播插件
import 'styles/reset.css'
//1像素边框
import 'styles/border.css'
//引入的1像素边框直接使用类名 如 border-bottom 
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
//引入字体图标
//安装axios  npm i axios -S
//在static 下 mock 建 index.json 模拟数据
//配了 static/mock   不会提交到仓库里
//安装better-scroll   cnpm i better-scroll -S

//在 package.json 中添加  //添加--host 0.0.0.0    真机测试  
//输入 ipconfig  查看ip  

import store from './store'
//引入Vuex  vuex 需 安装 cnpm i vuex -S

//解决浏览器不支持 es6 Promise  解决 cnpm i babel-polyfill -S
import 'babel-polyfill'
//引入

//配置运行在后端的 project 目录下  index.js  中写  asseetsPublicPath:'/project'   


Vue.config.productionTip = false
FastClick.attach(document.body)
//移动端触碰事件300毫秒延迟  i fastclick  然后使用
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({

  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
