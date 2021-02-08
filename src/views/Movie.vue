<template>
  <div>
      <video-playing :videoSrc="videoSrc"/>
  </div>
</template>

<script>
import VideoPlaying from 'components/common/VideoPlaying'
export default {
    name:'Movie',
    data(){
        return {
            videoSrc:'https://chaoqing.dong-zuida.com/20210123/811_c9426e6b/index.m3u8'
        }
    },
    components:{
        VideoPlaying
    }
}
</script>

<style>

</style>