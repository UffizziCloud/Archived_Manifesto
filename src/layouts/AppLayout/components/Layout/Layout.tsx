import { FC, ReactNode } from 'react';

import Drawer from 'layouts/AppLayout/components/Drawer';
import Header from 'layouts/AppLayout/components/Header';

import { useLayoutContext } from 'hooks/useLayoutContext';

import useStyles from './useStyles';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const classes = useStyles();
  const { pageMenuItems } = useLayoutContext();

  const hasMenu = !!pageMenuItems.length;

  return (
    <div className={classes.root}>
      <Header />
      {hasMenu && <Drawer menuItems={pageMenuItems} />}
      <div className={hasMenu ? classes.containerWithMenu : classes.container}>{children}</div>
    </div>
  );
};

export default Layout;
