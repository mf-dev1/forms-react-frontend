import * as actionTypes from '../constants/actionTypes';
import { fetchData } from '../utils/dataHelper';

export const fetchDetail = fetchData(
  'getJSON',
  `Forms/:id/questions`,
  null,
  null,
  actionTypes.FETCH_DETAIL,
  actionTypes.FETCH_DETAIL_FULFILLED,
  actionTypes.FETCH_DETAIL_FAILED
);

export const fetchDetailTitle = fetchData(
  'getJSON',
  `Forms/:id`,
  null,
  null,
  actionTypes.FETCH_DETAIL_TITLE,
  actionTypes.FETCH_DETAIL_TITLE_FULFILLED,
  actionTypes.FETCH_DETAIL_TITLE_FAILED
);

export const voteDetail = fetchData(
  'post',
  `Questions/:id/vote`,
  null,
  null,
  actionTypes.VOTE_DETAIL,
  actionTypes.VOTE_DETAIL_FULFILLED,
  actionTypes.VOTE_DETAIL_FAILED
);
