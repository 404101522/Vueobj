<template>
     <div class='header'>城市选择
         <router-link to='/'>
     <div class='iconfont header-back'>&#xe663;</div>
     </router-link>
         </div> 
</template>

<script>
export default {
name:'CityHeader'
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.header
  line-height:$headerHeight
  position :relative
  color:#fff 
  overflow:hidden 
  text-align :center 
  background :$bgColor
  font-size :.32rem
 .header-back
   position :absolute
   width:.64rem 
   font-size :.4rem
   text-align :center
   top:0
   left:0
   color:#fff

</style>
