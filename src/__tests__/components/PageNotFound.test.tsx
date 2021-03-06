import * as React from 'react';
import { create } from 'react-test-renderer';
import PageNotFound from '../../components/PageNotFound';

// use react-test-renderer without enzyme
describe('PageNotFound component', () => {
  test('it shows the expected text)', () => {
    const component = create(<PageNotFound />);
    const instance = component.getInstance();
    expect(instance.state).toBe(null);

    const rootInstance = component.root;
    const text = rootInstance.findAll(
      el =>
        el.type === 'h6' && el.children && el.children[0] === 'Page not found!'
    );
    expect(text).toHaveLength(1);
  });
});
