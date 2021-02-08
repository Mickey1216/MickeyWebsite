<template>
  <div>
    <!-- 表单标题 -->
    <div id="listBar">
      <span id="listBarIndex">序号</span>
      <span id="listBarMusic">歌曲</span>
      <span id="listBarSinger">歌手</span>
      <span id="listBarAlbum">专辑</span>
      <span id="listBarTime">时长</span>
    </div>
    <!-- 表单项（行） -->
    <ul v-for="(data,i) in searchTextRes" :key="i">
      <li>
        <list-item :dataRow="data" :index="i+1" @playerEvent="play"/>
      </li>
    </ul>
  </div>
</template>

<script>
import ListItem from "components/music/ListItem";
export default {
  name: "List",
  props: ["searchTextRes"],
  data() {
    return {
    }
  },
  components: {
    ListItem
  },
  methods:{
      play(rid){
          this.$emit('play',rid)
      }
  }
};
</script>

<style scoped>
#listBar {
  border-bottom: 1px solid gray;
  height: 40px;
  line-height: 40px;
  width: 1300px;
  margin: 10px auto 10px auto;
  display: flex;
  font-size: 16px;
  color: rgb(90, 93, 90);
}

#listBarIndex {
  flex: 0.9;
}

#listBarMusic {
  flex: 9;
}

#listBarSinger,
#listBarAlbum,
#listBarTime {
  flex: 2.4;
}

li{
    list-style: none;
}
</style>