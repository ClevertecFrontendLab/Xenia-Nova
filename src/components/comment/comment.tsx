import React, { FC } from 'react';

import { Avatar } from '../avatar';
import { Rating } from '../rating';

import styles from './comment.module.scss';

interface ICommentProps {
  user: string;
  avatarUrl: string;
  rating?: number;
  text?: string;
  date: string;
}

export const Comment: FC<ICommentProps> = ({ user, avatarUrl, rating, text, date }) => (
  <div className={styles.comment}>
    <header>
      <Avatar avatarUrl={avatarUrl} size='small' />
      <div>
        <span>{user}</span>
        <span>{date}</span>
      </div>
    </header>
    <Rating rating={rating} />
    <p className={styles.text}>{text}</p>
  </div>
);
