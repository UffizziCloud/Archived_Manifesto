import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  container: {
    flexGrow: 1,
    padding: '130px 100px 0',
  },
  containerWithMenu: {
    flexGrow: 1,
    padding: '1px 100px 0',
  },
}));

export default useStyles;
