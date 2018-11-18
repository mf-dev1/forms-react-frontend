import * as React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import RandomIcon from './RandomIcon';
import { HomeItem } from '../reducers/homeReducer';

const styles = {
  grid: {
    maxWidth: 480,
    margin: '0 auto',
  },
};

interface HomeProps {
  items: HomeItem[];
}
type AllProps = HomeProps & WithStyles<typeof styles>;

class Home extends React.Component<AllProps> {
  public render() {
    const items = this.props.items || [];
    const MyLink = (props: any) => <Link to={props.href} {...props} />;

    return (
      <div className="home-container">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={this.props.classes.grid}
        >
          <Grid item>
            <Typography variant="h6">Answer the question.</Typography>
          </Grid>
          <Grid item>
            <List>
              {items.map((item, i) => (
                <ListItem
                  component={MyLink}
                  href={`/detail/${item.id}`}
                  divider
                  key={item.id}
                >
                  <ListItemIcon>
                    <RandomIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.title} secondary={null} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
