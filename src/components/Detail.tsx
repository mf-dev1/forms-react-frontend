import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { DetailItem } from '../reducers/detailReducer';
import Button from '@material-ui/core/Button';

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
  onSave: (id: string) => any;
}

type AllProps = DetailProps & WithStyles<typeof styles>;

export interface State {
  formValue: string;
}

class Detail extends React.Component<AllProps, State> {
  constructor(props: AllProps) {
    super(props);
    this.state = { formValue: '' };
  }

  public render() {
    const title = this.props.title;
    const items = this.props.items || [];
    const onSave = () => {
      this.props.onSave(this.state.formValue);
    };

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
          </Grid>
          <Grid item>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Choose one option and click save.
              </FormLabel>
              <RadioGroup
                name="questions"
                className="detail-form"
                value={this.state.formValue}
                onChange={this.handleChange}
              >
                {items.map((item, i) => (
                  <FormControlLabel
                    key={item.id.toString()}
                    value={item.id.toString()}
                    control={<Radio color="primary" />}
                    label={item.title}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <Button
              href="#/"
              variant="contained"
              className={this.props.classes.button}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={this.props.classes.button}
              onClick={onSave}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }

  private handleChange = (event: any) => {
    this.setState({ formValue: event.target.value });
  };
}

export default withStyles(styles)(Detail);
