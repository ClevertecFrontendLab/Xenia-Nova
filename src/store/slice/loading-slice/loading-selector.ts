import { RootState } from '../../../types/store';

export const loadingSelector = (state: RootState) => state.loading.isLoading || false;
