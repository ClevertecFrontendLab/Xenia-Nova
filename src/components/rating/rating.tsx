import React, { FC } from 'react';

import star from '../../assets/img/star.png';
import starFilled from '../../assets/img/star-filled.png';

import styles from './rating.module.scss';

interface IRating {
  rating: number | null;
  className?: string;
  isDisplayEmpty?: boolean;
}

export const Rating: FC<IRating> = ({ rating, className, isDisplayEmpty }) => {
  const starArr = [1, 2, 3, 4, 5];

  return (
    <div className={className || styles.rating}>
      {rating || isDisplayEmpty ? (
        starArr.map((item) => (
          <img
            key={item}
            className={className ? '' : styles.star}
            src={item <= (rating || 0) ? starFilled : star}
            alt='star'
          />
        ))
      ) : (
        <span className={className ? '' : styles.noRating}>ещё нет оценок</span>
      )}
    </div>
  );
};
