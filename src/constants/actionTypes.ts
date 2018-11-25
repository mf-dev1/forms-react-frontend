/**
 * Object which stores all redux action types used in application
 * @type {Object}
 */
const actionTypes = {
  // home reducer
  FETCH_HOME: 'FETCH_HOME',
  FETCH_HOME_FULFILLED: 'FETCH_HOME_FULFILLED',
  FETCH_HOME_FAILED: 'FETCH_HOME_FAILED',

  // detail reducer
  FETCH_DETAIL: 'FETCH_DETAIL',
  FETCH_DETAIL_FULFILLED: 'FETCH_DETAIL_FULFILLED',
  FETCH_DETAIL_FAILED: 'FETCH_DETAIL_FAILED',

  FETCH_DETAIL_TITLE: 'FETCH_DETAIL_TITLE',
  FETCH_DETAIL_TITLE_FULFILLED: 'FETCH_DETAIL_TITLE_FULFILLED',
  FETCH_DETAIL_TITLE_FAILED: 'FETCH_DETAIL_TITLE_FAILED',

  // detail reducer - answer question and choose one option
  VOTE_DETAIL: 'VOTE_DETAIL',
  VOTE_DETAIL_FULFILLED: 'VOTE_DETAIL_FULFILLED',
  VOTE_DETAIL_FAILED: 'VOTE_DETAIL_FAILED',
};

export default actionTypes;
