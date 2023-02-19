import { AnyAction } from 'redux';

import { SET_ERROR, SET_LOADING, CLEAR_ERROR } from '../../../constants';
import { ILoadingState } from '../../../types/store';

const initialState: ILoadingState = {
  isLoading: false,
  error: '',
};

export const loadingReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case CLEAR_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
