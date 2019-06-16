<template>
    <div>
  <router-link tag='div' to='/' class="header-abs"
  v-show='showAbs'   
  > <span class='iconfont header-abs-back'>&#xe663;</span></router-link>
  <div class="header-fixed"
    v-show='!showAbs'  
    :style='opacityStyle'
  >

         <router-link to='/'>
     <div class='iconfont header-fixed-back'>&#xe663;</div>
     </router-link>
       景点详情  

  </div>
    </div>
</template>

<script>
export default {
name:'DetailHeader',
data(){
    return {
          showAbs:true ,
          opacityStyle:{
              opacity:0
          } 
    }
},
activated:function(){    //我们用了 keepalive   ，所以页面一被展示 就会执行
  window.addEventListener('scroll',this.handleScroll)
//console.log(1)
},
deactivated(){   //不写 事件将会在所有的组件中执行
 window.removeEventListener('scroll',this.handleScroll)
},
methods:{
  handleScroll(){
      const top=document.documentElement.scrollTop
    //  console.log(document.documentElement.scrollTop)
      if(top>60){
          let opacity=top/140
          opacity>1? 1 :opacity
          this.opacityStyle={
              opacity
          }
          this.showAbs=false
      }else{
           this.showAbs=true
      }
      
      
      
  }
}
}



//用  <keep-alive> 标签包裹的组件会被缓存
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.header-abs
  position :absolute
  left:.2rem 
  top:.2rem 
  width:.8rem 
  height:.8rem 
  border-radius :.4rem 
  background :rgba(0,0,0,.8)
  text-align :center 
  line-height :.8rem
  z-index :99
 .header-abs-back
   font-size:.4rem 
   color:#fff 
.header-fixed
  z-index :98
  line-height:$headerHeight
  position :fixed
  top:0
  left:0
  right:0
  color:#fff 
  text-align :center 
  background :$bgColor
  font-size :.32rem
 .header-fixed-back
   position :absolute
   width:.64rem 
   font-size :.4rem
   text-align :center
   top:0
   left:0
   color:#fff 
   




</style>
