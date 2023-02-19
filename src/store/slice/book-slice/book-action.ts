import { Dispatch } from 'redux';
import axios from 'axios';

import { CLEAR_CURRENT_BOOK,SET_ALL_BOOKS, SET_CURRENT_BOOK } from '../../../constants';
import { baseUrl } from '../../../constants/api';
import { seErrorAction, setLoadingAction } from '../loading-slice';

export const getAllBooksAction = () => (dispatch: Dispatch) => {
  dispatch(setLoadingAction(true));
  axios
    .get(`${baseUrl}/api/books`)
    .then(({ data }) => dispatch({ type: SET_ALL_BOOKS, payload: data }))
    .catch(() => dispatch(seErrorAction()))
    .finally(() => dispatch(setLoadingAction(false)));
};

export const getCurrentBookAction = (id: string) => (dispatch: Dispatch) => {
  dispatch(setLoadingAction(true));
  axios
    .get(`${baseUrl}/api/books/${id}`)
    .then(({ data }) => dispatch({ type: SET_CURRENT_BOOK, payload: data }))
    .catch(() => dispatch(seErrorAction()))
    .finally(() => dispatch(setLoadingAction(false)));
};

export const clearCurrentBookAction = () => ({
    type: CLEAR_CURRENT_BOOK,
    payload: {}
})
