import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { DownIcon, UpIcon } from '../../assets';
import { Button, Comment, ImageSwiper, Rating } from '../../components';
import { mockComments } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { getCurrentBookAction, getCurrentBookSelector } from '../../store/slice';

import styles from './book-page.module.scss';
import { ICurrentBook } from '../../types';

export const BookPage = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const currentBook = useSelector(getCurrentBookSelector);

  const [showComments, setShowComments] = useState(true);

  const {
    title = '',
    authors = [],
    description = '',
    images = [],
    rating,
    issueYear = '',
    pages = '',
    cover = '',
    publish = '',
    format = '',
    categories = [],
    weight = '',
    ISBN = '',
    producer = '',
    comments = [],
  } = (currentBook || {}) as ICurrentBook;

  const imgArr = images.map(({ url }) => url).filter(Boolean);
  const formattedAuthors = authors.join(', ');
  const formattedCategories = categories.join(', ');
  const formattedWeight = weight ? `${weight} г` : '';

  const handleShowClick = () => {
    if (mockComments.length) {
      return setShowComments((prevState) => !prevState);
    }
    return false;
  };

  useEffect(() => {
    if (params.id) {
      dispatch(getCurrentBookAction(params.id));
    }
  }, [params, dispatch]);

  return (
    <section className={styles.bookPage}>
      {currentBook && (
        <>
          <article className={styles.mainInfo}>
            <div className={styles.imgWrapper}>
              <ImageSwiper imgUrls={imgArr} />
            </div>
            <div className={styles.info}>
              <p>{title}</p>
              <span>{formattedAuthors}</span>
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
              <Rating rating={rating || 0} isDisplayEmpty={true} className={styles.rating} />
              <span className={rating ? styles.ratingNumber : ''}>{rating || 'ещё нет оценок'}</span>
            </div>
          </article>
          <article className={styles.detailedInformation}>
            <p>Подробная информация</p>
            <div>
              <div>
                <p>
                  <span>Издательство</span>
                  <span>{publish}</span>
                </p>
                <p>
                  <span>Год издания</span>
                  <span>{issueYear}</span>
                </p>
                <p>
                  <span>Страниц</span>
                  <span>{pages}</span>
                </p>
                <p>
                  <span>Переплёт</span>
                  <span>{cover}</span>
                </p>
                <p>
                  <span>Формат</span>
                  <span>{format}</span>
                </p>
              </div>
              <div className={styles.title}>
                <p>
                  <span>Жанр</span>
                  <span>{formattedCategories}</span>
                </p>
                <p>
                  <span>Вес</span>
                  <span>{formattedWeight}</span>
                </p>
                <p>
                  <span>ISBN</span>
                  <span>{ISBN}</span>
                </p>
                <p>
                  <span>Изготовитель</span>
                  <span>{producer}</span>
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
            <Button
              onClick={() => {}}
              size='small'
              title='оценить книгу'
              disabled={false}
              variant='primary'
              data-test-id='button-rating'
            />
          </article>
        </>
      )}
    </section>
  );
};
