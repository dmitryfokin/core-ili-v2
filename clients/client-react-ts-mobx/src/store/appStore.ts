export type AppStoreType = {
  isFirstLoad: boolean
  firstLoad: () => void
}

export function createAppStore(): AppStoreType {
  return {
    isFirstLoad: true,
    firstLoad() {
      console.log( 'appStore: firstLoad' )
      this.isFirstLoad = false
    },
  }
}
