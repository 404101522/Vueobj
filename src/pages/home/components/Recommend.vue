<template>
<div>
    <div class='title'>热销推荐</div>
<ul>
    <router-link tag='li' to='/detail/1' class='item border-bottom' v-for='(item,index) of list' :key='index'>
        <div class="item-img-wrapper">
            <img class='item-img' :src="item.imgUrl" />
        </div>
        <div class='item-info'>
            <p class='item-title'>{{item.title}}</p>
            <p class='item-desc'>{{item.price}}</p>
            <button class='item-button'>查看详情</button>
        </div>
    </router-link>
</ul>
</div>    
</template>

<script>
export default {
name:'HomeRecommend',
props:{
  list:Array
},
data(){
    return {
      
    }
}

}


//给item-info 添加 min-width:0 解决 点点点不显示
</script>

<style lang='stylus' scoped>
@import '~styles/mixins.styl'
.title
  line-height:.8rem 
  background :#eee 
  text-indent:.2rem 
.item
  height 1.9rem
  display :flex 
  overflow :hidden
  .item-img
    width:1.7rem 
    height:1.7rem 
    padding:.1rem 
.item-info
      flex:1
      padding:.1rem 
      min-width:0
 .item-title
        line-height:.54rem 
        font-size:.32rem 
        ellipsis()
 .item-desc 
        line-height :.4rem 
        color:#ccc
        ellipsis()
 .item-button
   line-height :.44rem 
   margin-top:.16rem
   background :#ff9300 
   padding:0 .2rem 
   border-radius:.06rem     
   color:#fff    

</style>
