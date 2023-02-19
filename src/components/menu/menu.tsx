import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { useAppDispatch } from '../../hooks';
import { getCategoriesAction, getMenuSelector } from '../../store/slice/category-slice';
import { CollapseItem } from '../collapse-item';

import styles from './menu.module.scss';

interface IMenuProps {
  isShowMenu: boolean;
  onCloseMenu: () => void;
  isWithBreadcrumbs: boolean;
}

export const Menu: FC<IMenuProps> = ({ isShowMenu, onCloseMenu, isWithBreadcrumbs }) => {
  const dispatch = useAppDispatch();
  const menu = useSelector(getMenuSelector);
  const [showCollapse, setShowCollapse] = useState(true);
  const handleCollapseClick = () => setShowCollapse((prevState) => !prevState);

  const handleClickMenuItem = () => setShowCollapse(false);
  const getLinkClasses = (isActive: boolean) => classNames(styles.mainItem, { [styles.active]: isActive });

  useEffect(() => {
    const length = menu?.books?.nestedItems?.length;

    if (!length) {
      dispatch(getCategoriesAction());
    }
  }, [dispatch, menu]);

  return (
    <aside
      data-test-id='burger-navigation'
      className={classNames(styles.aside, {
        [styles.visibleAside]: isShowMenu,
        [styles.withBreadcrumbs]: isWithBreadcrumbs,
      })}
    >
      <div>
        {Object.keys(menu).map((item) =>
          menu[item].nestedItems?.length ? (
            <CollapseItem
              key={menu[item].name}
              data={menu[item]}
              onCloseMenu={onCloseMenu}
              showCollapse={showCollapse}
              setShowCollapse={handleCollapseClick}
              isShowMenu={isShowMenu}
            />
          ) : (
            <NavLink
              data-test-id={isShowMenu ? menu[item]?.mobileDataTestId : menu[item]?.dataTestId}
              className={({ isActive }) => getLinkClasses(isActive)}
              key={menu[item].name}
              to={menu[item].path}
              onClick={handleClickMenuItem}
            >
              {menu[item].name}
            </NavLink>
          )
        )}
      </div>
      {isShowMenu && (
        <div className={styles.additionalItems}>
          <NavLink className={({ isActive }) => getLinkClasses(isActive)} key='profile' to='/profile'>
            Профиль
          </NavLink>
          <NavLink className={({ isActive }) => getLinkClasses(isActive)} key='singOut' to='/singOut'>
            Выход
          </NavLink>
        </div>
      )}
    </aside>
  );
};
