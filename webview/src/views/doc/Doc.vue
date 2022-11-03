<script setup lang="ts">
import type { VueUseFunction } from '@vueuse/metadata'
import { ref } from 'vue'
import FunctionInfo from './components/FunctionInfo.vue'

const fn = ref('')

window.addEventListener('message', (event) => {
  const message = event.data
  switch (message.command) {
    case 'showDoc':
      fn.value = (message.fn as VueUseFunction).name
      break
  }
})
</script>

<template>
  <div class="doc" v-if="fn">
    <FunctionInfo :fn="fn" />
  </div>
</template>

<style scoped>
.doc {

}
</style>
