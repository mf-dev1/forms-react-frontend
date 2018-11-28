import { ajax } from 'rxjs/observable/dom/ajax';
import { ofType } from 'redux-observable';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

enum httpMethodType {
  head,
  get,
  post,
  put,
  patch,
  delete,
  getJSON,
}

export const fetchData: any = (
  type: httpMethodType,
  path: string,
  body: {},
  headers: {},
  dataActionName: string,
  successActionName: string,
  errorActionName: string
): any => action$ => {
  const apiPath = process.env.REACT_APP_API + path;

  return action$.pipe(
    ofType(dataActionName),
    mergeMap((action: any) =>
      ajax[type](apiPath.replace(':id', `${action.payload}`), headers).pipe(
        map(response => {
          if (!response) {
            return {
              type: errorActionName,
              payload: 'No response',
              error: true,
            };
          } else {
            return {
              type: successActionName,
              payload: response,
            };
          }
        }),
        catchError(error =>
          of({
            type: errorActionName,
            payload: error.xhr.response || 'Connection refused',
            error: true,
          })
        )
      )
    )
  );
};
