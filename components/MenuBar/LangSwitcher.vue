<template>
  <div>
    <Button
      type="button"
      class="p-0"
      icon="i-heroicons-language"
      :label="localeProperties.name"
      aria-haspopup="true"
      aria-controls="overlay_menu"
      link
      @click="(event) => menu.toggle(event)"
    />
    <Menu
      id="overlay_menu"
      ref="menu"
      :model="items"
      :popup="true"
    />
  </div>
</template>

<script setup lang="ts">
const { locales, setLocale, localeProperties } = useI18n()

const menu = ref()
const items = locales.value.map((locale) => ({
  label: locale.name,
  icon: locale.icon,
  command: () => setLocale(locale.code),
}))
</script>
