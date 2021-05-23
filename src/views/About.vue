<template>
  <div>
    <span>{{count}}</span>
    <span>{{msg}}</span>
    <br>
    <span>{{count1}}</span>
    <button @click="countClick">按钮</button>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted, toRefs, watch } from 'vue'
const count = ref(0)
const count1 = ref('ceshi')
const obj = reactive({
  msg: '你好',
  old: '10'
})
// watch(
//   () => obj,
//   (newV, old) => {
//     console.log(17, newV, old)
//   },
//   { deep: true }
// )
watch([count, count1], ([a], [b]) => {
  console.log(24, a, b)
})
const { msg } = { ...toRefs(obj) }
onMounted(() => {
  count.value = 1
})
const countClick = () => {
  obj.msg += '1'
  count.value += 1
  count1.value += '1'
}
</script>

<style lang='scss' scoped>
</style>
