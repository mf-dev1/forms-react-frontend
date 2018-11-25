import { ajax } from 'rxjs/observable/dom/ajax';
import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import actionTypes from '../constants/actionTypes';
import {
  fetchDetailFulfilled,
  fetchDetailTitleFulfilled,
  voteDetailFulfilled,
} from '../actions/detailActions';

export const fetchDetail: any = action$ =>
  action$.pipe(
    ofType(actionTypes.FETCH_DETAIL),
    mergeMap((action: any) =>
      ajax
        .getJSON(`http://localhost:3005/api/Forms/${action.payload}/questions`)
        .pipe(map(response => fetchDetailFulfilled(response)))
    )
  );

export const fetchDetailTitle: any = action$ =>
  action$.pipe(
    ofType(actionTypes.FETCH_DETAIL_TITLE),
    mergeMap((action: any) =>
      ajax
        .getJSON(`http://localhost:3005/api/Forms/${action.payload}`)
        .pipe(map(response => fetchDetailTitleFulfilled(response)))
    )
  );

export const voteDetail: any = action$ =>
  action$.pipe(
    ofType(actionTypes.VOTE_DETAIL),
    mergeMap((action: any) =>
      ajax
        .post(`http://localhost:3005/api/Questions/${action.payload}/vote`)
        .pipe(map(response => voteDetailFulfilled(response)))
    )
  );
