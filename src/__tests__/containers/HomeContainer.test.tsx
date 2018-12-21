import * as React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { HomeContainer } from '../../containers/HomeContainer';

describe('Home container', () => {
  let shallow;
  const mockFetchHome = jest.fn();

  beforeEach(() => {
    shallow = createShallow();
  });

  it('renders without crashing', () => {
    const mockState = {
      loading: true,
      data: [],
      errors: undefined,
    };
    const mockProps = {
      loading: mockState.loading,
      data: mockState.data,
      errors: mockState.errors,
      fetchHome: mockFetchHome,
    };
    const wrapper = shallow(<HomeContainer {...mockProps} />);
    // console.log(wrapper.debug());
    expect(wrapper).toMatchSnapshot();
  });
});
