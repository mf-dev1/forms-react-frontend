import * as actions from '../../actions/detailActions';
import * as actionTypes from '../../constants/actionTypes';

describe('Detail actions', () => {
  it('should create an action: fetchDetail', () => {
    const payload = 'Test';
    const expectedAction = {
      type: actionTypes.FETCH_DETAIL,
      payload,
    };
    expect(actions.fetchDetail(payload)).toEqual(expectedAction);
  });

  it('should create an action: fetchDetailFulfilled', () => {
    const payload = 'Test';
    const expectedAction = {
      type: actionTypes.FETCH_DETAIL_FULFILLED,
      payload,
    };
    expect(actions.fetchDetailFulfilled(payload)).toEqual(expectedAction);
  });

  it('should create an action: fetchDetailFailed', () => {
    const payload = 'Test';
    const expectedAction = {
      type: actionTypes.FETCH_DETAIL_FAILED,
      payload,
    };
    expect(actions.fetchDetailFailed(payload)).toEqual(expectedAction);
  });

  it('should create an action: fetchDetailTitle', () => {
    const payload = 'Test';
    const expectedAction = {
      type: actionTypes.FETCH_DETAIL_TITLE,
      payload,
    };
    expect(actions.fetchDetailTitle(payload)).toEqual(expectedAction);
  });

  it('should create an action: fetchDetailTitleFulfilled', () => {
    const payload = 'Test';
    const expectedAction = {
      type: actionTypes.FETCH_DETAIL_TITLE_FULFILLED,
      payload,
    };
    expect(actions.fetchDetailTitleFulfilled(payload)).toEqual(expectedAction);
  });

  it('should create an action: fetchDetailTitleFailed', () => {
    const payload = 'Test';
    const expectedAction = {
      type: actionTypes.FETCH_DETAIL_TITLE_FAILED,
      payload,
    };
    expect(actions.fetchDetailTitleFailed(payload)).toEqual(expectedAction);
  });

  it('should create an action: voteDetail', () => {
    const payload = 'Test';
    const expectedAction = {
      type: actionTypes.VOTE_DETAIL,
      payload,
    };
    expect(actions.voteDetail(payload)).toEqual(expectedAction);
  });

  it('should create an action: voteDetailFulfilled', () => {
    const payload = 'Test';
    const expectedAction = {
      type: actionTypes.VOTE_DETAIL_FULFILLED,
      payload,
    };
    expect(actions.voteDetailFulfilled(payload)).toEqual(expectedAction);
  });

  it('should create an action: voteDetailFailed', () => {
    const payload = 'Test';
    const expectedAction = {
      type: actionTypes.VOTE_DETAIL_FAILED,
      payload,
    };
    expect(actions.voteDetailFailed(payload)).toEqual(expectedAction);
  });
});
