import { Dispatch } from 'redux';
import axios from 'axios';

import { ALL_BOOKS, SET_CATEGORIES } from '../../../constants';
import { baseUrl } from '../../../constants/api';
import { seErrorAction } from '../loading-slice';

export const getCategoriesAction = () => (dispatch: Dispatch) =>
  axios
    .get(`${baseUrl}/api/categories`)
    .then(({ data }) => dispatch({ type: SET_CATEGORIES, payload: [ALL_BOOKS, ...data] }))
    .catch(() => dispatch(seErrorAction()));
