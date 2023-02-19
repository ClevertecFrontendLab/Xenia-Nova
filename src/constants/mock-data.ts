import slide1 from '../assets/img/slide_1.jpg';
import slide2 from '../assets/img/slide_2.jpg';
import slide3 from '../assets/img/slide_3.jpg';
import slide4 from '../assets/img/slide_4.jpg';
import slide5 from '../assets/img/slide_5.jpg';
import { IMenuItem } from '../types';

import { MAIN_PAGE } from './router';

export const mockCount = 137;

export const mockImgArr = [slide1, slide2, slide3, slide4, slide5];

export const ALL_BOOKS: IMenuItem = {
  name: 'Все книги',
  path: MAIN_PAGE,
  dataTestId: 'navigation-books',
  mobileDataTestId: 'burger-books',
  id: 'defaultId',
};
