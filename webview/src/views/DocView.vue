<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { functions } from '@vueuse/metadata'
import type { VueUseFunction } from '@vueuse/metadata'
import { provideVSCodeDesignSystem, vsCodeDivider } from '@vscode/webview-ui-toolkit'
import MarkdownIt from 'markdown-it'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prism-theme-vars/base.css'
import FunctionInfo from '@/components/FunctionInfo.vue'
import { renderMarkdown } from '@/utils/common'

provideVSCodeDesignSystem().register(vsCodeDivider())

const route = useRoute()
const router = useRouter()

const md = new MarkdownIt({
  highlight: function (code, lang) {
    const html = Prism.highlight(code, Prism.languages.ts, 'ts')
    return `<pre class="language-${lang}">${html}</pre>`
  }
})

const fn = ref<VueUseFunction | null | undefined>(null)
const doc = ref('')

onMounted(() => {
  const fnName = route.params.fnName
  if (fnName) {
    fn.value = functions.find((i) => i.name === fnName)

    const docs = import.meta.glob('../../../resources/vueuse/**/*.md', {
      as: 'raw',
      import: 'default',
      eager: true
    })
    const path =
      fn.value?.docs?.replace('https://vueuse.org', `../../../resources/vueuse`) + 'index.md'
    let content = docs[path]
    const frontmatterEnds = content.indexOf('---\n\n') + 4
    const firstSubheader = content.search(/\n## \w/)
    const sliceIndex = firstSubheader < 0 ? frontmatterEnds : firstSubheader
    content = content.slice(sliceIndex)
    doc.value = content
  }
})

function goBack() {
  router.replace({
    name: 'home'
  })
}
function handleReturnToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="doc m-auto" v-if="fn">
    <div class="nav">
      <div class="h-8 flex items-center justify-between">
        <span class="cursor-pointer w-8 h-8 flex items-center" @click="goBack">
          <i class="i-carbon:arrow-left op-85 text-xs scale-140 inline-block" />
        </span>
        <span class="text-base op-90 mx-4">{{ fn.name }}</span>
        <span class="op-85 cursor-pointer py-2" @click="handleReturnToTop">Return to top</span>
      </div>
      <vscode-divider></vscode-divider>
    </div>
    <FunctionInfo :fn="fn.name" />
    <p class="text-base op-85" v-html="renderMarkdown(fn.description)"></p>
    <div class="md-render-container" v-html="md.render(doc)"></div>
  </div>
</template>

<style scoped>
.nav {
  background-color: var(--vscode-sideBar-background);
  @apply z-1 sticky left-0 right-0 top-0;
}
</style>

<style>
body.vscode-light,
body.vscode-high-contrast-light {
  --prism-foreground: #393a34 !important;
  --prism-background: #f8f8f8 !important;

  --prism-comment: #758575 !important;
  --prism-namespace: #444444 !important;
  --prism-string: #bc8671 !important;
  --prism-punctuation: #80817d !important;
  --prism-literal: #36acaa !important;
  --prism-keyword: #248459 !important;
  --prism-function: #849145 !important;
  --prism-deleted: #9a050f !important;
  --prism-class: #2b91af !important;
  --prism-builtin: #800000 !important;
  --prism-property: #ce9178 !important;
  --prism-regex: #ad502b !important;
}

body.vscode-dark,
body.vscode-high-contrast {
  --prism-foreground: #d4d4d4;
  --prism-background: #1e1e1e;

  --prism-namespace: #aaaaaa;
  --prism-comment: #758575;
  --prism-namespace: #444444;
  --prism-string: #ce9178;
  --prism-punctuation: #d4d4d4;
  --prism-literal: #36acaa;
  --prism-keyword: #38a776;
  --prism-function: #dcdcaa;
  --prism-deleted: #9a050f;
  --prism-class: #4ec9b0;
  --prism-builtin: #d16969;
  --prism-property: #ce9178;
  --prism-regex: #ad502b;
}

.md-render-container h2 {
  opacity: 0.85;
  margin-top: 24px;
  margin-bottom: 14px;
  font-weight: 500;
}

.md-render-container h3 {
  opacity: 0.85;
  margin-top: 14px;
  font-weight: 500;
}

.md-render-container p {
  opacity: 0.85;
}
</style>
