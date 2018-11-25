import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ApplicationState } from '../reducers';
import { fetchHome } from '../actions/homeActions';
import Home from '../components/Home';
import Loader from '../components/Loader';
import ConnectionError from '../components/ConnectionError';
import { HomeState } from '../reducers/homeReducer';
import { ConnectedReduxProps } from '../reducers/index';
import { RouteComponentProps } from 'react-router-dom';

interface PropsFromDispatch {
  fetchHome: () => any;
}

type AllProps = HomeState &
  PropsFromDispatch &
  RouteComponentProps<{}> &
  ConnectedReduxProps;

class HomeContainer extends React.Component<AllProps> {
  public componentDidMount() {
    this.props.fetchHome();
  }

  public render() {
    const items = this.props.data || [];

    if (this.props.loading) {
      return <Loader />;
    } else if (this.props.errors) {
      return <ConnectionError />;
    } else {
      return <Home items={items} />;
    }
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    loading: state.home.loading,
    data: state.home.data,
    errors: state.home.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchHome,
    },
    dispatch
  );
};

// Connected Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
