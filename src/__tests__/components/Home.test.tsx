import * as React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from '../../components/Home';

describe('Home component', () => {
  let mount;
  const emptyItems = [];
  const testClasses = { grid: 'grid' };

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });
  it('renders without crashing', () => {
    const wrapper = mount(
      <Router>
        <Home items={emptyItems} classes={testClasses} />
      </Router>
    );

    expect(wrapper.find('.home-container').length).toEqual(1);
  });

  it('renders with items', () => {
    const testItems = [
      {
        id: 1,
        title: 'item-title-1',
        votes: 0,
        formId: 'form1',
      },
      {
        id: 2,
        title: 'item-title-2',
        votes: 0,
        formId: 'form1',
      },
    ];
    const wrapper = mount(
      <Router>
        <Home items={testItems} classes={testClasses} />
      </Router>
    );

    expect(wrapper.find('a').length).toEqual(2);
    const firstItem = wrapper.find('a').at(0);
    expect(firstItem.prop('href')).toEqual('/detail/1');

    const secondItem = wrapper.find('a').at(1);
    expect(secondItem.prop('href')).toEqual('/detail/2');
  });
});
