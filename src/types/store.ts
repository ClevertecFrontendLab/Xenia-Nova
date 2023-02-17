import { rootReducer } from '../store/root-reducer';

import {IBook, ICurrentBook} from './book';
import {IMenuMainItem} from "./menu";

export type RootState = ReturnType<typeof rootReducer>;

export interface ILoadingState {
  isLoading: boolean;
  error: string;
}

export interface IBookState {
  books: IBook[];
  currentBook: ICurrentBook | null;
}

export interface ICategoriesState {
    menu: { [key: string]: IMenuMainItem }
}
