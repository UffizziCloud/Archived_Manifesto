import { Typography } from '@material-ui/core';
import { FC } from 'react';

import useStyles from './useStyles';

type PageTitleProps = {
  children: string;
};

const PageTitle: FC<PageTitleProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography variant="h4" className={classes.title}>
      {children}
    </Typography>
  );
};

export default PageTitle;
