<script setup lang="ts">
import type { VueUseFunction } from '@vueuse/metadata'
import { ref } from 'vue'
import FunctionInfo from './components/FunctionInfo.vue'

const fn = ref<VueUseFunction | null>(null)

window.addEventListener('message', (event) => {
  const message = event.data
  switch (message.command) {
    case 'showDoc':
      fn.value = message.fn
      break
  }
})
</script>

<template>
  <div class="doc" v-if="fn">
    <h1 class="op-85">{{ fn.name }}</h1>
    <FunctionInfo :fn="fn.name" />
    <p class="text-base op-85">{{ fn.description }}</p>
  </div>
</template>

<style scoped>
.doc {
  padding: 10px 32px;
  max-width: 882px;
  margin: 0 auto;
}
h2 {
  @apply mt-10px mb-16px pt-24px;
}
</style>
