import { AnyAction } from 'redux';

const initialState = {
  books: [],
  currentBook: {},
};

export const bookReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return { ...state, books: action.payload };
    case 'SET_CURRENT_BOOK':
      return { ...state, currentBook: action.payload };
    case 'CLEAR_CURRENT_BOOK':
      return { ...state, currentBook: {} };
    default:
      return state;
  }
};
