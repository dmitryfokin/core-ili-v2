import React from 'react'
import { AppStoreType, createAppStore } from './appStore'
import { AuthStoreType, createAuthStore } from './authStore'
import { useLocalStore } from 'mobx-react-lite'

type AppStateContextValue = {
  appStore: AppStoreType
  authStore: AuthStoreType
}

const AppStateContext =
  React.createContext<AppStateContextValue>( {} as AppStateContextValue )

export const AppStateProvider: React.FC<React.PropsWithChildren<{}>> = (
  {children}
) => {

  const appStore = useLocalStore( createAppStore )
  const authStore = useLocalStore( createAuthStore )

  return (
    <AppStateContext.Provider
      value={{
        appStore,
        authStore,
      }}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppStore = () => React.useContext( AppStateContext )
