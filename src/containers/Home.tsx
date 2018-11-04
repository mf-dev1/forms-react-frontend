import * as React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';

export interface HomeItem {
  id: number;
  text: string;
}

export interface Props {
  items: HomeItem[];
  title: string;
}
class Home extends React.Component<Props> {
  public render() {
    const title = this.props.title;
    const items = this.props.items;

    const pageContent = (
      <List>
        {items.map((item, i) => (
          <ListItem>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary={item.text} secondary={null} />
          </ListItem>
        ))}
      </List>
    );
    return (
      <div className="home-container">
        <Typography variant="h6">{title}</Typography>
        {pageContent}
      </div>
    );
  }
}
// Map Redux state to component props
function mapStateToProps(state: any) {
  return {
    items: state.home.items,
    title: state.home.title
  };
}

// Connected Component
export default connect(
  mapStateToProps,
  null
)(Home);
