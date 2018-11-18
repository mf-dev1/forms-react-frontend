import { Reducer } from 'redux';
import actionTypes from '../constants/actionTypes';
import { Action } from '../actions';

export interface ArticleState {
  articles: any[];
}

const initialState: ArticleState = {
  articles: [],
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<ArticleState> = (
  state: ArticleState = initialState,
  action: Action
) => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as articleReducer };
