<template>
<div>
        <div class="banner" @click='handleBannerClick'>
        <img class='banner-img' src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
    <div class="banner-info">
        <div class="banner-title">故宫(AAAAA景区)</div>
        <div class="banner-number"> <span class='iconfont banner-icon'>&#xe7b3;</span>8</div>
    </div>
    
    </div>

<common-gallary :imgs='imgs' v-show='showGallary' @close='handleGallaryClose'></common-gallary>

    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
name:'DetailBanner',
components:{
    CommonGallary          //画廊组件
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
        imgs:['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg',
            'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg'

          ],
          showGallary:false
    }
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
</style>
