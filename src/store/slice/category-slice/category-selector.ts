import { RootState } from '../../../types/store';

export const getMenuSelector = ({ categories }: RootState) => categories.menu || [];

export const getCategoriesSelector = ({ categories }: RootState) => categories.categories || [];
