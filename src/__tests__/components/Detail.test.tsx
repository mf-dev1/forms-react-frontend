import * as React from 'react';
import { createMount } from '@material-ui/core/test-utils';

import Detail from '../../components/Detail';

describe('Detail component', () => {
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
      <Detail
        id="test-id"
        title={testTitle}
        items={emptyItems}
        // tslint:disable-next-line:no-empty
        onSave={() => {}}
        classes={testClasses}
      />
    );
    expect(wrapper.find('.detail-container').length).toEqual(1);
  });

  it('renders with title', () => {
    const wrapper = mount(
      <Detail
        id="test-id"
        title={testTitle}
        items={emptyItems}
        // tslint:disable-next-line:no-empty
        onSave={(optionId: string) => {}}
        classes={testClasses}
      />
    );

    expect(wrapper.find('h6').length).toEqual(1);
    expect(wrapper.find('a').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.text()).toContain(testTitle);
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
      <Detail
        id="test-id"
        title={testTitle}
        items={testItems}
        // tslint:disable-next-line:no-empty
        onSave={(optionId: string) => {}}
        classes={testClasses}
      />
    );

    expect(wrapper.find('input').length).toEqual(2);
    const firstItem = wrapper.find('input').at(0);
    expect(firstItem.prop('value')).toEqual('1');
    expect(firstItem.props().checked).toEqual(false);

    const secondItem = wrapper.find('input').at(1);
    expect(secondItem.prop('value')).toEqual('2');
    expect(secondItem.props().checked).toEqual(false);
  });
});
