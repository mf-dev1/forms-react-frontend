import {
  ADD_ARTICLE,
  INCREASE_ENTHUSIASM,
  DECREASE_ENTHUSIASM
} from '../constants/action-types';
const initialState = {
  articles: [],
  enthusiasmLevel: 5,
  home: {
    title: 'Answer the question.',
    items: [
      { id: 1, text: 'Where you want to go?' },
      { id: 2, text: 'What movie is better?' },
      { id: 3, text: 'What is your favorite movie genre?' },
      { id: 4, text: 'What is your favourite time of day?' }
    ]
  },
  detail: {
    title: 'What is your favorite movie genre?',
    items: [
      { id: 1, text: 'Action' },
      { id: 2, text: 'Documentary' },
      { id: 3, text: 'Drama' },
      { id: 4, text: 'Horror' },
      { id: 4, text: 'Thriller' },
      { id: 4, text: 'Western' }
    ]
  }
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
