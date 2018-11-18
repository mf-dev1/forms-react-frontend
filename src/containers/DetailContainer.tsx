import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ApplicationState } from '../reducers';
import { fetchDetail, fetchDetailTitle } from '../actions/detailActions';
import Detail from '../components/Detail';
import { DetailState } from '../reducers/detailReducer';
import { ConnectedReduxProps } from '../reducers/index';
import { RouteComponentProps } from 'react-router-dom';

interface PropsFromDispatch {
  fetchDetail: (id: string) => any;
  fetchDetailTitle: (id: string) => any;
}

interface RouteParams {
  id: string;
}

type AllProps = DetailState &
  PropsFromDispatch &
  RouteComponentProps<RouteParams> &
  ConnectedReduxProps;

class DetailContainer extends React.Component<AllProps> {
  public componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchDetail(id);
    this.props.fetchDetailTitle(id);
  }

  public render() {
    const id = this.props.match.params.id;
    const title = this.props.meta ? this.props.meta.title : '';
    const items = this.props.data || [];

    if (this.props.loading) {
      return <div className="home-container">Loading...</div>;
    } else {
      return <Detail id={id} title={title} items={items} />;
    }
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    loading: state.detail.loading,
    meta: state.detail.meta,
    data: state.detail.data,
    errors: state.detail.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchDetail,
      fetchDetailTitle,
    },
    dispatch
  );
};

// Connected Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailContainer);
