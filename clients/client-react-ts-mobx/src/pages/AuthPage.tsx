import React from 'react'
import { AuthComponent } from '../components/Auth/AuthComponent'
import { Box, Grid } from '@material-ui/core'

export const AuthPage: React.FC = () => {
  return (
    <Box pt={2}>
      <Grid container justify={'space-between'}>
        <Grid item></Grid>
        <Grid item>
          <AuthComponent/></Grid>
        <Grid item></Grid>
      </Grid>
    </Box>
  )
}
