import { CLEAR_ERROR, DEFAULT_ERROR, SET_ERROR, SET_LOADING } from '../../../constants';

export const setLoadingAction = (isLoading: boolean) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const seErrorAction = (message?: string) => ({
  type: SET_ERROR,
  payload: message || DEFAULT_ERROR,
});

export const clearErrorAction = () => ({
  type: CLEAR_ERROR,
  payload: '',
});
