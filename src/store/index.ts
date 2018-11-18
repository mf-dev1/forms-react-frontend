import { createStore, applyMiddleware, compose } from 'redux';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer, { ApplicationState } from '../reducers';
import rootEpic from '../epics';

// export `history` to use in index.js, we using `createBrowserHistory`
export const history = createHashHistory();

declare global {
  interface Window {
    // tslint:disable-next-line:ban-types
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Build the middleware for intercepting and dispatching navigation actions
// const appRouterMiddleware = routerMiddleware(history);

function configureStore(initialState?: ApplicationState) {
  // configure middlewares
  const middlewares = [
    createEpicMiddleware(rootEpic),
    routerMiddleware(history),
  ];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store
  return createStore(rootReducer, initialState!, enhancer);
}

const store = configureStore();
/*
const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(rootReducer, 
    applyMiddleware(epicMiddleware),
    applyMiddleware(appRouterMiddleware));
*/
export default store;
