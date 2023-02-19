import { Dispatch } from 'redux';
import axios from 'axios';

import { SET_CATEGORIES } from '../../../constants';
import { baseUrl } from '../../../constants/api';
import { seErrorAction } from '../loading-slice';

export const getCategoriesAction = () => (dispatch: Dispatch) =>
  axios
    .get(`${baseUrl}/api/categories`)
    .then(({ data }) => dispatch({ type: SET_CATEGORIES, payload: data }))
    .catch(() => dispatch(seErrorAction()));
