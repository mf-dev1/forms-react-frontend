import { homeReducer as reducer, HomeState } from '../../reducers/homeReducer';
import * as actionTypes from '../../constants/actionTypes';

describe('Home reducer', () => {
  const initialState: HomeState = {
    loading: true,
    data: [],
    errors: undefined,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle FETCH_HOME', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.FETCH_HOME,
      })
    ).toEqual({
      loading: true,
      data: [],
      errors: undefined,
    });
  });

  it('should handle FETCH_HOME_FULFILLED', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.FETCH_HOME_FULFILLED,
        payload: ['Test'],
      })
    ).toEqual({
      loading: false,
      data: ['Test'],
      errors: undefined,
    });
  });

  it('should handle FETCH_HOME_FAILED', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.FETCH_HOME_FAILED,
        payload: 'Error',
      })
    ).toEqual({
      loading: false,
      data: [],
      errors: 'Error',
    });
  });
});
