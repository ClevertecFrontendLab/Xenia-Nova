import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { ChevronIcon } from '../../assets';
import { MAIN_PAGE } from '../../constants/router';
import { useAppDispatch } from '../../hooks';
import { getCurrentBookSelector } from '../../store/slice';
import { getCategoriesAction, getCategoriesSelector } from '../../store/slice/category-slice';

import styles from './breadcrumbs.module.scss';

export const Breadcrumbs = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const currentBook = useSelector(getCurrentBookSelector);
  const categories = useSelector(getCategoriesSelector);
  const [, , prevRoute] = location.pathname.split('/');
  const routerTitle = categories?.find(({ path }) => path === prevRoute)?.name || 'Все книги';

  useEffect(() => {
    if (!categories?.length) {
      dispatch(getCategoriesAction());
    }
  }, [dispatch, categories]);

  return (
    <div className={styles.breadcrumbs}>
      <div className={`container ${styles.textWrapper}`}>
        <Link to={prevRoute === 'all' ? MAIN_PAGE : prevRoute}>{routerTitle}</Link>
        <ChevronIcon />
        {currentBook && <span>{currentBook.title}</span>}
      </div>
    </div>
  );
};
