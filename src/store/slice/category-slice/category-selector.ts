import { RootState } from '../../../types/store';

export const getCategoriesSelector = (state: RootState) => state.categories.menu || []
