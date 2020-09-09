import React, { useEffect, useMemo } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppBarComponent } from './components/AppBar/AppBarComponent'
import { useObserver } from 'mobx-react-lite'
import { useAppStore } from './store/AppStoresContext'
import { RouteSwitchComponent } from './routes/RouteSwitchComponent'
import { MainLayout } from './layouts/MainLayout'

function App() {
  const {appStore, authStore} = useAppStore()

  useEffect( () => {
    authStore.checkLoggedIn()
    appStore.firstLoad()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] )

  const RouteSwitch = useMemo( () => {
    return (
      <RouteSwitchComponent/>
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authStore.isAuth] )

  return useObserver( () =>
    <>
      {
        appStore.isFirstLoad
          ? <>Load page...</>
          : <>
            <CssBaseline/>
            <AppBarComponent/>
            <MainLayout page={RouteSwitch}/>
          </>
      }
    </>
  )
}

export default App
