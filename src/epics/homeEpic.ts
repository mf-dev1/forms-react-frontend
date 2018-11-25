import { ajax } from 'rxjs/observable/dom/ajax';
import { ofType } from 'redux-observable';
import { catchError, mergeMap, map } from 'rxjs/operators';
import actionTypes from '../constants/actionTypes';
import { fetchHomeFulfilled } from '../actions/homeActions';
import { of } from 'rxjs';

export const fetchHome: any = action$ =>
  action$.pipe(
    ofType(actionTypes.FETCH_HOME),
    mergeMap(action =>
      ajax.getJSON(`http://localhost:3005/api/Forms`).pipe(
        map(response => fetchHomeFulfilled(response)),
        catchError(error =>
          of({
            type: actionTypes.FETCH_HOME_FAILED,
            payload: error.xhr.response || 'Connection refused',
            error: true,
          })
        )
      )
    )
  );
