<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { functions } from '@vueuse/metadata'
import type { VueUseFunction } from '@vueuse/metadata'
import FunctionInfo from '@/components/FunctionInfo.vue'

const route = useRoute()

const fn = ref<VueUseFunction | null | undefined>(null)

onMounted(() => {
  const fnName = route.params.fnName
  if (fnName) {
    fn.value = functions.find((i) => i.name === fnName)
  }
})
</script>

<template>
  <div class="doc" v-if="fn">
    <div class="h-8 px-1">
      <i class="i-carbon:arrow-left opacity-80 text-xs" />
    </div>
    <i class="i-carbon-search mr-2 op-50 scale-120"></i>
    <i class="i-carbon-launch opacity-80 text-xs ml-1" />
    <h1 class="op-85">{{ fn.name }}</h1>
    <FunctionInfo :fn="fn.name" />
    <p class="text-base op-85">{{ fn.description }}</p>
  </div>
</template>

<style scoped>
.doc {
  /* padding: 10px 32px;
  max-width: 882px; */
  margin: 0 auto;
}
h2 {
  @apply mt-10px mb-16px pt-24px;
}
</style>
