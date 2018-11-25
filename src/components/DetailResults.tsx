import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { DetailItem } from '../reducers/detailReducer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  grid: {
    maxWidth: 480,
    margin: '0 auto',
  },
  button: {
    margin: theme.spacing.unit,
    'text-decoration': 'none',
  },
});

interface DetailProps {
  id: string;
  title: string;
  items: DetailItem[];
}

type AllProps = DetailProps & WithStyles<typeof styles>;

class DetailResults extends React.Component<AllProps> {
  constructor(props: AllProps) {
    super(props);
    this.state = { formValue: '' };
  }

  public render() {
    const title = this.props.title;
    const items = this.props.items || [];

    return (
      <div className="detail-container">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={this.props.classes.grid}
        >
          <Grid item>
            <Typography variant="h6">{title}</Typography>
            <FormLabel component="legend">Results:</FormLabel>
          </Grid>
          <Grid item>
            <List>
              {items.map((item, i) => (
                <ListItem divider key={item.id}>
                  <ListItemText primary={item.title} secondary={null} />
                  <ListItemText primary={item.votes} secondary={null} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item>
            <Button
              href="#/"
              variant="contained"
              className={this.props.classes.button}
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(DetailResults);
