<template>
  <div>
    <video id="videoItem" class="video-js vjs-big-play-centered">
      <source :src="videoSrc" />
    </video>
  </div>
</template>

<script>
import videoJs from "video.js"
import "videojs-contrib-hls"

export default {
  name: "VideoPlaying",
  props: {
    videoSrc: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      videoOptions: {
        controls: true,
        autoplay: false,
        preload: "auto",
        playbackRates: [0.5, 1, 1.5, 2]
      }
    }
  },
  mounted() {
    videoJs("videoItem", this.videoOptions, function() {
      // this.play()
    })
  }
}
</script>

<style scoped>
@import "~video.js/dist/video-js.css";
</style>