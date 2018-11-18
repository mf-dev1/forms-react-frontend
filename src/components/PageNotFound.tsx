import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import PowerOff from '@material-ui/icons/PowerOff';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  info: {
    margin: '20px auto',
    'text-align': 'center',
  },
};

class PageNotFound extends React.Component<any> {
  public render() {
    return (
      <div className={this.props.classes.info}>
        <PowerOff fontSize="large" />
        <Typography variant="h6">Page not found!</Typography>
      </div>
    );
  }
}

export default withStyles(styles)(PageNotFound);
