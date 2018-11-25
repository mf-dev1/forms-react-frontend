import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Error from '@material-ui/icons/Error';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  info: {
    margin: '20px auto',
    'text-align': 'center',
  },
};

class ConnectionError extends React.Component<any> {
  public render() {
    return (
      <div className={this.props.classes.info}>
        <Error fontSize="large" />
        <Typography variant="h6">Connection error!</Typography>
      </div>
    );
  }
}

export default withStyles(styles)(ConnectionError);
