import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { useAppStore } from '../store/AppStoresContext'
import { HomePage } from '../pages/HomePage'
import { AuthPage } from '../pages/AuthPage'

export const RouteSwitchComponent: React.FC = () => {
  const {authStore} = useAppStore()

  if ( authStore.isAuth ) {
    return (
      <Switch>
        <Route exact path={'/'}> <HomePage/> </Route>

        <Redirect to={'/'}/>
      </Switch>
    )
  } else {
    return (
      <Switch>
        <Route exact path={'/'}> <HomePage/> </Route>
        <Route exact path={'/signin'}><AuthPage/> </Route>
        <Route exact path={'/signup'}><AuthPage/> </Route>

        <Redirect to={'/'}/>
      </Switch>
    )
  }
}
