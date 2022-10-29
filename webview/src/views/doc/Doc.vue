<script setup lang="ts">
window.addEventListener('message', event => {

  const message = event.data; // The JSON data our extension sent

  switch (message.command) {
    case 'showDoc':
      console.log(message.fn);
      break;
  }
});
</script>

<template>
  <div class="doc">
    this is doc page
  </div>
</template>


<style scoped>
.doc {
  color: red;
}
</style>