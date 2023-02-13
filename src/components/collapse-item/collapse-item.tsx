import React, { FC, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { DownIcon, UpIcon } from '../../assets';
import { menuConfig, mockCount } from '../../constants';
import { IMenuMainItem } from '../../types';

import styles from './collapse-item.module.scss';

interface ICollapseItemProps {
  data: IMenuMainItem;
  onCloseMenu: () => void;
  showCollapse: boolean;
  isShowMenu: boolean;
  setShowCollapse: () => void;
}

export const CollapseItem: FC<ICollapseItemProps> = ({
  data: { label, nestedItems },
  onCloseMenu,
  showCollapse,
  setShowCollapse,
  isShowMenu,
}) => {
  const location = useLocation();
  const isActiveCollapse = nestedItems?.some((item) => location.pathname === item.path);

  return (
    <div className={styles.collapse}>
      <button
        type='button'
        className={classNames(styles.collapsible, { [styles.activeCollapse]: isActiveCollapse })}
        onClick={setShowCollapse}
        data-test-id={isShowMenu ? 'burger-showcase' : 'navigation-showcase'}
      >
        {label}
        {showCollapse ? <UpIcon /> : <DownIcon />}
      </button>
      <div className={classNames(styles.content, { [styles.contentVisible]: showCollapse })}>
        {nestedItems?.map(({ label: nestedLabel, path: nestedPath, dataTestId, mobileDataTestId }) => (
          <NavLink
            data-test-id={isShowMenu ? mobileDataTestId : dataTestId}
            key={nestedPath}
            to={nestedPath}
            className={({ isActive }) => (isActive ? styles.active : styles.common)}
            onClick={onCloseMenu}
          >
            <span className={styles.title}>{nestedLabel}</span>
            <span className={styles.count}>{` ${mockCount}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
