import { Dispatch } from 'redux';
import axios from 'axios';

export const getAllBooks = () => (dispatch: Dispatch) =>
  axios
    .get('https://strapi.cleverland.by/api/books')
    .then(({ data }) => dispatch({ type: 'SET_BOOKS', payload: data }));

export const getCurrentBookAction = (id: string) => (dispatch: Dispatch) =>
  axios
    .get(`https://strapi.cleverland.by/api/books/${id}`)
    .then(({ data }) => dispatch({ type: 'SET_CURRENT_BOOK', payload: data }));
