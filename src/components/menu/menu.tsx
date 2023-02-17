import React, { FC, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import {useSelector} from "react-redux";
// import { menuConfig } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { CollapseItem } from '../collapse-item';

import styles from './menu.module.scss';
import {getCategoriesAction, getCategoriesSelector} from "../../store/slice/category-slice";

interface IMenuProps {
  isShowMenu: boolean;
  onCloseMenu: () => void;
  isWithBreadcrumbs: boolean;
}

export const Menu: FC<IMenuProps> = ({ isShowMenu, onCloseMenu, isWithBreadcrumbs }) => {
  const dispatch = useAppDispatch();
  const categories = useSelector(getCategoriesSelector);
  const [showCollapse, setShowCollapse] = useState(true);
  const handleCollapseClick = () => setShowCollapse((prevState) => !prevState);

  const handleClickMenuItem = () => setShowCollapse(false);
  const getLinkClasses = (isActive: boolean) => classNames(styles.mainItem, { [styles.active]: isActive });

  useEffect(() => {
      const length = categories?.books?.nestedItems?.length;

      if (length && length < 2) {
          dispatch(getCategoriesAction());
      }
  }, [dispatch, categories]);

  return (
    <aside
      data-test-id='burger-navigation'
      className={classNames(styles.aside, {
        [styles.visibleAside]: isShowMenu,
        [styles.withBreadcrumbs]: isWithBreadcrumbs,
      })}
    >
      <div>
        {Object.keys(categories).map((item) =>
            categories[item].nestedItems ? (
            <CollapseItem
              key={categories[item].name}
              data={categories[item]}
              onCloseMenu={onCloseMenu}
              showCollapse={showCollapse}
              setShowCollapse={handleCollapseClick}
              isShowMenu={isShowMenu}
            />
          ) : (
            <NavLink
              data-test-id={isShowMenu ? categories[item]?.mobileDataTestId : categories[item]?.dataTestId}
              className={({ isActive }) => getLinkClasses(isActive)}
              key={categories[item].name}
              to={categories[item].path}
              onClick={handleClickMenuItem}
            >
              {categories[item].name}
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
