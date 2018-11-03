import {
  ADD_ARTICLE,
  INCREASE_ENTHUSIASM,
  DECREASE_ENTHUSIASM
} from '../constants/action-types';
const initialState = {
  articles: [],
  enthusiasmLevel: 5
};
const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    case INCREASE_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREASE_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel - 1 };
    default:
      return state;
  }
};
export default rootReducer;
