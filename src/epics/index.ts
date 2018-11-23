import { combineEpics } from 'redux-observable';

// import your Home Module epics here and combine them
// Place all epics in same directory
import * as fetchHome from './homeEpic';
import * as fetchDetail from './detailEpic';

const obj = Object as any; // https://stackoverflow.com/questions/42966362/how-to-use-object-values-with-typescript/42967397
const epics = [...obj.values(fetchHome), ...obj.values(fetchDetail)];

const rootEpic = combineEpics(...epics);
export default rootEpic;
