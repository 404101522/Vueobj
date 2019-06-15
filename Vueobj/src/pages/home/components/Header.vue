<template>
    <div class="header">
        <div class="header-left">
            <div class='iconfont back-icon'>&#xe663;</div>
        </div>
        <div class="header-input"> <span class='iconfont'>&#xe613;</span>输入游玩/景点/主题</div>
        <div class="header-right">城市 <span class='iconfont arrow-icon'>&#xe64a;</span></div>
    </div>
</template>

<script>
export default {
name:'HomeHeader'
}


//2倍图 html font-size:50px  86/100 简化rem 计算
//共用代码抽离出来
//在css中引入 使用@  @import '~@/assets/styles/varibles.styl'
//配置别名  styles
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'

.header
  display:flex 
  line-height:.86rem
  background:$bgColor 
  color:#fff
  .header-left
   width .64rem
   .back-icon
    text-align:center
    font-size:.44rem
  .header-input
   background :#fff 
   border-radius :.1rem 
   margin-top :.12rem 
   margin-left :.12rem 
   padding-left:.2rem
   height:.64rem 
   line-height:.64rem 
   color:#ccc 
   flex:1
  .header-right
   width 1.24rem
   float:right
   text-align:center 
   .arrow-icon
    margin-left:-0.02rem
    font-size :.24rem

</style>
