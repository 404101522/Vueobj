<template>
    <div>
<home-header></home-header>
<home-swiper :list='swiperList'></home-swiper>
<home-icons :list='iconList'></home-icons>
<home-recommend :list='recommendList'></home-recommend>
<home-weekend :list='weekendList'></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
//引入axios
import axios from 'axios'
export default {
   name:'Home',components:{
       HomeHeader,HomeSwiper,HomeIcons,HomeRecommend,
       HomeWeekend
   },
  
   mounted(){
       this.getHomeInfo()
   },
   methods:{
      getHomeInfo(){
          axios.get('/api/index.json')
          .then(this.getHomeInfoSucc)
          
      } ,
      getHomeInfoSucc(res){
          //如果正确返回，并且有数据
          //解决了data数据在data里面的问题哦
         
          if(res.data.ret && res.data){
              res=res.data
           const data=res.data
           //this.city=data.city
           this.swiperList=data.swiperList
           this.iconList=data.iconList
           this.recommendList=data.hotList
           this.weekendList=data.weekendList
           console.log(data)
          }
         
      }

   },
   data(){
       return {
          // city:'',
           swiperList:[],
           iconList:[],
           recommendList:[],
           weekendList:[]
       }
   }
}
</script>

<style>

</style>
