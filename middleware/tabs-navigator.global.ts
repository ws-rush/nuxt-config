export default defineNuxtRouteMiddleware((to) => {
  const tabsNavigator = useTabsNavigator()
  tabsNavigator.add(to.name as string, to.path, to.meta.title as string)
})
