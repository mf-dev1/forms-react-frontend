import { combineReducers, Dispatch, Action, AnyAction } from 'redux';

// import your Home Module reducers here and combine them
// Placed in same directory
import { articleReducer, ArticleState } from './articleReducer';
import { counterReducer, CounterState } from './counterReducer';
import { detailReducer, DetailState } from './detailReducer';
import { homeReducer, HomeState } from './homeReducer';

// The top-level state object
export interface ApplicationState {
  article: ArticleState;
  counter: CounterState;
  detail: DetailState;
  home: HomeState;
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

const rootReducer = combineReducers<ApplicationState>({
  article: articleReducer,
  counter: counterReducer,
  detail: detailReducer,
  home: homeReducer,
});

export default rootReducer;
