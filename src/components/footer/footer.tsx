import React from 'react';

import { FacebookIcon, InstagramIcon, LinkedinIcon, VkIcon } from '../../assets';

import styles from './footer.module.scss';

export const Footer = () => (
  <footer className={`container ${styles.footer}`}>
    <span className={styles.license}>© 2020-2023 Cleverland. Все права защищены.</span>
    <div className={styles.iconWrapper}>
      <FacebookIcon />
      <InstagramIcon />
      <VkIcon />
      <LinkedinIcon />
    </div>
  </footer>
);
