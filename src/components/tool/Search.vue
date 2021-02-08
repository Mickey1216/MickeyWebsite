<template>
  <div class="search">
    <input type="text" class="search_input" />
    <button class="iconfont icon-sousuo search_btn"></button>
  </div>
</template>

<script>
export default {
  name: "Search"
};
</script>

<style>
.search {
  display: flex;
  border: 1px solid #eeeeee;
  width: 500px;
  height: 50px;
  margin: 10px auto;
}

input,
button {
  border: none;
  outline: none;
}

.search_input {
  flex: 9;
}

.search_btn {
  flex: 1;
}
</style>