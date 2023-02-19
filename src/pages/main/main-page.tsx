import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Card, ControlPanel } from '../../components';
import { FILTER_ASC, VIEW_SQUARE } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { getAllBooksAction, getAllBooksSelector } from '../../store/slice';
import { IBook } from '../../types';

import styles from './main-page.module.scss';

export const MainPage = () => {
  const [viewToggle, setViewToggle] = useState(VIEW_SQUARE);
  const [sort, setSort] = useState(FILTER_ASC);
  const dispatch = useAppDispatch();
  const books = useSelector(getAllBooksSelector);

  const handleChangeView = (event: SyntheticEvent<HTMLButtonElement>) => setViewToggle(event.currentTarget.value);
  const handleChangeSort = (event: SyntheticEvent<HTMLButtonElement>) => setSort(event.currentTarget.value);

  useEffect(() => {
    if (!books?.length) {
      dispatch(getAllBooksAction());
    }
  }, [dispatch, books]);

  return (
    <section className={styles.mainPage}>
      {!!books?.length && (
        <React.Fragment>
          <ControlPanel
            viewType={viewToggle}
            sort={sort}
            onChangeView={handleChangeView}
            onChangeSort={handleChangeSort}
          />
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
        </React.Fragment>
      )}
    </section>
  );
};
