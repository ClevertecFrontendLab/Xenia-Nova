import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Card, ControlPanel } from '../../components';
import { FILTER_ASC, VIEW_SQUARE } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { getAllBooksAction, getAllBooksSelector} from '../../store/slice';

import styles from './main-page.module.scss';
import { IBook } from '../../types';

export const MainPage = () => {
  const [viewToggle, setViewToggle] = useState(VIEW_SQUARE);
  const [sort, setSort] = useState(FILTER_ASC);
  const dispatch = useAppDispatch();
  const books = useSelector(getAllBooksSelector);
    console.log('books===>>>', books);
    const handleChangeView = (event: SyntheticEvent<HTMLButtonElement>) => setViewToggle(event.currentTarget.value);
  const handleChangeSort = (event: SyntheticEvent<HTMLButtonElement>) => setSort(event.currentTarget.value);

  useEffect(() => {
    dispatch(getAllBooksAction());
  }, [dispatch]);

  return (
    <section className={styles.mainPage}>
      <ControlPanel viewType={viewToggle} sort={sort} onChangeView={handleChangeView} onChangeSort={handleChangeSort} />
      <div className={styles[viewToggle]}>
        {books?.map(
          ({ id, authors, booking, title, image, rating, issueYear, categories, histories, delivery }: IBook) => (
            <Card
              key={id}
              id={id}
              image={image}
              rating={rating}
              title={title}
              authors={authors}
              issueYear={issueYear}
              booking={booking}
              viewType={viewToggle}
              categories={categories}
              histories={histories}
              delivery={delivery}
            />
          )
        )}
      </div>
    </section>
  );
};
