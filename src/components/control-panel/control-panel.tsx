import React, { FC, SyntheticEvent } from 'react';

import { BurgerMenuIcon, SortAscIcon, SortDescIcon, SquareFourIcon } from '../../assets';
import { FILTER_ASC, FILTER_DESC, VIEW_LINE, VIEW_SQUARE } from '../../constants';
import { IconButton } from '../icon-button';
import { SearchInput } from '../search-input';

import styles from './control-panel.module.scss';

interface IControlPanelProps {
  viewType: string;
  sort: string;
  onChangeView: (event: SyntheticEvent<HTMLButtonElement>) => void;
  onChangeSort: (event: SyntheticEvent<HTMLButtonElement>) => void;
}

export const ControlPanel: FC<IControlPanelProps> = ({ viewType, sort, onChangeSort, onChangeView }) => (
  <div className={styles.controlPanel}>
    <div className={styles.searchBlock}>
      <SearchInput />
      <IconButton
        testId='button-menu-filter'
        icon={sort === FILTER_ASC ? SortAscIcon : SortDescIcon}
        onClick={onChangeSort}
        title='По рейтингу'
        value={sort === FILTER_ASC ? FILTER_DESC : FILTER_ASC}
      />
    </div>
    <div className={styles.viewBlock}>
      <IconButton
        icon={SquareFourIcon}
        onClick={onChangeView}
        value={VIEW_SQUARE}
        isActive={viewType === VIEW_SQUARE}
        testId='button-menu-view-window'
      />
      <IconButton
        icon={BurgerMenuIcon}
        onClick={onChangeView}
        value={VIEW_LINE}
        isActive={viewType === VIEW_LINE}
        testId='button-menu-view-list'
      />
    </div>
  </div>
);
