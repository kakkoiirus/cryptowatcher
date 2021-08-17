import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="title" color="inherit">
              CryptoWatcher
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default NavBar;
