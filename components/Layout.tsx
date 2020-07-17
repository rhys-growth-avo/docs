import { FunctionComponent, useEffect, useState } from 'react';
import Navigation from './Navigation';
import { HamburgerButton } from 'react-hamburger-button';

import Avo from '../Avo';

import styles from './Layout.module.scss';
import Logo from './Logo';
import Footer from './Footer';
import Header from './Header';
import useAvoPath from '../util/useAvoPath';

const Layout: FunctionComponent = ({ children }) => {
  const [navigationOpened, setNavigationOpened] = useState(false);

  const path = useAvoPath();

  useEffect(() => {
    setNavigationOpened(false);
  }, [path]);

  useEffect(() => {
    Avo.landingPageViewed({
      path: path,
      referrer: document.referrer,
    });
  }, [children]);

  return (
    <div className={styles.grid}>
      <div className={styles.navHeader}>
        {/* <Hamburger
          open={navigationOpened}
          toggle={() => setNavigationOpened(!navigationOpened)}
        /> */}
        <Logo width={140} />
        <div className={styles.hamburgerButton}>
          <HamburgerButton
            open={navigationOpened}
            onClick={() => setNavigationOpened(!navigationOpened)}
            width={30}
            height={20}
            strokeWidth={2}
            color="black"
            animationDuration={0.5}
          />
        </div>
      </div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.nav}>
        <Navigation />
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
      <div className={styles.mobileNav}>
        {navigationOpened && <Navigation />}
      </div>
    </div>
  );
};

export default Layout;
