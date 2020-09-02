import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { AppBarComponent } from './components/AppBar/AppBarComponent'

function App() {
  return (
    <>
      <CssBaseline/>
      <AppBarComponent/>
      <Container maxWidth="lg">
        <h1>Hi!</h1>
      </Container>
    </>
  )
}

export default App
