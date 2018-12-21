import * as React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { DetailContainer } from '../../containers/DetailContainer';

describe('Detail container', () => {
  let shallow;
  const mockFetch = jest.fn();

  beforeEach(() => {
    shallow = createShallow();
  });

  it('renders without crashing', () => {
    const mockState = {
      loading: true,
      data: [],
      errors: undefined,
      meta: {},
      voted: false,
    };
    const mockProps = {
      loading: mockState.loading,
      data: mockState.data,
      errors: mockState.errors,
      voted: mockState.voted,
      fetchDetail: mockFetch,
      fetchDetailTitle: mockFetch,
      voteDetail: mockFetch,
    };
    const wrapper = shallow(<DetailContainer {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
