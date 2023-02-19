import React, { FC, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import noImage from '../../assets/img/no-img.png';
import { VIEW_SQUARE } from '../../constants';
import { MAIN_PAGE } from '../../constants/router';
import { Button } from '../button';
import { Rating } from '../rating';

import styles from './card.module.scss';
import { IBook } from '../../types';
import { baseUrl } from '../../constants/api';

interface ICardProps extends IBook {
  viewType: string;
}

export const Card: FC<ICardProps> = ({
  id,
  authors,
  booking,
  delivery,
  histories,
  image,
  issueYear,
  rating,
  title,
  viewType,
}) => {
  const location = useLocation();
  const params = useParams();
  const [img, setImg] = useState(image?.url ? `${baseUrl}${image.url}` : '');
  const imageOnErrorHandler = () => setImg(noImage);

  return (
    <div data-test-id='card' className={styles[viewType]}>
      {viewType === VIEW_SQUARE ? (
        <React.Fragment>
          <div className={styles.wrapperTop}>
            <Link to={`/books/${location.pathname === MAIN_PAGE  ? 'all' : params.category}/${id}`}>
              <img src={img} alt='book cover' onError={imageOnErrorHandler} className={styles.img} />
            </Link>
            <Rating rating={rating} />
          </div>
          <div className={styles.wrapperBottom}>
            <p className={styles.name}>{title}</p>
            <p className={styles.authorBlock}>
              <span>{authors.join(', ')}</span>
              <span>{`, ${issueYear}`}</span>
            </p>
            <Button onClick={() => {}} size='small' title='забронировать' disabled={false} variant='primary' />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Link to={location.pathname === MAIN_PAGE ? `all/${id}` : `${id}`}>
            <img src={img} alt='book cover' onError={imageOnErrorHandler} className={styles.img} />
          </Link>
          <div className={styles.info}>
            <p className={styles.name}>{title}</p>
            <p className={styles.authorBlock}>
              <span>{authors.join(', ')}</span>
              <span>{`, ${issueYear}`}</span>
            </p>
            <div className={styles.footer}>
              <Rating rating={rating} className={styles.rating} />
              <Button onClick={() => {}} size='small' title='забронировать' disabled={false} variant='primary' />
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
