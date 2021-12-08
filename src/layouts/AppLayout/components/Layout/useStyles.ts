import { makeStyles } from '@material-ui/core';

import { layoutTopOffset } from 'helpers/layoutTopOffset';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  container: {
    flexGrow: 1,
    padding: `${layoutTopOffset}px 100px 0`,
  },
  containerWithMenu: {
    flexGrow: 1,
    padding: '0 100px 0',
  },
}));

export default useStyles;
