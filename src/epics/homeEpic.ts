import { ajax } from 'rxjs/observable/dom/ajax';
import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import actionTypes from '../constants/actionTypes';
import { fetchHomeFulfilled } from '../actions/homeActions';
// import { Action } from '../actions';
// import { ApplicationState } from '../reducers';

// Also now using v6 pipe operators
/*
const fetchHome: Epic<Action, ApplicationState> = (action$, state$) =>
	action$.pipe(
		ofType(actionTypes.FETCH_HOME),
		mergeMap(action => {
			const apiUrl = `http://localhost:3005/Forms`;
			return ajax
				.getJSON(apiUrl)
				.pipe(
					map(response => fetchHomeFulfilled(response))
					// catchError(error => fetchHomeFailed(error.xhr.response))
				);
		})
	);
	*/
export const fetchHome: any = action$ =>
  action$.pipe(
    ofType(actionTypes.FETCH_HOME),
    mergeMap(action =>
      ajax
        .getJSON(`http://localhost:3005/api/Forms`)
        .pipe(map(response => fetchHomeFulfilled(response)))
    )
  );

// export default fetchHome;
