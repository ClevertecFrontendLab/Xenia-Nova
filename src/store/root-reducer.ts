import { combineReducers } from 'redux';

import { categoriesReducer } from './slice/category-slice/category-reducer';
import { bookReducer, loadingReducer } from './slice';

export const rootReducer = combineReducers({
  books: bookReducer,
  loading: loadingReducer,
  categories: categoriesReducer,
});
