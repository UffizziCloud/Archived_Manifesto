import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  section: {
    '&:last-child': {
      marginBottom: 100,
      minHeight: 'calc(100vh - 100px)',
    },
  },
  title: {
    padding: '110px 0 30px 0',
  },
}));

export default useStyles;
