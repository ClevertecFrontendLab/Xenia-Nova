import { combineReducers } from 'redux';

import { bookReducer } from './slice/book-slice';

export const rootReducer = combineReducers({
  bookReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
