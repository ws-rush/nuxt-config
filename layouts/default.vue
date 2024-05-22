<template>
  <Html
    :lang="$i18n.localeProperties.lang"
    :dir="$i18n.localeProperties.dir"
  >
    <div
      data-tauri-drag-region
      class="bg-white rounded-xl h-screen grid grid-cols-1 grid-rows-[auto_1fr]"
    >
      <!-- <Toast position="top-center" group="tc" /> -->
      <MenuBar class="px-2" />
      <NuxtPage />
    </div>
  </Html>
</template>
