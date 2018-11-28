import * as React from 'react';
import Loader from '../components/Loader';
import ConnectionError from '../components/ConnectionError';

function WithLoading(Component) {
  return function WihLoadingComponent({ loading, errors, ...props }) {
    if (loading) {
      return <Loader />;
    } else if (errors) {
      return <ConnectionError />;
    } else {
      return <Component {...props} />;
    }
  };
}
export default WithLoading;
