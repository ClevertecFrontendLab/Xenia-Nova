import { Dispatch } from 'redux';
import axios from 'axios';

import { setLoading } from '../loading-slice';

export const getAllBooks = () => (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  axios
    .get('https://strapi.cleverland.by/api/books')
    .then(({ data }) => dispatch({ type: 'SET_BOOKS', payload: data }))
    .finally(() => dispatch(setLoading(false)));
};

export const getCurrentBookAction = (id: string) => (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  axios
    .get(`https://strapi.cleverland.by/api/books/${id}`)
    .then(({ data }) => dispatch({ type: 'SET_CURRENT_BOOK', payload: data }))
    .finally(() => dispatch(setLoading(false)));
};
