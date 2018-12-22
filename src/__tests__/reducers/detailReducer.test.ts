import {
  detailReducer as reducer,
  DetailState,
} from '../../reducers/detailReducer';
import * as actionTypes from '../../constants/actionTypes';

describe('Detail reducer', () => {
  const initialState: DetailState = {
    loading: true,
    voted: false,
    data: [],
    errors: undefined,
    meta: undefined,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle FETCH_DETAIL', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.FETCH_DETAIL,
      })
    ).toEqual({
      loading: true,
      voted: false,
      data: [],
      errors: undefined,
      meta: undefined,
    });
  });

  it('should handle FETCH_DETAIL_FULFILLED', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.FETCH_DETAIL_FULFILLED,
        payload: ['Test'],
      })
    ).toEqual({
      loading: false,
      voted: false,
      data: ['Test'],
      errors: undefined,
      meta: undefined,
    });
  });

  it('should handle FETCH_DETAIL_FAILED', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.FETCH_DETAIL_FAILED,
        payload: 'Error',
      })
    ).toEqual({
      loading: false,
      voted: false,
      data: [],
      errors: 'Error',
      meta: undefined,
    });
  });

  it('should handle FETCH_DETAIL_TITLE', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.FETCH_DETAIL_TITLE,
      })
    ).toEqual({
      loading: true,
      voted: false,
      data: [],
      errors: undefined,
      meta: undefined,
    });
  });

  it('should handle FETCH_DETAIL_TITLE_FULFILLED', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.FETCH_DETAIL_TITLE_FULFILLED,
        payload: ['Test'],
      })
    ).toEqual({
      loading: false,
      voted: false,
      data: [],
      errors: undefined,
      meta: ['Test'],
    });
  });

  it('should handle FETCH_DETAIL_TITLE_FAILED', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.FETCH_DETAIL_TITLE_FAILED,
        payload: 'Error',
      })
    ).toEqual({
      loading: false,
      voted: false,
      data: [],
      errors: 'Error',
      meta: undefined,
    });
  });

  it('should handle VOTE_DETAIL', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.VOTE_DETAIL,
      })
    ).toEqual({
      loading: true,
      voted: false,
      data: [],
      errors: undefined,
      meta: undefined,
    });
  });

  it('should handle VOTE_DETAIL_FULFILLED', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.VOTE_DETAIL_FULFILLED,
        payload: ['Test'],
      })
    ).toEqual({
      loading: false,
      voted: true,
      data: [],
      errors: undefined,
      meta: undefined,
    });
  });

  it('should handle VOTE_DETAIL_FAILED', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.VOTE_DETAIL_FAILED,
        payload: 'Error',
      })
    ).toEqual({
      loading: false,
      voted: false,
      data: [],
      errors: 'Error',
      meta: undefined,
    });
  });
});
