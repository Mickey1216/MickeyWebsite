<template>
  <div class="search">
      <input type="text" class="search_input" v-model="inputText" @keyup.enter="searchClick">
      <button class="iconfont icon-sousuo search_btn" @click="searchClick"></button>
  </div>
</template>

<script>
export default {
    name:'Search',
    data(){
        return {
            inputText:''
        }
    },
    props:['oldSearchText'],
    methods:{
        searchClick(){
            let inputText = this.inputText.trim()
            //子组件向父组件传递数据（利用自定义事件）
            if(inputText !== '' && this.oldSearchText !== inputText)
                this.$emit('searchevent',inputText)  
        }
    }
}
</script>

<style scoped>
    .search{
        display: flex;
        border: 1px solid #eeeeee;
        width: 500px;
        height: 50px;
        margin: 10px auto;
    }
    
    input,button{
        border: none;
        outline: none;
    }

    .search_input{
        flex: 9;
    }

    .search_btn{
        flex:1;
    }
</style>