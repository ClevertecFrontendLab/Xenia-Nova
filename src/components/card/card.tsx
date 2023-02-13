import React, { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import noImage from '../../assets/img/no-img.png';
import { VIEW_SQUARE } from '../../constants';
import { MAIN_PAGE } from '../../constants/router';
import { Button } from '../button';
import { Rating } from '../rating';

import styles from './card.module.scss';

interface ICardProps {
  id: string | number;
  imgUrls: string[];
  rating?: number;
  name: string;
  author: string;
  createdAt: string;
  bookedTill?: Date;
  booked: boolean;
  type: 'square' | 'line';
  viewType: string;
}

export const Card: FC<ICardProps> = ({
  id,
  imgUrls,
  rating,
  name,
  author,
  createdAt,
  bookedTill,
  booked,
  type,
  viewType,
}) => {
  const location = useLocation();
  const [img, setImg] = useState(imgUrls[0] || '');
  const imageOnErrorHandler = () => setImg(noImage);

  return (
    <div data-test-id='card' className={styles[viewType]}>
      {viewType === VIEW_SQUARE ? (
        <React.Fragment>
          <div className={styles.wrapperTop}>
            <Link to={location.pathname === MAIN_PAGE ? `all/${id}` : `${id}`}>
              <img src={img} alt='book cover' onError={imageOnErrorHandler} className={styles.img} />
            </Link>
            <Rating rating={rating} />
          </div>
          <div className={styles.wrapperBottom}>
            <p className={styles.name}>{name}</p>
            <p className={styles.authorBlock}>
              <span>{author}</span>
              <span>{`, ${createdAt}`}</span>
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
            <p className={styles.name}>{name}</p>
            <p className={styles.authorBlock}>
              <span>{author}</span>
              <span>{`, ${createdAt}`}</span>
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
