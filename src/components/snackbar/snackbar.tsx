import React, { FC, useCallback,useEffect } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { CloseIcon, ErrorIcon } from '../../assets';
import { DEFAULT_ERROR } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { clearErrorAction, getErrorSelector } from '../../store/slice';

import styles from './snackbar.module.scss';

interface ISnackbarProps {
  type: 'success' | 'error' | 'warning';
}

export const Snackbar: FC<ISnackbarProps> = ({ type }) => {
  const dispatch = useAppDispatch();
  const errorMessage = useSelector(getErrorSelector);

  const handleCloseError = useCallback(() => dispatch(clearErrorAction()), [dispatch]);

  useEffect(() => {
    const closeDelay = () => setTimeout(handleCloseError, 6000);

    if (errorMessage) {
      // closeDelay();
    }
  }, [errorMessage, handleCloseError]);

  return (
    <div className={classNames(styles.snackbarWrapper, styles[type], { [styles.showSnackbar]: errorMessage })} data-test-id='error'>
      <div className={styles.info}>
        <ErrorIcon />
        <span>{DEFAULT_ERROR}</span>
      </div>
      <button type='button' className={styles.closeButton} onClick={handleCloseError}>
        <CloseIcon />
      </button>
    </div>
  );
};
