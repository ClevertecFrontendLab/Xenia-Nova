import { AnyAction } from 'redux';

import { CLEAR_CURRENT_BOOK, SET_ALL_BOOKS, SET_CURRENT_BOOK } from '../../../constants';
import { IBookState } from '../../../types/store';

const initialState: IBookState = {
  books: [],
  currentBook: null,
};

export const bookReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_ALL_BOOKS:
      return { ...state, books: action.payload };
    case SET_CURRENT_BOOK:
      return { ...state, currentBook: action.payload };
    case CLEAR_CURRENT_BOOK:
      return { ...state, currentBook: {} };
    default:
      return state;
  }
};
