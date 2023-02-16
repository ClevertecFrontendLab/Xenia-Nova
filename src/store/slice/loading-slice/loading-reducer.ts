import { AnyAction } from 'redux';

const initialState = {
  isLoading: false,
  error: '',
};

export const loadingReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
