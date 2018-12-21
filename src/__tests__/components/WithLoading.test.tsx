import * as React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import WithLoading from '../../components/WithLoading';
import Loader from '../../components/Loader';
import ConnectionError from '../../components/ConnectionError';

describe('WithLoading component', () => {
  let shallow;
  const TestComponent = () => {
    return <div>test-div</div>;
  };

  beforeEach(() => {
    shallow = createShallow();
  });

  it('renders loader', () => {
    const mockProps = {
      loading: true,
      errors: undefined,
    };

    const TestWithLoading = WithLoading(TestComponent);

    const wrapper = shallow(<TestWithLoading {...mockProps} />);
    expect(wrapper.find(Loader)).toHaveLength(1);
  });

  it('renders with errors', () => {
    const mockProps = {
      loading: false,
      errors: 'error',
    };

    const TestWithLoading = WithLoading(TestComponent);

    const wrapper = shallow(<TestWithLoading {...mockProps} />);

    expect(wrapper.find(ConnectionError)).toHaveLength(1);
  });

  it('renders with data', () => {
    const mockProps = {
      loading: false,
      errors: undefined,
    };

    const TestWithLoading = WithLoading(TestComponent);

    const wrapper = shallow(<TestWithLoading {...mockProps} />);
    expect(wrapper.find(TestComponent)).toHaveLength(1);
  });
});
