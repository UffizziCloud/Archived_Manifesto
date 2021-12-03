import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  section: {
    marginBottom: 100,
    '& img': {
      width: '100%',
    },
    '& th': {
      background: '#5656DB08',
    },
  },
}));

export default useStyles;
