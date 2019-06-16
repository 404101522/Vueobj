<template>
  <div id="app">
    <keep-alive exclude='Detail'>
   <router-view/>
    </keep-alive>
 
  </div>
</template>

<script>
export default {

  name: 'App'
}

//  exclude='Detail'   除了详情页 其它都会被缓存
</script>

<style>



</style>
