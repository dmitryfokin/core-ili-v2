import React, { useEffect } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { AuthSigninComponent } from './AuthSigninComponent'
import { AuthSignupComponent } from './AuthSignupComponent'
import { useHistory } from 'react-router-dom'

interface ITabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

const TabPanel: React.FC<ITabPanelProps> = ( props ) => {
  const {children, value, index, ...other} = props

  return (
    <Box
      role="tabpanel"
      width={'100%'}
      p={1}
      hidden={value !== index}
      id={`auth_page-tab_panel-${index}`}
      aria-labelledby={`auth_page-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          {children}
        </>
      )}
    </Box>
  )
}

const a11yProps = ( index: number ) => {
  return {
    id: `auth_page-tab-${index}`,
    'aria-controls': `auth_page-tab_panel-${index}`
  }
}

const useStyles = makeStyles( ( theme: Theme ) => ({
  auth_page: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    minWidth: 300,
    maxWidth: 400,
  },
  AppBar: {
    backgroundColor: '#fff',
    color: '#00f'

  }
}) )

export const AuthComponent: React.FC = ( props ) => {
  const classes = useStyles()
  const history = useHistory()
  const [value, setValue] = React.useState(
    history.location.hash === '/signup' ? 1 : 0
  )

  useEffect( () => {
    setValue( history.location.pathname === '/signup' ? 1 : 0 )
  }, [history.location] )

  const handleChange = ( event: React.ChangeEvent<{}>, newValue: number ) => {
    setValue( newValue )

    history.push( newValue === 1 ? '/signup' : 'signin' )
  }

  return (
    <Grid container className={classes.auth_page}
    >
      <AppBar position="static"
              className={classes.AppBar}>
        <Tabs value={value}
              indicatorColor={'primary'}
              onChange={handleChange}
              aria-label="auth panel"
              centered
              variant={'fullWidth'}>
          <Tab label='Sign in'
               fullWidth {...a11yProps( 0 )} />
          <Tab label='Sign up'
               fullWidth {...a11yProps( 1 )} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AuthSigninComponent/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AuthSignupComponent/>
      </TabPanel>
    </Grid>
  )
}
