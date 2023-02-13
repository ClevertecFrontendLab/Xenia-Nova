import { BookPage } from '../pages/book';
import { MainPage } from '../pages/main';
import { TermsPage } from '../pages/terms';
import { IRoutes } from '../types';

export const publicRoutes: IRoutes[] = [
  {
    path: '/',
    component: MainPage,
    nestedRoutes: [],
  },
  {
    path: '/:category',
    component: MainPage,
    nestedRoutes: [],
  },
  {
    path: '/:category/:id',
    component: BookPage,
    nestedRoutes: [],
  },
  {
    path: '/terms',
    component: TermsPage,
    title: 'Правила пользования',
    nestedRoutes: [],
  },
  {
    path: '/treaty',
    component: TermsPage,
    title: 'Договор оферты',
    nestedRoutes: [],
  },
];
