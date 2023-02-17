import { Dispatch } from 'redux';
import axios from 'axios';

import { SET_CATEGORIES } from '../../../constants';

export const getCategoriesAction = () => (dispatch: Dispatch) =>
  axios.get('https://strapi.cleverland.by/api/categories').then(({ data }) => dispatch({ type: SET_CATEGORIES, payload: data }));
