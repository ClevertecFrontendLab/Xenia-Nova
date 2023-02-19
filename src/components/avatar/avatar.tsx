import React, { FC, useState } from 'react';
import classNames from 'classnames';

import noImage from '../../assets/img/no-avatar.png';

import styles from './avatar.module.scss';

interface IAvatarProps {
  avatarUrl?: string;
  size: 'small' | 'medium' | 'large';
}

export const Avatar: FC<IAvatarProps> = ({ avatarUrl = '', size }) => {
  const [img, setImg] = useState(avatarUrl);

  const imageOnErrorHandler = () => setImg(noImage);

  return (
    <img className={classNames(styles.avatar, styles[size])} src={img} alt='avatar' onError={imageOnErrorHandler} />
  );
};
