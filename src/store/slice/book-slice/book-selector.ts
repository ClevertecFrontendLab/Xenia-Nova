import { RootState } from '../../../types/store';

export const getCurrentBookSelector = (state: RootState) => state.books.currentBook;

export const getAllBooksSelector = (state: RootState) => state.books.books;
