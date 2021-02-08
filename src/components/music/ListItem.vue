<template>
<div class="listRow" :class="{playingRowClass:isPlayingRow}">
    <!-- 序号 -->
    <div class="listRowIndex">{{ index }}</div>
    <!-- 歌曲 -->
    <div class="listRowName">
        <i class="iconfont icon-bofang" title="播放" @click="playerClick"></i>&nbsp; 
        <a href="javascript:;" @click="playerClick">{{ dataRow.name }}</a>&nbsp; &nbsp;     
        <i class="fa fa-music" v-if="isPlayingRow" :class="{'fa-spin':isPlayingSpin}"></i>
    </div>
    <!-- 观看mv -->
    <div class="listRowOperation">
        <i class="iconfont icon-shexiangji" title="观看MV" v-show="parseInt(dataRow.hasmv)" @click="MVClick"></i>
    </div>
    <!-- 歌手 -->
    <div class="listRowSinger">{{ dataRow.artist }}</div>
    <!-- 专辑 -->
    <div class="listRowAlbum">{{ dataRow.album }}</div>
    <!-- 播放时长 -->
    <div class="listRowTime">{{ dataRow.songTimeMinutes }}</div>
</div>
</template>

<script>
export default {
    name:'ListItem',
    props:['dataRow','index'],
    data(){
      return {
      }
    },
    computed:{
        isPlayingRow(){
            return this.dataRow.rid === this.$store.state.moduleMusic.playingRid
        },
        isPlayingSpin(){
            return this.$store.state.moduleMusic.playerStatus
        }
    },
    methods:{
      playerClick(){
        this.$emit('playerEvent',this.dataRow.rid)
      },
      MVClick(){
        window.open('http://www.kuwo.cn/mvplay/' + this.dataRow.rid,'_blank')
      }
    }
}
</script>

<style scoped>
.listRow{
    border: 1px solid rgb(235, 238 ,245);
    height: 50px;
    width: 1300px;
    margin: 0 auto;
    display: flex;
    font-size: 14px;
    align-items: center;
}

.listRow:hover,.playingRowClass{
    background: rgb(242, 242, 242);
}

.listRowIndex{
    flex: 1;
}
.listRowName{
    flex: 10;
    display: flex;
    align-items: center;
    overflow: hidden;
}
.listRowName>i{
    font-size: 18px;
    color: rgb(153, 153, 153);
}
.listRowName>i:first-child{
    cursor: pointer;
}
.listRowName>i:hover:first-child{
    color: rgb(102, 102, 102);
}
.listRowName>i:last-child{
    margin-left: 20px;
}
.listRowName>a{
    color: black;
    text-decoration: none;
}
.listRowName>a:hover{
    text-decoration: underline;
}

.listRowSinger, .listRowAlbum, .listRowTime{
    flex: 3;
}

.listRowOperation{
    flex: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
}
.listRowOperation>i{
    text-align: center;
    font-size: 18px;
    color: rgb(153, 153, 153);
    cursor: pointer;
}
.listRowOperation>i:hover{
    color: rgb(102, 102, 102);
}

.listRowOperation>i:last-child{
    margin-left: 10px;
}
</style>