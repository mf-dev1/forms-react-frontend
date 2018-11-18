import { Reducer } from 'redux';
import actionTypes from '../constants/actionTypes';
import { Action } from '../actions';

export interface CounterState {
  enthusiasmLevel: number;
}

const initialState: CounterState = {
  enthusiasmLevel: 5,
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<CounterState> = (
  state: CounterState = initialState,
  action: Action
) => {
  switch (action.type) {
    case actionTypes.INCREASE_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case actionTypes.DECREASE_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel - 1 };
    default:
      return state;
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as counterReducer };
