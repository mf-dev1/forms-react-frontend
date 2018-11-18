import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  toolbar: {
    maxWidth: 768,
    margin: '0 auto',
  },
};

class Header extends React.Component<any> {
  public render() {
    return (
      <header>
        <div>
          <AppBar position="static">
            <Toolbar className={this.props.classes.toolbar}>
              <Typography variant="title" color="inherit">
                React Forms (Sample Application with Material-UI)
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </header>
    );
  }
}

// export default Header;
export default withStyles(styles)(Header);
