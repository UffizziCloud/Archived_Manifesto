import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '40px',
    objectFit: 'contain',
    display: 'block',
    marginRight: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 0,
    width: 'max-content',
  },
  subtitle: {
    fontSize: 12,
    margin: 0,
    width: 'max-content',
  },
}));

export default useStyles;
