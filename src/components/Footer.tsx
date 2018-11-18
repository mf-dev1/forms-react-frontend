import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  footer: {
    margin: '0 auto 50px',
  },
};

class Footer extends React.Component<any> {
  public render() {
    return <footer className={this.props.classes.footer} />;
  }
}

export default withStyles(styles)(Footer);
