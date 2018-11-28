import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ApplicationState } from '../reducers';
import { fetchHome } from '../actions/homeActions';
import Home from '../components/Home';
import WithLoading from '../components/WithLoading';

import { HomeState } from '../reducers/homeReducer';
import { ConnectedReduxProps } from '../reducers/index';
import { RouteComponentProps } from 'react-router-dom';

interface PropsFromDispatch {
  fetchHome: typeof fetchHome;
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
    const loading = this.props.loading;
    const errors = this.props.errors;
    const HomeWithLoading = WithLoading(Home);

    return <HomeWithLoading loading={loading} errors={errors} items={items} />;
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
