import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'



Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name:'Home',
      component:Home
    },
    {
      path: '/city',
      name:'city',
      component:City
    },
    {path:'/detail/:id',
      name:'detail',
      component:Detail,
     
  }
  ],
  scrollBehavior(to,from ,savedPosition){      //让每一次路由切换 位置都在最顶部
    return {x:0 ,y:0}
  }
})
