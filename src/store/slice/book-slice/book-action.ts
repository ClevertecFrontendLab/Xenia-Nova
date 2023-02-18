import { Dispatch } from 'redux';
import axios from 'axios';

import { SET_ALL_BOOKS, SET_CURRENT_BOOK } from '../../../constants';
import { seErrorAction, setLoadingAction } from '../loading-slice';
import { baseUrl } from '../../../constants/api';

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
    .get(`${baseUrl}/api/books/${id}1212121`)
    .then(({ data }) => dispatch({ type: SET_CURRENT_BOOK, payload: data }))
    .catch(() => dispatch(seErrorAction()))
    .finally(() => dispatch(setLoadingAction(false)));
};
