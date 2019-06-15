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
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
//引入字体图标



Vue.config.productionTip = false
FastClick.attach(document.body)
//移动端触碰事件300毫秒延迟  i fastclick  然后使用
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
