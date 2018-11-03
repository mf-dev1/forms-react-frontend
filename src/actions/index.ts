import {
  ADD_ARTICLE,
  INCREASE_ENTHUSIASM,
  DECREASE_ENTHUSIASM
} from '../constants/action-types';

export const addArticle = (article: any) => ({
  type: ADD_ARTICLE,
  payload: article
});
export const increaseEnthusiasm = () => ({ type: INCREASE_ENTHUSIASM });
export const decreaseEnthusiasm = () => ({ type: DECREASE_ENTHUSIASM });
