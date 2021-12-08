import { Typography } from '@material-ui/core';
import { FC } from 'react';

import logo from 'assets/logo.svg';

import useStyles from './useStyles';

const Logo: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.logo} src={logo} alt="continuous previews" />
      <div>
        <Typography className={classes.title}>Continuous Previews</Typography>
        <Typography className={classes.subtitle}>A Best Practice for Agile Teams</Typography>
      </div>
    </div>
  );
};

export default Logo;
