import { rootReducer } from '../store/root-reducer';

import { IBook } from './book';

export type RootState = ReturnType<typeof rootReducer>;

export interface ILoadingState {
  isLoading: boolean;
  error: string;
}

export interface IBookState {
  books: IBook[];
  currentBook: any;
}
