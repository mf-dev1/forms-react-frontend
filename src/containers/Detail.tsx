import * as React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export interface DetailItem {
  id: number;
  text: string;
}
export interface Props {
  items: DetailItem[];
  title: string;
}
class Detail extends React.Component<Props> {
  public render() {
    const title = this.props.title;
    const items = this.props.items;

    const pageContent = (
      <FormControl component="fieldset">
        <FormLabel component="legend">
          Choose one option and click save.
        </FormLabel>
        <RadioGroup>
          {items.map((item, i) => (
            <FormControlLabel
              value={item.id.toString()}
              control={<Radio />}
              label={item.text}
            />
          ))}
        </RadioGroup>
      </FormControl>
    );
    return (
      <div className="detail-container">
        <Typography variant="h6">{title}</Typography>
        {pageContent}
      </div>
    );
  }
}
// Map Redux state to component props
function mapStateToProps(state: any) {
  return {
    items: state.detail.items,
    title: state.detail.title
  };
}

// Connected Component
export default connect(
  mapStateToProps,
  null
)(Detail);
