<template>
  <div>
      <search/>
      <ul v-for="(value,index) in items" :key="index">
          <li><tool-item :items="value"/></li>
      </ul>
  </div>
</template>

<script>
import ToolItem from 'components/tool/ToolItem'
import Search from 'components/tool/Search'
import data from 'assets/tool/data.xml'

export default {
    name:'Tool',
    data(){
        return {
            items:data.toolList.toolRow
        }
    },
    components:{
        ToolItem,
        Search
    }
}
</script>

<style>

</style>