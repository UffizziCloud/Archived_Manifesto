import { Drawer as MuiDrawer, Link, Divider, ListItem } from '@material-ui/core';
import { nanoid } from 'nanoid';
import { FC } from 'react';
import Scrollspy from 'react-scrollspy';

import { PageSideMenuItem } from 'types/resources/PageSideMenu';

import useStyles from './useStyles';

type DrawerProps = {
  menuItems: PageSideMenuItem[];
};

const Drawer: FC<DrawerProps> = (props) => {
  const { menuItems } = props;
  const classes = useStyles();

  return (
    <MuiDrawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerContainer}>
        <Scrollspy
          style={{ margin: 0, padding: 0 }}
          items={menuItems.map(({ path }) => path)}
          currentClassName={classes.active}
        >
          {menuItems.map(({ name, path }) => (
            <ListItem key={nanoid()} className={classes.menuItem}>
              <Link href={`#${path}`} className={classes.menuLink}>
                {name}
              </Link>
            </ListItem>
          ))}
        </Scrollspy>
      </div>
      <Divider />
    </MuiDrawer>
  );
};

export default Drawer;
