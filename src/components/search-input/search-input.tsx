import React, { useState } from 'react';
import classNames from 'classnames';

import { SearchIcon, CloseIcon } from '../../assets';

import styles from './search-input.module.scss';

export const SearchInput = () => {
  const [show, setShow] = useState(false);

  const handleSearchClick = () => setShow((prevState) => !prevState);

  return (
    <div className={styles.searchInput}>
      <SearchIcon />
      <button
        type='button'
        data-test-id='button-search-close'
        className={classNames(styles.closeButton, { [styles.closeButtonVisible]: show })}
        onClick={handleSearchClick}
      >
        <CloseIcon />
      </button>
      <input
        type='text'
        data-test-id='input-search'
        placeholder='Поиск книги или автора…'
        className={classNames({ [styles.visibleInput]: show })}
      />
      <button type='button' className={styles.mobileButton} onClick={handleSearchClick} data-test-id='button-search-open'>
        <SearchIcon />
      </button>
    </div>
  );
};
