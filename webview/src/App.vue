<script setup lang="ts">
import { provideVSCodeDesignSystem, vsCodeTextField } from '@vscode/webview-ui-toolkit';

provideVSCodeDesignSystem().register(vsCodeTextField());
</script>

<template>
  <main class="my-1">
    <vscode-text-field class="w-full" autofocus placeholder="Search">
      <span slot="start" class="i-carbon-search"></span>
    </vscode-text-field>
  </main>
</template>
