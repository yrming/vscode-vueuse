<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  provideVSCodeDesignSystem,
  vsCodeCheckbox,
  vsCodeDivider
} from '@vscode/webview-ui-toolkit'
import {
  categoryNames,
  coreCategoryNames,
  addonCategoryNames,
  functions,
  type VueUseFunction
} from '@vueuse/metadata'
import Fuse from 'fuse.js'
import { renderMarkdown, styledName } from '@/utils/common'
import { vscode } from '@/utils/vscode'

provideVSCodeDesignSystem().register(vsCodeCheckbox(), vsCodeDivider())

const router = useRouter()

const sortMethods = ['Category', 'Name', 'Updated']
const filters = ['Has Component', 'Has Directive']
const conditions = [
  {
    name: 'Core',
    type: 'cate',
    data: coreCategoryNames
  },
  {
    name: 'Add-ons',
    type: 'cate',
    data: addonCategoryNames
  },
  {
    name: 'Sort by',
    type: 'sort',
    data: sortMethods
  },
  {
    name: 'Filters',
    type: 'filter',
    data: filters
  }
]
const currentSelectedCate = ref('')
const currentSelectedSort = ref(sortMethods[0])
const hasComponent = ref(false)
const hasDirective = ref(false)
const currentSearch = ref('')
const showCategory = computed(
  () =>
    !currentSearch.value && (!currentSelectedSort.value || currentSelectedSort.value === 'Category')
)
function setCurrentCate(cate: string) {
  currentSelectedCate.value = cate === currentSelectedCate.value ? '' : cate
}
function setCurrentSort(sort: string) {
  currentSelectedSort.value = sort
}
function toggleHasComponent() {
  hasComponent.value = !hasComponent.value
}
function toggleHasDirective() {
  hasDirective.value = !hasDirective.value
}
function goDoc(fn: VueUseFunction) {
  if (fn.external) {
    console.log('fn.external')
    return
  }
  router.push({
    name: 'doc',
    params: {
      fnName: fn.name
    }
  })
}
function getLink(fn: VueUseFunction) {
  if (fn.external) {
    return {
      href: fn.external,
      target: '_blank'
    }
  }
  return {
    href: `/${fn.package}/${fn.name}/`
  }
}
const items = computed(() => {
  let fn = functions.filter((i) => !i.internal)
  if (hasComponent.value) {
    fn = fn.filter((i) => i.component)
  }
  if (hasDirective.value) {
    fn = fn.filter((i) => i.directive)
  }
  if (!currentSelectedCate.value) {
    return fn
  }
  return fn.filter((item) => item.category === currentSelectedCate.value)
})
const fuse = computed(
  () =>
    new Fuse(items.value, {
      keys: ['name', 'description']
    })
)
const result = computed(() => {
  if (currentSearch.value) {
    return fuse.value.search(currentSearch.value).map((i) => i.item)
  } else {
    const fns = [...items.value]
    if (currentSelectedSort.value === 'Updated') {
      fns.sort((a, b) => b.lastUpdated || 0 - (a.lastUpdated || 0))
    } else if (currentSelectedSort.value === 'Name') {
      fns.sort((a, b) => a.name.localeCompare(b.name))
    } else {
      fns.sort(
        (a, b) => categoryNames.indexOf(a.category || '') - categoryNames.indexOf(b.category || '')
      )
    }
    return fns
  }
})
</script>

<template>
  <div class="flex my-2" v-for="item in conditions" :key="item.name">
    <div
      class="w-70px flex-shrink-0 text-sm op-80"
      :class="item.type === 'cate' ? 'py-2px' : 'py-4px'"
    >
      {{ item.name }}
    </div>
    <div class="flex flex-wrap gap-2">
      <template v-if="item.type === 'cate'">
        <div
          class="select-button"
          :class="cate === currentSelectedCate ? 'active' : ''"
          v-for="cate in item.data"
          :key="cate"
          @click="setCurrentCate(cate)"
        >
          {{ cate.replace('@', '') }}
        </div>
      </template>
      <template v-else-if="item.type === 'sort'">
        <div
          class="select-button"
          :class="sort === currentSelectedSort ? 'active' : ''"
          v-for="sort in item.data"
          :key="sort"
          @click="setCurrentSort(sort)"
        >
          {{ sort }}
        </div>
      </template>
      <template v-else-if="item.type === 'filter'">
        <vscode-checkbox @click="toggleHasComponent">
          {{ filters[0] }}
        </vscode-checkbox>
        <vscode-checkbox @click="toggleHasDirective">
          {{ filters[1] }}
        </vscode-checkbox>
      </template>
    </div>
  </div>

  <vscode-divider></vscode-divider>
  <div class="flex children:my-auto p-2">
    <i class="i-carbon-search mr-2 op-50 scale-120"></i>
    <input
      class="search-input"
      type="text"
      role="search"
      placeholder="Search..."
      v-model="currentSearch"
    />
  </div>
  <vscode-divider></vscode-divider>

  <div class="pt-2"></div>

  <div v-for="(fn, idx) in result" :key="fn.name">
    <div
      class="mt-6 mb-4 text-base op-60"
      v-if="showCategory && fn.category !== result[idx - 1]?.category"
    >
      {{ fn.category }}
    </div>
    <div class="my-2 flex items-center text-sm">
      <a
        v-bind="getLink(fn)"
        class="fn-name"
        @click="goDoc(fn)"
        :class="fn.deprecated ? 'line-through !decoration-solid' : ''"
      >
        <span v-html="styledName(fn.name)"></span>
        <i v-if="fn.external" class="i-carbon-launch opacity-80 text-xs ml-1" />
      </a>
      <div class="flex-shrink-0">&nbsp;-&nbsp;</div>
      <div class="op-87" v-html="renderMarkdown(fn.description)"></div>
    </div>
  </div>
  <div class="text-center pt-6" v-if="!result.length">
    <div class="m2 op50 text-sm">No result matched</div>
  </div>
</template>
<style scoped>
.select-button {
  @apply cursor-pointer rounded text-sm px-2 py-0.5 bg-gray-400/5 hover: bg-gray-400/10 op-87 select-none;
}

.select-button.active {
  @apply text-primary bg-primary/5 text-#3eaf7c;
}

.select-button.disabled {
  @apply opacity-50 pointer-events-none;
}

.search-input {
  @apply w-full bg-transparent border-none focus: outline-none;
  color: var(--vscode-inputForeground);
}

.fn-name {
  @apply flex items-center flex-shrink-0 cursor-pointer bg-gray-400/5 px-1.5 py-0.5 rounded text-#3eaf7c hover-text-#33a06f transition-color-2 decoration-none outline-none;
}
</style>
