import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends React.Component {
  public render() {
    return (
      <header>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                React & Material-UI Sample Application
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </header>
    );
  }
}

export default Header;
