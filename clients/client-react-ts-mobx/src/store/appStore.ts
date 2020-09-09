export type AppStoreType = {
  isFirstLoad: boolean
  firstLoad: () => void
}

export function createAppStore(): AppStoreType {
  return {
    isFirstLoad: true,
    firstLoad() {
      this.isFirstLoad = false
    },
  }
}
