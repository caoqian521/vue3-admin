<template>
  <div class="tags">
    <el-tag :key=" tag.name" v-for="(tag,index) in tags" :closable="tag.name!=='home'" :disable-transitions="false" :effect="$router.name===tag.name?'dark':'plain'" @click="changeMenu(tag)" @close="handleClose(tag,index)">{{tag.label}}</el-tag>
  </div>
</template>
<script>
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const tags = store.state.tabsList
    //解决tag标签切换问题
    const changeMenu = item => {
      router.push({ name: item.name })
    }
    const handleClose = (tag, index) => {
      let length = tags.length - 1
      //处理vuex中的tabslist
      store.commit('closeTab', tag)
      if (tag.name !== route.name) {
        return
      }
      if (index === length) {
        router.push({
          name: tags[index - 1].name
        })
      }
    }
    return {
      tags,
      changeMenu,
      handleClose
    }
  }
}
</script>
<style lang="less" scoped>
.tags {
  padding: 20px;
  width: 100%;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>