import { RootState } from '../../../types/store';

export const loadingSelector = (state: RootState) => state.loading.isLoading || false;

export const getErrorSelector = (state: RootState) => state.loading.error || '';
