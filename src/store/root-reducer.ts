import { combineReducers } from 'redux';

import { bookReducer, loadingReducer } from './slice';

export const rootReducer = combineReducers({
  books: bookReducer,
  loading: loadingReducer,
});
