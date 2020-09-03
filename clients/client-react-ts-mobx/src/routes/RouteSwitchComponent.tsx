import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { useAppStore } from '../store/AppStoresContext'
import { Home } from '../pages/Home'

export const RouteSwitchComponent: React.FC = () => {
  const {authStore} = useAppStore()

  if ( authStore.isAuth ) {
    return (
      <Switch>
        <Route exact path={'/'}> <Home/> </Route>

        <Redirect to={'/'}/>
      </Switch>
    )
  } else {
    return (
      <Switch>
        <Route exact path={'/'}> <Home/> </Route>

        <Redirect to={'/'}/>
      </Switch>
    )
  }
}
