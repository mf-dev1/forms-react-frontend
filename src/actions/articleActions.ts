import actionTypes from '../constants/actionTypes';

export const addArticle = (article: any) => ({
  type: actionTypes.ADD_ARTICLE,
  payload: article,
});
