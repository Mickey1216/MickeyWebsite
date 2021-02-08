<template>
  <div class="toolItem">
    <div class="leftSide">
      <div class="title">{{ items.toolTitle[0] }}</div>
      <div class="describe">{{ items.toolBrief[0] }}</div>
    </div>
    <div class="rightSide">
      <div class="linkBtn">
        <button @click="downloadClick" title="进入下载链接">按钮</button>
      </div>
      <div class="psw">
        <span>{{ items.toolPsw[0] }}</span>
        <i class="fa fa-copy" title="点击复制" @click="copy"/>
      </div>
    </div>
  </div>
</template>

<script>
import Clipboard from "clipboard";
export default {
  name: "ToolItem",
  data() {
    return {

    };
  },
  props: ["items"],
  methods: {
    downloadClick() {
      window.open(this.items.toolLink[0], "_blank");
    },
    copy(){
      //todo
    },
    
  }
};
</script>

<style>
.toolItem {
  display: flex;
  height: 90px;
  width: 800px;
  justify-content: center;
  margin: 0 auto;
  border: 1px solid rgb(204, 204, 204);
}

.leftSide,
.rightSide {
  flex: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 4px;
}

.title,
.linkBtn {
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bolder;
}

.title {
  border-bottom: 1px solid rgb(230, 230, 230);
}

.describe {
  color: rgb(102, 102, 102);
}

.describe,
.psw {
  flex: 2;
  font-size: 14px;
}

.rightSide {
  flex: 1;
  padding: 0;
  align-items: center;
  border-left: 1px solid rgb(220, 220, 220);
}

.linkBtn {
  flex: 2;
}

.linkBtn > button {
  height: 30px;
  width: 60px;
  border: 1px solid rgb(204, 204, 204);
  font-size: 12px;
  background: white;
  cursor: pointer;
  outline: none;
  border-radius: 3px;
}

.psw {
  flex: 1;
  padding-top: 2px;
}

.psw > span {
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  padding: 0 5px;
  font-size: 12px;
  color: rgb(96, 96, 96);
}

.psw > span:hover {
  background: rgb(244, 244, 244);
}

</style>