// mock fetchData
import { fetchData } from '../../utils/dataHelper';
jest.mock('../../utils/dataHelper');
fetchData.mockImplementation((...params) => [...params]);

import {
  fetchDetail,
  fetchDetailTitle,
  voteDetail,
} from '../../epics/detailEpic';

describe('Detail epics', () => {
  it('should create an action: fetchDetail', () => {
    const expectedAction = [
      'getJSON',
      'Forms/:id/questions',
      null,
      null,
      'FETCH_DETAIL',
      'FETCH_DETAIL_FULFILLED',
      'FETCH_DETAIL_FAILED',
    ];
    expect(fetchDetail).toEqual(expectedAction);
  });

  it('should create an action: fetchDetailTitle', () => {
    const expectedAction = [
      'getJSON',
      'Forms/:id',
      null,
      null,
      'FETCH_DETAIL_TITLE',
      'FETCH_DETAIL_TITLE_FULFILLED',
      'FETCH_DETAIL_TITLE_FAILED',
    ];
    expect(fetchDetailTitle).toEqual(expectedAction);
  });

  it('should create an action: voteDetail', () => {
    const expectedAction = [
      'post',
      'Questions/:id/vote',
      null,
      null,
      'VOTE_DETAIL',
      'VOTE_DETAIL_FULFILLED',
      'VOTE_DETAIL_FAILED',
    ];
    expect(voteDetail).toEqual(expectedAction);
  });
});
