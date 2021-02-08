<template>
  <div class="player">
      <audio :src="musicSrc" autoplay="autoplay" controls="controls" v-show="player_show" :volume="initialVolume"
       @playing="updatePlayerStatus(true)" @pause="updatePlayerStatus(false)">
      </audio>
  </div>
</template>

<script>
export default {
    name:'Player',
    props:["musicSrc"],
    data(){
      return {
        player_show:false,
        initialVolume:0.2
      }
    },
    watch:{
      musicSrc(){
        if(this.musicSrc.search(/^http.+\.mp3$/) !== -1){
          this.player_show = true
        }
      }
    },
    methods:{
      updatePlayerStatus(status){
        this.$store.commit("updatePlayerStatus",status)
      }
    }
}
</script>

<style scoped>
  .player{
    position: fixed;
    bottom: 10px;
    left:10px;
  }
  
  audio{
    outline: none;
  }
</style>