import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  image: {
    width: '100%',
  },
  tableHead: {
    background: '#5656DB08',
  },
  list: {
    '& li': {
      marginBottom: 20,
    },
  },
}));

export default useStyles;
