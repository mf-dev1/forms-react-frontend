import actionTypes from '../constants/actionTypes';

// action creators
export const fetchHome = payload => ({ type: actionTypes.FETCH_HOME, payload });
export const fetchHomeFulfilled = payload => ({
  type: actionTypes.FETCH_HOME_FULFILLED,
  payload,
});
export const fetchHomeFailed = payload => ({
  type: actionTypes.FETCH_HOME_FAILED,
  payload,
});
