import * as React from 'react';
import { create } from 'react-test-renderer';
import Header from '../../components/Header';

// use react-test-renderer without enzyme
describe('Header component', () => {
  test('it shows the expected text)', () => {
    const component = create(<Header />);
    const instance = component.getInstance();
    expect(instance.state).toBe(null);

    const rootInstance = component.root;
    // console.log('debug', component.toJSON());
    // console.log('debug', component.toTree());
    const text = rootInstance.findAll(el => el.type === 'h2');

    expect(text).toHaveLength(1);
  });
});
