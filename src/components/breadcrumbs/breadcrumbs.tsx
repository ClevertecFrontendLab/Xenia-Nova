import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ChevronIcon } from '../../assets';
import { mockCards } from '../../constants';
import { MAIN_PAGE, routerNaming } from '../../constants/router';

import styles from './breadcrumbs.module.scss';

export const Breadcrumbs = () => {
  const location = useLocation();
  const [, prevRoute, bookId] = location.pathname.split('/');
  const currenBook = mockCards.find(({ id }) => id === Number(bookId));

  return (
    <div className={styles.breadcrumbs}>
      <div className={`container ${styles.textWrapper}`}>
        <Link to={prevRoute === 'all' ? MAIN_PAGE : prevRoute}>{routerNaming[prevRoute]}</Link>
        <ChevronIcon />
        {currenBook && <span>{currenBook.name}</span>}
      </div>
    </div>
  );
};
