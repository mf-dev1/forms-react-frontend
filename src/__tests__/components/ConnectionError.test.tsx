import * as React from 'react';
import { create } from 'react-test-renderer';
import ConnectionError from '../../components/ConnectionError';

// use react-test-renderer without enzyme
describe('ConnectionError component', () => {
  test('it shows the expected text)', () => {
    const component = create(<ConnectionError />);
    const instance = component.getInstance();
    expect(instance.state).toBe(null);

    const rootInstance = component.root;
    const text = rootInstance.findAll(
      el =>
        el.type === 'h6' &&
        el.children &&
        el.children[0] === 'Connection error!'
    );
    expect(text).toHaveLength(1);
  });
});
