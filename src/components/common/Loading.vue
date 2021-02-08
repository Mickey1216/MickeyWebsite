<template>
  <div class="loading">
    <!-- fa-spinner:指图标 fa-4x：图标大小 fa-pulse：旋转效果 -->
    <i class="fa fa-spinner fa-4x fa-pulse" v-show="isLoading"></i>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      isLoading: false
    };
  },
  props: ["changeStatus"],
  watch: {
    changeStatus() {
      this.isLoading = this.changeStatus;
    }
  }
};
</script>

<style scoped>
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}
</style>