import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: '20px auto',
    'text-align': 'center',
  },
});

type AllProps = WithStyles<typeof styles>;

export interface State {
  completed: number;
}

class Loader extends React.Component<AllProps, State> {
  private timer: any;

  constructor(props: AllProps) {
    super(props);
    this.state = { completed: 0 };
    this.timer = null;
  }

  public componentDidMount() {
    this.timer = setInterval(this.progress, 20);
  }

  public componentWillUnmount() {
    clearInterval(this.timer);
  }

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.progress}>
        <CircularProgress variant="determinate" value={this.state.completed} />
      </div>
    );
  }

  private progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };
}

export default withStyles(styles)(Loader);
