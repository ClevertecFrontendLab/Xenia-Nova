import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { menuConfig } from '../../constants';
import { CollapseItem } from '../collapse-item';

import styles from './menu.module.scss';

interface IMenuProps {
  isShowMenu: boolean;
  onCloseMenu: () => void;
  isWithBreadcrumbs: boolean;
}

export const Menu: FC<IMenuProps> = ({ isShowMenu, onCloseMenu, isWithBreadcrumbs }) => {
  const [showCollapse, setShowCollapse] = useState(true);
  const handleCollapseClick = () => setShowCollapse((prevState) => !prevState);

  const handleClickMenuItem = () => setShowCollapse(false);
  const getLinkClasses = (isActive: boolean) => classNames(styles.mainItem, { [styles.active]: isActive });

  return (
    <aside
      data-test-id='burger-navigation'
      className={classNames(styles.aside, {
        [styles.visibleAside]: isShowMenu,
        [styles.withBreadcrumbs]: isWithBreadcrumbs,
      })}
    >
      <div>
        {Object.keys(menuConfig).map((item) =>
          menuConfig[item].nestedItems ? (
            <CollapseItem
              key={menuConfig[item].label}
              data={menuConfig[item]}
              onCloseMenu={onCloseMenu}
              showCollapse={showCollapse}
              setShowCollapse={handleCollapseClick}
              isShowMenu={isShowMenu}
            />
          ) : (
            <NavLink
              data-test-id={isShowMenu ? menuConfig[item]?.mobileDataTestId : menuConfig[item]?.dataTestId}
              className={({ isActive }) => getLinkClasses(isActive)}
              key={menuConfig[item].label}
              to={menuConfig[item].path}
              onClick={handleClickMenuItem}
            >
              {menuConfig[item].label}
            </NavLink>
          )
        )}
      </div>
      {isShowMenu && (
        <div className={styles.additionalItems}>
          <NavLink
            className={({ isActive }) => getLinkClasses(isActive)}
            key='profile'
            to='/profile'
          >
            Профиль
          </NavLink>
          <NavLink
            className={({ isActive }) => getLinkClasses(isActive)}
            key='singOut'
            to='/singOut'
          >
            Выход
          </NavLink>
        </div>
      )}
    </aside>
  );
};
