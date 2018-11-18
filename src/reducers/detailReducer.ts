import actionTypes from '../constants/actionTypes';
import { Reducer } from 'redux';
import { Action } from '../actions';

export interface DetailItem {
  id: number;
  title: string;
  votes: number;
  formId: string;
}

export interface Meta {
  id: number;
  title: string;
}

export interface DetailState {
  readonly loading: boolean;
  readonly data?: DetailItem[];
  readonly errors?: string;
  readonly meta?: Meta;
}

const initialState: DetailState = {
  loading: true,
  data: [],
  errors: undefined,
  meta: undefined,
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<DetailState> = (
  state: DetailState = initialState,
  action: Action
) => {
  switch (action.type) {
    case actionTypes.FETCH_DETAIL: {
      return { ...state, loading: true };
    }
    case actionTypes.FETCH_DETAIL_FULFILLED: {
      return { ...state, loading: false, data: action.payload as [] };
    }
    case actionTypes.FETCH_DETAIL_FAILED: {
      return { ...state, loading: false, errors: action.payload as string };
    }
    case actionTypes.FETCH_DETAIL_TITLE: {
      return { ...state, loading: true };
    }
    case actionTypes.FETCH_DETAIL_TITLE_FULFILLED: {
      return { ...state, loading: false, meta: action.payload as Meta };
    }
    case actionTypes.FETCH_DETAIL_TITLE_FAILED: {
      return { ...state, loading: false, errors: action.payload as string };
    }
    default:
      return state;
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as detailReducer };
