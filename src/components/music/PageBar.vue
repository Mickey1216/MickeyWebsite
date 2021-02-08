<template>
  <div class="pageBar">
    <span>一共 {{ totalNum }} 条数据</span>
    <button
      @click="btnBackward"
      :disabled="atBeginning"
      class="btnClass"
      :class="{btnDisable: atBeginning}"
    >&lt;</button>
    <button
      @click="jumpClicked(i)"
      :disabled="isShowingIndexOrMore(i, 'disable') || isMoreSymbol(i)"
      v-for="(i,index) in btnsText"
      class="btnClass"
      :key="index"
      :class="[{btnDisable: isShowingIndexOrMore(i, 'disable')},
                 {highLighted: isShowingIndexOrMore(i, 'highlight')}]"
    >{{ i }}</button>

    <button
      @click="btnForward"
      :disabled="atEnding"
      class="btnClass"
      :class="{btnDisable: atEnding}"
    >></button>

    <div class="goPage">
      前往&nbsp;
      <input type="text" class="goPageInput" v-model="flyNum" />&nbsp;页
      <button class="goPageBtn" @click="flyClicked">GO</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageBar",
  props: {
    totalNum: {
      type: [Number,String],
      required: true
    },
    resetFlag: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      pageNum: 20,
      pagesNeedNum: 1,
      currentIndex: 1,
      arrayIndex: 0,
      btnsText: [],
      flyNum: 1,
      flyFlag: false
    };
  },
  computed: {
    isShowingIndexOrMore() {
      return (i, doing) => {
        return doing === "disable"
          ? i === this.currentIndex || i === "..."
          : i === this.currentIndex;
      };
    },
    isMoreSymbol() {
      return i => {
        return i === "...";
      };
    },
    atBeginning() {
      return this.currentIndex === 1;
    },
    atEnding() {
      return this.currentIndex === this.pagesNeedNum;
    }
  },
  watch: {
    totalNum() {
      this.btnsText = [];
    //this.pagesNeedNum = Math.floor(this.totalNum / this.pageNum) + (this.totalNum % this.pageNum ? 1 : 0)
      if(this.totalNum % this.pageNum === 0){
          this.pagesNeedNum = this.totalNum / this.pageNum
      }else{
          this.pagesNeedNum = Math.floor(this.totalNum / this.pageNum) + 1;
      }

      if (this.pagesNeedNum <= 4)
        for (let i = 1; i <= this.pagesNeedNum; i++) {
          this.btnsText.push(i);
        }
      else {
        this.btnsText.push(1, 2, 3, 4, "...", this.pagesNeedNum);
      }
    },
    resetFlag() {
      if (this.resetFlag) {
        this.currentIndex = 1;
        this.arrayIndex = 1;
      }
    },
    currentIndex() {
      this.currentIndex = parseInt(this.currentIndex);
      this.arrayIndex = parseInt(this.arrayIndex);

      if (this.flyFlag) {
        this.btnsText = [];
        this.btnsText.push(1);

        if (this.currentIndex > 3) this.btnsText.push("...");

        if (this.currentIndex === 1) this.btnsText.push(2, 3, 4);
        else if (this.currentIndex === 2)
          this.btnsText.push(
            this.currentIndex,
            this.currentIndex + 1,
            this.currentIndex + 2
          );
        else if (this.currentIndex === this.pagesNeedNum - 1)
          this.btnsText.push(
            this.currentIndex - 2,
            this.currentIndex - 1,
            this.currentIndex
          );
        else if (this.currentIndex === this.pagesNeedNum)
          this.btnsText.push(
            this.currentIndex - 3,
            this.currentIndex - 2,
            this.currentIndex - 1
          );
        else
          this.btnsText.push(
            this.currentIndex - 1,
            this.currentIndex,
            this.currentIndex + 1
          );

        if (this.currentIndex < this.pagesNeedNum - 2)
          this.btnsText.push("...");

        this.btnsText.push(this.pagesNeedNum);
      }
      //判断当前新按钮状态的两侧是否有多余标志
      else if (
        this.btnsText[this.arrayIndex - 1] === "..." ||
        this.btnsText[this.arrayIndex + 1] === "..."
      ) {
        let copiedArr = JSON.parse(JSON.stringify(this.btnsText)); //深拷贝一份旧按钮信息
        this.btnsText = []; //清空所有按钮
        this.btnsText.push(1); //肯定会有的第一

        let flag_1 = 0;
        if (copiedArr[this.arrayIndex] - 2 > 1) {
          //判断是否需要前置多余
          this.btnsText.push("...");
          flag_1 = 1; //占位标志
        }

        if (copiedArr[this.arrayIndex] === this.pagesNeedNum)
          //处理点击最后
          this.btnsText.push(
            this.pagesNeedNum - 3,
            this.pagesNeedNum - 2,
            this.pagesNeedNum - 1
          );
        else if (copiedArr[this.arrayIndex] === 1)
          //处理点击最先
          this.btnsText.push(2, 3, 4);
        //中间点击处理
        else
          this.btnsText.push(
            copiedArr[this.arrayIndex] - 1,
            copiedArr[this.arrayIndex],
            copiedArr[this.arrayIndex] + 1
          );

        if (copiedArr[this.arrayIndex] + 2 < this.pagesNeedNum) {
          //判断是否需要表示后部多余
          this.btnsText.push("...");
        }

        this.btnsText.push(this.pagesNeedNum); //肯定会有的最后

        if (copiedArr[this.arrayIndex] <= 2)
          this.arrayIndex = copiedArr[this.arrayIndex] - 1;
        else if (copiedArr[this.arrayIndex] >= this.pagesNeedNum - 1)
          this.arrayIndex =
            flag_1 + 3 + copiedArr[this.arrayIndex] - this.pagesNeedNum + 1;
        else this.arrayIndex = flag_1 + 2; //重置当前活跃页面在数组中的位置
      }
    },
    flyNum() {
      this.flyNum = this.flyNum.replace(/^0|\D/g, "");
    }
  },
  methods: {
    btnForward() {
      this.currentIndex++;
      this.arrayIndex++;

      this.flyFlag = false;
      this.$emit("newPageReq", this.currentIndex);
    },
    btnBackward() {
      this.currentIndex--;
      this.arrayIndex--;

      this.flyFlag = false;
      this.$emit("newPageReq", this.currentIndex);
    },
    jumpClicked(i) {
      this.currentIndex = i;

      for (let item in this.btnsText)
        if (this.btnsText[item] === i) {
          this.arrayIndex = item;
          break;
        }

      this.flyFlag = false;
      this.$emit("newPageReq", this.currentIndex);
    },
    flyClicked() {
      if (
        this.flyNum > this.pagesNeedNum ||
        parseInt(this.flyNum) === this.currentIndex
      ) {
        return;
      }

      this.currentIndex = this.flyNum;
      this.flyFlag = true;
      this.$emit("newPageReq", this.currentIndex);
    }
  }
};
</script>

