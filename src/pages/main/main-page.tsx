import React, { SyntheticEvent, useEffect, useState } from 'react';

import { Card, ControlPanel } from '../../components';
import { FILTER_ASC, mockCards, VIEW_SQUARE } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { getAllBooks } from '../../store/slice/book-slice';

import styles from './main-page.module.scss';

export const MainPage = () => {
  const [viewToggle, setViewToggle] = useState(VIEW_SQUARE);
  const [sort, setSort] = useState(FILTER_ASC);
  const dispatch = useAppDispatch();

  const handleChangeView = (event: SyntheticEvent<HTMLButtonElement>) => setViewToggle(event.currentTarget.value);
  const handleChangeSort = (event: SyntheticEvent<HTMLButtonElement>) => setSort(event.currentTarget.value);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <section className={styles.mainPage}>
      <ControlPanel viewType={viewToggle} sort={sort} onChangeView={handleChangeView} onChangeSort={handleChangeSort} />
      <div className={styles[viewToggle]}>
        {mockCards.map(({ id, imgUrls, rating, name, author, createdAt, booked, bookedTill }) => (
          <Card
            key={id}
            id={id}
            imgUrls={imgUrls}
            rating={rating}
            name={name}
            author={author}
            createdAt={createdAt}
            booked={booked}
            bookedTill={bookedTill}
            type='square'
            viewType={viewToggle}
          />
        ))}
      </div>
    </section>
  );
};
