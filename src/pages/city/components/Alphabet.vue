<template>
    <ul class="list">
        <li class="item" 
        v-for='item of letters' :key='item'
        :ref='item'
        @click='handleLetterClick'
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        >
        {{item}}
        </li>
        
    </ul>
</template>

<script>
export default {
name:'CityAlphabet',
props:{
    cities:Object
},
data(){
    return{
      touchStatus:false,     //标识位
      startY:0,
      timer:null   
    }
},
updated(){
    this.startY=this.$refs['A'][0].offsetTop
   //当页面被重新渲染就会执行钩子
},
computed:{
  letters(){
    const letters=[]
    for (let i in this.cities){
        letters.push(i)
    }
     return letters
  }

},
methods:{
    handleLetterClick(e){
   //  console.log(e.target.innerText)
   this.$emit('change',e.target.innerText)
    },
    handleTouchStart(){
     this.touchStatus=true
    },
     handleTouchMove(e){
           if(this.touchStatus) {

          if(this.timer){
            clearTimeout(this.timer)  
          }
          this.timer=setTimeout( ()=>{
           const startY=this.startY
           const touchY=e.touches[0].clientY-79
           const index=Math.floor((touchY-startY)/20)
           //console.log(index)
           if(index>=0 && index< this.letters.length){
            this.$emit('change',this.letters[index])

           }
          },16)   
          //函数节流提高性能
          
        } 
        
    },
     handleTouchEnd(){
         this.touchStatus=false
    }
}
}


// @touchstart.prevent   添加了修饰符 prevent  阻止了滑动 屏幕跟着下滚动
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.list
  position :absolute
  display :flex 
  flex-direction :column
  justify-content :center 
  top:1.58rem 
  right:0 
  bottom:0 
  width:.4rem 
  .item
    text-align :center 
    line-height :.44rem
    color:$bgColor
</style>
