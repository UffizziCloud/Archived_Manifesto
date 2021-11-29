import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    display: 'flex',
    justifyContent: 'center',
  },
  toolbar: {
    paddingLeft: 100,
    paddingRight: 100,
    justifyContent: 'space-between',
  },
  logoContainer: {
    height: '100%',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    color: '#ffffff',
    padding: '6px 0',
    margin: '0 30px',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  linkActive: {
    borderBottom: '2px solid #ffffff',
  },
  linkButton: {
    display: 'flex',
    width: 200,
    height: 32,
    border: '1px solid #ffffff',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    marginRight: 0,
  },
  btnLogo: {
    width: 24,
    height: 24,
    marginRight: 14,
  },
}));

export default useStyles;
