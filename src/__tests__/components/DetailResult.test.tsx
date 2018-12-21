import * as React from 'react';
import { createMount } from '@material-ui/core/test-utils';

import DetailResults from '../../components/DetailResults';

describe('DetailResults component', () => {
  let mount;
  const emptyItems = [];
  const testClasses = { button: 'button', grid: 'grid' };
  const testTitle = 'test-title';

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });
  it('renders without crashing', () => {
    const wrapper = mount(
      <DetailResults
        id="test-id"
        title={testTitle}
        items={emptyItems}
        // tslint:disable-next-line:no-empty
        classes={testClasses}
      />
    );
    expect(wrapper.find('.detail-container').length).toEqual(1);
  });

  it('renders with title', () => {
    const wrapper = mount(
      <DetailResults
        id="test-id"
        title={testTitle}
        items={emptyItems}
        // tslint:disable-next-line:no-empty
        classes={testClasses}
      />
    );

    expect(wrapper.find('h6').length).toEqual(1);
    expect(wrapper.text()).toContain(testTitle);
  });

  it('renders with items', () => {
    const testItems = [
      {
        id: 1,
        title: 'item-title-1',
        votes: 4,
        formId: 'form1',
      },
      {
        id: 2,
        title: 'item-title-2',
        votes: 5,
        formId: 'form1',
      },
    ];
    const wrapper = mount(
      <DetailResults
        id="test-id"
        title={testTitle}
        items={testItems}
        // tslint:disable-next-line:no-empty
        classes={testClasses}
      />
    );

    expect(wrapper.find('li').length).toEqual(2);
    const firstItem = wrapper.find('li').at(0);
    expect(firstItem.text()).toEqual(
      `${testItems[0].title}${testItems[0].votes}`
    );

    const secondItem = wrapper.find('li').at(1);
    expect(secondItem.text()).toEqual(
      `${testItems[1].title}${testItems[1].votes}`
    );
  });
});
