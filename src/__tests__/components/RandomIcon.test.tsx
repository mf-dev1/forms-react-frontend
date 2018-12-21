import * as React from 'react';
import RandomIcon from '../../components/RandomIcon';
import { shallow } from 'enzyme';

describe('Loader component', () => {
  // use enzyme
  it('it matches the enzyme snapshot', () => {
    const wrap = shallow(<RandomIcon />);
    // console.log(wrap.debug());
    expect(wrap.find('div').length).toEqual(1);
  });
});
