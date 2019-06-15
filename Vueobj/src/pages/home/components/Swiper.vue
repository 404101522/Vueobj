<template>
<div class="wrapper">
     <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide v-for='item of swiperList' :key='item.id'> <img class='swiper-img' :src="item.imgUrl" alt=""></swiper-slide>
    <!-- Optional controls 用于显示滚动叶下方的小点，需要在组件date里面将class名配置进去-->
    <div class="swiper-pagination"  slot="pagination"></div>

  </swiper>
  </div>
</template>

<script>
export default {
name:'HomeSwiper',
data(){
    return {
        swiperOption:{
          pagination:'.swiper-pagination',
          loop:true  
        },
        swiperList:[
            {
                id:'0001',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
            },
                {
                id:'0002',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/5a613f91d1e95a8442fa128957565be8.jpg_750x200_7ad50d73.jpg'
            }
        ]
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
