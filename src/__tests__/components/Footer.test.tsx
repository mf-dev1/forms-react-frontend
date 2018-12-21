import * as React from 'react';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

// use react-test-renderer without enzyme
describe('Footer component', () => {
  test('it matches the snapshot', () => {
    const component = create(<Footer />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
