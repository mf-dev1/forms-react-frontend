import * as actionTypes from '../constants/actionTypes';
import { Reducer } from 'redux';
import { Action } from '../actions';

export interface HomeItem {
  id: number;
  title: string;
}

export interface HomeState {
  readonly loading: boolean;
  readonly data?: HomeItem[];
  readonly errors?: string;
}

const initialState: HomeState = {
  loading: true,
  data: [],
  errors: undefined,
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<HomeState> = (
  state: HomeState = initialState,
  action: Action
) => {
  switch (action.type) {
    case actionTypes.FETCH_HOME: {
      return { ...state, loading: true };
    }
    case actionTypes.FETCH_HOME_FULFILLED: {
      return { ...state, loading: false, data: action.payload as [] };
    }
    case actionTypes.FETCH_HOME_FAILED: {
      return { ...state, loading: false, errors: action.payload as string };
    }
    default:
      return state;
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as homeReducer };
