<template>
    <div class="container" @click='handleGallaryClick'>
    <div class="wrapper">
         <swiper :options="swiperOption" >
    <!-- v-if='list.length'   解决初次空数组时会显示第四张，当数据出现时才创建 不优雅 换成计算属性 showSwiper-->
    <!-- slides -->
    <swiper-slide v-for='(item,index) of imgs' :key='index'> <img class='swiper-img' :src='item'>
    </swiper-slide >
    
    <!-- Optional controls 用于显示滚动叶下方的小点，需要在组件date里面将class名配置进去-->
    <div class="swiper-pagination"  slot="pagination"></div>

  </swiper>
    </div>
    </div>
</template>

<script>
export default {
 name:'Gallary',
 props:{
  imgs:{
      type:Array,
      default(){
          return ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg',
            'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg'

          ]
      }
  }
 },
 data(){
     return {
         swiperOption:{
             pagination:'.swiper-pagination',
             paginationType:'fraction',
             observeParents:true,
             observer:true     //这两个意思是，只要监听到自我或父级dom发生变化，自我刷新
                               //解决自我再次显示 计算宽度的bug
         }
     }
 },
 methods:{
     handleGallaryClick(){
         this.$emit('close')
     }
 }
}
</script>

<style lang='stylus' scoped>
.container >>> .swiper-container 
  overflow :inherit
.container
  z-index:99
  position :fixed
  top:0
  left:0
  right:0
  bottom:0
  background #000
  display :flex
  flex-direction :column
  justify-content :center
  .wrapper
    height:0
    width:100%
    padding-bottom:100%
    .swiper-img
       width:100%
    .swiper-pagination 
      color:#fff 
      bottom:-2rem  

</style>
