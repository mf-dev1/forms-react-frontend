import * as React from 'react';
import Loader from '../components/Loader';
import ConnectionError from '../components/ConnectionError';

const WithLoading = WrappedComponent => {
  class HOC extends React.Component<any> {
    public render() {
      if (this.props.loading) {
        return <Loader />;
      } else if (this.props.errors) {
        return <ConnectionError />;
      } else {
        return <WrappedComponent {...this.props} />;
      }
    }
  }

  return HOC;
};
export default WithLoading;
