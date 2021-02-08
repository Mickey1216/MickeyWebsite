<template>
  <div>
    <search @searchevent="search" />
    <list :searchTextRes="searchResList" @play="playMusic" />
    <page-bar :totalNum="total" @newPageReq="goNewPageRes" :resetFlag="resetFlag"/>
    <player :musicSrc="musicSrc" />
    <loading :changeStatus="changeStatus"/> 
  </div>
</template>

<script>
import Search from "components/music/Search";
import List from "components/music/List";
import PageBar from "components/music/PageBar";
import Player from "components/music/Player";
import Loading from "components/common/Loading";
import { request } from "network/request";

export default {
  name: "Music",
  data() {
    return {
      searchResList: [],
      oldSearchText: "",
      total: 0,
      musicSrc: "",
      changeStatus:false,
      resetFlag:false
    };
  },
  components: {
    Search,
    List,
    PageBar,
    Player,
    Loading
  },
  methods: {
    search(searchText) {
      this.changeStatus = true
      request({
        url: "/music/list?key=" + searchText + "&pageNo=1&pageSize=20"
      }).then(res => {
          this.searchResList = res.list
          this.total = res.total
          this.oldSearchText = searchText
          this.changeStatus = false
          this.resetFlag = true
          console.log(res);
          
      }).catch(err => {});
    },

    playMusic(rid) {
      this.changeStatus = true
      this.resetFlag = false
      request({
        url: "/music/link?rid=" + rid
      }).then(res => {
          this.musicSrc = res
          this.changeStatus = false
          this.$store.commit("updatePlayingRid",rid)
      }).catch(err => {});
    },

    goNewPageRes(currentIndex) {
      this.changeStatus = true
      this.resetFlag = false
      
      request({
        url:"/music/list?key=" + this.oldSearchText + "&pageNo=" + currentIndex + "&pageSize=20"
      }).then(res => {
          this.searchResList = res.list
          this.changeStatus = false
      }).catch(err => {});
    },

  }
};
</script>

<style>

</style>