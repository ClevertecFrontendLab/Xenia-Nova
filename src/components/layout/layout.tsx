import React, { FC, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Breadcrumbs } from '../breadcrumbs';
import { Footer } from '../footer';
import { Header } from '../header';
import { Menu } from '../menu';

import styles from './layout.module.scss';

interface ILayoutProps {
  children: JSX.Element | JSX.Element[] | null;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => setShowMenu((prev) => !prev);

  const handleCloseMenu = () => setShowMenu(false);

  const displayMenu = useMemo(() => {
    const locationParams = location.pathname.split('/');

    return !(locationParams.length === 3 && !!Number(locationParams[2]));
  }, [location]);

  return (
    <React.Fragment>
      <Header onBurgerClick={handleMenuToggle} isShowMenu={showMenu} />
      {!displayMenu && <Breadcrumbs />}
      <div className={`container ${styles.content}`}>
        {(displayMenu || showMenu) && (
          <Menu isShowMenu={showMenu} isWithBreadcrumbs={!displayMenu} onCloseMenu={handleCloseMenu} />
        )}
        {children}
      </div>
      <Footer />
    </React.Fragment>
  );
};
