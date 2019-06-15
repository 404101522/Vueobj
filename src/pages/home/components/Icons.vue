<template>
    <div class='icons'>

      <swiper :options="swiperOption" v-if='showSwiper'>   
     <swiper-slide v-for='(page,index) of pages' :key='index'>  
      <div class="icon" v-for='(item,i) of page' :key='i'>
          <div class="icon-img">
            <img class='icon-img-content' :src="item.imgUrl" alt="">
          </div>
          <p class='icon-desc'>{{item.title}}</p>
      </div>
   </swiper-slide>   

       <!-- Optional controls 用于显示滚动叶下方的小点，需要在组件date里面将class名配置进去-->
    <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>

    </div>
</template>

<script>
export default {
name:'HomeIcons',
props:{
  list:Array
},
data(){
    return {
        swiperOption:{
             pagination:'.swiper-pagination',
             autoplay:false,
          loop:true  
        }
    
    }
},
computed:{
  pages(){
      const pages=[]
     this.list.forEach((item,index)=>{
      const page=Math.floor(index/8)
      if(!pages[page]){
          pages[page]=[]
      }
      pages[page].push(item)

     })
    return pages
  },
  showSwiper(){
     return this.list.length

  }

}
}




//限制icon的高度  height:0
//让图片居中   height:100%  display :block  margin:0 auto
//swiper-container 自带overflow：hidden
//文本超出显示点点点  overflow :hidden   white-space:nowrap  text-overflow :ellipsis
//封装自己的样式 ellipsis()     @import '~styles/mixins.styl'  显示点点点
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height:0
    padding-bottom :50%
      
  .icon
    position :relative
    overflow:hidden
    width:25%
    height:0
    float:left
    padding-bottom :25%
    .icon-img
      position :absolute
      top:0
      left:0
      right:0
      bottom:.44rem
      box-sizing :border-box
      padding-top:.2rem
      .icon-img-content
        display:block
        margin:0 auto
        height:100%
    .icon-desc
      position :absolute
      left:0
      right:0
      bottom:0
      height:.44rem
      line-height:.44rem  
      color:$darkTextColor
      text-align :center 
      overflow :hidden  
      white-space:nowrap
      text-overflow :ellipsis
      ellipsis()
</style>
