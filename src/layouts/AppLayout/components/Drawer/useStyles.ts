import { makeStyles } from '@material-ui/core';

import { layoutTopOffset } from 'helpers/layoutTopOffset';

const drawerWidth = 300;

const useStyles = makeStyles(() => ({
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
    '& .MuiDivider-root': {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    border: 'none',
  },
  drawerContainer: {
    overflow: 'auto',
    padding: `${layoutTopOffset}px 0 0 100px`,
  },
  active: {
    fontWeight: 'bold',
  },
  menuItem: {
    padding: 0,
    fontSize: 18,
  },
  menuLink: {
    padding: '14px 0',
    fontSize: 16,
    color: '#000000',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

export default useStyles;
