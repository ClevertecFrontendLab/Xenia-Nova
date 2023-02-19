import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { LoaderIcon } from '../../assets';
import { loadingSelector } from '../../store/slice';

import styles from './loader.module.scss';

export const Loader = () => {
  const isLoading = useSelector(loadingSelector);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    document.body.style.overflow = isLoading ? 'hidden' : 'auto';
  }, [isLoading]);

  return (
    <div className={classNames(styles.loaderWrapper, { [styles.hidden]: !isLoading })}>
      <LoaderIcon className={styles.loader} data-test-id='loader' />
    </div>
  );
};
