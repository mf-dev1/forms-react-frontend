import * as React from 'react';
import { create } from 'react-test-renderer';
import PageNotFound from '../../components/PageNotFound';

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
    // console.log('debug', component.toJSON());
    // console.log('debug', component.toTree());
    expect(text).toHaveLength(1);
  });
});
