// src/js/store/index.js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

// export `history` to use in index.js, we using `createBrowserHistory`
export const history = createHashHistory();

// Build the middleware for intercepting and dispatching navigation actions
const appRouterMiddleware = routerMiddleware(history);

const store = createStore(rootReducer, applyMiddleware(appRouterMiddleware));
export default store;
