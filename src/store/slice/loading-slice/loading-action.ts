import { SET_LOADING } from '../../../constants';

export const setLoadingAction = (isLoading: boolean) => ({
  type: SET_LOADING,
  payload: isLoading,
});
