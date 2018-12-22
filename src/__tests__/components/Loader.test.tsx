import * as React from 'react';
import { create } from 'react-test-renderer';
import Loader from '../../components/Loader';
import { shallow } from 'enzyme';

describe('Loader component', () => {
  // use react-test-renderer without enzyme
  it('it matches the snapshot', () => {
    const component = create(<Loader />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  // use enzyme
  it('it matches the enzyme snapshot', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
});
