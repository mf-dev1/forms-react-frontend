import * as actions from '../../actions/homeActions';
import * as actionTypes from '../../constants/actionTypes';

describe('Home actions', () => {
  it('should create an action: fetchHome', () => {
    const expectedAction = {
      type: actionTypes.FETCH_HOME,
    };
    expect(actions.fetchHome()).toEqual(expectedAction);
  });

  it('should create an action: fetchHomeFulfilled', () => {
    const payload = 'Test';
    const expectedAction = {
      type: actionTypes.FETCH_HOME_FULFILLED,
      payload,
    };
    expect(actions.fetchHomeFulfilled(payload)).toEqual(expectedAction);
  });

  it('should create an action: fetchHomeFailed', () => {
    const payload = 'Test';
    const expectedAction = {
      type: actionTypes.FETCH_HOME_FAILED,
      payload,
    };
    expect(actions.fetchHomeFailed(payload)).toEqual(expectedAction);
  });
});
