<template>
    <div class='list' ref='wrapper'>
        <div>
<div class="area border-topbottom">
    <div class="title ">当前城市</div>
    <div class="button-list">
        <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
        </div>
    </div>
</div>
<div class="area border-topbottom">
    <div class="title">热门城市</div>
    <div class="button-list">
        <div class="button-wrapper" v-for='item of hot' :key='item.id' 
        @click='handleCityClick(item.name)'
        >
            <div class="button">{{item.name}}</div>
        </div>
      

    </div>




    
</div>
<div class="area" v-for="(item,key) of cities" :key='key' :ref='key'>
    <div class="title border-topbottom">{{key}}</div>
  <div class="item-list">
      <div class="item border-bottom"
      v-for='innerItem of item'
      :key='innerItem.id'
       @click='handleCityClick(innerItem.name)'
      >
      {{innerItem.name}}
      </div>
      
  </div>


</div>






</div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
name:'CityList',
props:{
  hot:Array,
  cities:Object,
  letter:String
},
mounted(){
    this.scroll=new Bscroll(this.$refs.wrapper)
},
watch:{
  letter (){
   // console.log(this.letter)
  if(this.letter){   //如果不为空
   const element=this.$refs[this.letter][0]
   this.scroll.scrollToElement(element)
  }


  }

},
methods:{
    handleCityClick(city){
     this.$store.dispatch('changeCity',city)
    this.$router.push('/')
    }
}
}


//为了让一像素边框显示清楚  用了伪类
//overflow:hidden  如果有浮动 触发 它的bfc
</script>

<style lang='stylus' scoped>
.border-topbottom
  &:before 
    border-color:#ccc
  &:after 
    border-color:#ccc

.border-bottom
  &:before 
    border-color:#ccc
.list 
  overflow :hidden
  position :absolute
  left:0 
  right:0
  bottom:0
  top:1.58rem
.title
  line-height :.54rem 
  font-size :.26rem
  padding-left:.2rem 
  background :#eee
  color:#666
.button-list
  overflow:hidden
  padding:.1rem 
  .button-wrapper
    width:33.33%
    float:left
    .button 
      margin:.1rem 
      padding:.06rem
      border-radius:.06rem
      border:.02rem solid #ccc 
      text-align :center
.item-list
  .item
    line-height :.76rem
    padding-left:.2rem 


</style>
