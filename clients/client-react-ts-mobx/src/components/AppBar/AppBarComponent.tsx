import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles( ( theme: Theme ) => createStyles( {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing( 2 ),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none'
  }
} ) )

export const AppBarComponent = () => {
  const classes = useStyles()

  return (
    <AppBar
      position="static"
    >
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon/>
        </IconButton>

        <Typography
          variant="h6"
          className={classes.title}
        >
          Core - ILI
        </Typography>

        <Box mr={3}>
          <Button
            variant="outlined"
            color="inherit"
          >
            <NavLink to={'/signin'}
                     className={classes.link}
            >Sign IN
            </NavLink>
          </Button>
        </Box>
        <Button
          variant="contained"
          color="secondary"
        >
          <NavLink to={'/signup'}
                   className={classes.link}
          >Sign UP
          </NavLink>
        </Button>

      </Toolbar>
    </AppBar>
  )
}
