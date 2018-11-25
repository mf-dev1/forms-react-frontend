import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ApplicationState } from '../reducers';
import {
  fetchDetail,
  fetchDetailTitle,
  voteDetail,
} from '../actions/detailActions';
import { DetailState } from '../reducers/detailReducer';
import { ConnectedReduxProps } from '../reducers/index';
import { RouteComponentProps } from 'react-router-dom';
import Detail from '../components/Detail';
import DetailResults from '../components/DetailResults';
import Loader from '../components/Loader';
import ConnectionError from '../components/ConnectionError';

interface PropsFromDispatch {
  fetchDetail: (id: string) => any;
  fetchDetailTitle: (id: string) => any;
  voteDetail: (id: string) => any;
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

  public componentDidUpdate(prevProps, prevState) {
    const id = this.props.match.params.id;
    if (!prevProps.voted && this.props.voted) {
      this.props.fetchDetail(id);
    }
  }

  public render() {
    const id = this.props.match.params.id;
    const title = this.props.meta ? this.props.meta.title : '';
    const items = this.props.data || [];

    if (this.props.loading) {
      return <Loader />;
    } else if (this.props.errors) {
      return <ConnectionError />;
    } else if (this.props.voted) {
      return <DetailResults id={id} title={title} items={items} />;
    } else {
      return (
        <Detail
          id={id}
          title={title}
          items={items}
          onSave={(optionId: string) => {
            this.props.voteDetail(optionId);
          }}
        />
      );
    }
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    loading: state.detail.loading,
    voted: state.detail.voted,
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
      voteDetail,
    },
    dispatch
  );
};

// Connected Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailContainer);
