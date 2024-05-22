<template>
  <Splitter
    class="border-none"
    layout="vertical"
  >
    <SplitterPanel class="flex align-items-center justify-content-center">
      <h1>{{ $t('greeting') }}</h1>
    </SplitterPanel>
    <SplitterPanel
      data-tauri-drag-region
      class="flex align-items-center justify-content-center"
    >
      Panel 2
    </SplitterPanel>
  </Splitter>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'indexpage',
})
</script>
