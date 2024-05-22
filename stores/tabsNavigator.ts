export const useTabsNavigator = defineStore('tabsNavigator', {
  state: () => ({
    active: 0,
    tabs: new Map(),
  }),
  getters: {
    items: (state) => Array.from(state.tabs.values()),
  },
  actions: {
    add(name: string, url: string, title: string) {
      this.tabs.set(name, { label: title, url, name })
      this.active = Array.from(this.tabs.keys()).indexOf(name)
    },
    delete(name: string) {
      if (this.active === Array.from(this.tabs.keys()).indexOf(name)) {
        const tab = this.items[this.active - 1] ||
          this.items[this.active + 1] || { url: '/', name: 'index' }
        navigateTo(tab.url)
      }
      if (this.items.length === 1 && this.items[0].url === '/') return
      this.tabs.delete(name)
    },
  },
})
