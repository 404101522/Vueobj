<template>
<div>
        <div class="banner" @click='handleBannerClick'>
        <img class='banner-img' :src="bannerImg" alt="">
    <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number"> <span class='iconfont banner-icon'></span>{{gallaryImgs.length}}</div>
    </div>
    
    </div>
<fade>
<common-gallary :imgs='gallaryImgs' v-show='showGallary' @close='handleGallaryClose'></common-gallary>
</fade>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import Fade from 'common/fade/Fade'
export default {
name:'DetailBanner',
components:{
    CommonGallary ,         //画廊组件
    Fade
},
methods:{
handleBannerClick(){
    this.showGallary=true
},
handleGallaryClose(){
     this.showGallary=false
}
},
data(){
    return {
  
          showGallary:false
    }
},
props:{
   sightName:String,
        bannerImg:String,
        gallaryImgs:Array
}
}



//底部的渐变效果    background-image :linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
</script>

<style lang='stylus' scoped>
.banner
  height:0
  position :relative
  overflow:hidden
  padding-bottom:55%
  .banner-img
    width:100%
  .banner-info
    position :absolute
    color:#fff
    left:0
    right:0
    bottom:0
    line-height :.6rem
    display :flex
    padding:0 .4rem
    background-image :linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
    .banner-title
      flex:1
      font-size:.32rem
    .banner-number
      height:.4rem 
      line-height :.4rem 
      margin-top:.14rem
      border-radius :.2rem 
      padding:0 .2rem 
      background :rgba(0,0,0,.8)
      font-size:.24rem 
      .banner-icon
        font-size:.24rem
        letter-spacing :.1rem
</style>
