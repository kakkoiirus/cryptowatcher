import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => (
  <AppBar position="relative">
    <Toolbar>
      <Typography variant="title" color="inherit">
        CryptoWatcher
      </Typography>
    </Toolbar>
  </AppBar>
);

export default NavBar;
