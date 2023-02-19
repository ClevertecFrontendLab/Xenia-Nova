import { Action } from 'redux';

import { SET_CATEGORIES } from '../../../constants';
import { MAIN_PAGE, TERMS, TREATY } from '../../../constants/router';
import { IMenuItem } from '../../../types';
import { ICategoriesState } from '../../../types/store';

interface IAction extends Action {
  payload: IMenuItem[];
}

const initialState: ICategoriesState = {
  menu: {
    books: {
      id: 1,
      name: 'Витрина книг',
      path: MAIN_PAGE,
      nestedItems: [
        {
          name: 'Все книги',
          path: MAIN_PAGE,
          dataTestId: 'navigation-books',
          mobileDataTestId: 'burger-books',
          id: 'defaultId',
        },
      ],
    },
    treaty: {
      id: 2,
      name: 'Правила пользования',
      path: TERMS,
      dataTestId: 'navigation-terms',
      mobileDataTestId: 'burger-terms',
    },
    terms: {
      id: 3,
      name: 'Договор оферты',
      path: TREATY,
      dataTestId: 'navigation-contract',
      mobileDataTestId: 'burger-contract',
    },
  },
  categories: [],
};

export const categoriesReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        menu: {
          ...state.menu,
          books: { ...state.menu.books, nestedItems: state.menu.books.nestedItems?.concat(action.payload) },
        },
        categories: action.payload,
      };
    default:
      return state;
  }
};
