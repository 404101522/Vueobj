<template>
<div class="wrapper">
     <swiper :options="swiperOption"  v-if='showSwiper'>
    <!-- v-if='list.length'   解决初次空数组时会显示第四张，当数据出现时才创建 不优雅 换成计算属性 showSwiper-->
    <!-- slides -->
    <swiper-slide v-for='(item,index) of list' :key='index'> <img class='swiper-img' :src="item" alt=""></swiper-slide>
    <!-- Optional controls 用于显示滚动叶下方的小点，需要在组件date里面将class名配置进去-->
    <div class="swiper-pagination"  slot="pagination"></div>

  </swiper>
  </div>
</template>

<script>
export default {
name:'HomeSwiper',
props:{
  list:Array
},
data(){
    return {
        swiperOption:{
          pagination:'.swiper-pagination',
          loop:true,
          autoplay:5000,
  //滑动速度
 speed: 800,

        }
        
    }
},
computed:{
  showSwiper(){
    return this.list.length
  }
}
}


//解决swiper低网速加载的抖动
//用样式穿透，解决小圆点样式修改
</script>

<style lang='stylus' scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background :#fff !important
.wrapper
  overflow:hidden
  width:100%
  height:0
  padding-bottom :26.66%
  background :#eee
  .swiper-img
    width:100%



</style>
