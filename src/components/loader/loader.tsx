import React from 'react';

import { LoaderIcon } from '../../assets';

import styles from './loader.module.scss';

export const Loader = () => (
  <div className={styles.loaderWrapper}>
    <LoaderIcon className={styles.loader} />
  </div>
);
