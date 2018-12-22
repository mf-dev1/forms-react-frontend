import * as React from 'react';
import RandomIcon from '../../components/RandomIcon';
import { shallow } from 'enzyme';

describe('Loader component', () => {
  // use enzyme
  it('it matches the enzyme snapshot', () => {
    const wrapper = shallow(<RandomIcon />);
    // console.log(wrapper.debug());
    expect(wrapper.find('div').length).toEqual(1);
  });
});
