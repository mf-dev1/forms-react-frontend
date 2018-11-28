import * as actionTypes from '../constants/actionTypes';

import { fetchData } from '../utils/dataHelper';

export const fetchHome = fetchData(
  'getJSON',
  'Forms',
  null,
  null,
  actionTypes.FETCH_HOME,
  actionTypes.FETCH_HOME_FULFILLED,
  actionTypes.FETCH_HOME_FAILED
);
