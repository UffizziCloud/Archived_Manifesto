import { Typography } from '@material-ui/core';
import { FC, ReactNode } from 'react';

import useStyles from './useStyles';

type SectionProps = {
  children: ReactNode;
  title: string;
  path: string;
};

const Section: FC<SectionProps> = ({ children, path, title }) => {
  const classes = useStyles();

  return (
    <section id={path} className={classes.section}>
      <Typography variant="h6" className={classes.title}>
        <b>{title}</b>
      </Typography>
      {children}
    </section>
  );
};

export default Section;
