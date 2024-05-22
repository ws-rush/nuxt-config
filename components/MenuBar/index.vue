<template>
  <!-- contribute to upstream (primevue) with idea and implementation of two ends -->
  <Menubar
    :model="menubarItems"
    data-tauri-drag-region
    class=""
    :pt="{
      root: {
        class: 'p-0 rounded-t-xl rounded-b-0 cursor-default',
      },
      menu: { class: 'flex-nowrap' },
      end: {
        class:
          'self-stretch flex items-center m-0 overflow-x-auto w-full justify-between',
      },
    }"
  >
    <template #start>
      <!-- <i class="i-logos-debian px-1"></i> -->
    </template>
    <template #end>
      <Tabs />

      <div class="flex items-center px-1">
        <LangSwitcher class="flex-none" />
        <span class="px-2 text-nowrap whitespace-nowrap">{{
          $d(new Date(), 'long')
        }}</span>
        <Divider
          v-show="isTauri"
          layout="vertical"
          class="mx-2 relative before:absolute before:left-0 before:top-[25%] before:h-[50%] flex-none"
        />
        <i
          v-show="isTauri"
          class="i-mdi-window-minimize hover:bg-gray-300 flex-none"
        />
        <i
          v-show="isTauri"
          class="i-mdi-window-maximize hover:bg-gray-300 flex-none"
        />
        <i
          v-show="isTauri"
          class="i-mdi-window-close hover:bg-gray-300 flex-none"
        />
        <!-- <i
          v-show="isTauri"
          class="i-mdi-window-minimize hover:bg-gray-300 flex-none"
          @click="appWindow.minimize()"
        />
        <i
          v-show="isTauri"
          class="i-mdi-window-maximize hover:bg-gray-300 flex-none"
          @click="appWindow.toggleMaximize()"
        />
        <i
          v-show="isTauri"
          class="i-mdi-window-close hover:bg-gray-300 flex-none"
          @click="appWindow.close()"
        /> -->
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
// import { Window } from '@tauri-apps/api/window'
import LangSwitcher from './LangSwitcher.vue'
import Tabs from './Tabs.vue'

const menubarItems = ref([
  {
    label: 'File',
    items: [
      {
        label: 'New',
        icon: 'i-radix-icons-plus',
        items: [
          {
            label: 'Bookmark',
            icon: 'i-radix-icons-bookmark',
            command: () => navigateTo('/test-123'),
          },
          {
            label: 'Video',
            icon: 'i-radix-icons-video',
            command: () => navigateTo('/test-456'),
          },
        ],
      },
      {
        label: 'Delete',
        icon: 'i-radix-icons-trash',
        command: () => navigateTo('/try-123'),
      },
      {
        separator: true,
      },
      {
        label: 'Export',
        icon: 'i-radix-icons-external-link',
      },
    ],
  },
  {
    label: 'Edit',
    items: [
      {
        label: 'Left',
        icon: 'i-radix-icons-text-align-left',
      },
      {
        label: 'Right',
        icon: 'i-radix-icons-text-align-right',
      },
      {
        label: 'Center',
        icon: 'i-radix-icons-text-align-center',
      },
      {
        label: 'Justify',
        icon: 'i-radix-icons-text-align-justify',
      },
    ],
  },
  {
    label: 'Users',
    items: [
      {
        label: 'New',
        icon: 'i-subway-admin-1',
      },
      {
        label: 'Delete',
        icon: 'i-subway-admin-1',
      },
      {
        label: 'Search',
        icon: 'i-subway-admin',
        items: [
          {
            label: 'Filter',
            icon: 'pi pi-fw pi-filter',
            items: [
              {
                label: 'Print',
                icon: 'pi pi-fw pi-print',
              },
            ],
          },
          {
            icon: 'pi pi-fw pi-bars',
            label: 'List',
          },
        ],
      },
    ],
  },
  {
    label: 'Events',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Save',
            icon: 'pi pi-fw pi-calendar-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-calendar-minus',
          },
        ],
      },
      {
        label: 'Archive',
        icon: 'pi pi-fw pi-calendar-times',
        items: [
          {
            label: 'Remove',
            icon: 'pi pi-fw pi-calendar-minus',
          },
        ],
      },
    ],
  },
  {
    label: 'Quit',
  },
])

// const appWindow = new Window('main')
const isTauri = import.meta.client && '__TAURI_INTERNALS__' in window
</script>

<!-- <style scope>
.p-menubar-end {
    align-self: stretch;
} -->
<!-- </style> -->
