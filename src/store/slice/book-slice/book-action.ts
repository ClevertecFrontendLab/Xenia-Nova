import { Dispatch } from 'redux';
import axios from 'axios';

import { SET_ALL_BOOKS, SET_CURRENT_BOOK } from '../../../constants';
import { setLoadingAction } from '../loading-slice';

export const getAllBooksAction = () => (dispatch: Dispatch) => {
  dispatch(setLoadingAction(true));
  axios
    .get('https://strapi.cleverland.by/api/books')
    .then(({ data }) => dispatch({ type: SET_ALL_BOOKS, payload: data }))
    .finally(() => dispatch(setLoadingAction(false)));
};

export const getCurrentBookAction = (id: string) => (dispatch: Dispatch) => {
  dispatch(setLoadingAction(true));
  axios
    .get(`https://strapi.cleverland.by/api/books/${id}`)
    .then(({ data }) => dispatch({ type: SET_CURRENT_BOOK, payload: data }))
    .finally(() => dispatch(setLoadingAction(false)));
};
