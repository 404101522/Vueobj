<template>
<div>
  <keep-alive>
 
    <detail-header
   
    ></detail-header>

</keep-alive>
 

  <detail-banner  :sightName='sightName' :bannerImg='bannerImg' :gallaryImgs='gallaryImgs'></detail-banner>

<detail-list :list='list'></detail-list>


  <div class="content"></div>
</div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
name:'detail',
components:{
   DetailBanner,DetailHeader,DetailList 
},
data(){
  return {
    show:true,
    
     
        sightName:'',
        bannerImg:'',
        gallaryImgs:[],
        list:[]
  }
},
mounted(){
  this.getDetailInfo()
},
methods:{
getDetailInfo(){
axios.get('/api/detail.json',{
  params:{
    id:this.$route.params.id
  }
})
  .then(this.handleGetDataSucc)
},
handleGetDataSucc(res){
  res=res.data
  if(res.ret && res.data){
    const data=res.data
    this.sightName=data.sightName
    this.bannerImg=data.bannerImg
    this.gallaryImgs=data.gallaryImgs
    this.list=data.categoryList
   // console.log(this.list)
  }
}
}
}




</script>

<style lang='stylus' scoped>
.content
  height:50rem

</style>
