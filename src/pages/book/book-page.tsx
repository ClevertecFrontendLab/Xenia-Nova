import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { Button, Comment, Rating, ImageSwiper } from '../../components';
import { mockCards, mockComments } from '../../constants';

import styles from './book-page.module.scss';
import { DownIcon, UpIcon } from '../../assets';

export const BookPage = () => {
  const params = useParams();
  const [showComments, setShowComments] = useState(true);
  const { name, author, imgUrls, description, rating } = mockCards.find(({ id }) => id === Number(params.id)) || {};

  const handleShowClick = () => {
    if (mockComments.length) {
      return setShowComments((prevState) => !prevState);
    }
    return false;
  };

  return (
    <section className={styles.bookPage}>
      <article className={styles.mainInfo}>
        <div className={styles.imgWrapper}>
          <ImageSwiper imgUrls={imgUrls} />
        </div>
        <div className={styles.info}>
          <p>{name}</p>
          <span>{author}</span>
          <Button onClick={() => {}} size='small' title='забронировать' disabled={false} variant='primary' />
        </div>
        <div className={styles.description}>
          <p>О книге</p>
          <span>{description}</span>
        </div>
      </article>
      <article className={styles.ratingWrapper}>
        <p>Рейтинг</p>
        <div className={styles.flexWrapper}>
          <Rating rating={rating} isDisplayEmpty={true} className={styles.rating} />
          <span className={rating ? styles.ratingNumber : ''}>{rating || 'ещё нет оценок'}</span>
        </div>
      </article>
      <article className={styles.detailedInformation}>
        <p>Подробная информация</p>
        <div>
          <div>
            <p>
              <span>Издательство</span>
              <span>Питер</span>
            </p>
            <p>
              <span>Год издания</span>
              <span>2019</span>
            </p>
            <p>
              <span>Страниц</span>
              <span>288</span>
            </p>
            <p>
              <span>Переплёт</span>
              <span>Мягкая обложка</span>
            </p>
            <p>
              <span>Формат</span>
              <span>70х100</span>
            </p>
          </div>
          <div className={styles.title}>
            <p>
              <span>Жанр</span>
              <span>Компьютерная литература</span>
            </p>
            <p>
              <span>Вес</span>
              <span>370 г</span>
            </p>
            <p>
              <span>ISBN</span>
              <span>978-5-4461-0923-4</span>
            </p>
            <p>
              <span>Изготовитель</span>
              <span>ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29</span>
            </p>
          </div>
        </div>
      </article>
      <article className={styles.comments}>
        <button
          className={classNames(styles.title, { [styles.collapseButton]: mockComments.length })}
          type='button'
          onClick={handleShowClick}
          data-test-id='button-hide-reviews'
        >
          <div>
            <p>Отзывы</p>
            <span>{mockComments.length}</span>
          </div>
          {showComments ? <UpIcon /> : <DownIcon />}
        </button>
        <div className={classNames(styles.content, { [styles.contentVisible]: showComments })}>
          {mockComments.map(({ id, user, avatarUrl, rating: commentRating, date, text }) => (
            <Comment key={id} user={user} avatarUrl={avatarUrl} date={date} text={text} rating={commentRating} />
          ))}
        </div>
        <Button onClick={() => {}} size='small' title='оценить книгу' disabled={false} variant='primary' data-test-id='button-rating' />
      </article>
    </section>
  );
};
