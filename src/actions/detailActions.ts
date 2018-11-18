import actionTypes from '../constants/actionTypes';

// action creators
export const fetchDetail = payload => ({
  type: actionTypes.FETCH_DETAIL,
  payload,
});
export const fetchDetailFulfilled = payload => ({
  type: actionTypes.FETCH_DETAIL_FULFILLED,
  payload,
});
export const fetchDetailFailed = payload => ({
  type: actionTypes.FETCH_DETAIL_FAILED,
  payload,
});

export const fetchDetailTitle = payload => ({
  type: actionTypes.FETCH_DETAIL_TITLE,
  payload,
});
export const fetchDetailTitleFulfilled = payload => ({
  type: actionTypes.FETCH_DETAIL_TITLE_FULFILLED,
  payload,
});
export const fetchDetailTitleFailed = payload => ({
  type: actionTypes.FETCH_DETAIL_TITLE_FAILED,
  payload,
});

export const voteDetail = payload => ({
  type: actionTypes.VOTE_DETAIL,
  payload,
});
export const voteDetailFulfilled = payload => ({
  type: actionTypes.VOTE_DETAIL_FULFILLED,
  payload,
});
export const voteDetailFailed = payload => ({
  type: actionTypes.VOTE_DETAIL_FAILED,
  payload,
});
