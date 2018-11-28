import * as actionTypes from '../constants/actionTypes';

// action creators
export const fetchHome = () => ({ type: actionTypes.FETCH_HOME });

export const fetchHomeFulfilled = payload => ({
  type: actionTypes.FETCH_HOME_FULFILLED,
  payload,
});
export const fetchHomeFailed = payload => ({
  type: actionTypes.FETCH_HOME_FAILED,
  payload,
});
