import React, { useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { AppBarComponent } from './components/AppBar/AppBarComponent'
import { useObserver } from 'mobx-react-lite'
import { useAppStore } from './store/AppStoresContext'

function App() {
  const {appStore, authStore} = useAppStore()

  useEffect( () => {

    console.log( `App: useEffect: checkLoggedIn, firstLoad` )

    authStore.checkLoggedIn()
    appStore.firstLoad()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] )

  return useObserver( () =>
    <>
      {console.log( `App: Render` )}
      {
        appStore.isFirstLoad
          ? <>Load page...</>
          : <>
            <CssBaseline/>
            <AppBarComponent/>
            <Container maxWidth="lg">
              <h1>Hi!</h1>
            </Container>
          </>
      }
    </>
  )
}

export default App
