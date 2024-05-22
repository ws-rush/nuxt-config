<template>
  <Splitter
    class="border-none"
    layout="vertical"
  >
    <SplitterPanel class="flex align-items-center justify-content-center">
      <h1>{{ $t('greeting') }}</h1>
    </SplitterPanel>
    <SplitterPanel class="flex align-items-center justify-content-center">
      test-[id]
    </SplitterPanel>
  </Splitter>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'testpage',
})
</script>
