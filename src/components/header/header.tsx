import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { BurgerMenuIcon, Logo, CloseIcon } from '../../assets';
import { MAIN_PAGE } from '../../constants/router';
import { Avatar } from '../avatar';

import styles from './header.module.scss';

interface IHeaderProps {
  onBurgerClick: () => void;
  isShowMenu: boolean;
}

export const Header: FC<IHeaderProps> = ({ onBurgerClick, isShowMenu }) => (
  <div className={`container ${styles.header}`}>
    <Link className={styles.logo} to={MAIN_PAGE}>
      <Logo />
    </Link>
    <div className={styles.content}>
      <button type='button' className={styles.burgerMenu} onClick={onBurgerClick} data-test-id='button-burger'>
        {isShowMenu ? <CloseIcon className={styles.closeIcon} /> : <BurgerMenuIcon />}
      </button>
      <h3 className={styles.title}>Библиотека</h3>
      <div className={styles.userInfo}>
        <span>Привет, Иван!</span>
        <Avatar size='large' />
      </div>
    </div>
  </div>
);
