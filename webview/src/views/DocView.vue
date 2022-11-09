<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { functions } from '@vueuse/metadata'
import type { VueUseFunction } from '@vueuse/metadata'
import { provideVSCodeDesignSystem, vsCodeDivider } from '@vscode/webview-ui-toolkit'
import FunctionInfo from '@/components/FunctionInfo.vue'
import { renderMarkdown } from '@/utils/common'

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
        <i class="i-carbon:arrow-left op-85 text-xs scale-140 inline-block" />
      </span>
      <span class="text-base op-90 mx-4">{{ fn.name }}</span>
      <span class="op-85 cursor-pointer py-2">Return to top</span>
    </div>
    <vscode-divider></vscode-divider>
    <FunctionInfo :fn="fn.name" />
    <p class="text-base op-85" v-html="renderMarkdown(fn.description)"></p>
  </div>
</template>

<style scoped></style>