<style scoped>
.pageBar {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(96, 96, 96);
  font-size: 16px;
  margin: 30px 0;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.pageBar > span:first-child {
  margin-right: 30px;
}

.btnClass {
  height: 38px;
  width: 38px;
  cursor: pointer;
  border: none;
  background: white;
  outline: none;
  font-size: 16px;
  font-weight: bolder;
}

.btnClass:hover {
  color: rgb(64, 170, 255);
}

.highLighted {
  color: rgb(64, 170, 255);
}

.btnDisable {
  cursor: not-allowed;
}

.goPage {
  margin-left: 40px;
  display: flex;
  align-items: center;
  font-size: 16px;
}

.goPageInput {
  height: 30px;
  width: 50px;
  outline: none;
  border-radius: 5px;
  border: 1px solid rgb(206, 206, 206);
  text-align: center;
  color: rgb(96, 96, 96);
}

.goPageInput:focus {
  border: 1px solid rgb(64, 158, 255);
}

.goPageBtn {
  height: 30px;
  width: 30px;
  cursor: pointer;
  font-size: 12px;
  margin-left: 10px;
  border: 1px solid rgb(206, 206, 206);
  border-radius: 5px;
  background: white;
  color: rgb(96, 96, 96);
  outline: none;
}

.goPageBtn:hover {
  color: rgb(64, 158, 255);
  border: 1px solid rgb(64, 158, 255);
}
</style>