<template>
  <div id="nav">
    <router-view></router-view>
  </div>
</template>

<script>
import Music from 'views/Music'
import Movie from 'views/Movie'
import Tool from 'views/Tool'

export default {
  name:'App',
  components:{
    Music,
    Movie,
    Tool
  }
}
</script>

<style>
/* css样式初始化 */
*, body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}
</style>
