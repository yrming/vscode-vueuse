<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { functions } from '@vueuse/metadata'
import type { VueUseFunction } from '@vueuse/metadata'
import { provideVSCodeDesignSystem, vsCodeDivider } from '@vscode/webview-ui-toolkit'
import FunctionInfo from '@/components/FunctionInfo.vue'

provideVSCodeDesignSystem().register(vsCodeDivider())

const route = useRoute()
const router = useRouter()

const fn = ref<VueUseFunction | null | undefined>(null)

onMounted(() => {
  const fnName = route.params.fnName
  if (fnName) {
    fn.value = functions.find((i) => i.name === fnName)
  }
})

function goBack() {
  router.replace({
    name: 'home'
  })
}
</script>

<template>
  <div class="doc m-auto" v-if="fn">
    <div class="h-8 flex items-center justify-between">
      <span class="cursor-pointer w-8 h-8 flex items-center" @click="goBack">
        <i class="i-carbon:arrow-left opacity-90 text-xs scale-140 inline-block" />
      </span>
      <span class="text-base op-90">{{ fn.name }}</span>
      <span class="w-8 h-8"></span>
    </div>
    <vscode-divider></vscode-divider>
    <FunctionInfo :fn="fn.name" />
    <p class="text-base op-85">{{ fn.description }}</p>
  </div>
</template>

<style scoped></style>
