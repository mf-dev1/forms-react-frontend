import { combineEpics } from 'redux-observable';

// import your Home Module epics here and combine them
// Place all epics in same directory
import fetchHome from './homeEpic';
import fetchDetail, { fetchDetailTitle } from './detailEpic';

const rootEpic = combineEpics(fetchHome, fetchDetail, fetchDetailTitle);

export default rootEpic;
