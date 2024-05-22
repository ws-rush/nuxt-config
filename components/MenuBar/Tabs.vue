<template>
  <TabMenu
    v-model:activeIndex="tabs.active"
    :model="tabs.items"
    :pt="{
      root: {
        class:
          'self-stretch ms-4 me-auto border-s-solid border-s-[1px] border-[#e2e8f0] overflow-x-auto',
      },
      menu: { class: 'h-full border-none' },
      menuitem: 'flex border-e-solid border-e-[1px] border-[#e2e8f0]',
      inkbar: { class: 'bg-black' },
    }"
  >
    <template #item="{ item, props, active }">
      <NuxtLink
        v-ripple
        :to="item.url"
        v-bind="props.action"
        class="group flex align-items-center gap-2 py-2 ps-3 pe-0"
        :class="{
          'text-blue': active,
        }"
      >
        <span class="font-bold">{{ $t(item.label as string) }}</span>
        <i
          class="i-mdi-close group-hover:visible hover:opacity-50"
          :class="{ invisible: !active }"
          @click.prevent="tabs.delete(item.name)"
        />
      </NuxtLink>
    </template>
  </TabMenu>
</template>

<script setup lang="ts">
const tabs = useTabsNavigator()
</script>
