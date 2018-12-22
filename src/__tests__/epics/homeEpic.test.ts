// mock fetchData
import { fetchData } from '../../utils/dataHelper';
jest.mock('../../utils/dataHelper');
fetchData.mockImplementation((...params) => [...params]);

import { fetchHome } from '../../epics/homeEpic';

describe('Home epics', () => {
  it('should create an action: fetchHome', () => {
    const expectedAction = [
      'getJSON',
      'Forms',
      null,
      null,
      'FETCH_HOME',
      'FETCH_HOME_FULFILLED',
      'FETCH_HOME_FAILED',
    ];
    expect(fetchHome).toEqual(expectedAction);
  });
});
