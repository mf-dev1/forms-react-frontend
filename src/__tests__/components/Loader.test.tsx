import * as React from 'react';
import { create } from 'react-test-renderer';
import Loader from '../../components/Loader';

describe('Loader component', () => {
  test('it matches the snapshot', () => {
    const component = create(<Loader />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
