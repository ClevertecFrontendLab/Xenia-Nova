import React, { FC } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import { ICommentUser } from '../../types';
import { Avatar } from '../avatar';
import { Rating } from '../rating';

import styles from './comment.module.scss';

interface ICommentProps {
  date: Date;
  rating?: number;
  text?: string;
  user: ICommentUser;
}

export const Comment: FC<ICommentProps> = ({ date, rating, text, user }) => {
  const { avatarUrl, firstName, lastName } = user;
  const formattedDate = date ? format(new Date(date), 'dd MMMM yyyy', { locale: ru }) : '';
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className={styles.comment}>
      <header>
        <Avatar avatarUrl={avatarUrl || ''} size='small' />
        <div>
          <span>{fullName}</span>
          <span>{formattedDate}</span>
        </div>
      </header>
      <Rating rating={rating || 0} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};
